import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PRODUCT_CATEGORIES, WHATSAPP_URL, SITE_CONFIG } from '@/lib/data'
import { ChevronRight, Download, Phone, MessageCircle, CheckCircle2, ArrowRight, FileText, Box } from 'lucide-react'

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cat = PRODUCT_CATEGORIES.find(c => c.slug === slug)
  if (!cat) return {}
  return {
    title: `${cat.title} | Toz Yapı Teknolojileri Ankara`,
    description: `${cat.description} — Ankara ve Türkiye geneli profesyonel montaj. Ücretsiz keşif ve teknik teklif: ${SITE_CONFIG.phoneFormatted}`,
  }
}

const FORMAT_META: Record<string, { label: string; ext: string; color: string }> = {
  katalog:   { label: 'Teknik Katalog',   ext: 'PDF',  color: 'bg-red-600'    },
  bim:       { label: 'BIM Dosyası',      ext: '.rfa', color: 'bg-blue-600'   },
  cad:       { label: 'CAD Çizimi',       ext: '.dwg', color: 'bg-orange-500' },
  ifc:       { label: 'IFC Dosyası',      ext: '.ifc', color: 'bg-green-700'  },
  sertifika: { label: 'CE Sertifikası',   ext: 'PDF',  color: 'bg-dark'       },
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = PRODUCT_CATEGORIES.find(c => c.slug === slug)
  if (!cat) notFound()

  // Only show downloads that exist for this product
  const availableDownloads = Object.entries(cat.downloads)
    .filter(([, available]) => available)
    .map(([key]) => ({ key, ...FORMAT_META[key] }))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: cat.title,
    description: cat.description,
    brand: { '@type': 'Brand', name: 'Toz Yapı Teknolojileri' },
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'TRY', seller: { '@type': 'Organization', name: 'Toz Yapı Teknolojileri' } },
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <div className="bg-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(0,102,255,0.12), transparent)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6 font-medium">
            <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
            <ChevronRight size={12} />
            <Link href="/urunler" className="hover:text-accent transition-colors">Ürünler</Link>
            <ChevronRight size={12} />
            <span className="text-white">{cat.shortTitle}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">{cat.icon}</div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">{cat.title}</h1>
          </div>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">{cat.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">

            {/* Subcategories */}
            <div>
              <div className="section-label">Alt Kategoriler</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {cat.subcategories.map(sub => (
                  <div key={sub.slug}
                    className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="font-semibold text-dark text-sm group-hover:text-primary transition-colors">{sub.title}</span>
                    </div>
                    {sub.highlight && (
                      <span className="text-[10px] px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-full font-bold shrink-0 ml-2">Öne Çıkan</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical specs */}
            <div>
              <div className="section-label">Teknik Özellikler</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {cat.specs.map(spec => (
                  <div key={spec} className="flex items-center gap-3 p-4 bg-surface border border-gray-100 rounded-xl">
                    <CheckCircle2 size={17} className="text-primary shrink-0" />
                    <span className="text-sm text-dark font-semibold">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-dark mb-4">Ürün Hakkında</h2>
              <div className="prose-content space-y-4">
                <p>
                  <strong>{cat.title}</strong> kategorisinde Toz Yapı Teknolojileri olarak Avrupa mühendislik
                  standartlarına uygun, CE belgeli ürünler sunmaktayız. 18 yıllık deneyimimiz ve 500+ proje
                  referansıyla her proje için en uygun çözümü tasarlıyor ve uyguluyoruz.
                </p>
                <p>
                  Ankara ve çevresi için 24–48 saat içinde ücretsiz keşif yapılmakta olup tüm Türkiye&apos;ye
                  profesyonel montaj hizmeti verilmektedir. Teknik destek, yedek parça ve bakım hizmetleri
                  garanti kapsamında sunulmaktadır.
                </p>
                <p>
                  Proje bazlı teknik şartname, BIM dosyaları ve CE sertifikaları talep üzerine ücretsiz iletilmektedir.
                </p>
              </div>
            </div>

            {/* Downloads — only show existing ones */}
            {availableDownloads.length > 0 && (
              <div>
                <div className="section-label">Teknik İndirmeler</div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {availableDownloads.map(f => (
                    <a key={f.key}
                      href={WHATSAPP_URL(`${cat.title} için ${f.label} dosyası talep ediyorum.`)}
                      target="_blank" rel="noopener noreferrer"
                      className="flex flex-col gap-2 p-4 bg-dark hover:bg-dark/80 rounded-xl transition-all group text-left">
                      <Download size={19} className="text-accent" />
                      <div className="text-white font-bold text-sm">{f.label}</div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] px-1.5 py-0.5 ${f.color} rounded text-white font-bold`}>{f.ext}</span>
                        <span className="text-[11px] text-white/40">Talep üzerine</span>
                      </div>
                    </a>
                  ))}
                  {/* "Talep et" for unavailable types */}
                  <a href={WHATSAPP_URL(`${cat.title} için teknik doküman talep ediyorum.`)}
                    target="_blank" rel="noopener noreferrer"
                    className="flex flex-col gap-2 p-4 bg-surface border border-gray-100 rounded-xl hover:border-primary/30 transition-all col-span-full sm:col-span-1">
                    <FileText size={19} className="text-primary" />
                    <div className="text-dark font-bold text-sm">Diğer Format Talebi</div>
                    <div className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                      İhtiyacınız olan formatta doküman almak için WhatsApp&apos;tan talep edin.
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* CTA card */}
            <div className="bg-dark rounded-2xl p-6 text-white sticky top-24">
              <h3 className="font-display text-xl font-bold mb-2">Teklif Alın</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                Ücretsiz keşif, teknik ölçüm ve 48 saat içinde detaylı teklif.
              </p>
              <div className="space-y-3">
                <a href={WHATSAPP_URL(`Merhaba! ${cat.title} hakkında bilgi ve teklif almak istiyorum.`)}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all text-sm">
                  <MessageCircle size={16} /> WhatsApp&apos;tan Sor
                </a>
                <a href={`tel:${SITE_CONFIG.phone}`}
                  className="btn-primary w-full justify-center text-sm py-3">
                  <Phone size={16} /> {SITE_CONFIG.phoneFormatted}
                </a>
                <Link href="/iletisim"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-white/15 hover:border-white/40 text-white font-bold rounded-xl transition-all text-sm">
                  Teklif Formu <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5 text-xs text-white/40">
                {['48 saat içinde yanıt', 'Ücretsiz keşif & ölçüm', 'Türkiye geneli montaj', 'CE belgeli ürünler'].map(v => (
                  <div key={v} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-accent" /> {v}
                  </div>
                ))}
              </div>
            </div>

            {/* Related categories */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h4 className="font-bold text-dark text-sm mb-4 flex items-center gap-2">
                <Box size={14} className="text-primary" /> Diğer Ürün Grupları
              </h4>
              <div className="space-y-1.5">
                {PRODUCT_CATEGORIES.filter(c => c.id !== cat.id).slice(0, 7).map(c => (
                  <Link key={c.id} href={`/urunler/${c.slug}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary py-1.5 border-b border-gray-50 last:border-0 transition-colors">
                    <span>{c.icon}</span> {c.shortTitle}
                    <ChevronRight size={11} className="ml-auto text-gray-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
