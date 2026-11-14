// agency-poem-01 v2 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. Deterministic: the same bytes on every run,
// no network, no timestamps, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The hoist waits beside the bed like a crane.',
  'He waves it off. The straps hang empty.',
  'Two hands on the mattress, one on the wheel,',
  'he lifts his own weight across the gap.',
  'The first time his arm gives.',
  'The second time it holds.',
  'He lands in the chair he chose himself,',
  'blue, by the window, where the light comes in.',
  'It takes him a minute. The chair does not move.',
  'He does.',
  'The nurse stands back, her hands empty,',
  'and does not help.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
