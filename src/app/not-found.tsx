import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-display text-9xl font-bold text-gold-500/20 mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-white mb-3">Sayfa Bulunamadı</h1>
        <p className="text-gray-400 mb-8 max-w-sm mx-auto">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all text-sm">Ana Sayfaya Dön</Link>
          <Link href="/urunler" className="px-6 py-3 border border-white/20 hover:border-gold-500/50 text-white font-semibold rounded-xl transition-all text-sm">Ürünlerimiz</Link>
        </div>
      </div>
    </div>
  )
}
