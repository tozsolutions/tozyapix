import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS, WHATSAPP_URL } from '@/lib/data'
import { ChevronRight, Clock, Tag, ArrowLeft, MessageCircle } from 'lucide-react'

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

const BLOG_CONTENT: Record<string, string[]> = {
  'aluminyum-dograma-secimi': [
    'Alüminyum doğrama seçimi, bir yapının hem enerji performansı hem de estetik kalitesi için kritik öneme sahiptir. Doğru seçim yapılmadığında ısı kaybı, ses geçişi ve uzun vadede yüksek bakım maliyetleri kaçınılmaz olur.',
    '**1. Profil Kalitesi (6063T6)**\n6063T6 alaşımlı alüminyum profiller, standard 6063 profillerine göre daha yüksek dayanım ve korozyon direnci sunar. Bu alaşımı mutlaka talep edin.',
    '**2. Termal Kırılım Değeri**\nIso-band genişliği doğrudan ısı yalıtımını etkiler. UW değeri 0.9 W/m²K veya altında olan sistemler "süper yalıtımlı" kategorisine girer.',
    '**3. Rüzgar Yükü Testi**\nBinanızın bulunduğu bölgenin rüzgar sınıfına göre profil seçimi yapılmalıdır. Ankara ve yüksek katlı binalar için min. C4 sınıfı profil tercih edilmelidir.',
    '**4. Cam Paketi**\nÇift cam sistemlerinde 4-20-4mm (argon dolgulu) minimum standart olmalıdır. Üçlü cam (4-16-4-16-4) ise maksimum enerji tasarrufu için idealdir.',
    '**5. Menteşe ve Donanım Kalitesi**\nPaslanmaz çelik menteşeler 20 yıl ömür sunarken, standard çelik menteşeler 5-7 yılda pas tutmaya başlar. Uzun vadeli maliyet hesabı yapın.',
    '**Toz Yapı Yaklaşımı**\nTüm alüminyum doğrama sistemlerimiz 6063T6 profil ile üretilmekte, UW 0.9 W/m²K yalıtım değeri sağlamaktadır. 250 km/s kasırga dayanımı testinden geçmiş ürünlerimiz hakkında ücretsiz teknik danışmanlık için bizi arayın.',
  ],
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) notFound()

  const content = BLOG_CONTENT[params.slug] || [
    'Bu makale yapı teknolojileri konusunda uzman ekibimiz tarafından hazırlanmıştır.',
    'Konuyla ilgili detaylı teknik bilgi ve ücretsiz danışmanlık için WhatsApp üzerinden veya telefonla bize ulaşabilirsiniz.',
    'Toz Yapı Teknolojileri olarak 20 yıllık deneyimimizle her türlü yapı projenizde yanınızdayız.',
  ]

  const related = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'Toz Yapı Teknolojileri' },
    datePublished: post.date,
    keywords: post.tags.join(', '),
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 40% 50%, #C8A96E, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-400">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-gold-400">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white truncate">{post.title}</span>
          </nav>
          <span className="inline-block text-xs px-2.5 py-1 bg-gold-500 text-navy-900 font-semibold rounded-full mb-4">{post.category}</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={13} />{post.readTime} okuma</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy-800 mb-8 transition-colors">
              <ArrowLeft size={14} /> Tüm Yazılar
            </Link>

            <div className="prose prose-gray max-w-none">
              {content.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-5 text-base">
                  {para.split('**').map((part, j) =>
                    j % 2 === 1 ? <strong key={j} className="text-navy-800">{part}</strong> : <span key={j}>{part}</span>
                  )}
                </p>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-sm px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-gray-600">
                    <Tag size={12} />{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related posts */}
            <div>
              <h3 className="font-display text-2xl font-bold text-navy-800 mb-6">İlgili Yazılar</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(p => (
                  <Link key={p.id} href={`/blog/${p.slug}`}
                    className="group bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-gold-400/60 transition-all">
                    <span className="text-xs px-2 py-0.5 bg-gold-500/10 text-gold-600 rounded-full font-medium">{p.category}</span>
                    <h4 className="font-semibold text-navy-800 text-sm mt-2 leading-snug group-hover:text-gold-600 transition-colors">{p.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-navy-800 rounded-2xl p-6 text-white sticky top-24">
              <h3 className="font-display text-lg font-bold mb-3">Uzmanımıza Sorun</h3>
              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                Bu konuyla ilgili sorularınız için uzman ekibimize ulaşın.
              </p>
              <a href={WHATSAPP_URL(`${post.title} hakkında bilgi almak istiyorum.`)}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl text-sm transition-all">
                <MessageCircle size={16} />
                WhatsApp&apos;tan Sor
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h4 className="font-semibold text-navy-800 mb-4 text-sm">Son Yazılar</h4>
              <div className="space-y-3">
                {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 4).map(p => (
                  <Link key={p.id} href={`/blog/${p.slug}`}
                    className="block text-sm text-gray-600 hover:text-gold-600 transition-colors py-2 border-b border-gray-50 last:border-0">
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
