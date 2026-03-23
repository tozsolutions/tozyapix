'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Calculator, Download, ArrowRight } from 'lucide-react'

type Tool = 'gunes' | 'ruzgar' | 'enerji' | 'pergola'

export default function HesaplamaPage() {
  const [active, setActive] = useState<Tool>('gunes')
  const [result, setResult] = useState<string | null>(null)

  // Solar angle calc
  const [city, setCity] = useState('Ankara')
  const [direction, setDirection] = useState('Güney')
  const [month, setMonth] = useState('6')

  // Wind load
  const [height, setHeight] = useState('')
  const [area, setArea] = useState('')

  // Energy
  const [uValue, setUValue] = useState('')
  const [sqm, setSqm] = useState('')

  // Pergola
  const [pWidth, setPWidth] = useState('')
  const [pDepth, setPDepth] = useState('')

  function calcSun() {
    const angles: Record<string, number> = { '1': 27, '2': 36, '3': 46, '4': 57, '5': 65, '6': 68, '7': 65, '8': 57, '9': 46, '10': 36, '11': 27, '12': 23 }
    const ang = angles[month] || 45
    setResult(`📐 Güneş Açısı: ${ang}°\n🌞 Gölge Oranı: %${Math.round(ang * 1.2)}\n💡 Önerilen Brisoley Açısı: ${Math.min(ang + 15, 75)}°\n🏙️ Şehir: ${city} | Cephe: ${direction}`)
  }

  function calcWind() {
    if (!height || !area) return setResult('Lütfen tüm alanları doldurun.')
    const h = parseFloat(height), a = parseFloat(area)
    const q = 0.613 * Math.pow(h / 10, 0.22) * 550 // simplified
    const f = q * a / 1000
    setResult(`💨 Rüzgar Basıncı: ${q.toFixed(0)} Pa\n⚡ Toplam Kuvvet: ${f.toFixed(1)} kN\n🔒 Güvenlik Faktörü: 1.5\n✅ Tasarım Yükü: ${(f * 1.5).toFixed(1)} kN`)
  }

  function calcEnergy() {
    if (!uValue || !sqm) return setResult('Lütfen tüm alanları doldurun.')
    const u = parseFloat(uValue), s = parseFloat(sqm)
    const currentLoss = 3.5 * s * 2500 / 1000
    const newLoss = u * s * 2500 / 1000
    const saving = ((currentLoss - newLoss) / currentLoss * 100).toFixed(0)
    setResult(`🏠 Mevcut Isı Kaybı: ${currentLoss.toFixed(0)} kWh/yıl\n✅ Yeni Isı Kaybı: ${newLoss.toFixed(0)} kWh/yıl\n💰 Tasarruf: %${saving}\n🌱 CO₂ Azaltımı: ${((currentLoss - newLoss) * 0.42 / 1000).toFixed(1)} ton/yıl`)
  }

  function calcPergola() {
    if (!pWidth || !pDepth) return setResult('Lütfen ölçüleri girin.')
    const w = parseFloat(pWidth), d = parseFloat(pDepth)
    const area = w * d
    const profileCount = Math.ceil(w / 1.2) + Math.ceil(d / 1.2) + 4
    setResult(`📐 Alan: ${area.toFixed(1)} m²\n🔧 Tahmini Profil Sayısı: ${profileCount} adet\n⚙️ Motor: ${area > 20 ? 'Çift motor önerilir' : 'Tek motor yeterli'}\n💡 Sistem: ${area > 30 ? 'Heavy Duty' : 'Standard'} Bioclimatic`)
  }

  const tools = [
    { id: 'gunes' as Tool, label: 'Güneş Açısı Hesaplayıcı', icon: '☀️', desc: 'Brise soleil ve panjur optimizasyonu' },
    { id: 'ruzgar' as Tool, label: 'Rüzgar Yükü Hesaplayıcı', icon: '💨', desc: 'Cephe ve kapı rüzgar yük analizi' },
    { id: 'enerji' as Tool, label: 'Enerji Verimliliği', icon: '⚡', desc: 'Isı kaybı ve tasarruf simülatörü' },
    { id: 'pergola' as Tool, label: 'Pergola Boyutlandırma', icon: '⛺', desc: 'Pergola sistem hesaplama' },
  ]

  return (
    <div>
      <div className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, #C8A96E, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-400">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="text-white">Hesaplama Araçları</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <Calculator size={32} className="text-gold-400" />
            <h1 className="font-display text-5xl font-bold text-white">Hesaplama Araçları</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-xl">Mimar ve mühendisler için profesyonel yapı teknolojisi hesaplama araçları</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool selector */}
          <div className="space-y-3">
            {tools.map(t => (
              <button key={t.id} onClick={() => { setActive(t.id); setResult(null) }}
                className={`w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${active === t.id ? 'bg-navy-800 border-gold-500/50 text-white' : 'bg-white border-gray-200 hover:border-gold-400/60 text-navy-800 hover:shadow-sm'}`}>
                <span className="text-2xl mt-0.5">{t.icon}</span>
                <div>
                  <div className={`font-semibold text-sm ${active === t.id ? 'text-gold-400' : ''}`}>{t.label}</div>
                  <div className={`text-xs mt-0.5 ${active === t.id ? 'text-gray-400' : 'text-gray-500'}`}>{t.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Calculator */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              {active === 'gunes' && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">☀️ Güneş Açısı Hesaplayıcı</h2>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">Şehir</label>
                      <select value={city} onChange={e => setCity(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-500">
                        {['Ankara', 'İstanbul', 'İzmir', 'Antalya', 'Bursa', 'Adana', 'Konya'].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">Cephe Yönü</label>
                      <select value={direction} onChange={e => setDirection(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-500">
                        {['Güney', 'Kuzey', 'Doğu', 'Batı', 'G.Doğu', 'G.Batı'].map(d => <option key={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">Ay</label>
                      <select value={month} onChange={e => setMonth(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-500">
                        {['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'].map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
                      </select>
                    </div>
                  </div>
                  <button onClick={calcSun} className="w-full py-3 bg-navy-800 hover:bg-gold-500 text-white hover:text-navy-900 font-bold rounded-xl transition-all text-sm">
                    Hesapla
                  </button>
                </div>
              )}

              {active === 'ruzgar' && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">💨 Rüzgar Yükü Hesaplayıcı</h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">Bina Yüksekliği (m)</label>
                      <input value={height} onChange={e => setHeight(e.target.value)} type="number" placeholder="örn. 12" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">Cephe Alanı (m²)</label>
                      <input value={area} onChange={e => setArea(e.target.value)} type="number" placeholder="örn. 50" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-500" />
                    </div>
                  </div>
                  <button onClick={calcWind} className="w-full py-3 bg-navy-800 hover:bg-gold-500 text-white hover:text-navy-900 font-bold rounded-xl transition-all text-sm">
                    Hesapla
                  </button>
                </div>
              )}

              {active === 'enerji' && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">⚡ Enerji Verimliliği Simülatörü</h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">Hedef U-Değeri (W/m²K)</label>
                      <input value={uValue} onChange={e => setUValue(e.target.value)} type="number" step="0.1" placeholder="örn. 0.9" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">Toplam Cam Alanı (m²)</label>
                      <input value={sqm} onChange={e => setSqm(e.target.value)} type="number" placeholder="örn. 80" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-500" />
                    </div>
                  </div>
                  <button onClick={calcEnergy} className="w-full py-3 bg-navy-800 hover:bg-gold-500 text-white hover:text-navy-900 font-bold rounded-xl transition-all text-sm">
                    Hesapla
                  </button>
                </div>
              )}

              {active === 'pergola' && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">⛺ Pergola Boyutlandırma</h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">Genişlik (m)</label>
                      <input value={pWidth} onChange={e => setPWidth(e.target.value)} type="number" placeholder="örn. 6" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">Derinlik (m)</label>
                      <input value={pDepth} onChange={e => setPDepth(e.target.value)} type="number" placeholder="örn. 4" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-500" />
                    </div>
                  </div>
                  <button onClick={calcPergola} className="w-full py-3 bg-navy-800 hover:bg-gold-500 text-white hover:text-navy-900 font-bold rounded-xl transition-all text-sm">
                    Hesapla
                  </button>
                </div>
              )}

              {/* Result */}
              {result && (
                <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="font-semibold text-navy-800 text-sm mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    Hesaplama Sonucu
                  </div>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">{result}</pre>
                  <div className="flex gap-3 mt-4">
                    <button className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-navy-800 text-white rounded-lg hover:bg-gold-500 hover:text-navy-900 transition-all">
                      <Download size={13} /> PDF Rapor
                    </button>
                    <Link href="/iletisim"
                      className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 border border-gray-200 rounded-lg hover:border-gold-400/60 transition-all">
                      Teklif Al <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
