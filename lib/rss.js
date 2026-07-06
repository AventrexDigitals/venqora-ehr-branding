import { absoluteUrl, SITE_NAME, SITE_URL } from './site.js';

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * @param {{ slug: string; title: string; description: string; date: string; author?: string | null }[]} posts
 */
export function buildBlogRss(posts, { siteName = SITE_NAME, siteUrl = SITE_URL, feedPath = '/feed.xml' } = {}) {
  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(absoluteUrl(`/blog/${post.slug}/`))}</link>
      <guid isPermaLink="true">${escapeXml(absoluteUrl(`/blog/${post.slug}/`))}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
      ${post.author ? `<author>${escapeXml(post.author)}</author>` : ''}
    </item>`,
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteName)} — Blog &amp; Resources</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(`EHR guides, resources, and product updates from ${siteName}.`)}</description>
    <language>en-us</language>
    <atom:link href="${escapeXml(absoluteUrl(feedPath))}" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}
