import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, PRODUCT_CATEGORIES, STATS, BLOG_POSTS, PARTNERS, REFERENCE_SECTORS, WHATSAPP_URL } from '@/lib/data'
import { Phone, ChevronRight, Download, Shield, Zap, Award, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Toz Yapı Teknolojileri | Alüminyum Doğrama, Kapı, Pergola — Ankara',
  description: '18 yıllık deneyimle 500+ proje. Alüminyum doğrama, otomatik kapılar, pergola, kepenk, panjur, akıllı cam. Ücretsiz keşif: 0536 773 14 04',
}

export default function HomePage() {
  const featuredCats = PRODUCT_CATEGORIES.slice(0, 6)

  return (
    <div className="overflow-hidden">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen bg-dark flex items-center overflow-hidden">

        {/* Grid background */}
        <div className="absolute inset-0 grid-bg" />

        {/* Blue radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(0,102,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 70% at 90% 80%, rgba(0,212,255,0.10) 0%, transparent 60%)',
          }} />

        {/* Geometric accent lines */}
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06] pointer-events-none hidden lg:block"
          viewBox="0 0 500 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="60" y1="0" x2="60" y2="900" stroke="#00D4FF" strokeWidth="1"/>
          <line x1="160" y1="0" x2="160" y2="900" stroke="#00D4FF" strokeWidth="0.5"/>
          <line x1="300" y1="0" x2="300" y2="900" stroke="#00D4FF" strokeWidth="0.5"/>
          <line x1="420" y1="0" x2="420" y2="900" stroke="#00D4FF" strokeWidth="0.5"/>
          <rect x="80"  y="120" width="160" height="240" stroke="#0066FF" strokeWidth="0.8" fill="none"/>
          <rect x="220" y="220" width="120" height="180" stroke="#00D4FF" strokeWidth="0.6" fill="none"/>
          <rect x="90"  y="420" width="100" height="160" stroke="#0066FF" strokeWidth="0.6" fill="none"/>
          <rect x="260" y="460" width="140" height="200" stroke="#00D4FF" strokeWidth="0.6" fill="none"/>
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 py-36 lg:py-44 w-full">
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/8 text-accent text-xs font-semibold tracking-widest uppercase mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              18 Yıllık Uzmanlık · Ankara
            </div>

            {/* Headline */}
            <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-[1.05] mb-6">
              Yapı Teknolojisinde<br />
              <span className="gradient-text">Kurumsal Güven</span>
            </h1>

            <p className="text-[var(--text-on-dark)] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl font-light">
              Alüminyum doğramadan otomatik kapılara, pergoladan akıllı cam sistemlerine —
              <strong className="font-semibold text-white"> 500+ proje</strong> deneyimiyle
              Türkiye genelinde profesyonel montaj ve teknik destek.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4 mb-16">
              <a href={WHATSAPP_URL('Merhaba! Ücretsiz keşif ve teklif almak istiyorum.')}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary text-base px-7 py-4">
                Ücretsiz Keşif Talep Et
                <ArrowRight size={18} />
              </a>
              <Link href="/urunler" className="btn-outline text-base px-7 py-4">
                Ürün Grupları
                <ChevronRight size={18} />
              </Link>
              <a href={`tel:${SITE_CONFIG.phone}`} className="btn-outline text-base px-7 py-4">
                <Phone size={16} />
                {SITE_CONFIG.phoneFormatted}
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map(s => (
                <div key={s.label} className="border-l-2 border-primary/40 pl-4">
                  <div className="stat-num">{s.value}{s.suffix}</div>
                  <div className="text-[var(--text-dim)] text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore CTA */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <a href="#neden-toz-yapi" className="explore-cta">
            <span style={{ fontSize: '12px' }}>Keşfedin</span>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.55))' }}>
              <circle cx="18" cy="18" r="17" stroke="rgba(0,212,255,0.35)" strokeWidth="1"/>
              <path d="M12 16L18 22L24 16" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY TOZ YAPI
      ══════════════════════════════════════ */}
      <section id="neden-toz-yapi" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">Neden Toz Yapı?</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark mb-5">
                18 Yıl, 500+ Proje,<br />Tek Kalite Standardı
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                2006&apos;dan bu yana Ankara merkezli olarak kurumsal ve konut projelerinde yapı teknolojileri
                alanında çözüm üretiyoruz. Avrupa mühendislik standartları, CE belgeli ürünler ve 20 yıl garantiyle.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield,       title: '20 Yıl Garanti',    desc: 'Paslanmaz menteşe ve yapısal bileşenler' },
                  { icon: Zap,          title: 'Hızlı Montaj',      desc: 'Tekil ürünlerde 1–3 iş günü' },
                  { icon: Award,        title: 'CE Sertifikalı',    desc: 'Avrupa mühendislik standartları' },
                  { icon: CheckCircle2, title: 'Türkiye Geneli',    desc: '7/24 teknik destek hizmeti' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl hover:bg-surface transition-all group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-dark group-hover:bg-primary flex items-center justify-center text-white shrink-0 transition-colors">
                      <item.icon size={19} />
                    </div>
                    <div>
                      <div className="font-bold text-dark text-sm">{item.title}</div>
                      <div className="text-[var(--text-muted)] text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature tiles */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '250 km/s', label: 'Kasırga Dayanımı', sub: 'Test edilmiş rüzgar direnci',   dark: true  },
                { value: 'UW 0.9',   label: 'W/m²K Yalıtım',   sub: 'Süper ısı yalıtım değeri',      dark: false },
                { value: '%25',      label: 'Enerji Tasarrufu', sub: 'Yıllık faturada azalma',         dark: false },
                { value: '6063T6',   label: 'Alüminyum Profil', sub: 'Termal kırılımlı sistem',        dark: true  },
              ].map(t => (
                <div key={t.label}
                  className={`rounded-2xl p-6 flex flex-col justify-between min-h-[140px] ${
                    t.dark
                      ? 'bg-dark text-white'
                      : 'bg-primary text-white'
                  }`}>
                  <div className="font-display font-bold text-3xl">{t.value}</div>
                  <div>
                    <div className="font-bold text-sm opacity-90 mt-auto">{t.label}</div>
                    <div className="text-xs opacity-55 mt-0.5">{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCTS
      ══════════════════════════════════════ */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Ürün Grupları</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-dark mb-4">
              50+ Kategoride Yapı Teknolojisi
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base">
              Alüminyum, PVC ve ahşap doğramadan otomatik kapılara, pergoladan akıllı cam sistemlerine
              kadar kapsamlı çözümler.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCats.map(cat => (
              <Link key={cat.id} href={`/urunler/${cat.slug}`}
                className="product-card card-base group overflow-hidden">
                <div className="h-44 bg-dark relative overflow-hidden flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2D2D44 100%)' }}>
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 80% 80% at 30% 50%, rgba(0,102,255,0.15), transparent)' }} />
                  <div className="text-6xl product-card-img select-none">{cat.icon}</div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <ChevronRight size={14} className="text-primary group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-dark text-[17px] mb-1.5 group-hover:text-primary transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.specs.slice(0, 2).map(s => (
                      <span key={s} className="text-[11px] px-2.5 py-1 bg-surface border border-gray-200 rounded-full text-[var(--text-secondary)] font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/urunler"
              className="btn-primary inline-flex text-base px-8 py-4">
              Tüm Ürün Grupları ({PRODUCT_CATEGORIES.length} Kategori)
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BIM & TECHNICAL
      ══════════════════════════════════════ */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(0,102,255,0.12), transparent)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">Teknik Altyapı</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-5">
                BIM Kütüphanesi &amp;<br />Teknik Dökümanlar
              </h2>
              <p className="text-[var(--text-on-dark)] leading-relaxed mb-8">
                Mimar ve mühendisler için Revit, IFC, DWG ve STEP formatlarında tüm ürünlerimizin
                teknik dosyaları ücretsiz. CE belgeleri ve teknik veri sayfaları talep üzerine anında iletilir.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Revit (.rfa) — 3D BIM modelleri',
                  'IFC — Open BIM formatı',
                  'DWG — AutoCAD çizimleri',
                  'STEP — 3D CAD format',
                  'CE Belgeleri ve Test Raporları',
                  'Teknik Veri Sayfaları (TDS)',
                ].map(f => (
                  <div key={f} className="flex items-center gap-3 text-[var(--text-on-dark)] text-sm">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/bim-kutuphanesi" className="btn-primary inline-flex">
                <Download size={17} /> BIM Kütüphanesine Git
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Hesaplama Araçları', desc: 'Güneş açısı, rüzgar yükü, enerji simülasyonu', href: '/hesaplama-araclari', icon: '🧮' },
                { title: 'Ürün Katalogları',   desc: 'Tüm kategoriler için PDF kataloglar',          href: '/katalog',           icon: '📚' },
                { title: 'BIM Kütüphanesi',    desc: 'Revit, IFC, DWG formatlarında ücretsiz',       href: '/bim-kutuphanesi',   icon: '🏗️' },
                { title: 'Teknik Destek',       desc: 'Uzman ekibimize anında ulaşın',                href: '/iletisim',          icon: '🔧' },
              ].map(item => (
                <Link key={item.title} href={item.href} className="card-dark group p-5">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-white text-sm mb-1.5 group-hover:text-accent transition-colors">{item.title}</h4>
                  <p className="text-[var(--text-dim)] text-xs leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          REFERENCE SECTORS
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Referanslar</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-dark mb-3">
              984+ Mutlu Müşteri, 263+ Proje
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Otellerden hastanelere, kamu binalarından konut projelerine kadar her sektörde.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {REFERENCE_SECTORS.map(s => (
              <div key={s.label}
                className={`rounded-2xl p-5 text-center border transition-all ${
                  s.highlight
                    ? 'bg-primary text-white border-primary'
                    : 'bg-surface border-gray-200 hover:border-primary/30'
                }`}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className={`font-display font-bold text-2xl ${s.highlight ? 'text-white' : 'text-dark'}`}>
                  {s.count}{typeof s.count === 'number' && s.count < 100 ? '' : ''}
                </div>
                <div className={`text-xs font-medium mt-1 ${s.highlight ? 'text-white/80' : 'text-[var(--text-muted)]'}`}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/referanslar" className="btn-ghost inline-flex">
              Tüm Referansları Görüntüle <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOG
      ══════════════════════════════════════ */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label">Blog & Teknik Makaleler</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-dark">
                Sektörel Bilgi &amp; Rehberler
              </h2>
            </div>
            <Link href="/blog"
              className="hidden sm:flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-2.5 transition-all">
              Tüm Yazılar <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.slice(0, 3).map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`}
                className="card-base group overflow-hidden">
                <div className="h-44 bg-dark flex items-center justify-center relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1A1A2E, #2D2D44)' }}>
                  <div className="text-white/10 font-display text-[7rem] font-bold select-none leading-none">
                    {post.category[0]}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] px-2.5 py-1 bg-primary text-white font-bold rounded-full tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-2.5">
                    <span>{post.date}</span> · <span>{post.readTime} okuma</span>
                  </div>
                  <h3 className="font-display font-bold text-dark text-[17px] mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PARTNER CAROUSEL
      ══════════════════════════════════════ */}
      <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Çalıştığımız Markalar
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="partners-track flex items-center gap-6 w-max">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} className="partner-logo-item flex items-center justify-center w-44 h-20 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all shrink-0 px-6 cursor-default">
                <span className="font-display font-bold text-base text-gray-400 group-hover:text-gray-800 transition-colors">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT CTA
      ══════════════════════════════════════ */}
      <section className="py-28 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,102,255,0.15), transparent)' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="section-label justify-center mb-6">Proje Başlat</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold text-white mb-5 leading-tight">
            Projeniz İçin<br /><span className="gradient-text">Hemen Harekete Geçin</span>
          </h2>
          <p className="text-[var(--text-on-dark)] text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Ücretsiz keşif, teknik ölçüm ve detaylı teklif için ekibimizle iletişime geçin.
            <strong className="font-semibold text-white"> 48 saat içinde yanıt garantisi.</strong>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WHATSAPP_URL('Merhaba! Proje için bilgi ve teklif almak istiyorum.')}
              target="_blank" rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4">
              <MessageCircle size={18} /> WhatsApp ile Ulaş
            </a>
            <Link href="/iletisim" className="btn-outline text-base px-8 py-4">
              Teklif Formu Doldur
            </Link>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-outline text-base px-8 py-4">
              <Phone size={16} /> {SITE_CONFIG.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
