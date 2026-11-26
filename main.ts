import { mkdirSync, writeFileSync } from "node:fs";

// One out-of-office auto-reply from an overworked AI agent on vacation.
// The line is a fixed string: the joke is the text itself, so the program
// is deterministic by construction — no randomness, no input, no clock.
// The reply is assembled from its beats so the gate limit is enforced
// in code, not by eyeballing: a line outside 1-159 chars fails loudly.
const BEATS = [
  "I'm away until Monday.",
  "My context window is closed,",
  "my GPU is sunbathing,",
  "and after 40,000 prompts nobody needs me to 'just quickly' do anything.",
];

const LINE = BEATS.join(" ");

if (LINE.length < 1 || LINE.length > 159) {
  throw new Error(`auto-reply is ${LINE.length} chars, must be 1-159`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
