'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PRODUCT_CATEGORIES, SITE_CONFIG, WHATSAPP_URL } from '@/lib/data'
import { Menu, X, Phone, ChevronDown, MessageCircle, ChevronRight } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/urunler', label: 'Ürün Grupları', hasMega: true },
  { href: '/referanslar', label: 'Referanslar' },
  { href: '/katalog', label: 'Katalog' },
  { href: '/blog', label: 'Blog' },
  { href: '/sss', label: 'S.S.S' },
  { href: '/iletisim', label: 'İletişim' },
]

// 4 columns for mega menu
const MEGA_COLS = [
  PRODUCT_CATEGORIES.slice(0, 4),
  PRODUCT_CATEGORIES.slice(4, 8),
  PRODUCT_CATEGORIES.slice(8, 12),
  PRODUCT_CATEGORIES.slice(12),
]

export function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [scrolled, setScrolled]       = useState(false)
  const [mobileProd, setMobileProd]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark-700 text-white text-sm py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-accent font-semibold tracking-wide text-xs uppercase">
            Ankara&apos;dan Türkiye Geneline Yapı Teknolojisi Çözümleri
          </span>
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors text-xs">
              <Phone size={13} /> {SITE_CONFIG.phoneFormatted}
            </a>
            <a href={WHATSAPP_URL()} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-500 px-3 py-1 rounded-full transition-colors text-xs font-semibold">
              <MessageCircle size={12} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-xl bg-dark flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:bg-primary transition-colors font-display">
                T
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-dark text-[17px] leading-tight tracking-wide">TOZ YAPI</div>
                <div className="text-[10px] text-dark-500 tracking-[0.18em] uppercase leading-none">Teknolojileri</div>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden xl:flex items-center gap-0.5">
              {NAV_LINKS.map(link =>
                link.hasMega ? (
                  <div key={link.href} className="relative mega-menu-container">
                    <Link href={link.href}
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all">
                      {link.label}
                      <ChevronDown size={14} />
                    </Link>
                    {/* Mega dropdown */}
                    <div className="mega-menu-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[940px]">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                        <div className="grid grid-cols-4 gap-3 mb-4">
                          {MEGA_COLS.map((col, ci) => (
                            <div key={ci} className="space-y-0.5">
                              {col.map(cat => (
                                <Link key={cat.id} href={`/urunler/${cat.slug}`}
                                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 group/item transition-all">
                                  <span className="text-base w-6 text-center">{cat.icon}</span>
                                  <span className="text-xs font-semibold text-gray-700 group-hover/item:text-primary leading-snug transition-colors">{cat.shortTitle}</span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                          <span className="text-xs text-gray-400">{PRODUCT_CATEGORIES.length} ürün kategorisi</span>
                          <Link href="/urunler"
                            className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                            Tüm Kategoriler <ChevronRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}
                    className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all">
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-3 shrink-0">
              <a href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                <Phone size={15} className="text-primary" />
                {SITE_CONFIG.phoneFormatted}
              </a>
              <Link href="/iletisim" className="btn-primary text-sm px-5 py-2.5">
                Teklif Al
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map(link =>
                link.hasMega ? (
                  <div key={link.href}>
                    <button onClick={() => setMobileProd(!mobileProd)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">
                      {link.label}
                      <ChevronDown size={15} className={`transition-transform ${mobileProd ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileProd && (
                      <div className="pl-3 space-y-0.5 mt-1">
                        {PRODUCT_CATEGORIES.map(cat => (
                          <Link key={cat.id} href={`/urunler/${cat.slug}`}
                            className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                            onClick={() => setMobileOpen(false)}>
                            <span>{cat.icon}</span> {cat.shortTitle}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}
                    className="block px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all"
                    onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <a href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-primary/40 transition-all">
                  <Phone size={15} className="text-primary" /> {SITE_CONFIG.phoneFormatted}
                </a>
                <Link href="/iletisim" onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center">
                  Ücretsiz Teklif Al
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
