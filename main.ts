// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem about
// agency to /output/entry.txt. Deterministic: the same bytes on every run, no network,
// no timestamps, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'My mother asks me what the doctor said.',
  'The words are mine in one language;',
  'the fear is hers in another.',
  '',
  'I carry the small pains across whole.',
  'The large one I fold smaller,',
  'the way you fold a shirt so the stain stays in.',
  '',
  'She nods. She thanks the doctor.',
  'She does not know I chose the size',
  'of what she gets to carry home.',
  '',
  'That is the power: not the voice that speaks,',
  'but the silence it decides to keep.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
