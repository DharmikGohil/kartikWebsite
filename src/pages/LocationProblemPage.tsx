// ─── Location × Problem Cross-Product Page ────────────────────────

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, MapPin, AlertTriangle } from "lucide-react";
import { getFoamProblemBySlug } from "../data/foamProblems";
import { industries } from "../data/industries";
import { getStateBySlug, getCityInState, getCountryBySlug, getCityInCountry } from "../data/locations";
import { SEOHead, Breadcrumbs, FAQSection, RelatedPages } from "../seo";
import { getLocationProblemPageSEO } from "../seo/crossProductSeo";

export default function LocationProblemPage() {
  const { stateSlug, citySlug, problemSlug, countrySlug } = useParams<{
    stateSlug?: string; citySlug?: string; problemSlug: string; countrySlug?: string;
  }>();

  if (!problemSlug) return <Navigate to="/foam-problems" replace />;
  const problem = getFoamProblemBySlug(problemSlug);
  if (!problem) return <Navigate to="/foam-problems" replace />;

  let locationName = "";
  let parentPath = "";
  if (countrySlug) {
    const countryCity = citySlug ? getCityInCountry(countrySlug, citySlug) : null;
    const country = getCountryBySlug(countrySlug);
    if (!country) return <Navigate to="/locations" replace />;
    locationName = countryCity ? `${countryCity.city.name}, ${country.name}` : country.name;
    parentPath = countryCity ? `/global/${countrySlug}/${citySlug}` : `/global/${countrySlug}`;
  } else if (stateSlug) {
    const state = getStateBySlug(stateSlug);
    if (!state) return <Navigate to="/locations" replace />;
    const city = citySlug ? getCityInState(stateSlug, citySlug) : undefined;
    locationName = city ? `${city.city.name}, ${state.name}` : state.name;
    parentPath = city ? `/locations/${stateSlug}/${citySlug}` : `/locations/${stateSlug}`;
  }

  const seo = getLocationProblemPageSEO(locationName, problemSlug, parentPath);
  if (!seo) return <Navigate to="/foam-problems" replace />;

  const affectedIndustries = industries.filter((i) =>
    problem.applicableIndustries.includes(i.slug)
  );

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      <section className="section-padding pb-10">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-brand-400" />
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-brand-400 font-medium text-sm uppercase tracking-wider">
              {locationName} · {problem.name}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {problem.name} Solutions in{" "}
            <span className="text-gradient">{locationName}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {problem.description.split(".").slice(0, 2).join(".")}. Expert foam control solutions available in {locationName}.
          </p>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Root Causes</h2>
              <ul className="space-y-2">
                {problem.causes.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-brand-400 mt-1">•</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Consequences</h2>
              <ul className="space-y-2">
                {problem.consequences.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-amber-400 mt-1">•</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-4">Our Solution Approach</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">{problem.solutionApproach}</p>
        </div>
      </section>

      {affectedIndustries.length > 0 && (
        <section className="section-padding bg-navy-950/50">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-white mb-6">
              Industries Affected in {locationName}
            </h2>
            <div className="flex flex-wrap gap-3">
              {affectedIndustries.map((ind) => (
                <Link key={ind.slug} to={`/solutions/${ind.slug}`}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-500/30 transition-colors text-sm">
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={seo.faqs} heading={`${problem.name} in ${locationName} — FAQ`} />
      <RelatedPages links={seo.relatedPages} heading="Related Solutions" hubLink={seo.hubPage} />

      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Facing {problem.name.toLowerCase()} in {locationName}?
            </h2>
            <Link to="/contact" className="btn-primary inline-flex items-center group">
              Get Expert Help
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
