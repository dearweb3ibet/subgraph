// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ParamsSet extends ethereum.Event {
  get params(): ParamsSet__Params {
    return new ParamsSet__Params(this);
  }
}

export class ParamsSet__Params {
  _event: ParamsSet;

  constructor(event: ParamsSet) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get params(): ParamsSetParamsStruct {
    return changetype<ParamsSetParamsStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class ParamsSetParamsStruct extends ethereum.Tuple {
  get createdTimestamp(): BigInt {
    return this[0].toBigInt();
  }

  get creatorAddress(): Address {
    return this[1].toAddress();
  }

  get creatorFee(): BigInt {
    return this[2].toBigInt();
  }

  get symbol(): string {
    return this[3].toString();
  }

  get targetMinPrice(): BigInt {
    return this[4].toBigInt();
  }

  get targetMaxPrice(): BigInt {
    return this[5].toBigInt();
  }

  get targetTimestamp(): BigInt {
    return this[6].toBigInt();
  }

  get participationDeadlineTimestamp(): BigInt {
    return this[7].toBigInt();
  }

  get feeForSuccess(): BigInt {
    return this[8].toBigInt();
  }

  get feeForFailure(): BigInt {
    return this[9].toBigInt();
  }

  get isClosed(): boolean {
    return this[10].toBoolean();
  }

  get isSuccessful(): boolean {
    return this[11].toBoolean();
  }
}

export class ParticipantSet extends ethereum.Event {
  get params(): ParticipantSet__Params {
    return new ParticipantSet__Params(this);
  }
}

export class ParticipantSet__Params {
  _event: ParticipantSet;

  constructor(event: ParticipantSet) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get participantAccountAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get participant(): ParticipantSetParticipantStruct {
    return changetype<ParticipantSetParticipantStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class ParticipantSetParticipantStruct extends ethereum.Tuple {
  get addedTimestamp(): BigInt {
    return this[0].toBigInt();
  }

  get accountAddress(): Address {
    return this[1].toAddress();
  }

  get fee(): BigInt {
    return this[2].toBigInt();
  }

  get isFeeForSuccess(): boolean {
    return this[3].toBoolean();
  }

  get isWinner(): boolean {
    return this[4].toBoolean();
  }

  get winning(): BigInt {
    return this[5].toBigInt();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class URISet extends ethereum.Event {
  get params(): URISet__Params {
    return new URISet__Params(this);
  }
}

export class URISet__Params {
  _event: URISet;

  constructor(event: URISet) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenURI(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Bet__getParamsResultValue0Struct extends ethereum.Tuple {
  get createdTimestamp(): BigInt {
    return this[0].toBigInt();
  }

  get creatorAddress(): Address {
    return this[1].toAddress();
  }

  get creatorFee(): BigInt {
    return this[2].toBigInt();
  }

  get symbol(): string {
    return this[3].toString();
  }

  get targetMinPrice(): BigInt {
    return this[4].toBigInt();
  }

  get targetMaxPrice(): BigInt {
    return this[5].toBigInt();
  }

  get targetTimestamp(): BigInt {
    return this[6].toBigInt();
  }

  get participationDeadlineTimestamp(): BigInt {
    return this[7].toBigInt();
  }

  get feeForSuccess(): BigInt {
    return this[8].toBigInt();
  }

  get feeForFailure(): BigInt {
    return this[9].toBigInt();
  }

  get isClosed(): boolean {
    return this[10].toBoolean();
  }

  get isSuccessful(): boolean {
    return this[11].toBoolean();
  }
}

export class Bet__getParticipantsResultValue0Struct extends ethereum.Tuple {
  get addedTimestamp(): BigInt {
    return this[0].toBigInt();
  }

  get accountAddress(): Address {
    return this[1].toAddress();
  }

  get fee(): BigInt {
    return this[2].toBigInt();
  }

  get isFeeForSuccess(): boolean {
    return this[3].toBoolean();
  }

  get isWinner(): boolean {
    return this[4].toBoolean();
  }

  get winning(): BigInt {
    return this[5].toBigInt();
  }
}

export class Bet extends ethereum.SmartContract {
  static bind(address: Address): Bet {
    return new Bet("Bet", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getContestFeePercent(): BigInt {
    let result = super.call(
      "getContestFeePercent",
      "getContestFeePercent():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getContestFeePercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getContestFeePercent",
      "getContestFeePercent():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentCounter(): BigInt {
    let result = super.call(
      "getCurrentCounter",
      "getCurrentCounter():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentCounter",
      "getCurrentCounter():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getHubAddress(): Address {
    let result = super.call("getHubAddress", "getHubAddress():(address)", []);

    return result[0].toAddress();
  }

  try_getHubAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getHubAddress",
      "getHubAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getParams(tokenId: BigInt): Bet__getParamsResultValue0Struct {
    let result = super.call(
      "getParams",
      "getParams(uint256):((uint256,address,uint256,string,int256,int256,uint256,uint256,uint256,uint256,bool,bool))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return changetype<Bet__getParamsResultValue0Struct>(result[0].toTuple());
  }

  try_getParams(
    tokenId: BigInt
  ): ethereum.CallResult<Bet__getParamsResultValue0Struct> {
    let result = super.tryCall(
      "getParams",
      "getParams(uint256):((uint256,address,uint256,string,int256,int256,uint256,uint256,uint256,uint256,bool,bool))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Bet__getParamsResultValue0Struct>(value[0].toTuple())
    );
  }

  getParticipants(
    tokenId: BigInt
  ): Array<Bet__getParticipantsResultValue0Struct> {
    let result = super.call(
      "getParticipants",
      "getParticipants(uint256):((uint256,address,uint256,bool,bool,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toTupleArray<Bet__getParticipantsResultValue0Struct>();
  }

  try_getParticipants(
    tokenId: BigInt
  ): ethereum.CallResult<Array<Bet__getParticipantsResultValue0Struct>> {
    let result = super.tryCall(
      "getParticipants",
      "getParticipants(uint256):((uint256,address,uint256,bool,bool,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Bet__getParticipantsResultValue0Struct>()
    );
  }

  getUsageFeePercent(): BigInt {
    let result = super.call(
      "getUsageFeePercent",
      "getUsageFeePercent():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getUsageFeePercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUsageFeePercent",
      "getUsageFeePercent():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class CloseCall extends ethereum.Call {
  get inputs(): CloseCall__Inputs {
    return new CloseCall__Inputs(this);
  }

  get outputs(): CloseCall__Outputs {
    return new CloseCall__Outputs(this);
  }
}

export class CloseCall__Inputs {
  _call: CloseCall;

  constructor(call: CloseCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CloseCall__Outputs {
  _call: CloseCall;

  constructor(call: CloseCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get uri(): string {
    return this._call.inputValues[0].value.toString();
  }

  get fee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get symbol(): string {
    return this._call.inputValues[2].value.toString();
  }

  get targetMinPrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get targetMaxPrice(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get targetTimestamp(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get participationDeadlineTimestamp(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get hubAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get contestFeePercent(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get usageFeePercent(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetContestFeePercentCall extends ethereum.Call {
  get inputs(): SetContestFeePercentCall__Inputs {
    return new SetContestFeePercentCall__Inputs(this);
  }

  get outputs(): SetContestFeePercentCall__Outputs {
    return new SetContestFeePercentCall__Outputs(this);
  }
}

export class SetContestFeePercentCall__Inputs {
  _call: SetContestFeePercentCall;

  constructor(call: SetContestFeePercentCall) {
    this._call = call;
  }

  get contestFeePercent(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetContestFeePercentCall__Outputs {
  _call: SetContestFeePercentCall;

  constructor(call: SetContestFeePercentCall) {
    this._call = call;
  }
}

export class SetHubAddressCall extends ethereum.Call {
  get inputs(): SetHubAddressCall__Inputs {
    return new SetHubAddressCall__Inputs(this);
  }

  get outputs(): SetHubAddressCall__Outputs {
    return new SetHubAddressCall__Outputs(this);
  }
}

export class SetHubAddressCall__Inputs {
  _call: SetHubAddressCall;

  constructor(call: SetHubAddressCall) {
    this._call = call;
  }

  get hubAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetHubAddressCall__Outputs {
  _call: SetHubAddressCall;

  constructor(call: SetHubAddressCall) {
    this._call = call;
  }
}

export class SetUsageFeePercentCall extends ethereum.Call {
  get inputs(): SetUsageFeePercentCall__Inputs {
    return new SetUsageFeePercentCall__Inputs(this);
  }

  get outputs(): SetUsageFeePercentCall__Outputs {
    return new SetUsageFeePercentCall__Outputs(this);
  }
}

export class SetUsageFeePercentCall__Inputs {
  _call: SetUsageFeePercentCall;

  constructor(call: SetUsageFeePercentCall) {
    this._call = call;
  }

  get usageFeePercent(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetUsageFeePercentCall__Outputs {
  _call: SetUsageFeePercentCall;

  constructor(call: SetUsageFeePercentCall) {
    this._call = call;
  }
}

export class TakePartCall extends ethereum.Call {
  get inputs(): TakePartCall__Inputs {
    return new TakePartCall__Inputs(this);
  }

  get outputs(): TakePartCall__Outputs {
    return new TakePartCall__Outputs(this);
  }
}

export class TakePartCall__Inputs {
  _call: TakePartCall;

  constructor(call: TakePartCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get fee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get isFeeForSuccess(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class TakePartCall__Outputs {
  _call: TakePartCall;

  constructor(call: TakePartCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UppauseCall extends ethereum.Call {
  get inputs(): UppauseCall__Inputs {
    return new UppauseCall__Inputs(this);
  }

  get outputs(): UppauseCall__Outputs {
    return new UppauseCall__Outputs(this);
  }
}

export class UppauseCall__Inputs {
  _call: UppauseCall;

  constructor(call: UppauseCall) {
    this._call = call;
  }
}

export class UppauseCall__Outputs {
  _call: UppauseCall;

  constructor(call: UppauseCall) {
    this._call = call;
  }
}
