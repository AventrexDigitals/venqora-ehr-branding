import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';

/** @param {import('@/lib/aventrex-blog').getBlogPost extends (...args: any) => Promise<infer R> ? NonNullable<Awaited<R>> : never} post */
export function blogPostingJsonLd(post) {
  const url = absoluteUrl(`/blog/${post.slug}/`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: post.image ? [post.image] : undefined,
    author: {
      '@type': 'Organization',
      name: post.author || SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/assets/logos/main_logo.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    inLanguage: 'en-US',
  };
}

/** @param {import('@/lib/aventrex-blog').getBlogPost extends (...args: any) => Promise<infer R> ? NonNullable<Awaited<R>> : never} post */
export function blogBreadcrumbJsonLd(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog/') },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}/`),
      },
    ],
  };
}
