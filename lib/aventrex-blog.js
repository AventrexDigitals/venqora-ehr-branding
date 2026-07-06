/**
 * Server-side blog fetch (build time + SSR). Falls back to static posts when API is unset.
 */

import { POSTS as FALLBACK_POSTS, getPost as getFallbackPost } from '@/lib/posts';
import {
  getApiBase,
  getProductSlug,
  resolveBlogImageUrl,
  usesBlogApi,
} from '@/lib/aventrex-blog-config';

/** @param {import('@/lib/posts').POSTS[0]} post */
function fallbackToVenqoraPost(post) {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    readingTime: post.readingTime,
    image: post.image,
    imageAlt: post.imageAlt ?? post.title,
    content: null,
    body: post.body,
    author: null,
  };
}

/** @param {Record<string, unknown>} apiPost */
function mapApiPost(apiPost) {
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

/**
 * @returns {Promise<ReturnType<typeof mapApiPost>[]>}
 */
export async function getBlogPosts() {
  if (!usesBlogApi()) {
    return FALLBACK_POSTS.map(fallbackToVenqoraPost);
  }

  const url = `${getApiBase()}/api/blog?scope=product&product=${encodeURIComponent(getProductSlug())}`;

  try {
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      console.error(`Aventrex blog API error: ${res.status}`);
      return FALLBACK_POSTS.map(fallbackToVenqoraPost);
    }

    const data = await res.json();
    const posts = Array.isArray(data.posts) ? data.posts : [];
    return posts.map(mapApiPost);
  } catch (err) {
    console.error('Aventrex blog API fetch failed:', err);
    return FALLBACK_POSTS.map(fallbackToVenqoraPost);
  }
}

/**
 * @param {string} slug
 */
export async function getBlogPost(slug) {
  if (!usesBlogApi()) {
    const post = getFallbackPost(slug);
    return post ? fallbackToVenqoraPost(post) : null;
  }

  const url = `${getApiBase()}/api/blog/${encodeURIComponent(slug)}?scope=product&product=${encodeURIComponent(getProductSlug())}`;

  try {
    const res = await fetch(url, { cache: 'no-store' });

    if (res.status === 404) return null;
    if (!res.ok) {
      console.error(`Aventrex blog API error for ${slug}: ${res.status}`);
      const fallback = getFallbackPost(slug);
      return fallback ? fallbackToVenqoraPost(fallback) : null;
    }

    const data = await res.json();
    return data.post ? mapApiPost(data.post) : null;
  } catch (err) {
    console.error(`Aventrex blog API fetch failed for ${slug}:`, err);
    const fallback = getFallbackPost(slug);
    return fallback ? fallbackToVenqoraPost(fallback) : null;
  }
}

export async function getBlogSlugs() {
  const posts = await getBlogPosts();
  return posts.map((p) => p.slug);
}
