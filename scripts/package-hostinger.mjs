#!/usr/bin/env node
/**
 * Zip /out for one-click upload via Hostinger File Manager.
 */
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'out');

if (!existsSync(outDir)) {
  console.error('No /out folder — run npm run build:hostinger first.');
  process.exit(1);
}

const zipName = 'venqora-site.zip';
const result = spawnSync('zip', ['-r', zipName, '.'], {
  cwd: outDir,
  stdio: 'inherit',
});

if (result.status !== 0) {
  console.error('zip failed. On macOS/Linux, zip should be pre-installed.');
  process.exit(1);
}

console.log(`\n✓ Created ${path.join(outDir, zipName)}`);
console.log('  Upload and extract in Hostinger File Manager → public_html\n');
