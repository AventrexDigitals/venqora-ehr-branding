import { FEATURES, FEATURE_DETAIL_PAGES_ENABLED } from '@/lib/features';
import { POSTS } from '@/lib/posts';
import { absoluteUrl } from '@/lib/site';
import { getApiBase, getProductSlug } from '@/lib/aventrex-blog-config';

export const dynamic = 'force-static';

async function fetchSitemapPosts() {
  const base = getApiBase();
  if (!base) return POSTS;

  const url = `${base}/api/blog?scope=product&product=${encodeURIComponent(getProductSlug())}`;
  try {
    const res = await fetch(url, { cache: 'force-cache' });
    if (!res.ok) return POSTS;
    const data = await res.json();
    const posts = Array.isArray(data.posts) ? data.posts : [];
    if (!posts.length) return POSTS;
    return posts.map((post) => ({
      slug: post.slug,
      date: post.date,
    }));
  } catch {
    return POSTS;
  }
}

export default async function sitemap() {
  const lastModified = new Date('2026-06-12');
  const posts = await fetchSitemapPosts();

  const staticPages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/features/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/why-venqora/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/pricing/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contact/', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/faq/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog/', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/about/', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/privacy/', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return [
    ...staticPages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...(FEATURE_DETAIL_PAGES_ENABLED
      ? FEATURES.map((f) => ({
          url: absoluteUrl(`/features/${f.slug}/`),
          lastModified,
          changeFrequency: 'monthly',
          priority: 0.8,
        }))
      : []),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}/`),
      lastModified: new Date(post.date || lastModified),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
}
