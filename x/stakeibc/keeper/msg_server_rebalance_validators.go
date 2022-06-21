package keeper

import (
	"context"
	"fmt"
	"sort"

	"github.com/Stride-Labs/stride/x/stakeibc/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	stakingTypes "github.com/cosmos/cosmos-sdk/x/staking/types"
)

func abs(n int64) int64 {
	if n < 0 {
		return -n
	}
	return n
}

func (k msgServer) RebalanceValidators(goCtx context.Context, msg *types.MsgRebalanceValidators) (*types.MsgRebalanceValidatorsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	hostZone, found := k.GetHostZone(ctx, msg.HostZone)
	if !found {
		k.Logger(ctx).Info(fmt.Sprintf("Host Zone not found %s", msg.HostZone))
		return nil, types.ErrInvalidHostZone
	}

	validatorDeltas := k.GetValidatorAmtDifferences(ctx, hostZone)

	// we convert the above map into a list of tuples
	type valPair struct {
		deltaAmt int64
		valAddr  sdk.ValAddress
	}
	valDeltaList := make([]valPair, len(validatorDeltas))
	for valAddr, deltaAmt := range validatorDeltas {
		valDeltaList = append(valDeltaList, valPair{deltaAmt, sdk.ValAddress(valAddr)})
	}
	// now we sort that list
	lessFunc := func(i, j int) bool {
		return valDeltaList[i].deltaAmt < valDeltaList[j].deltaAmt
	}
	sort.Slice(valDeltaList, lessFunc)
	// now varDeltaList is sorted by deltaAmt
	underWeightIndex := 0
	overWeightIndex := len(valDeltaList) - 1

	var msgs []sdk.Msg
	delegatorAddressStr := hostZone.DelegationAccount.Address
	delegatorAddress := sdk.AccAddress(delegatorAddressStr)

	for i := 1; i < 6; i++ {
		underWeightElem := valDeltaList[underWeightIndex]
		overWeightElem := valDeltaList[overWeightIndex]
		if (underWeightElem.deltaAmt < 0) == (overWeightElem.deltaAmt < 0) {
			// if the two elements have the same sign, we stop changing weights
			break
		}
		if abs(underWeightElem.deltaAmt) > abs(overWeightElem.deltaAmt) {
			// if the underweight element is more overweight than the overweight element
			underWeightElem.deltaAmt += overWeightElem.deltaAmt
			overWeightIndex -= 1
			// issue an ICA call to the host zone to rebalance the validator
			redelagateMsg := stakingTypes.NewMsgBeginRedelegate(
				delegatorAddress,
				underWeightElem.valAddr,
				overWeightElem.valAddr,
				sdk.NewInt64Coin(hostZone.HostDenom, abs(overWeightElem.deltaAmt)))
			msgs = append(msgs, redelagateMsg)
			overWeightElem.deltaAmt = 0 // can we just drop this line?
		} else {
			// if the overweight element is more overweight than the underweight element
			overWeightElem.deltaAmt -= underWeightElem.deltaAmt
			underWeightIndex += 1
			// issue an ICA call to the host zone to rebalance the validator
			redelagateMsg := stakingTypes.NewMsgBeginRedelegate(
				delegatorAddress,
				overWeightElem.valAddr,
				underWeightElem.valAddr,
				sdk.NewInt64Coin(hostZone.HostDenom, abs(underWeightElem.deltaAmt)))
			msgs = append(msgs, redelagateMsg)
			underWeightElem.deltaAmt = 0 // can we just drop this line?
		}
	}

	// err = k.SubmitTxs(ctx, connectionId, msgs, *delegationIca)
	// if err != nil {
	// 	return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "Failed to SubmitTxs for %s, %s, %s", connectionId, hostZone.ChainId, msgs)
	// }

	return &types.MsgRebalanceValidatorsResponse{}, nil
}