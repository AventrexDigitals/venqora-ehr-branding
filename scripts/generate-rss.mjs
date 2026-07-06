#!/usr/bin/env node
/**
 * Writes public/feed.xml and out/feed.xml after static build.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildBlogRss } from '../lib/rss.js';
import { POSTS } from '../lib/posts.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function loadEnvFile(filename) {
  const filePath = path.join(root, filename);
  if (!existsSync(filePath)) return;
  for (const line of readFileSync(filePath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile('.env.production');
loadEnvFile('.env.local');

async function fetchPosts() {
  const base = (process.env.AVENTREX_API_URL || process.env.NEXT_PUBLIC_AVENTREX_API_URL || '').replace(
    /\/$/,
    '',
  );
  const product = process.env.AVENTREX_PRODUCT_SLUG || process.env.NEXT_PUBLIC_AVENTREX_PRODUCT_SLUG || 'venqora-ehr';

  if (!base) {
    return POSTS.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      date: p.date,
      author: 'Venqora EHR',
    }));
  }

  try {
    const res = await fetch(`${base}/api/blog?scope=product&product=${encodeURIComponent(product)}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    const posts = Array.isArray(data.posts) ? data.posts : [];
    if (!posts.length) throw new Error('empty');
    return posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.excerpt ?? '',
      date: p.date,
      author: p.author ?? 'Venqora EHR',
    }));
  } catch {
    return POSTS.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      date: p.date,
      author: 'Venqora EHR',
    }));
  }
}

const posts = await fetchPosts();
const xml = buildBlogRss(posts);

const publicPath = path.join(root, 'public', 'feed.xml');
writeFileSync(publicPath, xml, 'utf8');
console.log(`✓ Wrote ${publicPath}`);

const outDir = path.join(root, 'out');
if (existsSync(outDir)) {
  writeFileSync(path.join(outDir, 'feed.xml'), xml, 'utf8');
  console.log(`✓ Wrote ${path.join(outDir, 'feed.xml')}`);
}
