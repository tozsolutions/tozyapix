import Link from 'next/link'
import { SITE_CONFIG, PRODUCT_CATEGORIES, WHATSAPP_URL } from '@/lib/data'
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()
  const mainCats = PRODUCT_CATEGORIES.slice(0, 8)

  return (
    <footer className="bg-dark text-white">
      {/* CTA band */}
      <div className="border-b border-white/8" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-1">Ücretsiz Keşif Randevusu</h3>
            <p className="text-white/50 text-sm">Uzman ekibimiz 48 saat içinde sizinle iletişime geçer</p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center shrink-0">
            <a href={WHATSAPP_URL('Merhaba! Ücretsiz keşif ve teklif almak istiyorum.')}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all text-sm">
              <MessageCircle size={16} /> WhatsApp ile Yaz
            </a>
            <Link href="/iletisim"
              className="flex items-center gap-2 px-5 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all text-sm shadow-[0_8px_32px_rgba(0,102,255,0.28)]">
              Teklif Formu
            </Link>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-display font-bold text-lg">T</div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">TOZ YAPI</div>
                <div className="text-[10px] text-white/40 tracking-[0.18em] uppercase">Teknolojileri</div>
              </div>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              2006&apos;dan bu yana Ankara merkezli yapı teknolojileri firması.
              18 yıllık tecrübe, 500+ proje, 984+ mutlu müşteri.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2.5 text-white/50 hover:text-accent transition-colors">
                <Phone size={14} className="text-primary shrink-0" /> {SITE_CONFIG.phoneFormatted}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2.5 text-white/50 hover:text-accent transition-colors">
                <Mail size={14} className="text-primary shrink-0" /> {SITE_CONFIG.email}
              </a>
              <div className="flex items-start gap-2.5 text-white/50">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.addressFull}</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50">
                <Clock size={14} className="text-primary shrink-0" />
                <span>Pzt–Cum 09:00–17:00</span>
              </div>
            </div>
            <div className="mt-5 flex gap-2.5">
              <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/6 hover:bg-primary flex items-center justify-center transition-all border border-white/8">
                <Instagram size={15} />
              </a>
              <a href={WHATSAPP_URL()} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/6 hover:bg-green-600 flex items-center justify-center transition-all border border-white/8">
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.14em] mb-5">Ürün Grupları</h4>
            <ul className="space-y-2">
              {mainCats.map(cat => (
                <li key={cat.id}>
                  <Link href={`/urunler/${cat.slug}`}
                    className="flex items-center gap-2 text-sm text-white/45 hover:text-accent transition-colors">
                    <span className="text-xs">{cat.icon}</span> {cat.shortTitle}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/urunler" className="text-sm text-primary font-bold hover:text-accent transition-colors">
                  Tümünü Gör →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.14em] mb-5">Kurumsal</h4>
            <ul className="space-y-2 mb-7">
              {[
                { href: '/hakkimizda',          label: 'Hakkımızda' },
                { href: '/referanslar',          label: 'Referanslar' },
                { href: '/is-ortaklari',         label: 'İş Ortakları' },
                { href: '/blog',                 label: 'Blog & Makaleler' },
                { href: '/katalog',              label: 'Ürün Katalogları' },
                { href: '/sss',                  label: 'Sıkça Sorulan Sorular' },
                { href: '/iletisim',             label: 'İletişim' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/45 hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.14em] mb-4">Teknik</h4>
            <ul className="space-y-2">
              {[
                { href: '/bim-kutuphanesi',       label: 'BIM Kütüphanesi' },
                { href: '/hesaplama-araclari',     label: 'Hesaplama Araçları' },
                { href: '/katalog',                label: 'Teknik Dökümanlar' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/45 hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cert tiles + hours */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.14em] mb-5">Güven & Kalite</h4>
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {[
                { label: 'CE Sertifikalı', sub: 'Ürünler' },
                { label: '20 Yıl',         sub: 'Garanti' },
                { label: 'ISO 9001',       sub: 'Kalite Sistemi' },
                { label: 'Türkiye Geneli', sub: 'Servis Ağı' },
              ].map(c => (
                <div key={c.label} className="bg-white/4 border border-white/8 rounded-xl p-3 text-center">
                  <div className="font-display font-bold text-primary text-sm">{c.label}</div>
                  <div className="text-[11px] text-white/35 mt-0.5">{c.sub}</div>
                </div>
              ))}
            </div>
            <div className="bg-white/4 border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-primary" />
                <span className="font-bold text-white text-xs uppercase tracking-wider">Çalışma Saatleri</span>
              </div>
              <div className="space-y-1.5">
                {SITE_CONFIG.workingHours.map(h => (
                  <div key={h.days} className="flex items-center justify-between text-xs">
                    <span className="text-white/40">{h.days}</span>
                    <span className={`font-semibold ${h.open ? 'text-accent' : 'text-white/25'}`}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© {year} {SITE_CONFIG.name}. Tüm hakları saklıdır.</span>
          <div className="flex gap-4">
            <Link href="/gizlilik-politikasi" className="hover:text-white/60 transition-colors">Gizlilik</Link>
            <Link href="/kullanim-kosullari"   className="hover:text-white/60 transition-colors">Kullanım Koşulları</Link>
          </div>
          <span>Yenimahalle / Ankara, Türkiye</span>
        </div>
      </div>
    </footer>
  )
}
