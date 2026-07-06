'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BlogContent from '@/components/BlogContent';
import CtaSection from '@/components/CtaSection';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { fetchBlogPostClient, fetchBlogPostsClient } from '@/lib/aventrex-blog-client';
import { usesBlogApi } from '@/lib/aventrex-blog-config';
import { getPost as getFallbackPost, POSTS as FALLBACK_POSTS } from '@/lib/posts';

function fallbackPost(slug) {
  const post = getFallbackPost(slug);
  if (!post) return null;
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

function fallbackList() {
  return FALLBACK_POSTS.map((p) => ({
    slug: p.slug,
    title: p.title,
  }));
}

export default function BlogArticle({ slug, initialPost = null }) {
  const router = useRouter();
  const [post, setPost] = useState(initialPost);
  const [morePosts, setMorePosts] = useState([]);
  const [loading, setLoading] = useState(!initialPost);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (initialPost) {
        try {
          if (usesBlogApi()) {
            const all = await fetchBlogPostsClient();
            if (!cancelled) setMorePosts(all.filter((p) => p.slug !== slug));
          } else if (!cancelled) {
            setMorePosts(fallbackList().filter((p) => p.slug !== slug));
          }
        } catch {
          if (!cancelled) setMorePosts(fallbackList().filter((p) => p.slug !== slug));
        }
        return;
      }

      setLoading(true);
      setNotFound(false);

      try {
        if (!usesBlogApi()) {
          const single = fallbackPost(slug);
          if (!single) {
            if (!cancelled) setNotFound(true);
            return;
          }
          if (!cancelled) {
            setPost(single);
            setMorePosts(fallbackList().filter((p) => p.slug !== slug));
          }
          return;
        }

        const [single, all] = await Promise.all([
          fetchBlogPostClient(slug),
          fetchBlogPostsClient(),
        ]);

        if (!single) {
          if (!cancelled) setNotFound(true);
          return;
        }

        if (!cancelled) {
          setPost(single);
          setMorePosts(all.filter((p) => p.slug !== slug));
          document.title = `${single.title} | Venqora EHR`;
        }
      } catch (err) {
        console.error(err);
        const single = fallbackPost(slug);
        if (!single) {
          if (!cancelled) setNotFound(true);
          return;
        }
        if (!cancelled) {
          setPost(single);
          setMorePosts(fallbackList().filter((p) => p.slug !== slug));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug, router, initialPost]);

  useEffect(() => {
    if (notFound) router.replace('/blog/');
  }, [notFound, router]);

  if (loading) {
    return (
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="h-6 w-48 animate-pulse rounded bg-slate-200" />
          <div className="mt-6 h-10 w-full animate-pulse rounded bg-slate-200" />
          <div className="mt-4 h-24 w-full animate-pulse rounded bg-slate-100" />
          <div className="mt-8 aspect-video animate-pulse rounded-2xl bg-slate-100" />
        </div>
      </article>
    );
  }

  if (!post) return null;

  return (
    <>
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog/" className="hover:text-brand-600">
              Blog
            </Link>
          </nav>
          <header className="mt-6">
            <p className="text-sm font-medium text-slate-400">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.readingTime ? ` · ${post.readingTime}` : ''}
              {post.author ? ` · ${post.author}` : ''}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{post.description}</p>
          </header>

          <ImagePlaceholder src={post.image} alt={post.imageAlt} label="Article cover image" className="mt-8" />

          <div className="mt-10">
            <BlogContent post={post} />
          </div>

          <aside className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <h2 className="text-base font-bold text-slate-900">Evaluating EHR platforms?</h2>
            <p className="mt-2 text-sm text-slate-600">
              See how Venqora EHR handles scheduling, charting, billing and patient engagement in one
              system —{' '}
              <Link href="/contact/" className="font-semibold text-brand-600 hover:text-brand-700">
                request a free demo
              </Link>
              .
            </p>
          </aside>

          {morePosts.length > 0 && (
            <nav className="mt-12 border-t border-slate-200 pt-8" aria-label="More articles">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                More from the blog
              </h2>
              <ul className="mt-4 space-y-2">
                {morePosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}/`} className="font-medium text-brand-600 hover:text-brand-700">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </article>

      <CtaSection />
    </>
  );
}
