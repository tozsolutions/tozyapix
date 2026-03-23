import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ, WHATSAPP_URL } from '@/lib/data'
import { ChevronRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular (S.S.S)',
  description: 'Toz Yapı Teknolojileri hakkında en sık sorulan sorular ve yanıtları.',
}

export default function SSSPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, #C8A96E, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-400">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="text-white">S.S.S</span>
          </nav>
          <h1 className="font-display text-5xl font-bold text-white mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-gray-300 text-lg max-w-xl">Müşterilerimizin en çok merak ettiği sorular ve uzman yanıtları</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gold-400/60 transition-all">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-semibold text-navy-800 pr-4 text-sm sm:text-base leading-snug">{item.q}</h3>
                <div className="w-7 h-7 rounded-full border border-gray-300 group-open:border-gold-500 flex items-center justify-center shrink-0 transition-all">
                  <ChevronRight size={14} className="text-gray-400 group-open:text-gold-500 group-open:rotate-90 transition-transform" />
                </div>
              </summary>
              <div className="px-6 pb-6">
                <div className="h-px bg-gray-100 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-14 bg-navy-800 rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Sorunuzu Bulamadınız mı?</h2>
          <p className="text-gray-300 text-sm mb-6">Uzman ekibimiz sorularınızı yanıtlamak için hazır.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={WHATSAPP_URL('Merhaba! Bir sorum var.')} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl text-sm transition-all">
              <MessageCircle size={16} /> WhatsApp&apos;tan Sor
            </a>
            <Link href="/iletisim"
              className="flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-xl text-sm transition-all">
              İletişim Formu
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
