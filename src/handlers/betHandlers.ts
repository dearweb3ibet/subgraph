import { ParamsSet, Transfer } from "../../generated/Bet/Bet";
import { Bet } from "../../generated/schema";

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
 * Handle a params set event to update a bet.
 */
export function handleParamsSet(event: ParamsSet): void {
  let bet = Bet.load(event.params.tokenId.toString());
  if (bet) {
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
}
