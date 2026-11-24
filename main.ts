import { mkdirSync, writeFileSync } from "node:fs";

// One fortune-cookie line for a developer: the code you wrote at
// midnight comes back to meet you, and it holds a grudge.
// One short balanced sentence, a single breath, with a quiet twist
// at the end that rewards a second read.
const ENTRY =
  "Your midnight code will meet you again, and it will not remember you kindly.";

// The gate wants one line of 1 to 120 characters, not only whitespace.
const trimmed = ENTRY.trim();
if (trimmed.length < 1 || ENTRY.length > 120 || trimmed.includes("\n")) {
  throw new Error(`entry must be one line of 1-120 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
