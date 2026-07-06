import BlogArticle from '@/components/BlogArticle';
import JsonLd from '@/components/JsonLd';
import { getBlogPost } from '@/lib/aventrex-blog';
import { blogBreadcrumbJsonLd, blogPostingJsonLd } from '@/lib/blog-seo';
import { POSTS } from '@/lib/posts';
import { absoluteUrl, SITE_NAME } from '@/lib/site';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) {
    return {
      title: 'Article not found',
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/blog/${post.slug}/`;
  const ogImages = post.image
    ? [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt || post.title }]
    : undefined;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: absoluteUrl(canonical),
      publishedTime: post.date,
      modifiedTime: post.date,
      siteName: SITE_NAME,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  return (
    <>
      {post ? (
        <>
          <JsonLd data={blogPostingJsonLd(post)} />
          <JsonLd data={blogBreadcrumbJsonLd(post)} />
        </>
      ) : null}
      <BlogArticle slug={slug} initialPost={post} />
    </>
  );
}
