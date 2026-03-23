'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, ChevronDown } from 'lucide-react'
import { SITE_CONFIG, WHATSAPP_URL } from '@/lib/data'

type Msg = {
  from: 'luna' | 'user'
  text: string
  time: string
  options?: { label: string; value: string }[]
}

const FLOW: Record<string, { text: string; options?: { label: string; value: string }[] }> = {
  start: {
    text: 'Merhaba! 👋 Ben Luna, Toz Yapı Teknolojileri\'nin dijital asistanıyım.\n\n18 yıllık deneyimimizle size en doğru çözümü sunmak için buradayım. Nasıl yardımcı olabilirim?',
    options: [
      { label: '📦 Ürün bilgisi & öneri', value: 'product' },
      { label: '💰 Fiyat teklifi al',      value: 'quote'   },
      { label: '🏗️ Proje danışmanlığı',   value: 'project' },
      { label: '📐 BIM / CAD dosyası',     value: 'bim'     },
      { label: '🔧 Servis & garanti',      value: 'service' },
    ],
  },
  product: {
    text: 'Hangi ürün grubunu incelemek istersiniz?',
    options: [
      { label: '🚪 Kapı Sistemleri',         value: 'p_kapi'      },
      { label: '🏗️ Alüminyum Doğrama',      value: 'p_dograma'   },
      { label: '⛺ Pergola & Tente',         value: 'p_pergola'   },
      { label: '🔒 Kepenk & Panjur',         value: 'p_kepenk'   },
      { label: '💨 Zip Perde & Giyotin',     value: 'p_zip'       },
      { label: '✨ Akıllı Cam',              value: 'p_cam'       },
      { label: '🔙 Geri',                    value: 'start'       },
    ],
  },
  p_kapi: {
    text: 'Kapı sistemlerimiz:\n\n• Fotoselli kayar & döner kapılar\n• Seksiyonel & Full Vision garaj kapıları\n• Hermetik kapılar (hastane/steril)\n• Akustik kapılar\n• Yangın kapıları\n• PVC hızlı sarmal/katlanır kapılar\n\nHangi kullanım için arıyorsunuz?',
    options: [
      { label: '🏥 Hastane / sağlık tesisi', value: 'p_kapi_hastane' },
      { label: '🏭 Endüstriyel / depo',      value: 'p_kapi_endustriyel' },
      { label: '🏢 Ticari / ofis',           value: 'p_kapi_ticari' },
      { label: '🏠 Konut / rezidans',        value: 'p_kapi_konut' },
      { label: '💰 Teklif al',               value: 'quote' },
    ],
  },
  p_kapi_hastane: {
    text: 'Hastane ve sağlık tesisleri için:\n\n✅ Paslanmaz / HPL hermetik kapılar (EN 13637)\n✅ Yoğun bakım, ameliyathane norm kapıları\n✅ Fotoselli hijyenik giriş sistemleri\n✅ Teknik şartnameye uygun belgelendirme\n\n14+ sağlık projesi referansımız mevcuttur.',
    options: [
      { label: '📋 Teknik şartname gönder', value: 'quote' },
      { label: '💬 WhatsApp\'a geç',         value: 'whatsapp' },
      { label: '🔙 Geri',                    value: 'p_kapi' },
    ],
  },
  p_kapi_endustriyel: {
    text: 'Endüstriyel kullanım için:\n\n✅ Seksiyonel garaj kapıları (ısı yalıtımlı)\n✅ PVC hızlı sarmal/katlanır kapılar\n✅ Soğuk hava depo kapıları\n✅ Yükleme rampası sistemleri\n\nUygulamanızın detaylarını paylaşırsanız en uygun sistemi önereceğiz.',
    options: [
      { label: '📐 Ölçü & teklif al', value: 'quote'    },
      { label: '💬 WhatsApp',         value: 'whatsapp' },
      { label: '🔙 Geri',             value: 'p_kapi'   },
    ],
  },
  p_kapi_ticari: {
    text: 'Ticari ve ofis binaları için fotoselli kayar kapı, döner kapı ve güvenlikli giriş sistemlerimiz mevcuttur. Modern görünüm, düşük bakım ve enerji verimliliği birlikte.',
    options: [
      { label: '💰 Teklif al', value: 'quote'    },
      { label: '💬 WhatsApp',  value: 'whatsapp' },
      { label: '🔙 Geri',      value: 'p_kapi'   },
    ],
  },
  p_kapi_konut: {
    text: 'Konut projeleri için seksiyonel garaj kapısı, bahçe kapısı ve PVC hızlı kapı çözümlerimiz mevcuttur. Motorlu, uzaktan kumandalı ve akıllı ev uyumlu seçenekler.',
    options: [
      { label: '💰 Teklif al', value: 'quote'    },
      { label: '💬 WhatsApp',  value: 'whatsapp' },
      { label: '🔙 Geri',      value: 'p_kapi'   },
    ],
  },
  p_dograma: {
    text: 'Doğrama sistemlerimiz:\n\n• 6063T6 termal kırılımlı alüminyum\n• UW 0.9 W/m²K yalıtım\n• PVC doğrama sistemleri\n• Ahşap doğrama\n• Cephe sistemleri\n\n%25\'e varan enerji tasarrufu sağlanabilir.',
    options: [
      { label: '💰 Fiyat teklifi al',     value: 'quote'    },
      { label: '📐 BIM / CAD dosyası',    value: 'bim'      },
      { label: '💬 WhatsApp\'ta sor',      value: 'whatsapp' },
      { label: '🔙 Geri',                 value: 'product'  },
    ],
  },
  p_pergola: {
    text: 'Pergola & tente sistemlerimiz:\n\n• Bioclimatic pergola (0°–135° motorlu kanat)\n• Rolling Roof (zip sistemli katlanır çatı)\n• Cam tavan\n• Klasik pergola\n• Tente sistemleri\n\nYağmur sensörü, LED aydınlatma ve akıllı ev entegrasyonu mevcuttur.',
    options: [
      { label: '💰 Teklif & ölçüm',  value: 'quote'    },
      { label: '🧮 Pergola hesapla', value: 'calc'     },
      { label: '💬 WhatsApp',        value: 'whatsapp' },
      { label: '🔙 Geri',            value: 'product'  },
    ],
  },
  p_kepenk: {
    text: 'Kepenk & panjur sistemlerimiz:\n\n• Alüminyum & çelik kepenk\n• Balistik koruma (BR2–BR6)\n• Şeffaf kepenk\n• Poliüretan dolgulu ısı yalıtımlı\n• Monoblok & gizli panjur\n• Motorlu, uzaktan kumandalı\n\nGüvenlik + estetik bir arada.',
    options: [
      { label: '💰 Teklif al', value: 'quote'    },
      { label: '💬 WhatsApp',  value: 'whatsapp' },
      { label: '🔙 Geri',      value: 'product'  },
    ],
  },
  p_zip: {
    text: 'Zip perde & giyotin sistemlerimiz:\n\n• Zip perde (rüzgara karşı özel kilitleme)\n• Giyotin cam (temiz görünüm)\n• Rüzgar kırıcı\n• Sürme sistemleri\n\nTeras, balkon, restoran ve otel projelerinde 55+ endüstriyel referansımız var.',
    options: [
      { label: '💰 Teklif al', value: 'quote'    },
      { label: '💬 WhatsApp',  value: 'whatsapp' },
      { label: '🔙 Geri',      value: 'product'  },
    ],
  },
  p_cam: {
    text: 'Akıllı cam sistemlerimiz:\n\n• Elektrokromik cam (anında opaklık kontrolü)\n• Gizlilik kontrollü cam\n• Isı kontrol camlı sistemler\n\nOfis bölme, toplantı odası, villa ve otel uygulamalarında tercih edilen premium çözümler.',
    options: [
      { label: '💰 Teklif al', value: 'quote'    },
      { label: '💬 WhatsApp',  value: 'whatsapp' },
      { label: '🔙 Geri',      value: 'product'  },
    ],
  },
  quote: {
    text: 'Ücretsiz keşif ve teklif için:\n\n✅ WhatsApp\'tan mesaj atın — anında yanıt\n✅ Form doldurun — 48 saat içinde dönüş\n✅ Bizi arayın — yerinde ölçüm ve teklif\n\nTüm tekliflerimiz ücretsiz ve bağlayıcı değildir.',
    options: [
      { label: '💬 WhatsApp\'a Git',      value: 'whatsapp' },
      { label: '📋 Teklif Formu',         value: 'form'     },
      { label: '📞 Bizi Arayın',          value: 'call'     },
      { label: '🔙 Ana Menü',             value: 'start'    },
    ],
  },
  project: {
    text: 'Proje danışmanlığı için aşağıdaki adımları izliyoruz:\n\n1️⃣ Ücretsiz keşif & teknik ölçüm\n2️⃣ Ürün öneri & fizibilite\n3️⃣ Detaylı fiyat teklifi\n4️⃣ Sözleşme & üretim\n5️⃣ Profesyonel montaj\n6️⃣ Garanti & servis\n\nHangi sektör için proje geliştiriyorsunuz?',
    options: [
      { label: '🏥 Sağlık projesi',      value: 'p_kapi_hastane'   },
      { label: '🏭 Endüstriyel',         value: 'p_kapi_endustriyel' },
      { label: '🏢 Ticari / AVM',        value: 'p_kapi_ticari'    },
      { label: '🏠 Konut / Rezidans',    value: 'p_kapi_konut'     },
      { label: '💬 WhatsApp ile detay',  value: 'whatsapp'         },
    ],
  },
  bim: {
    text: 'BIM, CAD ve teknik dokümantasyon:\n\n📐 Revit (.rfa) — 3D BIM modelleri\n📐 IFC — Open BIM formatı\n📐 DWG — AutoCAD çizimleri\n📐 STEP — 3D CAD format\n📄 CE Sertifikaları\n📄 Teknik veri sayfaları (TDS)\n\nTüm dosyalar ücretsiz ve talep üzerine anında iletilir.',
    options: [
      { label: '📥 BIM Kütüphanesi',     value: 'form'     },
      { label: '💬 WhatsApp\'tan talep',  value: 'whatsapp' },
      { label: '🔙 Ana Menü',            value: 'start'    },
    ],
  },
  service: {
    text: 'Servis & garanti bilgisi:\n\n🔒 Paslanmaz menteşeler: 20 yıl garanti\n🔒 Profil & yapısal bileşenler: 10 yıl\n🔒 Motor & mekanik aksam: 5 yıl\n\n✅ CE belgeli tüm ürünler\n✅ Yedek parça temini\n✅ Periyodik bakım\n✅ 7/24 acil servis hattı',
    options: [
      { label: '📞 Servis hattı',     value: 'call'     },
      { label: '💬 WhatsApp',         value: 'whatsapp' },
      { label: '🔙 Ana Menü',         value: 'start'    },
    ],
  },
  calc: {
    text: 'Pergola boyutlandırma, rüzgar yükü, güneş açısı ve enerji verimliliği hesaplama araçlarımız için Hesaplama Araçları sayfamızı ziyaret edebilirsiniz.',
    options: [
      { label: '🧮 Hesaplama Araçları', value: 'tools'    },
      { label: '💰 Teklif al',          value: 'quote'    },
      { label: '🔙 Geri',               value: 'p_pergola' },
    ],
  },
  call: {
    text: `📞 ${SITE_CONFIG.phoneFormatted}\n\nÇalışma saatleri:\nPazartesi – Cuma: 09:00 – 17:00\nCumartesi – Pazar: Kapalı\n\nMesaj atmayı tercih ederseniz WhatsApp da 7/24 aktiftir.`,
    options: [
      { label: '💬 WhatsApp\'a Geç', value: 'whatsapp' },
      { label: '🔙 Ana Menü',        value: 'start'    },
    ],
  },
}

