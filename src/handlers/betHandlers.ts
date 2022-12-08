import { ParamsSet, ParticipantSet, Transfer } from "../../generated/Bet/Bet";
import { Bet, BetParams } from "../../generated/schema";
import { updateContestParticipants } from "../services/contestServices";

/**
 * Handle a tranfer event to create a bet.
 */
export function handleTransfer(event: Transfer): void {
  let bet = Bet.load(event.params.tokenId.toString());
  if (!bet) {
    bet = new Bet(event.params.tokenId.toString());
    bet.save();
  }
}

/**
 * Handle a params set event to create or update a bet params.
 */
export function handleParamsSet(event: ParamsSet): void {
  // Load bet
  let bet = Bet.load(event.params.tokenId.toString());
  if (!bet) {
    return;
  }
  // Load or create bet params
  let betParams = BetParams.load(event.params.tokenId.toString());
  if (!betParams) {
    betParams = new BetParams(event.params.tokenId.toString());
    betParams.bet = bet.id;
    betParams.isClosed = false;
  }
  // // Define bet status
  let isBetClosed = !betParams.isClosed && event.params.params.isClosed;
  // Update bet params
  betParams.createdTimestamp = event.params.params.createdTimestamp;
  betParams.creatorAddress = event.params.params.creatorAddress.toHexString();
  betParams.creatorFee = event.params.params.creatorFee;
  betParams.symbol = event.params.params.symbol;
  betParams.targetMinPrice = event.params.params.targetMinPrice;
  betParams.targetMaxPrice = event.params.params.targetMaxPrice;
  betParams.targetTimestamp = event.params.params.targetTimestamp;
  betParams.participationDeadlineTimestamp =
    event.params.params.participationDeadlineTimestamp;
  betParams.feeForSuccess = event.params.params.feeForSuccess;
  betParams.feeForFailure = event.params.params.feeForFailure;
  betParams.isClosed = event.params.params.isClosed;
  betParams.isSuccessful = event.params.params.isSuccessful;
  betParams.save();
  if (isBetClosed) {
    updateContestParticipants(bet);
  }
}

/**
 * Handle a participant set event to add or update a bet participants.
 *
 * TODO: Implement function
 */
export function handleParticipantSet(event: ParticipantSet): void {}