import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, STATS, WHATSAPP_URL } from '@/lib/data'
import { ChevronRight, Award, Shield, Users, MapPin, CheckCircle2, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Toz Yapı Teknolojileri hakkında. 20 yıllık deneyim, 5000+ tamamlanan proje, Avrupa standartlarında CE belgeli ürünler.',
}

export default function HakkimizdaPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-navy-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, #C8A96E, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-400">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="text-white">Hakkımızda</span>
          </nav>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
            Yapıda <span className="gradient-text">20 Yıllık</span><br />Güven ve Tecrübe
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Ankara merkezli olarak Türkiye genelinde yapı teknolojileri alanında 
            kaliteli, güvenilir ve yenilikçi çözümler sunuyoruz.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gold-500 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-bold text-navy-900">{stat.value}{stat.suffix}</div>
                <div className="text-navy-800 font-medium mt-1 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-divider mb-6" />
            <h2 className="font-display text-4xl font-bold text-navy-800 mb-6 gold-underline">Biz Kimiz?</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                <strong>Toz Yapı Teknolojileri</strong>, 2004 yılında Ankara&apos;da kurulmuş, yapı teknolojileri 
                sektöründe Türkiye&apos;nin önde gelen firmalarından biridir. Alüminyum, PVC ve ahşap doğrama 
                sistemlerinden başlayarak bugün 16 farklı ürün kategorisinde hizmet vermekteyiz.
              </p>
              <p>
                Bilkent Center&apos;daki genel müdürlüğümüzden Türkiye&apos;nin dört bir yanına uzanan hizmet ağımızla,
                konuttan hastaneye, AVM&apos;den otele kadar her ölçekte projeye çözüm sunuyoruz.
              </p>
              <p>
                Tüm ürünlerimiz CE belgelidir ve Avrupa mühendislik standartlarına uygun olarak üretilmektedir.
                Paslanmaz menteşeler için 20 yıl, profil ve yapısal bileşenler için 10 yıl garanti sunmaktayız.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, title: 'CE Sertifikalı Ürünler', desc: 'Avrupa standartlarına uygun' },
              { icon: Shield, title: '20 Yıl Garanti', desc: 'Paslanmaz bileşenler' },
              { icon: Users, title: '5000+ Proje', desc: 'Başarıyla tamamlandı' },
              { icon: MapPin, title: 'Türkiye Geneli', desc: 'Montaj ve servis' },
            ].map(item => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-gold-400/60 transition-all">
                <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-gold-400 mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="font-semibold text-navy-800 mb-1 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-navy-800">Değerlerimiz</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Kalite', icon: '🏆', desc: 'Her ürün ve hizmette en yüksek kalite standartlarını uyguluyoruz. Avrupa normlarında CE belgeli ürünler.' },
              { title: 'Güvenilirlik', icon: '🛡️', desc: '20 yıldır müşterilerimizin güvenini kazandık. Söz verdiğimizi yapıyoruz.' },
              { title: 'İnovasyon', icon: '💡', desc: 'Akıllı cam, bioclimatic pergola ve akıllı ev entegrasyonu ile geleceğin teknolojilerini bugün sunuyoruz.' },
              { title: 'Profesyonellik', icon: '👷', desc: 'Uzman ekibimiz projenizin her aşamasında yanınızda. Keşiften montaja, servisten garantiye.' },
              { title: 'Sürdürülebilirlik', icon: '🌱', desc: 'Enerji tasarrufu sağlayan ürünlerimizle hem bütçenizi hem de çevreyi koruyoruz.' },
              { title: 'Müşteri Odaklılık', icon: '🤝', desc: 'Her müşteri özeldir. Projelerinize özel çözümler tasarlıyor, 48 saat içinde yanıt veriyoruz.' },
            ].map(v => (
              <div key={v.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gold-400/60 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-navy-800 text-xl mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-navy-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">Bize Ulaşın</h2>
              <div className="space-y-4 text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold-400 mt-0.5 shrink-0" />
                  <span>{SITE_CONFIG.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gold-400 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-gold-400 transition-colors">{SITE_CONFIG.phoneFormatted}</a>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 px-5 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-xl text-sm transition-all">
                  <Phone size={16} /> Hemen Ara
                </a>
                <a href={WHATSAPP_URL()} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl text-sm transition-all">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Pzt–Cum', time: '08:30 – 18:30' },
                { label: 'Cumartesi', time: '09:00 – 14:00' },
                { label: 'Pazar', time: 'Kapalı' },
                { label: 'Acil Servis', time: '7/24' },
              ].map(h => (
                <div key={h.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-gray-400 text-xs mb-1">{h.label}</div>
                  <div className="text-white font-semibold text-sm">{h.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