function ts() {
  return new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
}

export function LunaBot() {
  const [open, setOpen]       = useState(false)
  const [msgs, setMsgs]       = useState<Msg[]>([])
  const [input, setInput]     = useState('')
  const [typing, setTyping]   = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

  function lunaReply(key: string) {
    const node = FLOW[key]
    if (!node) return
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs(m => [...m, { from: 'luna', text: node.text, time: ts(), options: node.options }])
    }, 600)
  }

  function handleOpen() {
    if (!open && msgs.length === 0) {
      setMsgs([{ from: 'luna', text: FLOW.start.text, time: ts(), options: FLOW.start.options }])
    }
    setOpen(v => !v)
  }

  function handleOption(val: string) {
    if (val === 'whatsapp') { window.open(WHATSAPP_URL('Merhaba! Bilgi almak istiyorum.'), '_blank'); return }
    if (val === 'form')     { window.location.href = '/iletisim'; return }
    if (val === 'tools')    { window.location.href = '/hesaplama-araclari'; return }
    if (val === 'call')     {}
    lunaReply(val)
  }

  function handleSend() {
    if (!input.trim()) return
    const txt = input.trim()
    setInput('')
    setMsgs(m => [...m, { from: 'user', text: txt, time: ts() }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs(m => [...m, {
        from: 'luna',
        text: 'Mesajınızı aldım! Uzman ekibimiz size en kısa sürede yardımcı olacak.\n\nWhatsApp üzerinden hızlıca iletişime geçebilirsiniz.',
        time: ts(),
        options: [
          { label: '💬 WhatsApp\'a Git', value: 'whatsapp' },
          { label: '🔙 Ana Menü',        value: 'start'    },
        ],
      }])
    }, 900)
  }

  return (
    <>
      {/* Trigger button */}
      <button onClick={handleOpen} className="luna-trigger" aria-label="Luna Asistan">
        <span className="luna-dot" />
        {open
          ? <ChevronDown size={22} className="text-white" />
          : <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        }
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-28 right-6 z-[9998] w-80 sm:w-96 rounded-2xl shadow-2xl border border-white/10 bg-white flex flex-col overflow-hidden"
          style={{ height: 500 }}>
          {/* Header */}
          <div className="px-4 py-3.5 flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, #1A1A2E, #2D2D44)' }}>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-base shadow-md">
                L
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#1A1A2E]" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Luna</div>
                <div className="text-green-400 text-[11px] font-medium">Çevrimiçi • Toz Yapı Asistanı</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white p-1 transition-colors">
              <X size={17} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-surface">
            {msgs.filter(m => m.text).map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'luna' ? 'justify-start' : 'justify-end'}`}>
                {msg.from === 'luna' && (
                  <div className="mr-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0 mt-1">L</div>
                )}
                <div className="max-w-[85%]">
                  <div className={`px-3 py-2.5 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                    msg.from === 'luna'
                      ? 'bg-white shadow-sm text-gray-800 rounded-tl-sm'
                      : 'text-white rounded-tr-sm'
                  }`}
                    style={msg.from === 'user' ? { background: 'linear-gradient(135deg, #0066FF, #0080FF)' } : {}}>
                    {msg.text}
                  </div>
                  {msg.options && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {msg.options.map(opt => (
                        <button key={opt.value} onClick={() => handleOption(opt.value)}
                          className="text-[11px] px-2.5 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all font-semibold shadow-sm">
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">L</div>
                <div className="bg-white shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1">
                  {[0,1,2].map(d => (
                    <span key={d} className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-gray-100 bg-white flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Mesajınızı yazın..."
              className="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-200 outline-none transition-all"
            />
            <button onClick={handleSend}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all shrink-0"
              style={{ background: 'linear-gradient(135deg, #0066FF, #0080FF)' }}>
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
