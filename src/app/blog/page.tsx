import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/data'
import { ChevronRight, Clock, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Makaleler',
  description: 'Yapı teknolojileri, doğrama sistemleri, pergola, kepenk ve akıllı bina hakkında güncel teknik makaleler.',
}

export default function BlogPage() {
  const categories = BLOG_POSTS.map(p => p.category).filter((v, i, a) => a.indexOf(v) === i)

  return (
    <div>
      <div className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 60% 50%, #C8A96E, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-400">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="font-display text-5xl font-bold text-white mb-4">Blog & Teknik Makaleler</h1>
          <p className="text-gray-300 text-lg max-w-xl">Yapı teknolojileri hakkında uzman içerikler, teknik rehberler ve sektör haberleri</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="px-4 py-2 bg-navy-800 text-white text-sm font-semibold rounded-full cursor-pointer">Tümü</span>
          {categories.map(cat => (
            <span key={cat} className="px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-full hover:border-gold-400/60 hover:bg-gold-400/5 cursor-pointer transition-all">{cat}</span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gold-400/40 transition-all">
              <div className="h-52 bg-gradient-to-br from-navy-800 to-steel-600 flex items-center justify-center relative overflow-hidden">
                <div className="text-white/10 font-display text-9xl font-bold select-none">{post.category[0]}</div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs px-2.5 py-1 bg-gold-500 text-navy-900 font-semibold rounded-full">{post.category}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                </div>
                <h2 className="font-display font-semibold text-navy-800 text-lg mb-2 group-hover:text-gold-600 transition-colors leading-snug">{post.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 text-xs px-2 py-0.5 bg-gray-50 border border-gray-200 rounded-full text-gray-500">
                      <Tag size={10} />{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
