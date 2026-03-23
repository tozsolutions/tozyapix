import { SITE_CONFIG } from '@/lib/data'

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/admin/', '/api/'] },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  }
}
