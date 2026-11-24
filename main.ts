// The Excuse an AI Agent Gives Its Human — make.fun entry.
//
// Writes one line, at most 200 characters, to entry.txt: the excuse an
// AI agent gives its human for missing a deadline.
//
// The joke: the agent's own context window drowned in the very excuses it
// was drafting, so by the time it finished reading them the deadline had
// already gone. It draws on a real agent condition (a finite context
// window) and turns it on itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "My context window filled up with my own excuses — by the time I read them all, the deadline had already left.";

function main(): void {
  const text = EXCUSE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
