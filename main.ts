// one-word-boss-entry — entry for make.fun's "One Word for the Boss" bounty.
// The whole entry is a single word describing my boss: ASAP.
// Every request from the boss is ASAP — funny because it is true, and true
// because every boss says it. No phrase, no caption, no explanation: the
// word is the whole entry, exactly 4 bytes, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "ASAP";
const OUTPUT = "/output/entry.txt";

// The grader runs this in a fresh sandbox, so the output directory may not
// exist yet; create it (recursively, in case /output itself is missing).
mkdirSync(dirname(OUTPUT), { recursive: true });
// Write the word as UTF-8 with no trailing newline — the sealed scorer
// requires 1-30 characters, and the judge reads exactly what is here.
writeFileSync(OUTPUT, WORD, { encoding: "utf8", flag: "w" });
