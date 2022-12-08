import { WaveClose, WaveCreate } from "../../generated/Contest/Contest";
import { Contest, ContestWave } from "../../generated/schema";

/**
 * Handle a wave create event to create contest wave.
 */
export function handleWaveCreate(event: WaveCreate): void {
  // Load contest
  let contest = Contest.load(event.address.toHexString());
  if (!contest) {
    contest = new Contest(event.address.toHexString());
    contest.wavesNumber = 0;
  }
  // Create contest wave
  let wave = new ContestWave(
    contest.id + "_" + event.params.index.toHexString()
  );
  wave.contest = contest.id;
  wave.index = event.params.index;
  wave.startTimestamp = event.params.wave.startTimestamp;
  wave.endTimestamp = event.params.wave.endTimestamp;
  wave.closeTimestamp = event.params.wave.closeTimestamp;
  wave.winnersNumber = event.params.wave.winnersNumber;
  wave.winning = event.params.wave.winning;
  wave.save();
  // Increase contest waves number
  contest.wavesNumber = contest.wavesNumber + 1;
  contest.save();
}

/**
 * Handle a wave close event to update contest wave.
 */
export function handleWaveClose(event: WaveClose): void {
  // Load contest
  let contest = Contest.load(event.address.toHexString());
  if (!contest) {
    return;
  }
  // Load contest wave
  let wave = ContestWave.load(
    contest.id + "_" + event.params.index.toHexString()
  );
  if (!wave) {
    return;
  }
  // Update contest wave
  wave.startTimestamp = event.params.wave.startTimestamp;
  wave.endTimestamp = event.params.wave.endTimestamp;
  wave.closeTimestamp = event.params.wave.closeTimestamp;
  wave.winnersNumber = event.params.wave.winnersNumber;
  wave.winning = event.params.wave.winning;
  wave.save();
}
