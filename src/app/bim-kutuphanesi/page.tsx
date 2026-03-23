import type { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCT_CATEGORIES } from '@/lib/data'
import { ChevronRight, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'BIM Kütüphanesi',
  description: 'Revit, IFC, DWG, STEP formatlarında ücretsiz BIM dosyaları. Mimarlar ve mühendisler için kapsamlı teknik kütüphane.',
}

const FORMATS = [
  { ext: '.rfa', label: 'Revit', desc: '3D BIM Model', color: 'bg-blue-600' },
  { ext: '.ifc', label: 'IFC', desc: 'Open BIM', color: 'bg-green-700' },
  { ext: '.dwg', label: 'DWG', desc: 'AutoCAD', color: 'bg-orange-600' },
  { ext: '.step', label: 'STEP', desc: '3D CAD', color: 'bg-purple-600' },
  { ext: '.pdf', label: '3D PDF', desc: 'Görsel', color: 'bg-red-600' },
  { ext: 'CE', label: 'Sertifika', desc: 'CE Belgesi', color: 'bg-navy-800' },
]

export default function BimPage() {
  return (
    <div>
      <div className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, #C8A96E, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-400">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="text-white">BIM Kütüphanesi</span>
          </nav>
          <h1 className="font-display text-5xl font-bold text-white mb-4">BIM Kütüphanesi</h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            Mimarlar ve mühendisler için Revit, IFC, DWG ve STEP formatlarında
            tüm ürünlerimizin teknik dosyaları ücretsiz olarak erişilebilir.
          </p>
          <div className="flex flex-wrap gap-2">
            {FORMATS.map(f => (
              <span key={f.ext} className={`${f.color} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>{f.ext} · {f.label}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-navy-800">Ürün Grubu</th>
                {FORMATS.map(f => (
                  <th key={f.ext} className="text-center py-4 px-3 font-semibold text-navy-800">{f.ext}</th>
                ))}
                <th className="text-center py-4 px-3 font-semibold text-navy-800">Tümünü İndir</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCT_CATEGORIES.map((cat, i) => (
                <tr key={cat.id} className={`border-b border-gray-100 hover:bg-gray-50 transition-all ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      <span className="font-medium text-navy-800">{cat.title}</span>
                    </div>
                  </td>
                  {FORMATS.map(f => (
                    <td key={f.ext} className="py-4 px-3 text-center">
                      <button className={`w-10 h-8 ${f.color} text-white text-xs font-bold rounded hover:opacity-80 transition-all`}>
                        ↓
                      </button>
                    </td>
                  ))}
                  <td className="py-4 px-3 text-center">
                    <button className="flex items-center gap-1 text-xs font-semibold text-navy-800 hover:text-gold-600 px-3 py-1.5 border border-gray-200 hover:border-gold-400/60 rounded-lg transition-all mx-auto">
                      <Download size={12} /> ZIP
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 bg-navy-800 rounded-2xl p-8 text-white text-center">
          <h2 className="font-display text-2xl font-bold mb-2">Özel Proje Dosyası Gerekiyor mu?</h2>
          <p className="text-gray-300 text-sm mb-5">Standart kütüphanede olmayan özel ölçü veya konfigürasyonlar için ekibimizle iletişime geçin.</p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl text-sm transition-all">
            Özel Talep Gönder
          </Link>
        </div>
      </div>
    </div>
  )
}
