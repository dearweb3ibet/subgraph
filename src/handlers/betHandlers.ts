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
    bet.createdDate = event.params.params.createdDate;
    bet.symbol = event.params.params.symbol;
    bet.minPrice = event.params.params.minPrice;
    bet.maxPrice = event.params.params.maxPrice;
    bet.dayStartTimestamp = event.params.params.dayStartTimestamp;
    bet.rate = event.params.params.rate;
    bet.firstMember = event.params.params.firstMember.toHexString();
    bet.secondMember = event.params.params.secondMember.toHexString();
    bet.winner = event.params.params.winner.toHexString();
    bet.winning = event.params.params.winning;
    bet.save();
  }
}
