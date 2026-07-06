'use client';

import { useEffect, useState } from 'react';
import BlogArticle from '@/components/BlogArticle';

/**
 * Serves new blog posts that were published after the last static build.
 * Apache rewrites unknown /blog/{slug}/ URLs here with ?slug=...
 */
export default function BlogArticleDynamicPage() {
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get('slug');
    if (fromQuery) {
      setSlug(fromQuery);
      window.history.replaceState(null, '', `/blog/${fromQuery}/`);
      return;
    }

    const match = window.location.pathname.match(/^\/blog\/([^/]+)\/?$/);
    if (match?.[1] && match[1] !== 'article') {
      setSlug(match[1]);
    }
  }, []);

  if (!slug) {
    return (
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="h-10 w-full animate-pulse rounded bg-slate-200" />
        </div>
      </article>
    );
  }

  return <BlogArticle slug={slug} />;
}
