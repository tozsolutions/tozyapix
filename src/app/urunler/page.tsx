import type { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCT_CATEGORIES } from '@/lib/data'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ürün Gruplarımız',
  description: 'Toz Yapı Teknolojileri ürün grupları: alüminyum doğrama, kapı sistemleri, pergola, kepenk, panjur, akıllı cam ve daha fazlası.',
}

export default function UrunlerPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, #C8A96E, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-4">Ürün Gruplarımız</div>
          <h1 className="font-display text-5xl font-bold text-white mb-4">Kapsamlı Yapı Teknolojisi Çözümleri</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            {PRODUCT_CATEGORIES.length} farklı ürün kategorisinde Avrupa standartlarında,
            CE belgeli ürünlerle her türlü yapı projenize çözüm sunuyoruz.
          </p>
          <nav className="flex items-center gap-2 mt-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-gold-400">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="text-white">Ürün Grupları</span>
          </nav>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <Link key={cat.id} href={`/urunler/${cat.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gold-400/50 transition-all">
              <div className="h-36 bg-gradient-to-br from-navy-800 to-navy-900 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-15"
                  style={{ backgroundImage: `radial-gradient(circle at ${(i % 4) * 33}% 50%, #C8A96E, transparent)` }} />
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-navy-800 group-hover:text-gold-600 transition-colors mb-2 leading-snug text-sm">{cat.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{cat.description}</p>
                <div className="space-y-1 mb-4">
                  {cat.subcategories.slice(0, 3).map(s => (
                    <div key={s.slug} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <div className="w-1 h-1 rounded-full bg-gold-500" />
                      {s.title}
                      {s.highlight && <span className="ml-auto text-[10px] px-1.5 py-0.5 bg-gold-500/10 text-gold-600 rounded-full font-medium">Öne Çıkan</span>}
                    </div>
                  ))}
                  {cat.subcategories.length > 3 && (
                    <div className="text-xs text-gray-400 pl-3">+{cat.subcategories.length - 3} daha</div>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-navy-800 group-hover:text-gold-600 transition-colors">
                  İncele <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
