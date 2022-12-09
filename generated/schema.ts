// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Bet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bet entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Bet must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Bet", id.toString(), this);
    }
  }

  static load(id: string): Bet | null {
    return changetype<Bet | null>(store.get("Bet", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get params(): string {
    let value = this.get("params");
    return value!.toString();
  }

  set params(value: string) {
    this.set("params", Value.fromString(value));
  }

  get participants(): Array<string> {
    let value = this.get("participants");
    return value!.toStringArray();
  }

  set participants(value: Array<string>) {
    this.set("participants", Value.fromStringArray(value));
  }
}

export class BetParams extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BetParams entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BetParams must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BetParams", id.toString(), this);
    }
  }

  static load(id: string): BetParams | null {
    return changetype<BetParams | null>(store.get("BetParams", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bet(): string {
    let value = this.get("bet");
    return value!.toString();
  }

  set bet(value: string) {
    this.set("bet", Value.fromString(value));
  }

  get createdTimestamp(): BigInt {
    let value = this.get("createdTimestamp");
    return value!.toBigInt();
  }

  set createdTimestamp(value: BigInt) {
    this.set("createdTimestamp", Value.fromBigInt(value));
  }

  get creatorAddress(): string {
    let value = this.get("creatorAddress");
    return value!.toString();
  }

  set creatorAddress(value: string) {
    this.set("creatorAddress", Value.fromString(value));
  }

  get creatorFee(): BigInt {
    let value = this.get("creatorFee");
    return value!.toBigInt();
  }

  set creatorFee(value: BigInt) {
    this.set("creatorFee", Value.fromBigInt(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get targetMinPrice(): BigInt {
    let value = this.get("targetMinPrice");
    return value!.toBigInt();
  }

  set targetMinPrice(value: BigInt) {
    this.set("targetMinPrice", Value.fromBigInt(value));
  }

  get targetMaxPrice(): BigInt {
    let value = this.get("targetMaxPrice");
    return value!.toBigInt();
  }

  set targetMaxPrice(value: BigInt) {
    this.set("targetMaxPrice", Value.fromBigInt(value));
  }

  get targetTimestamp(): BigInt {
    let value = this.get("targetTimestamp");
    return value!.toBigInt();
  }

  set targetTimestamp(value: BigInt) {
    this.set("targetTimestamp", Value.fromBigInt(value));
  }

  get participationDeadlineTimestamp(): BigInt {
    let value = this.get("participationDeadlineTimestamp");
    return value!.toBigInt();
  }

  set participationDeadlineTimestamp(value: BigInt) {
    this.set("participationDeadlineTimestamp", Value.fromBigInt(value));
  }

  get feeForSuccess(): BigInt {
    let value = this.get("feeForSuccess");
    return value!.toBigInt();
  }

  set feeForSuccess(value: BigInt) {
    this.set("feeForSuccess", Value.fromBigInt(value));
  }

  get feeForFailure(): BigInt {
    let value = this.get("feeForFailure");
    return value!.toBigInt();
  }

  set feeForFailure(value: BigInt) {
    this.set("feeForFailure", Value.fromBigInt(value));
  }

  get isClosed(): boolean {
    let value = this.get("isClosed");
    return value!.toBoolean();
  }

  set isClosed(value: boolean) {
    this.set("isClosed", Value.fromBoolean(value));
  }

  get isSuccessful(): boolean {
    let value = this.get("isSuccessful");
    return value!.toBoolean();
  }

  set isSuccessful(value: boolean) {
    this.set("isSuccessful", Value.fromBoolean(value));
  }
}

export class BetParticipant extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BetParticipant entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BetParticipant must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BetParticipant", id.toString(), this);
    }
  }

  static load(id: string): BetParticipant | null {
    return changetype<BetParticipant | null>(store.get("BetParticipant", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bet(): string {
    let value = this.get("bet");
    return value!.toString();
  }

  set bet(value: string) {
    this.set("bet", Value.fromString(value));
  }

  get addedTimestamp(): BigInt {
    let value = this.get("addedTimestamp");
    return value!.toBigInt();
  }

  set addedTimestamp(value: BigInt) {
    this.set("addedTimestamp", Value.fromBigInt(value));
  }

  get accountAddress(): string {
    let value = this.get("accountAddress");
    return value!.toString();
  }

  set accountAddress(value: string) {
    this.set("accountAddress", Value.fromString(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value!.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get isFeeForSuccess(): boolean {
    let value = this.get("isFeeForSuccess");
    return value!.toBoolean();
  }

  set isFeeForSuccess(value: boolean) {
    this.set("isFeeForSuccess", Value.fromBoolean(value));
  }

  get winning(): BigInt {
    let value = this.get("winning");
    return value!.toBigInt();
  }

  set winning(value: BigInt) {
    this.set("winning", Value.fromBigInt(value));
  }
}

export class Contest extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Contest entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Contest must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Contest", id.toString(), this);
    }
  }

  static load(id: string): Contest | null {
    return changetype<Contest | null>(store.get("Contest", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get waves(): Array<string> {
    let value = this.get("waves");
    return value!.toStringArray();
  }

  set waves(value: Array<string>) {
    this.set("waves", Value.fromStringArray(value));
  }
}

export class ContestWave extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ContestWave entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ContestWave must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ContestWave", id.toString(), this);
    }
  }

  static load(id: string): ContestWave | null {
    return changetype<ContestWave | null>(store.get("ContestWave", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contest(): string {
    let value = this.get("contest");
    return value!.toString();
  }

  set contest(value: string) {
    this.set("contest", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get startTimestamp(): BigInt {
    let value = this.get("startTimestamp");
    return value!.toBigInt();
  }

  set startTimestamp(value: BigInt) {
    this.set("startTimestamp", Value.fromBigInt(value));
  }

  get endTimestamp(): BigInt {
    let value = this.get("endTimestamp");
    return value!.toBigInt();
  }

  set endTimestamp(value: BigInt) {
    this.set("endTimestamp", Value.fromBigInt(value));
  }

  get closeTimestamp(): BigInt {
    let value = this.get("closeTimestamp");
    return value!.toBigInt();
  }

  set closeTimestamp(value: BigInt) {
    this.set("closeTimestamp", Value.fromBigInt(value));
  }

  get winnersNumber(): BigInt {
    let value = this.get("winnersNumber");
    return value!.toBigInt();
  }

  set winnersNumber(value: BigInt) {
    this.set("winnersNumber", Value.fromBigInt(value));
  }

  get winning(): BigInt {
    let value = this.get("winning");
    return value!.toBigInt();
  }

  set winning(value: BigInt) {
    this.set("winning", Value.fromBigInt(value));
  }

  get participants(): Array<string> {
    let value = this.get("participants");
    return value!.toStringArray();
  }

  set participants(value: Array<string>) {
    this.set("participants", Value.fromStringArray(value));
  }
}

export class ContestWaveParticipant extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save ContestWaveParticipant entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ContestWaveParticipant must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ContestWaveParticipant", id.toString(), this);
    }
  }

  static load(id: string): ContestWaveParticipant | null {
    return changetype<ContestWaveParticipant | null>(
      store.get("ContestWaveParticipant", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get wave(): string {
    let value = this.get("wave");
    return value!.toString();
  }

  set wave(value: string) {
    this.set("wave", Value.fromString(value));
  }

  get accountAddress(): string {
    let value = this.get("accountAddress");
    return value!.toString();
  }

  set accountAddress(value: string) {
    this.set("accountAddress", Value.fromString(value));
  }

  get successes(): BigInt {
    let value = this.get("successes");
    return value!.toBigInt();
  }

  set successes(value: BigInt) {
    this.set("successes", Value.fromBigInt(value));
  }

  get failures(): BigInt {
    let value = this.get("failures");
    return value!.toBigInt();
  }

  set failures(value: BigInt) {
    this.set("failures", Value.fromBigInt(value));
  }

  get variance(): BigInt {
    let value = this.get("variance");
    return value!.toBigInt();
  }

  set variance(value: BigInt) {
    this.set("variance", Value.fromBigInt(value));
  }
}
