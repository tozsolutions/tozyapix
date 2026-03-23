import type { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCT_CATEGORIES } from '@/lib/data'
import { ChevronRight, Download, FileText, Book } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ürün Katalogları',
  description: 'Toz Yapı Teknolojileri ürün katalogları, teknik dokümantasyon ve BIM dosyaları.',
}

export default function KatalogPage() {
  return (
    <div>
      <div className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 40% 50%, #C8A96E, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-400">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="text-white">Katalog</span>
          </nav>
          <h1 className="font-display text-5xl font-bold text-white mb-4">Ürün Katalogları</h1>
          <p className="text-gray-300 text-lg max-w-xl">Tüm ürün gruplarımıza ait teknik kataloglar, sertifikalar ve BIM dosyaları</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main catalogs */}
        <div className="mb-14">
          <div className="section-divider mb-6" />
          <h2 className="font-display text-2xl font-bold text-navy-800 mb-8">Ana Kataloglar</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Genel Ürün Katalogu 2026', desc: 'Tüm ürün gruplarını içeren kapsamlı katalog', pages: 128, size: '18.4 MB', icon: Book },
              { title: 'Kapı Sistemleri Katalogu', desc: 'Garaj, otomatik, akustik ve yangın kapıları', pages: 48, size: '8.2 MB', icon: FileText },
              { title: 'Doğrama & Cephe Katalogu', desc: 'Alüminyum, PVC ve ahşap doğrama sistemleri', pages: 64, size: '11.6 MB', icon: FileText },
              { title: 'Pergola & Tente Katalogu', desc: 'Bioclimatic, rolling roof ve tente sistemleri', pages: 36, size: '7.1 MB', icon: FileText },
              { title: 'Kepenk & Panjur Katalogu', desc: 'Alüminyum, çelik, balistik kepenk sistemleri', pages: 52, size: '9.3 MB', icon: FileText },
              { title: 'Teknik Sertifikalar', desc: 'CE belgeleri, test raporları ve sertifikalar', pages: 24, size: '4.5 MB', icon: FileText },
            ].map(cat => (
              <div key={cat.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gold-400/60 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-navy-800 group-hover:bg-gold-500 flex items-center justify-center text-gold-400 group-hover:text-navy-900 mb-4 transition-all">
                  <cat.icon size={22} />
                </div>
                <h3 className="font-display font-bold text-navy-800 mb-1.5 text-base">{cat.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{cat.desc}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                  <span>{cat.pages} sayfa</span>
                  <span>·</span>
                  <span>{cat.size}</span>
                </div>
                <button className="flex items-center gap-2 w-full justify-center py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-navy-800 hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all group/btn">
                  <Download size={15} className="group-hover/btn:animate-bounce" />
                  PDF İndir
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Per-category downloads */}
        <div>
          <div className="section-divider mb-6" />
          <h2 className="font-display text-2xl font-bold text-navy-800 mb-8">Ürün Grubu Katalogları</h2>
          <div className="grid gap-3">
            {PRODUCT_CATEGORIES.map(cat => (
              <div key={cat.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-gold-400/60 hover:shadow-sm transition-all group">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <div>
                    <div className="font-semibold text-navy-800 text-sm group-hover:text-gold-600 transition-colors">{cat.title}</div>
                    <div className="text-xs text-gray-400">{cat.subcategories.length} alt kategori · PDF</div>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-navy-800 hover:text-gold-600 px-3 py-1.5 border border-gray-200 hover:border-gold-400/60 rounded-lg transition-all">
                  <Download size={13} /> İndir
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
