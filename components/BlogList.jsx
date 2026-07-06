'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { fetchBlogPostsClient } from '@/lib/aventrex-blog-client';
import { usesBlogApi } from '@/lib/aventrex-blog-config';
import { POSTS as FALLBACK_POSTS } from '@/lib/posts';

function fallbackPosts() {
  return FALLBACK_POSTS.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    readingTime: post.readingTime,
    image: post.image,
    imageAlt: post.imageAlt ?? post.title,
  }));
}

export default function BlogList() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        if (!usesBlogApi()) {
          if (!cancelled) setPosts(fallbackPosts());
          return;
        }
        const data = await fetchBlogPostsClient();
        if (!cancelled) setPosts(data);
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError('Could not load articles. Showing cached guides.');
          setPosts(fallbackPosts());
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (posts === null) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-80 animate-pulse rounded-2xl border border-slate-200 bg-slate-100"
            aria-hidden
          />
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-lg text-center">
        <p className="text-slate-600">No Venqora articles published yet.</p>
        {usesBlogApi() ? (
          <p className="mt-3 text-sm text-slate-500">
            In Aventrex admin, set <strong>Scope → Product</strong>,{' '}
            <strong>Product → Venqora EHR</strong>, and <strong>Status → Published</strong>.
          </p>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            Blog API is not configured. Copy <code className="text-xs">.env.local.example</code> to{' '}
            <code className="text-xs">.env.local</code> and restart <code className="text-xs">npm run dev</code>.
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      {error ? (
        <p className="mb-6 text-center text-sm text-amber-700" role="status">
          {error}
        </p>
      ) : null}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-brand-300 hover:shadow-lg hover:shadow-brand-50"
          >
            <ImagePlaceholder
              src={post.image}
              alt={post.imageAlt}
              label="Article cover image"
              ratio="aspect-[16/9]"
              hoverEffect="flat"
              className="rounded-none border-0 border-b-2 shadow-none"
            />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {post.readingTime ? ` · ${post.readingTime}` : ''}
              </p>
              <h2 className="mt-2 text-lg font-bold leading-snug text-slate-900">
                <Link href={`/blog/${post.slug}/`} className="hover:text-brand-700">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.description}</p>
              <Link
                href={`/blog/${post.slug}/`}
                className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
