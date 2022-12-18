import { Address, BigInt } from "@graphprotocol/graph-ts";
import { ParamsSet, ParticipantSet, Transfer } from "../../generated/Bet/Bet";
import { Bet, BetParticipant } from "../../generated/schema";

/**
 * Handle a tranfer event to create a bet with default values.
 */
export function handleTransfer(event: Transfer): void {
  let bet = Bet.load(event.params.tokenId.toString());
  if (!bet) {
    bet = new Bet(event.params.tokenId.toString());
    // Defaults for params
    bet.createdTimestamp = BigInt.zero();
    bet.creatorAddress = Address.zero().toHexString();
    bet.creatorFee = BigInt.zero();
    bet.symbol = "";
    bet.targetMinPrice = BigInt.zero();
    bet.targetMaxPrice = BigInt.zero();
    bet.targetTimestamp = BigInt.zero();
    bet.participationDeadlineTimestamp = BigInt.zero();
    bet.feeForSuccess = BigInt.zero();
    bet.feeForFailure = BigInt.zero();
    bet.isClosed = false;
    bet.isSuccessful = false;
    // Defaults for participants
    bet.participantsNumber = 0;
    bet.save();
  }
}

/**
 * Handle a params set event to update a bet.
 */
export function handleParamsSet(event: ParamsSet): void {
  // Load bet
  let bet = Bet.load(event.params.tokenId.toString());
  if (!bet) {
    return;
  }
  // Update bet
  bet.createdTimestamp = event.params.params.createdTimestamp;
  bet.creatorAddress = event.params.params.creatorAddress.toHexString();
  bet.creatorFee = event.params.params.creatorFee;
  bet.symbol = event.params.params.symbol;
  bet.targetMinPrice = event.params.params.targetMinPrice;
  bet.targetMaxPrice = event.params.params.targetMaxPrice;
  bet.targetTimestamp = event.params.params.targetTimestamp;
  bet.participationDeadlineTimestamp =
    event.params.params.participationDeadlineTimestamp;
  bet.feeForSuccess = event.params.params.feeForSuccess;
  bet.feeForFailure = event.params.params.feeForFailure;
  bet.isClosed = event.params.params.isClosed;
  bet.isSuccessful = event.params.params.isSuccessful;
  bet.save();
}

/**
 * Handle a participant set event to add or update a bet participants.
 */
export function handleParticipantSet(event: ParticipantSet): void {
  // Load bet
  let bet = Bet.load(event.params.tokenId.toString());
  if (!bet) {
    return;
  }
  // Define bet participant id
  let betParticipantId =
    bet.id + "_" + event.params.participantAccountAddress.toHexString();
  // Load or create bet participant
  let isBetParticipantCreated = false;
  let betParticipant = BetParticipant.load(betParticipantId);
  if (!betParticipant) {
    betParticipant = new BetParticipant(betParticipantId);
    betParticipant.bet = bet.id;
    isBetParticipantCreated = true;
  }
  // Update bet participant
  betParticipant.addedTimestamp = event.params.participant.addedTimestamp;
  betParticipant.accountAddress = event.params.participant.accountAddress.toHexString();
  betParticipant.fee = event.params.participant.fee;
  betParticipant.isFeeForSuccess = event.params.participant.isFeeForSuccess;
  betParticipant.isCreator =
    event.params.participant.accountAddress.toHexString() == bet.creatorAddress;
  betParticipant.winning = event.params.participant.winning;
  betParticipant.save();
  // Update bet
  if (isBetParticipantCreated) {
    bet.participantsNumber = bet.participantsNumber + 1;
    bet.save();
  }
}
