'use client';

import {
  getApiBase,
  getProductSlug,
  resolveBlogImageUrl,
  usesBlogApi,
} from '@/lib/aventrex-blog-config';

/** @param {Record<string, unknown>} apiPost */
export function mapApiPost(apiPost) {
  const apiBase = getApiBase();
  const image = typeof apiPost.image === 'string' ? apiPost.image : '';
  return {
    slug: apiPost.slug,
    title: apiPost.title,
    description: apiPost.excerpt ?? '',
    date: apiPost.date,
    readingTime: apiPost.readTime ?? '',
    image: resolveBlogImageUrl(image, apiBase),
    imageAlt: apiPost.title,
    content: apiPost.content ?? '',
    body: null,
    author: apiPost.author ?? null,
  };
}

function blogListUrl() {
  const base = getApiBase();
  const product = getProductSlug();
  return `${base}/api/blog?scope=product&product=${encodeURIComponent(product)}`;
}

function blogPostUrl(slug) {
  const base = getApiBase();
  const product = getProductSlug();
  return `${base}/api/blog/${encodeURIComponent(slug)}?scope=product&product=${encodeURIComponent(product)}`;
}

/**
 * Fetch published Venqora blog posts from the live Aventrex API (browser).
 * @returns {Promise<ReturnType<typeof mapApiPost>[]>}
 */
export async function fetchBlogPostsClient() {
  if (!usesBlogApi()) {
    throw new Error('Blog API URL is not configured');
  }

  const res = await fetch(blogListUrl(), { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Blog API error: ${res.status}`);
  }

  const data = await res.json();
  const posts = Array.isArray(data.posts) ? data.posts : [];
  return posts.map(mapApiPost);
}

/**
 * @param {string} slug
 * @returns {Promise<ReturnType<typeof mapApiPost> | null>}
 */
export async function fetchBlogPostClient(slug) {
  if (!usesBlogApi()) {
    throw new Error('Blog API URL is not configured');
  }

  const res = await fetch(blogPostUrl(slug), { cache: 'no-store' });
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Blog API error: ${res.status}`);
  }

  const data = await res.json();
  return data.post ? mapApiPost(data.post) : null;
}
