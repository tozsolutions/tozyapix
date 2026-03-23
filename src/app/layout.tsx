import type { Metadata } from 'next'
import './globals.css'
import { Navbar }          from '@/components/layout/Navbar'
import { Footer }          from '@/components/layout/Footer'
import { LunaBot }         from '@/components/ui/LunaBot'
import { WhatsAppButton }  from '@/components/ui/WhatsAppButton'
import { SITE_CONFIG }     from '@/lib/data'

export const metadata: Metadata = {
  title: {
    default:  `${SITE_CONFIG.name} | Yapı Teknolojilerinde 18 Yıllık Uzmanlık`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'alüminyum doğrama ankara', 'pvc pencere', 'otomatik garaj kapısı',
    'kepenk sistemleri', 'panjur', 'pergola', 'bioclimatic', 'kış bahçesi',
    'akıllı cam', 'doğrama ankara', 'cephe çözümleri', 'brise soleil',
    'zip perde', 'giyotin cam', 'toz yapı', 'hermetik kapı',
  ],
  authors:  [{ name: SITE_CONFIG.name }],
  creator:  SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website', locale: 'tr_TR',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.description,
              url: SITE_CONFIG.url,
              telephone: SITE_CONFIG.phone,
              email: SITE_CONFIG.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Timko İş Merkezi, Çamlıca Mah. Anadolu Bulvarı İdil Sk. Ğ Blok No:20 V-8',
                addressLocality: 'Yenimahalle',
                addressRegion: 'Ankara',
                postalCode: '06200',
                addressCountry: 'TR',
              },
              geo: { '@type': 'GeoCoordinates', latitude: 39.9334, longitude: 32.8597 },
              openingHoursSpecification: [
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '17:00' },
              ],
              sameAs: [SITE_CONFIG.instagramUrl],
              priceRange: '₺₺₺',
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LunaBot />
        <WhatsAppButton />
      </body>
    </html>
  )
}
