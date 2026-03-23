'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE_CONFIG, PRODUCT_CATEGORIES, WHATSAPP_URL } from '@/lib/data'
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react'

export default function IletisimPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', category: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      const msg = `Merhaba! Web formundan geldim.%0Aİsim: ${form.name}%0AŞirket: ${form.company}%0ATelefon: ${form.phone}%0AKonu: ${form.category}%0AMesaj: ${form.message}`
      window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${msg}`, '_blank')
    }, 800)
  }

  return (
    <div>
      {/* Hero */}
      <div className="bg-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 75% 50%, rgba(0,102,255,0.12), transparent)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6 font-medium">
            <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
            <ChevronRight size={12} /> <span className="text-white">İletişim</span>
          </nav>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-4">İletişim</h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Ücretsiz keşif ve teklif için formu doldurun. 48 saat içinde yanıt garantisi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="section-label mb-2">Teklif & Bilgi Formu</div>
              <h2 className="font-display text-2xl font-bold text-dark mb-2">Projenizi Anlatın</h2>
              <p className="text-[var(--text-secondary)] text-sm mb-8">
                Formunuzu WhatsApp&apos;a yönlendiriyoruz — uzmanlarımız en hızlı bu kanaldan yanıt verir.
              </p>

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-dark mb-2">Mesajınız Alındı!</h3>
                  <p className="text-[var(--text-secondary)] mb-6">Uzmanlarımız 48 saat içinde iletişime geçecek.</p>
                  <button onClick={() => setSent(false)}
                    className="btn-ghost inline-flex">Yeni Form Gönder</button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name',    label: 'Ad Soyad *',          type: 'text',  ph: 'Ad Soyad',         req: true  },
                      { name: 'company', label: 'Firma / Şirket',       type: 'text',  ph: 'Firma adı',        req: false },
                      { name: 'phone',   label: 'Telefon *',            type: 'tel',   ph: '05XX XXX XX XX',   req: true  },
                      { name: 'email',   label: 'E-posta',              type: 'email', ph: 'ornek@email.com',  req: false },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-sm font-bold text-dark mb-1.5">{f.label}</label>
                        <input name={f.name} value={(form as Record<string, string>)[f.name]}
                          onChange={handle} required={f.req} type={f.type} placeholder={f.ph}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none transition-all bg-surface" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1.5">İlgilendiğiniz Ürün Grubu</label>
                    <select name="category" value={form.category} onChange={handle}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none transition-all bg-surface">
                      <option value="">Seçiniz...</option>
                      {PRODUCT_CATEGORIES.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                      <option value="Diğer">Diğer / Birden fazla ürün</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1.5">Mesajınız *</label>
                    <textarea name="message" value={form.message} onChange={handle} required rows={4}
                      placeholder="Projeniz, uygulama alanı ve varsa ölçülerinizi paylaşın..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none transition-all resize-none bg-surface" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60">
                    {loading
                      ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Gönderiliyor...</>
                      : <><Send size={16} /> Teklif Talebi Gönder</>
                    }
                  </button>
                  <p className="text-xs text-[var(--text-muted)] text-center">
                    Form WhatsApp&apos;a yönlendirilir. Kişisel verileriniz gizlilik politikamız kapsamında korunur.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Contact cards */}
            {[
              { icon: Phone,         title: 'Telefon',       primary: SITE_CONFIG.phoneFormatted,  sub: 'Pzt–Cum 09:00–17:00', action: `tel:${SITE_CONFIG.phone}`, label: 'Hemen Ara',       bg: 'bg-dark',    ext: false },
              { icon: MessageCircle, title: 'WhatsApp',      primary: SITE_CONFIG.phoneFormatted,  sub: '7/24 mesaj gönderebilirsiniz', action: WHATSAPP_URL(), label: 'WhatsApp Aç', bg: 'bg-green-700', ext: true  },
              { icon: Mail,          title: 'E-posta',       primary: SITE_CONFIG.email,           sub: '24 saat içinde yanıt', action: `mailto:${SITE_CONFIG.email}`, label: 'Mail Gönder', bg: 'bg-primary',  ext: false },
            ].map(item => (
              <div key={item.title} className="card-base p-5">
                <div className="flex items-start gap-4">
                  <div className={`${item.bg} w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0`}>
                    <item.icon size={17} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-0.5">{item.title}</div>
                    <div className="font-bold text-dark text-sm truncate">{item.primary}</div>
                    <div className="text-xs text-[var(--text-muted)] mb-3">{item.sub}</div>
                    <a href={item.action} target={item.ext ? '_blank' : undefined} rel={item.ext ? 'noopener noreferrer' : undefined}
                      className={`inline-block text-xs font-bold px-3 py-1.5 ${item.bg} text-white rounded-lg hover:opacity-85 transition-all`}>
                      {item.label}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Address */}
            <div className="card-base p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-dark/5 flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-dark text-sm mb-1.5">Adresimiz</div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{SITE_CONFIG.addressFull}</p>
                  <a href={SITE_CONFIG.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:text-primary/70 transition-colors">
                    Haritada Göster →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-dark rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={15} className="text-accent" />
                <span className="font-bold text-sm">Çalışma Saatleri</span>
              </div>
              <div className="space-y-2">
                {SITE_CONFIG.workingHours.map(h => (
                  <div key={h.days} className="flex items-center justify-between text-sm">
                    <span className="text-white/45">{h.days}</span>
                    <span className={`font-bold text-sm ${h.open ? 'text-accent' : 'text-white/25'}`}>{h.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/8 text-xs text-white/40">
                Acil durumlar için WhatsApp 7/24 aktiftir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
