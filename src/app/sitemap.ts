import { SITE_CONFIG, PRODUCT_CATEGORIES, BLOG_POSTS } from '@/lib/data'

export default function sitemap() {
  const base = SITE_CONFIG.url
  const now = new Date().toISOString()

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${base}/hakkimizda`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/urunler`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/referanslar`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/katalog`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/is-ortaklari`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/bim-kutuphanesi`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/hesaplama-araclari`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/sss`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/iletisim`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  const productPages = PRODUCT_CATEGORIES.map(c => ({
    url: `${base}/urunler/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const blogPages = BLOG_POSTS.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...productPages, ...blogPages]
}
