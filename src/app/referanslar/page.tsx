import type { Metadata } from 'next'
import Link from 'next/link'
import { REFERENCES, REFERENCE_SECTORS, WHATSAPP_URL } from '@/lib/data'
import { ChevronRight, ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Referanslar | Toz Yapı Teknolojileri',
  description: '500+ tamamlanan proje. Hastane, kamu binaları, AVM, otel ve konut projelerinde 18 yıllık deneyim.',
}

export default function ReferanslarPage() {
  const totalProjects = REFERENCE_SECTORS.reduce((acc, s) => {
    const n = typeof s.count === 'string' ? 100 : s.count
    return acc + n
  }, 0)

  return (
    <div>
      {/* Hero */}
      <div className="bg-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(0,102,255,0.12), transparent)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6 font-medium">
            <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
            <ChevronRight size={12} /> <span className="text-white">Referanslar</span>
          </nav>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-4">
            Referanslarımız
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            18 yılda <strong className="text-accent font-bold">500+</strong> tamamlanan proje.
            Türkiye&apos;nin önde gelen kurumlarında güvenilir yapı teknolojisi çözümleri.
          </p>
        </div>
      </div>

      {/* Sector stats band */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {REFERENCE_SECTORS.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-display font-bold text-white text-3xl">{s.count}</div>
                <div className="text-white/70 text-xs font-medium mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured projects */}
        <div className="mb-14">
          <div className="section-label">Öne Çıkan Projeler</div>
          <h2 className="font-display text-3xl font-bold text-dark mb-8">Seçilmiş Referanslarımız</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REFERENCES.map(ref => (
              <div key={ref.name}
                className="card-base p-6 group cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-dark group-hover:bg-primary flex items-center justify-center transition-colors shrink-0">
                    <span className="text-lg">
                      {REFERENCE_SECTORS.find(s => s.label === ref.type)?.icon ?? '🏢'}
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 bg-primary/10 text-primary font-bold rounded-full">{ref.type}</span>
                </div>
                <h3 className="font-display font-bold text-dark text-lg mb-1 group-hover:text-primary transition-colors leading-tight">{ref.name}</h3>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-3">
                  <MapPin size={11} /> {ref.city}
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{ref.products}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sector breakdown */}
        <div className="mb-14">
          <div className="section-label">Sektör Dağılımı</div>
          <h2 className="font-display text-3xl font-bold text-dark mb-8">Her Sektörde Güvenilir Çözüm</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REFERENCE_SECTORS.map(s => (
              <div key={s.label} className="card-base p-6 flex items-center gap-5">
                <div className="text-4xl shrink-0">{s.icon}</div>
                <div>
                  <div className="font-display font-bold text-dark text-3xl leading-none">{s.count}</div>
                  <div className="font-bold text-dark text-sm mt-1">{s.label}</div>
                  <div className="text-xs text-[var(--text-muted)] mt-0.5">Tamamlanan proje</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Siz de Referanslarımız Arasında Yer Alın
            </h2>
            <p className="text-white/50 mb-6 max-w-xl mx-auto">
              Her ölçekte, her sektörde — ücretsiz keşif ve teknik teklif hizmeti.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={WHATSAPP_URL('Merhaba! Proje için teklif almak istiyorum.')}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary inline-flex">
                <ArrowRight size={16} /> Proje Başlat
              </a>
              <Link href="/iletisim" className="btn-outline inline-flex">Teklif Formu</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
