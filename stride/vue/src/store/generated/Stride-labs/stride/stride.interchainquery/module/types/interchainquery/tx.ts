/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Any } from "../google/protobuf/any";

export const protobufPackage = "stride.interchainquery";

/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponse {
  chain_id: string;
  query_id: string;
  result: Uint8Array;
  height: number;
  from_address: string;
}

/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponse {}

/** MsgRegisterAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterAccount {
  owner: string;
  connection_id: string;
}

/** MsgRegisterAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {}

/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {}

/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
  owner: string;
  connection_id: string;
  msg: Any | undefined;
}

/** MsgQueryBalance defines the payload for Msg/QueryBalance */
export interface MsgQueryBalance {
  chain_id: string;
  address: string;
  denom: string;
  connection_id: string;
  caller: string;
  height: number;
}

export interface MsgQueryBalanceResponse {}

const baseMsgSubmitQueryResponse: object = {
  chain_id: "",
  query_id: "",
  height: 0,
  from_address: "",
};

export const MsgSubmitQueryResponse = {
  encode(
    message: MsgSubmitQueryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.query_id !== "") {
      writer.uint32(18).string(message.query_id);
    }
    if (message.result.length !== 0) {
      writer.uint32(26).bytes(message.result);
    }
    if (message.height !== 0) {
      writer.uint32(32).int64(message.height);
    }
    if (message.from_address !== "") {
      writer.uint32(42).string(message.from_address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitQueryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitQueryResponse } as MsgSubmitQueryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.query_id = reader.string();
          break;
        case 3:
          message.result = reader.bytes();
          break;
        case 4:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.from_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitQueryResponse {
    const message = { ...baseMsgSubmitQueryResponse } as MsgSubmitQueryResponse;
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = String(object.chain_id);
    } else {
      message.chain_id = "";
    }
    if (object.query_id !== undefined && object.query_id !== null) {
      message.query_id = String(object.query_id);
    } else {
      message.query_id = "";
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.from_address !== undefined && object.from_address !== null) {
      message.from_address = String(object.from_address);
    } else {
      message.from_address = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitQueryResponse): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.query_id !== undefined && (obj.query_id = message.query_id);
    message.result !== undefined &&
      (obj.result = base64FromBytes(
        message.result !== undefined ? message.result : new Uint8Array()
      ));
    message.height !== undefined && (obj.height = message.height);
    message.from_address !== undefined &&
      (obj.from_address = message.from_address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitQueryResponse>
  ): MsgSubmitQueryResponse {
    const message = { ...baseMsgSubmitQueryResponse } as MsgSubmitQueryResponse;
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id;
    } else {
      message.chain_id = "";
    }
    if (object.query_id !== undefined && object.query_id !== null) {
      message.query_id = object.query_id;
    } else {
      message.query_id = "";
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = new Uint8Array();
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.from_address !== undefined && object.from_address !== null) {
      message.from_address = object.from_address;
    } else {
      message.from_address = "";
    }
    return message;
  },
};

const baseMsgSubmitQueryResponseResponse: object = {};

export const MsgSubmitQueryResponseResponse = {
  encode(
    _: MsgSubmitQueryResponseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSubmitQueryResponseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitQueryResponseResponse,
    } as MsgSubmitQueryResponseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitQueryResponseResponse {
    const message = {
      ...baseMsgSubmitQueryResponseResponse,
    } as MsgSubmitQueryResponseResponse;
    return message;
  },

  toJSON(_: MsgSubmitQueryResponseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSubmitQueryResponseResponse>
  ): MsgSubmitQueryResponseResponse {
    const message = {
      ...baseMsgSubmitQueryResponseResponse,
    } as MsgSubmitQueryResponseResponse;
    return message;
  },
};

const baseMsgRegisterAccount: object = { owner: "", connection_id: "" };

export const MsgRegisterAccount = {
  encode(
    message: MsgRegisterAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connection_id !== "") {
      writer.uint32(18).string(message.connection_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterAccount } as MsgRegisterAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connection_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterAccount {
    const message = { ...baseMsgRegisterAccount } as MsgRegisterAccount;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = String(object.connection_id);
    } else {
      message.connection_id = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterAccount): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connection_id !== undefined &&
      (obj.connection_id = message.connection_id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterAccount>): MsgRegisterAccount {
    const message = { ...baseMsgRegisterAccount } as MsgRegisterAccount;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id;
    } else {
      message.connection_id = "";
    }
    return message;
  },
};

const baseMsgRegisterAccountResponse: object = {};

export const MsgRegisterAccountResponse = {
  encode(
    _: MsgRegisterAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterAccountResponse,
    } as MsgRegisterAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterAccountResponse {
    const message = {
      ...baseMsgRegisterAccountResponse,
    } as MsgRegisterAccountResponse;
    return message;
  },

  toJSON(_: MsgRegisterAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterAccountResponse>
  ): MsgRegisterAccountResponse {
    const message = {
      ...baseMsgRegisterAccountResponse,
    } as MsgRegisterAccountResponse;
    return message;
  },
};

const baseMsgSubmitTxResponse: object = {};

export const MsgSubmitTxResponse = {
  encode(_: MsgSubmitTxResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitTxResponse } as MsgSubmitTxResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitTxResponse {
    const message = { ...baseMsgSubmitTxResponse } as MsgSubmitTxResponse;
    return message;
  },

  toJSON(_: MsgSubmitTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSubmitTxResponse>): MsgSubmitTxResponse {
    const message = { ...baseMsgSubmitTxResponse } as MsgSubmitTxResponse;
    return message;
  },
};

