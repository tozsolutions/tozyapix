export const WHATSAPP_URL = (message: string) =>
  `https://wa.me/905076561263?text=${encodeURIComponent(message)}`

// --------------------------------------------------

export const SITE_CONFIG = {
  name: 'Toz Yapı Teknolojileri',
  phone: '+90 507 656 12 63',
  email: 'info@tozyapi.com.tr',
  address: 'Ankara, Türkiye',
}

// --------------------------------------------------

export const STATS = [
  { label: 'Deneyim', value: '18+' },
  { label: 'Proje', value: '500+' },
  { label: 'Mutlu Müşteri', value: '984+' },
  { label: 'Ürün', value: '50+' },
]

// --------------------------------------------------

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'aluminyum-dograma-secimi',
    title: 'Alüminyum Doğrama Seçiminde 5 Kritik Kriter',
    excerpt: 'Doğru sistem seçimi için kritik teknik detaylar.',
    category: 'Alüminyum',
    date: '2026-03-23',
    readTime: '5 dk',
    tags: ['alüminyum'],
  },
]

// --------------------------------------------------

export const PRODUCT_CATEGORIES = [
  {
    slug: 'pergola',
    title: 'Pergola Sistemleri',
    description: 'Motorlu ve sabit pergola çözümleri',
  },
  {
    slug: 'zip-perde',
    title: 'Zip Perde',
    description: 'Rüzgar dayanımlı perde sistemleri',
  },
]

// --------------------------------------------------

export const PARTNERS = [
  { name: 'Somfy' },
  { name: 'Nice' },
  { name: 'Becker' },
]

// --------------------------------------------------

export const REFERENCE_SECTORS = [
  { name: 'Otel' },
  { name: 'Hastane' },
  { name: 'AVM' },
]

// --------------------------------------------------

export const REFERENCES = [
  {
    title: 'Örnek Proje',
    location: 'Ankara',
  },
]

// --------------------------------------------------

export const FAQ = [
  {
    question: 'Pergola nedir?',
    answer: 'Dış mekan gölgelendirme sistemidir.',
  },
]