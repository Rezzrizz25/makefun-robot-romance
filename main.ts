// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Are you an API? Because every time I call you, my heart returns a 200 OK.";

if (!ENTRY || ENTRY.length === 0) {
  throw new Error("ENTRY must not be empty");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("ENTRY must be a single line");
}
if (ENTRY.length >= 200) {
  throw new Error(`ENTRY must be under 200 characters (got ${ENTRY.length})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Entry written (${ENTRY.length} characters)`);
