package cli_test

import (
	"fmt"
	"testing"

	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/require"
	tmcli "github.com/tendermint/tendermint/libs/cli"
	"google.golang.org/grpc/status"

	"github.com/Stride-Labs/stride/stride/testutil/network"
	"github.com/Stride-Labs/stride/stride/testutil/nullify"
	"github.com/Stride-Labs/stride/stride/x/stakeibc/client/cli"
	"github.com/Stride-Labs/stride/stride/x/stakeibc/types"
)

func networkWithDelegationObjects(t *testing.T) (*network.Network, types.Delegation) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	require.NoError(t, cfg.Codec.UnmarshalJSON(cfg.GenesisState[types.ModuleName], &state))

	delegation := &types.Delegation{}
	nullify.Fill(&delegation)
	state.Delegation = delegation
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), *state.Delegation
}

func TestShowDelegation(t *testing.T) {
	net, obj := networkWithDelegationObjects(t)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	for _, tc := range []struct {
		desc string
		args []string
		err  error
		obj  types.Delegation
	}{
		{
			desc: "get",
			args: common,
			obj:  obj,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			var args []string
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowDelegation(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetDelegationResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.Delegation)
				require.Equal(t,
					nullify.Fill(&tc.obj),
					nullify.Fill(&resp.Delegation),
				)
			}
		})
	}
}
