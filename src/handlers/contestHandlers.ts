import {
  WaveClosed,
  WaveCreated,
  WaveParticipantSet,
} from "../../generated/Contest/Contest";
import {
  Contest,
  ContestWave,
  ContestWaveParticipant,
} from "../../generated/schema";

/**
 * Handle a wave created event to create contest wave.
 */
export function handleWaveCreated(event: WaveCreated): void {
  // Load or create contest
  let contest = Contest.load(event.address.toHexString());
  if (!contest) {
    contest = new Contest(event.address.toHexString());
    contest.save();
  }
  // Create contest wave
  let wave = new ContestWave(contest.id + "_" + event.params.id.toString());
  wave.contest = contest.id;
  wave.waveId = event.params.id;
  wave.startTimestamp = event.params.wave.startTimestamp;
  wave.endTimestamp = event.params.wave.endTimestamp;
  wave.closeTimestamp = event.params.wave.closeTimestamp;
  wave.winnersNumber = event.params.wave.winnersNumber;
  wave.winning = event.params.wave.winning;
  wave.save();
}

/**
 * Handle a wave closed event to update contest wave.
 */
export function handleWaveClosed(event: WaveClosed): void {
  // Load contest
  let contest = Contest.load(event.address.toHexString());
  if (!contest) {
    return;
  }
  // Load contest wave
  let wave = ContestWave.load(contest.id + "_" + event.params.id.toString());
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
  let wave = ContestWave.load(contest.id + "_" + event.params.id.toString());
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
