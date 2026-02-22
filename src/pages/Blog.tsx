import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Clock } from 'lucide-react'
import { blogArticles } from '../data/blogArticles'
import { SEOHead, Breadcrumbs } from '../seo'
import { SITE_NAME } from '../seo/config'
import { buildBreadcrumbSchema, buildWebPageSchema } from '../seo/schema'

const Blog = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  const categories = [...new Set(blogArticles.map(a => a.category))];

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead
        meta={{
          title: `Foam Control Blog - Technical Articles & Industry Insights | ${SITE_NAME}`,
          description: "Technical articles on defoamer selection, foam control engineering, dosage optimization, and industry-specific foam solutions. Practical insights from our engineering team.",
          canonical: "/blog",
        }}
        schemas={[
          buildBreadcrumbSchema(breadcrumbs),
          buildWebPageSchema("Foam Control Blog", "Technical articles and industry insights on industrial foam control.", "/blog"),
        ]}
      />

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-5 h-5 text-brand-400" />
            <span className="text-brand-400 font-medium text-sm uppercase tracking-wider">Technical Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Foam Control <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Practical articles on defoamer selection, dosage optimization, and industry-specific foam control. Written by our engineering team.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <span key={cat} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="block p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.05] transition-colors duration-200 group h-full flex flex-col"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-400 bg-brand-900/20 px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="flex items-center text-[10px] text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-brand-400 transition-colors duration-200 leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>
                <div className="text-brand-400 text-sm font-medium inline-flex items-center">
                  Read article <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Have a foam problem we haven't covered?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Tell us about your process. We'll help you find the right solution.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center group">
              Discuss Your Process
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
