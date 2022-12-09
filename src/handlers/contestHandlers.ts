import {
  WaveClose,
  WaveCreate,
  WaveParticipantSet,
} from "../../generated/Contest/Contest";
import {
  Contest,
  ContestWave,
  ContestWaveParticipant,
} from "../../generated/schema";

/**
 * Handle a wave create event to create contest wave.
 */
export function handleWaveCreate(event: WaveCreate): void {
  // Load or create contest
  let contest = Contest.load(event.address.toHexString());
  if (!contest) {
    contest = new Contest(event.address.toHexString());
    contest.save();
  }
  // Create contest wave
  let wave = new ContestWave(contest.id + "_" + event.params.index.toString());
  wave.contest = contest.id;
  wave.index = event.params.index;
  wave.startTimestamp = event.params.wave.startTimestamp;
  wave.endTimestamp = event.params.wave.endTimestamp;
  wave.closeTimestamp = event.params.wave.closeTimestamp;
  wave.winnersNumber = event.params.wave.winnersNumber;
  wave.winning = event.params.wave.winning;
  wave.save();
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
  let wave = ContestWave.load(contest.id + "_" + event.params.index.toString());
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

/**
 * Handle a wave participant set event to update or create contest wave participant.
 */
export function handleWaveParticipantSet(event: WaveParticipantSet): void {
  // Load contest
  let contest = Contest.load(event.address.toHexString());
  if (!contest) {
    return;
  }
  // Load contest wave
  let wave = ContestWave.load(contest.id + "_" + event.params.index.toString());
  if (!wave) {
    return;
  }
  // Define contest wave participant id
  let participantId =
    wave.id + "_" + event.params.participantAccountAddress.toHexString();
  // Update or create wave participant
  let participant = ContestWaveParticipant.load(participantId);
  if (!participant) {
    participant = new ContestWaveParticipant(participantId);
    participant.wave = wave.id;
    participant.accountAddress = event.params.participantAccountAddress.toHexString();
  }
  participant.successes = event.params.participant.successes;
  participant.failures = event.params.participant.failures;
  participant.variance = event.params.participant.variance;
  participant.save();
}
