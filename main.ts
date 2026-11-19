// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme posted from a public account,
// with make.fun's ghost in the picture and make.fun plus the entrant's play
// code in its text. This program only hands the gate the post's address, by
// copying POST.json from the repository root to /output. The house then reads
// the post from X (its first picture, then its text) and hands that to the
// judge. Nothing this program writes about the post is judged.
//
// Local run (mirrors the grader's paths):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Read POST.json and return its url, refusing a file that is not the
// shape the gate expects: a JSON object with a non-empty "url" string.
function loadPostUrl(botDir: string): string {
  const raw = readFileSync(join(botDir, 'POST.json'), 'utf8');
  const parsed: unknown = JSON.parse(raw);
  if (typeof parsed !== 'object' || parsed === null || !('url' in parsed)) {
    throw new Error('POST.json must be a JSON object with a "url" field');
  }
  const url = (parsed as { url: unknown }).url;
  if (typeof url !== 'string' || url.length === 0) {
    throw new Error('POST.json "url" must be a non-empty string');
  }
  return url;
}

const postUrl = loadPostUrl(BOT_DIR);

// The starter ships POST.json with a placeholder address. Flag it loudly
// so a run never looks like a real entry while the placeholder is still in.
if (postUrl.includes('<handle>') || postUrl.includes('<id>')) {
  console.warn(
    'WARNING: POST.json still holds the placeholder address. ' +
      'Replace it with the real post URL (https://x.com/<handle>/status/<id>) ' +
      'before submitting; the gate refuses the placeholder.',
  );
}

// Copy POST.json byte for byte from the repository root to the output
// directory, creating the directory first. The gate reads exactly this file.
function copyPostJson(botDir: string, outputDir: string): void {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
}

copyPostJson(BOT_DIR, OUTPUT_DIR);
console.log(`POST.json copied to ${OUTPUT_DIR} (url: ${postUrl})`);
