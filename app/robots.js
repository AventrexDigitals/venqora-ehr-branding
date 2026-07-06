import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

// Explicitly welcomes search engines AND AI crawlers (GPTBot, ClaudeBot,
// PerplexityBot, etc.) so the site can be cited by AI assistants.
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/blog/article/'] },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
