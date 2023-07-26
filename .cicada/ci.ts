import { Job, Pipeline } from 'https://deno.land/x/cicada@v0.1.50/mod.ts';

const lintJob = new Job({
  name: 'lint',
  image: 'node:18',
  cacheDirectories: ['node_modules'],
  steps: [
    { run: 'corepack enable' },
    { run: 'pnpm install' },
    { run: 'pnpm run build' },
    { run: 'pnpm run lint' },
  ],
});
const typecheckJob = new Job({
  name: 'typecheck',
  image: 'node:18',
  cacheDirectories: ['node_modules'],
  steps: [{ run: 'corepack enable' }, { run: 'pnpm install' }, { run: 'pnpm run check:types' }],
});

const testJob = new Job({
  name: 'test',
  image: 'node:18',
  cacheDirectories: ['node_modules'],
  steps: [{ run: 'corepack enable' }, { run: 'pnpm install' }, { run: 'pnpm run test' }],
});

export default new Pipeline([lintJob, typecheckJob, testJob], {
  name: 'ci',
  on: {
    pullRequest: ['main'],
    push: ['main'],
  },
});