const baseMsgSubmitTx: object = { owner: "", connection_id: "" };

export const MsgSubmitTx = {
  encode(message: MsgSubmitTx, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connection_id !== "") {
      writer.uint32(18).string(message.connection_id);
    }
    if (message.msg !== undefined) {
      Any.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitTx } as MsgSubmitTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connection_id = reader.string();
          break;
        case 3:
          message.msg = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitTx {
    const message = { ...baseMsgSubmitTx } as MsgSubmitTx;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = String(object.connection_id);
    } else {
      message.connection_id = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = Any.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: MsgSubmitTx): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connection_id !== undefined &&
      (obj.connection_id = message.connection_id);
    message.msg !== undefined &&
      (obj.msg = message.msg ? Any.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitTx>): MsgSubmitTx {
    const message = { ...baseMsgSubmitTx } as MsgSubmitTx;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id;
    } else {
      message.connection_id = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = Any.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
};

const baseMsgQueryBalance: object = {
  chain_id: "",
  address: "",
  denom: "",
  connection_id: "",
  caller: "",
  height: 0,
};

export const MsgQueryBalance = {
  encode(message: MsgQueryBalance, writer: Writer = Writer.create()): Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.connection_id !== "") {
      writer.uint32(34).string(message.connection_id);
    }
    if (message.caller !== "") {
      writer.uint32(42).string(message.caller);
    }
    if (message.height !== 0) {
      writer.uint32(48).int64(message.height);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgQueryBalance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgQueryBalance } as MsgQueryBalance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.connection_id = reader.string();
          break;
        case 5:
          message.caller = reader.string();
          break;
        case 6:
          message.height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgQueryBalance {
    const message = { ...baseMsgQueryBalance } as MsgQueryBalance;
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = String(object.chain_id);
    } else {
      message.chain_id = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = String(object.connection_id);
    } else {
      message.connection_id = "";
    }
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = String(object.caller);
    } else {
      message.caller = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: MsgQueryBalance): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.connection_id !== undefined &&
      (obj.connection_id = message.connection_id);
    message.caller !== undefined && (obj.caller = message.caller);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgQueryBalance>): MsgQueryBalance {
    const message = { ...baseMsgQueryBalance } as MsgQueryBalance;
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id;
    } else {
      message.chain_id = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id;
    } else {
      message.connection_id = "";
    }
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    } else {
      message.caller = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseMsgQueryBalanceResponse: object = {};

export const MsgQueryBalanceResponse = {
  encode(_: MsgQueryBalanceResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgQueryBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgQueryBalanceResponse,
    } as MsgQueryBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgQueryBalanceResponse {
    const message = {
      ...baseMsgQueryBalanceResponse,
    } as MsgQueryBalanceResponse;
    return message;
  },

  toJSON(_: MsgQueryBalanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgQueryBalanceResponse>
  ): MsgQueryBalanceResponse {
    const message = {
      ...baseMsgQueryBalanceResponse,
    } as MsgQueryBalanceResponse;
    return message;
  },
};

/** Msg defines the interchainquery Msg service. */
export interface Msg {
  /** SubmitQueryResponse defines a method for submit query responses. */
  SubmitQueryResponse(
    request: MsgSubmitQueryResponse
  ): Promise<MsgSubmitQueryResponseResponse>;
  QueryBalance(request: MsgQueryBalance): Promise<MsgQueryBalanceResponse>;
  SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SubmitQueryResponse(
    request: MsgSubmitQueryResponse
  ): Promise<MsgSubmitQueryResponseResponse> {
    const data = MsgSubmitQueryResponse.encode(request).finish();
    const promise = this.rpc.request(
      "stride.interchainquery.Msg",
      "SubmitQueryResponse",
      data
    );
    return promise.then((data) =>
      MsgSubmitQueryResponseResponse.decode(new Reader(data))
    );
  }

  QueryBalance(request: MsgQueryBalance): Promise<MsgQueryBalanceResponse> {
    const data = MsgQueryBalance.encode(request).finish();
    const promise = this.rpc.request(
      "stride.interchainquery.Msg",
      "QueryBalance",
      data
    );
    return promise.then((data) =>
      MsgQueryBalanceResponse.decode(new Reader(data))
    );
  }

  SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse> {
    const data = MsgSubmitTx.encode(request).finish();
    const promise = this.rpc.request(
      "stride.interchainquery.Msg",
      "SubmitTx",
      data
    );
    return promise.then((data) => MsgSubmitTxResponse.decode(new Reader(data)));
  }
}

/** Msg defines the intertx Msg service. */
export interface MsgService {
  /** Register defines a rpc handler for MsgRegisterAccount */
  RegisterAccount(
    request: MsgRegisterAccount
  ): Promise<MsgRegisterAccountResponse>;
  /** SubmitTx defines a rpc handler for MsgSubmitTx */
  SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RegisterAccount(
    request: MsgRegisterAccount
  ): Promise<MsgRegisterAccountResponse> {
    const data = MsgRegisterAccount.encode(request).finish();
    const promise = this.rpc.request(
      "stride.interchainquery.MsgService",
      "RegisterAccount",
      data
    );
    return promise.then((data) =>
      MsgRegisterAccountResponse.decode(new Reader(data))
    );
  }

  SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse> {
    const data = MsgSubmitTx.encode(request).finish();
    const promise = this.rpc.request(
      "stride.interchainquery.MsgService",
      "SubmitTx",
      data
    );
    return promise.then((data) => MsgSubmitTxResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
