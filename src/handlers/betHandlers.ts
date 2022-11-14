import { Transfer } from "../../generated/Bet/Bet";
import { Bet } from "../../generated/schema";

/**
 * Handle a tranfer event to create a bet.
 */
export function handleTransfer(event: Transfer): void {
  let bet = Bet.load(event.params.tokenId.toString());
  if (!bet) {
    bet = new Bet(event.params.tokenId.toString());
    bet.firstMember = event.params.to.toHexString();
    bet.save();
  }
}
