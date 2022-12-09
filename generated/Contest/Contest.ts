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

export class Receiving extends ethereum.Event {
  get params(): Receiving__Params {
    return new Receiving__Params(this);
  }
}

export class Receiving__Params {
  _event: Receiving;

  constructor(event: Receiving) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class WaveClose extends ethereum.Event {
  get params(): WaveClose__Params {
    return new WaveClose__Params(this);
  }
}

export class WaveClose__Params {
  _event: WaveClose;

  constructor(event: WaveClose) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get wave(): WaveCloseWaveStruct {
    return changetype<WaveCloseWaveStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class WaveCloseWaveStruct extends ethereum.Tuple {
  get startTimestamp(): BigInt {
    return this[0].toBigInt();
  }

  get endTimestamp(): BigInt {
    return this[1].toBigInt();
  }

  get closeTimestamp(): BigInt {
    return this[2].toBigInt();
  }

  get winnersNumber(): BigInt {
    return this[3].toBigInt();
  }

  get winning(): BigInt {
    return this[4].toBigInt();
  }

  get winners(): Array<Address> {
    return this[5].toAddressArray();
  }
}

export class WaveCreate extends ethereum.Event {
  get params(): WaveCreate__Params {
    return new WaveCreate__Params(this);
  }
}

export class WaveCreate__Params {
  _event: WaveCreate;

  constructor(event: WaveCreate) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get wave(): WaveCreateWaveStruct {
    return changetype<WaveCreateWaveStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class WaveCreateWaveStruct extends ethereum.Tuple {
  get startTimestamp(): BigInt {
    return this[0].toBigInt();
  }

  get endTimestamp(): BigInt {
    return this[1].toBigInt();
  }

  get closeTimestamp(): BigInt {
    return this[2].toBigInt();
  }

  get winnersNumber(): BigInt {
    return this[3].toBigInt();
  }

  get winning(): BigInt {
    return this[4].toBigInt();
  }

  get winners(): Array<Address> {
    return this[5].toAddressArray();
  }
}

export class WaveParticipantSet extends ethereum.Event {
  get params(): WaveParticipantSet__Params {
    return new WaveParticipantSet__Params(this);
  }
}

export class WaveParticipantSet__Params {
  _event: WaveParticipantSet;

  constructor(event: WaveParticipantSet) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get participantAccountAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get participant(): WaveParticipantSetParticipantStruct {
    return changetype<WaveParticipantSetParticipantStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class WaveParticipantSetParticipantStruct extends ethereum.Tuple {
  get accountAddress(): Address {
    return this[0].toAddress();
  }

  get successes(): BigInt {
    return this[1].toBigInt();
  }

  get failures(): BigInt {
    return this[2].toBigInt();
  }

  get variance(): BigInt {
    return this[3].toBigInt();
  }
}

export class Contest__getLastWaveResultValue0Struct extends ethereum.Tuple {
  get startTimestamp(): BigInt {
    return this[0].toBigInt();
  }

  get endTimestamp(): BigInt {
    return this[1].toBigInt();
  }

  get closeTimestamp(): BigInt {
    return this[2].toBigInt();
  }

  get winnersNumber(): BigInt {
    return this[3].toBigInt();
  }

  get winning(): BigInt {
    return this[4].toBigInt();
  }

  get winners(): Array<Address> {
    return this[5].toAddressArray();
  }
}

export class Contest__getLastWaveParticipantsResultValue0Struct extends ethereum.Tuple {
  get accountAddress(): Address {
    return this[0].toAddress();
  }

  get successes(): BigInt {
    return this[1].toBigInt();
  }

  get failures(): BigInt {
    return this[2].toBigInt();
  }

  get variance(): BigInt {
    return this[3].toBigInt();
  }
}

export class Contest__getWaveResultValue0Struct extends ethereum.Tuple {
  get startTimestamp(): BigInt {
    return this[0].toBigInt();
  }

  get endTimestamp(): BigInt {
    return this[1].toBigInt();
  }

  get closeTimestamp(): BigInt {
    return this[2].toBigInt();
  }

  get winnersNumber(): BigInt {
    return this[3].toBigInt();
  }

  get winning(): BigInt {
    return this[4].toBigInt();
  }

  get winners(): Array<Address> {
    return this[5].toAddressArray();
  }
}

export class Contest__getWaveParticipantsResultValue0Struct extends ethereum.Tuple {
  get accountAddress(): Address {
    return this[0].toAddress();
  }

  get successes(): BigInt {
    return this[1].toBigInt();
  }

  get failures(): BigInt {
    return this[2].toBigInt();
  }

  get variance(): BigInt {
    return this[3].toBigInt();
  }
}

export class Contest extends ethereum.SmartContract {
  static bind(address: Address): Contest {
    return new Contest("Contest", address);
  }

  getLastWave(): Contest__getLastWaveResultValue0Struct {
    let result = super.call(
      "getLastWave",
      "getLastWave():((uint256,uint256,uint256,uint256,uint256,address[]))",
      []
    );

    return changetype<Contest__getLastWaveResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getLastWave(): ethereum.CallResult<
    Contest__getLastWaveResultValue0Struct
  > {
    let result = super.tryCall(
      "getLastWave",
      "getLastWave():((uint256,uint256,uint256,uint256,uint256,address[]))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Contest__getLastWaveResultValue0Struct>(value[0].toTuple())
    );
  }

  getLastWaveParticipants(): Array<
    Contest__getLastWaveParticipantsResultValue0Struct
  > {
    let result = super.call(
      "getLastWaveParticipants",
      "getLastWaveParticipants():((address,int256,int256,int256)[])",
      []
    );

    return result[0].toTupleArray<
      Contest__getLastWaveParticipantsResultValue0Struct
    >();
  }

  try_getLastWaveParticipants(): ethereum.CallResult<
    Array<Contest__getLastWaveParticipantsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getLastWaveParticipants",
      "getLastWaveParticipants():((address,int256,int256,int256)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        Contest__getLastWaveParticipantsResultValue0Struct
      >()
    );
  }

  getWave(index: BigInt): Contest__getWaveResultValue0Struct {
    let result = super.call(
      "getWave",
      "getWave(uint256):((uint256,uint256,uint256,uint256,uint256,address[]))",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return changetype<Contest__getWaveResultValue0Struct>(result[0].toTuple());
  }

  try_getWave(
    index: BigInt
  ): ethereum.CallResult<Contest__getWaveResultValue0Struct> {
    let result = super.tryCall(
      "getWave",
      "getWave(uint256):((uint256,uint256,uint256,uint256,uint256,address[]))",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Contest__getWaveResultValue0Struct>(value[0].toTuple())
    );
  }

  getWaveParticipants(
    index: BigInt
  ): Array<Contest__getWaveParticipantsResultValue0Struct> {
    let result = super.call(
      "getWaveParticipants",
      "getWaveParticipants(uint256):((address,int256,int256,int256)[])",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toTupleArray<
      Contest__getWaveParticipantsResultValue0Struct
    >();
  }

  try_getWaveParticipants(
    index: BigInt
  ): ethereum.CallResult<
    Array<Contest__getWaveParticipantsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getWaveParticipants",
      "getWaveParticipants(uint256):((address,int256,int256,int256)[])",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Contest__getWaveParticipantsResultValue0Struct>()
    );
  }

  getWavesNumber(): BigInt {
    let result = super.call("getWavesNumber", "getWavesNumber():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getWavesNumber(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getWavesNumber",
      "getWavesNumber():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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
}

export class CloseLastWaveCall extends ethereum.Call {
  get inputs(): CloseLastWaveCall__Inputs {
    return new CloseLastWaveCall__Inputs(this);
  }

  get outputs(): CloseLastWaveCall__Outputs {
    return new CloseLastWaveCall__Outputs(this);
  }
}

export class CloseLastWaveCall__Inputs {
  _call: CloseLastWaveCall;

  constructor(call: CloseLastWaveCall) {
    this._call = call;
  }

  get winners(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class CloseLastWaveCall__Outputs {
  _call: CloseLastWaveCall;

  constructor(call: CloseLastWaveCall) {
    this._call = call;
  }
}

export class ProcessBetParticipantsCall extends ethereum.Call {
  get inputs(): ProcessBetParticipantsCall__Inputs {
    return new ProcessBetParticipantsCall__Inputs(this);
  }

  get outputs(): ProcessBetParticipantsCall__Outputs {
    return new ProcessBetParticipantsCall__Outputs(this);
  }
}

export class ProcessBetParticipantsCall__Inputs {
  _call: ProcessBetParticipantsCall;

  constructor(call: ProcessBetParticipantsCall) {
    this._call = call;
  }

  get betParticipantAddresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get betParticipantWinnings(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class ProcessBetParticipantsCall__Outputs {
  _call: ProcessBetParticipantsCall;

  constructor(call: ProcessBetParticipantsCall) {
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

export class StartWaveCall extends ethereum.Call {
  get inputs(): StartWaveCall__Inputs {
    return new StartWaveCall__Inputs(this);
  }

  get outputs(): StartWaveCall__Outputs {
    return new StartWaveCall__Outputs(this);
  }
}

export class StartWaveCall__Inputs {
  _call: StartWaveCall;

  constructor(call: StartWaveCall) {
    this._call = call;
  }

  get endTimestamp(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get winnersNumber(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class StartWaveCall__Outputs {
  _call: StartWaveCall;

  constructor(call: StartWaveCall) {
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
