#!/usr/bin/env node
/**
 * Production static build for Hostinger upload.
 * Loads .env.production (or .env.local) then runs `next build` → /out
 */
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function loadEnvFile(filename) {
  const filePath = path.join(root, filename);
  if (!existsSync(filePath)) return;

  const lines = readFileSync(filePath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile('.env.production');
loadEnvFile('.env.local');

// Expose API URL to client-side blog fetch (static Hostinger has no server runtime).
if (process.env.AVENTREX_API_URL && !process.env.NEXT_PUBLIC_AVENTREX_API_URL) {
  process.env.NEXT_PUBLIC_AVENTREX_API_URL = process.env.AVENTREX_API_URL;
}
if (process.env.AVENTREX_PRODUCT_SLUG && !process.env.NEXT_PUBLIC_AVENTREX_PRODUCT_SLUG) {
  process.env.NEXT_PUBLIC_AVENTREX_PRODUCT_SLUG = process.env.AVENTREX_PRODUCT_SLUG;
}

if (!process.env.AVENTREX_API_URL) {
  console.warn(
    '\n⚠  AVENTREX_API_URL is not set — blog and pricing will use static fallbacks in lib/posts.js and lib/plans.js.',
  );
  console.warn('   Copy .env.production.example → .env.production and set your API URL.\n');
} else {
  console.log(`Using AVENTREX_API_URL=${process.env.AVENTREX_API_URL}`);
}

const result = spawnSync('npx', ['next', 'build'], {
  cwd: root,
  stdio: 'inherit',
  env: process.env,
  shell: true,
});

if (result.status !== 0) process.exit(result.status ?? 1);

const rss = spawnSync('node', ['scripts/generate-rss.mjs'], {
  cwd: root,
  stdio: 'inherit',
  env: process.env,
  shell: true,
});

if (rss.status !== 0) process.exit(rss.status ?? 1);

console.log('\n✓ Static site ready in /out — upload its contents to Hostinger public_html.');
console.log('  See HOSTINGER.md for step-by-step instructions.\n');
