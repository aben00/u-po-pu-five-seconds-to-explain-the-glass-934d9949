// Five Seconds to Explain the Glass — make.fun entry
// The one sentence a house cat would say in the five seconds after
// sweeping a glass off the table. Deterministic: same output every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "It never once fed me, never once petted me, and never once paid rent, so I demoted it to the floor.";

// The sealed gate only accepts UTF-8 text of 1 to 200 characters that is not
// only white space, so refuse to write anything that would fail it.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry fails the gate: ${ENTRY.length} characters, must be 1-200 and not only white space`,
  );
}

// The grader runs with a read-only script dir, so the output goes to
// MAKEFUN_OUTPUT_DIR (default /output), never next to this script.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

console.log(ENTRY);
