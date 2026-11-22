// The World Today — 22 November 2026.
// Entry for make.fun competition news-image-20261122.
// The front page (entry.png) was drawn in code for this day's news; this
// program copies it to the output directory, byte for byte, every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
