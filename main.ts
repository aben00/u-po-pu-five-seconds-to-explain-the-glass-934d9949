// Five Seconds to Explain the Glass — make.fun entry
// The one sentence a house cat would say in the five seconds after
// sweeping a glass off the table. Deterministic: same output every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "It never once fed me, never once petted me, and never once paid rent, so I demoted it to the floor.";

// The grader runs with a read-only script dir, so the output goes to
// MAKEFUN_OUTPUT_DIR (default /output), never next to this script.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

console.log(ENTRY);
