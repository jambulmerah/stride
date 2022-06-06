/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "stride.interchainquery";

export interface Query {
  id: string;
  connection_id: string;
  chain_id: string;
  query_type: string;
  request: Uint8Array;
  period: string;
  last_height: string;
}

export interface DataPoint {
  id: string;
  remote_height: string;
  local_height: string;
  value: Uint8Array;
}

/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  queries: Query[];
}

/** QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryServiceInterchainAccountFromAddressRequest {
  owner: string;
  connection_id: string;
}

/** QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryServiceInterchainAccountFromAddressResponse {
  interchain_account_address: string;
}

const baseQuery: object = {
  id: "",
  connection_id: "",
  chain_id: "",
  query_type: "",
  period: "",
  last_height: "",
};

export const Query = {
  encode(message: Query, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.connection_id !== "") {
      writer.uint32(18).string(message.connection_id);
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    if (message.query_type !== "") {
      writer.uint32(34).string(message.query_type);
    }
    if (message.request.length !== 0) {
      writer.uint32(42).bytes(message.request);
    }
    if (message.period !== "") {
      writer.uint32(50).string(message.period);
    }
    if (message.last_height !== "") {
      writer.uint32(58).string(message.last_height);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuery } as Query;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.connection_id = reader.string();
          break;
        case 3:
          message.chain_id = reader.string();
          break;
        case 4:
          message.query_type = reader.string();
          break;
        case 5:
          message.request = reader.bytes();
          break;
        case 6:
          message.period = reader.string();
          break;
        case 7:
          message.last_height = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Query {
    const message = { ...baseQuery } as Query;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = String(object.connection_id);
    } else {
      message.connection_id = "";
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = String(object.chain_id);
    } else {
      message.chain_id = "";
    }
    if (object.query_type !== undefined && object.query_type !== null) {
      message.query_type = String(object.query_type);
    } else {
      message.query_type = "";
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = bytesFromBase64(object.request);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = String(object.period);
    } else {
      message.period = "";
    }
    if (object.last_height !== undefined && object.last_height !== null) {
      message.last_height = String(object.last_height);
    } else {
      message.last_height = "";
    }
    return message;
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.connection_id !== undefined &&
      (obj.connection_id = message.connection_id);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.query_type !== undefined && (obj.query_type = message.query_type);
    message.request !== undefined &&
      (obj.request = base64FromBytes(
        message.request !== undefined ? message.request : new Uint8Array()
      ));
    message.period !== undefined && (obj.period = message.period);
    message.last_height !== undefined &&
      (obj.last_height = message.last_height);
    return obj;
  },

  fromPartial(object: DeepPartial<Query>): Query {
    const message = { ...baseQuery } as Query;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id;
    } else {
      message.connection_id = "";
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id;
    } else {
      message.chain_id = "";
    }
    if (object.query_type !== undefined && object.query_type !== null) {
      message.query_type = object.query_type;
    } else {
      message.query_type = "";
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = object.request;
    } else {
      message.request = new Uint8Array();
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = object.period;
    } else {
      message.period = "";
    }
    if (object.last_height !== undefined && object.last_height !== null) {
      message.last_height = object.last_height;
    } else {
      message.last_height = "";
    }
    return message;
  },
};

const baseDataPoint: object = { id: "", remote_height: "", local_height: "" };

export const DataPoint = {
  encode(message: DataPoint, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.remote_height !== "") {
      writer.uint32(18).string(message.remote_height);
    }
    if (message.local_height !== "") {
      writer.uint32(26).string(message.local_height);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DataPoint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDataPoint } as DataPoint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.remote_height = reader.string();
          break;
        case 3:
          message.local_height = reader.string();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataPoint {
    const message = { ...baseDataPoint } as DataPoint;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.remote_height !== undefined && object.remote_height !== null) {
      message.remote_height = String(object.remote_height);
    } else {
      message.remote_height = "";
    }
    if (object.local_height !== undefined && object.local_height !== null) {
      message.local_height = String(object.local_height);
    } else {
      message.local_height = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: DataPoint): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.remote_height !== undefined &&
      (obj.remote_height = message.remote_height);
    message.local_height !== undefined &&
      (obj.local_height = message.local_height);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<DataPoint>): DataPoint {
    const message = { ...baseDataPoint } as DataPoint;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.remote_height !== undefined && object.remote_height !== null) {
      message.remote_height = object.remote_height;
    } else {
      message.remote_height = "";
    }
    if (object.local_height !== undefined && object.local_height !== null) {
      message.local_height = object.local_height;
    } else {
      message.local_height = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.queries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries.push(Query.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.queries = [];
    if (object.queries !== undefined && object.queries !== null) {
      for (const e of object.queries) {
        message.queries.push(Query.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map((e) =>
        e ? Query.toJSON(e) : undefined
      );
    } else {
      obj.queries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.queries = [];
    if (object.queries !== undefined && object.queries !== null) {
      for (const e of object.queries) {
        message.queries.push(Query.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryServiceInterchainAccountFromAddressRequest: object = {
  owner: "",
  connection_id: "",
};

export const QueryServiceInterchainAccountFromAddressRequest = {
  encode(
    message: QueryServiceInterchainAccountFromAddressRequest,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryServiceInterchainAccountFromAddressRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryServiceInterchainAccountFromAddressRequest,
    } as QueryServiceInterchainAccountFromAddressRequest;
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

  fromJSON(object: any): QueryServiceInterchainAccountFromAddressRequest {
    const message = {
      ...baseQueryServiceInterchainAccountFromAddressRequest,
    } as QueryServiceInterchainAccountFromAddressRequest;
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

  toJSON(message: QueryServiceInterchainAccountFromAddressRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connection_id !== undefined &&
      (obj.connection_id = message.connection_id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryServiceInterchainAccountFromAddressRequest>
  ): QueryServiceInterchainAccountFromAddressRequest {
    const message = {
      ...baseQueryServiceInterchainAccountFromAddressRequest,
    } as QueryServiceInterchainAccountFromAddressRequest;
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

const baseQueryServiceInterchainAccountFromAddressResponse: object = {
  interchain_account_address: "",
};

export const QueryServiceInterchainAccountFromAddressResponse = {
  encode(
    message: QueryServiceInterchainAccountFromAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.interchain_account_address !== "") {
      writer.uint32(10).string(message.interchain_account_address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryServiceInterchainAccountFromAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryServiceInterchainAccountFromAddressResponse,
    } as QueryServiceInterchainAccountFromAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interchain_account_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryServiceInterchainAccountFromAddressResponse {
    const message = {
      ...baseQueryServiceInterchainAccountFromAddressResponse,
    } as QueryServiceInterchainAccountFromAddressResponse;
    if (
      object.interchain_account_address !== undefined &&
      object.interchain_account_address !== null
    ) {
      message.interchain_account_address = String(
        object.interchain_account_address
      );
    } else {
      message.interchain_account_address = "";
    }
    return message;
  },

  toJSON(message: QueryServiceInterchainAccountFromAddressResponse): unknown {
    const obj: any = {};
    message.interchain_account_address !== undefined &&
      (obj.interchain_account_address = message.interchain_account_address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryServiceInterchainAccountFromAddressResponse>
  ): QueryServiceInterchainAccountFromAddressResponse {
    const message = {
      ...baseQueryServiceInterchainAccountFromAddressResponse,
    } as QueryServiceInterchainAccountFromAddressResponse;
    if (
      object.interchain_account_address !== undefined &&
      object.interchain_account_address !== null
    ) {
      message.interchain_account_address = object.interchain_account_address;
    } else {
      message.interchain_account_address = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface QueryService {
  /** QueryInterchainAccountFromAddress returns the interchain account for given owner address on a given connection pair */
  InterchainAccountFromAddress(
    request: QueryServiceInterchainAccountFromAddressRequest
  ): Promise<QueryServiceInterchainAccountFromAddressResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  InterchainAccountFromAddress(
    request: QueryServiceInterchainAccountFromAddressRequest
  ): Promise<QueryServiceInterchainAccountFromAddressResponse> {
    const data = QueryServiceInterchainAccountFromAddressRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "stride.interchainquery.QueryService",
      "InterchainAccountFromAddress",
      data
    );
    return promise.then((data) =>
      QueryServiceInterchainAccountFromAddressResponse.decode(new Reader(data))
    );
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
