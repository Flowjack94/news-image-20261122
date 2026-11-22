// The World Today — 22 November 2026.
// Entry for make.fun competition news-image-20261122.
// The front page (entry.png) was drawn in code for this day's news; this
// program copies it to the output directory, byte for byte, every run.
// Deterministic by construction: a fixed file in, the same bytes out —
// the program performs no I/O besides this one copy and reads no clock,
// no network and no environment beyond the output directory.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository");
}
copyFileSync(source, join(outDir, "entry.png"));
