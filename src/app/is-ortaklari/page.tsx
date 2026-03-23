import type { Metadata } from 'next'
import Link from 'next/link'
import { PARTNERS } from '@/lib/data'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İş Ortaklarımız',
  description: 'Schüco, Roto, Winkhaus, FAAC, Nice ve daha fazlası. Toz Yapı Teknolojileri iş ortakları.',
}

export default function IsOrtaklariPage() {
  return (
    <div>
      <div className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, #C8A96E, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-400">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="text-white">İş Ortaklarımız</span>
          </nav>
          <h1 className="font-display text-5xl font-bold text-white mb-4">İş Ortaklarımız</h1>
          <p className="text-gray-300 text-lg max-w-xl">Dünya markalarının güvencesiyle Türkiye&apos;de kaliteli yapı çözümleri</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold text-navy-800 mb-3">Güvenilir Marka Ortaklıkları</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dünya&apos;nın önde gelen yapı teknolojileri markalarının Türkiye yetkili satıcısı ve uygulayıcısı olarak
            en kaliteli ürünleri sizlerle buluşturuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-16">
          {PARTNERS.map(p => (
            <div key={p.name}
              className="flex flex-col items-center justify-center h-28 rounded-2xl bg-white border border-gray-200 hover:border-gold-400/60 hover:shadow-lg group transition-all p-4 cursor-pointer">
              <div className="font-bold text-lg text-gray-300 group-hover:text-navy-800 transition-colors">{p.name}</div>
            </div>
          ))}
        </div>

        {/* Partner benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Yetkili Satıcı', icon: '🏆', desc: 'Dünya markalarının Türkiye yetkili satıcısı olarak orijinal ürün ve garantisi sunuyoruz.' },
            { title: 'Teknik Destek', icon: '🔧', desc: 'Tüm partner markalar için sertifikalı teknik ekibimizle montaj ve bakım hizmeti.' },
            { title: 'Yedek Parça', icon: '⚙️', desc: 'Partner markalar için orijinal yedek parça stoku. Hızlı temin ve teslimat garantisi.' },
          ].map(b => (
            <div key={b.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="font-display font-bold text-navy-800 text-xl mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Become partner */}
        <div className="bg-navy-800 rounded-2xl p-10 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-3">Biz Ortağınız Olalım</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">Proje bazlı iş birliği için mimar, mühendis ve müteahhit firmalarla çalışıyoruz.</p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all">
            İş Birliği Teklifi
          </Link>
        </div>
      </div>
    </div>
  )
}
