import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'
import { blogArticles, getBlogArticleBySlug } from '../data/blogArticles'
import { SEOHead, Breadcrumbs } from '../seo'
import { SITE_NAME } from '../seo/config'
import { buildBreadcrumbSchema, buildWebPageSchema } from '../seo/schema'

export default function BlogArticle() {
  const { articleSlug } = useParams<{ articleSlug: string }>()
  const article = getBlogArticleBySlug(articleSlug || '')

  if (!article) return <Navigate to="/blog" replace />

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: article.title, url: `/blog/${article.slug}` },
  ]

  const currentIndex = blogArticles.findIndex(a => a.slug === article.slug)
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead
        meta={{
          title: `${article.title} | ${SITE_NAME} Blog`,
          description: article.excerpt,
          canonical: `/blog/${article.slug}`,
        }}
        schemas={[
          buildBreadcrumbSchema(breadcrumbs),
          buildWebPageSchema(article.title, article.excerpt, `/blog/${article.slug}`),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.publishedDate,
            author: { "@type": "Person", name: "Kartik Radadiya" },
            publisher: { "@type": "Organization", name: SITE_NAME },
          },
        ]}
      />

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <Link to="/blog" className="inline-flex items-center text-brand-400 hover:text-brand-300 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-900/20 px-2.5 py-1 rounded">
              {article.category}
            </span>
            <span className="flex items-center text-xs text-gray-500">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {article.readTime} read
            </span>
            <span className="text-xs text-gray-500">{article.publishedDate}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed border-l-2 border-brand-500/30 pl-4">
            {article.excerpt}
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max max-w-3xl">
          <div className="space-y-6">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="container-max max-w-3xl">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Need help with your foam control challenge?
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Our technical team can help you select the right chemistry for your process.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center group text-sm">
              Discuss Your Process
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="section-padding pt-0">
        <div className="container-max max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevArticle && (
              <Link to={`/blog/${prevArticle.slug}`} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-brand-500/20 transition-colors group">
                <div className="text-xs text-gray-500 mb-1">← Previous</div>
                <div className="text-sm text-white font-medium group-hover:text-brand-400 transition-colors leading-snug">{prevArticle.title}</div>
              </Link>
            )}
            {nextArticle && (
              <Link to={`/blog/${nextArticle.slug}`} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-brand-500/20 transition-colors group sm:text-right sm:ml-auto">
                <div className="text-xs text-gray-500 mb-1">Next →</div>
                <div className="text-sm text-white font-medium group-hover:text-brand-400 transition-colors leading-snug">{nextArticle.title}</div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
