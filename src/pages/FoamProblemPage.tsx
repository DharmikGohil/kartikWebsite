// ─── Foam Problem Programmatic Page ───────────────────────────────

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, AlertTriangle, FlaskConical } from "lucide-react";
import { industries } from "../data/industries";
import { getFoamProblemBySlug, foamProblems } from "../data/foamProblems";
import { getChemistryBySlug } from "../data/chemistryPlatforms";
import { IndustryIcon } from "../data/industryIcons";
import { SEOHead, Breadcrumbs, FAQSection, RelatedPages } from "../seo";
import { getFoamProblemPageSEO } from "../seo/problemSeo";

export function ProblemsHubPage() {
  const seo = getFoamProblemPageSEO();

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      <section className="section-padding">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Common Foam <span className="text-gradient">Problems</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            Every foam problem has a root cause. We identify it and configure the right solution.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {foamProblems.map((p) => (
              <Link
                key={p.slug}
                to={`/foam-problems/${p.slug}`}
                className="block p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.07] transition-colors group"
              >
                <AlertTriangle className="w-7 h-7 text-amber-400 mb-3" />
                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {p.name}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={seo.faqs} />
    </div>
  );
}

export default function FoamProblemPage() {
  const { problemSlug } = useParams<{ problemSlug: string }>();
  if (!problemSlug) return <Navigate to="/foam-problems" replace />;

  const problem = getFoamProblemBySlug(problemSlug);
  if (!problem) return <Navigate to="/foam-problems" replace />;

  const seo = getFoamProblemPageSEO(problemSlug);
  if (!seo) return <Navigate to="/foam-problems" replace />;

  const affectedIndustries = industries.filter((i) =>
    problem.applicableIndustries.includes(i.slug)
  );

  const recommendedChem = problem.recommendedChemistry
    .map((slug) => getChemistryBySlug(slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />

      <section className="section-padding pb-10">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <AlertTriangle className="w-10 h-10 text-amber-400 mb-4" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {problem.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {problem.description}
          </p>
        </div>
      </section>

      {/* Causes */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-6">Root Causes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {problem.causes.map((c, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-6">Impact on Your Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {problem.consequences.map((c, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-900/10 border border-red-500/10">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Approach */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-4">Our Solution Approach</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-6">
            {problem.solutionApproach}
          </p>
          <h3 className="text-lg font-semibold text-white mb-4">Recommended Chemistry</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recommendedChem.map((chem) =>
              chem ? (
                <Link
                  key={chem.slug}
                  to={`/chemistry/${chem.slug}`}
                  className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-colors group"
                >
                  <FlaskConical className="w-6 h-6 text-brand-400 mb-2" />
                  <h4 className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors">
                    {chem.name}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">{chem.temperatureRange} · pH {chem.phRange}</p>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* Affected Industries */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-6">Industries Affected</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {affectedIndustries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/solutions/${ind.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-colors group"
              >
                <IndustryIcon slug={ind.slug} className="w-6 h-6 text-brand-400" />
                <span className="text-white text-sm font-medium group-hover:text-brand-400 transition-colors">
                  {ind.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={seo.faqs} heading={`${problem.name} — FAQ`} />
      <RelatedPages links={seo.relatedPages} heading="Related Foam Problems" hubLink={seo.hubPage} />

      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Experiencing {problem.name.toLowerCase()}?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Tell us about your process conditions. We'll identify the root cause and configure a solution.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center group">
              Discuss Your Process
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
