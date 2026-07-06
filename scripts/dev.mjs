#!/usr/bin/env node
/**
 * Local dev — loads env files and exposes API URL to the browser (NEXT_PUBLIC_*).
 */
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function loadEnvFile(filename, { override = false } = {}) {
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
    if (override || !(key in process.env)) {
      process.env[key] = value;
    }
  }
}

// Match Next.js dev env precedence (.env.local wins).
loadEnvFile('.env');
loadEnvFile('.env.development');
loadEnvFile('.env.local', { override: true });

if (process.env.AVENTREX_API_URL && !process.env.NEXT_PUBLIC_AVENTREX_API_URL) {
  process.env.NEXT_PUBLIC_AVENTREX_API_URL = process.env.AVENTREX_API_URL;
}
if (process.env.AVENTREX_PRODUCT_SLUG && !process.env.NEXT_PUBLIC_AVENTREX_PRODUCT_SLUG) {
  process.env.NEXT_PUBLIC_AVENTREX_PRODUCT_SLUG = process.env.AVENTREX_PRODUCT_SLUG;
}

if (!process.env.NEXT_PUBLIC_AVENTREX_API_URL) {
  console.warn('\n⚠  Aventrex API not configured for local dev.');
  console.warn('   Copy .env.local.example → .env.local and set AVENTREX_API_URL=http://localhost:3000\n');
} else {
  console.log(
    `Aventrex API: ${process.env.NEXT_PUBLIC_AVENTREX_API_URL} (product: ${process.env.NEXT_PUBLIC_AVENTREX_PRODUCT_SLUG ?? 'venqora-ehr'}) — blog + pricing`,
  );
}

// Run Venqora on 3001 so Aventrex Digitals can use 3000 locally.
if (!process.env.PORT) {
  process.env.PORT = '3001';
}
console.log(`Venqora dev: http://localhost:${process.env.PORT}`);

const result = spawnSync('npx', ['next', 'dev', '-p', process.env.PORT], {
  cwd: root,
  stdio: 'inherit',
  env: process.env,
  shell: true,
});

process.exit(result.status ?? 1);
