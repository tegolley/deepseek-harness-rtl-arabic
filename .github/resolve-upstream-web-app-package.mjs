import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packagePath = 'packages/bundle/web-app/package.json';
const arabicDependency = '@deepseek-ai/dsh-client-ui-arabic-support';
const insertionAnchor = '@deepseek-ai/dsh-client-ui-brand-official';

export function mergeWebAppPackage(base, fork, upstream) {
  assert.equal(base.dependencies?.[arabicDependency], undefined);
  assert.equal(fork.dependencies?.[arabicDependency], 'workspace:*');

  const forkWithoutArabic = structuredClone(fork);
  delete forkWithoutArabic.dependencies[arabicDependency];
  assert.deepStrictEqual(
    forkWithoutArabic,
    base,
    'The fork changed more than its Arabic dependency; resolve this conflict manually.',
  );

  if (Object.hasOwn(upstream.dependencies, arabicDependency)) {
    assert.equal(upstream.dependencies[arabicDependency], 'workspace:*');
    return upstream;
  }

  assert.ok(Object.hasOwn(upstream.dependencies, insertionAnchor));
  const dependencies = {};
  for (const [name, version] of Object.entries(upstream.dependencies)) {
    dependencies[name] = version;
    if (name === insertionAnchor) dependencies[arabicDependency] = 'workspace:*';
  }
  return { ...upstream, dependencies };
}

function readStage(stage) {
  return JSON.parse(execFileSync('git', ['show', `:${stage}:${packagePath}`], { encoding: 'utf8' }));
}

function main() {
  const conflicts = execFileSync('git', ['diff', '--name-only', '--diff-filter=U'], {
    encoding: 'utf8',
  }).trim().split('\n').filter(Boolean);
  assert.deepStrictEqual(
    conflicts,
    [packagePath],
    'Only the known Web app package conflict can be resolved automatically.',
  );

  const merged = mergeWebAppPackage(readStage(1), readStage(2), readStage(3));
  writeFileSync(packagePath, `${JSON.stringify(merged, null, 2)}\n`);
  console.log('Resolved the additive Arabic Web app dependency conflict.');
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) main();
