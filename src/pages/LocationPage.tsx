// ─── Location × Industry Programmatic Page ────────────────────────

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { industries } from "../data/industries";
import { getStateBySlug, getCityInState, states } from "../data/locations";
import { IndustryIcon } from "../data/industryIcons";
import { SEOHead, Breadcrumbs, FAQSection, RelatedPages } from "../seo";
import { getLocationPageSEO } from "../seo/locationSeo";

export default function LocationPage() {
  const { stateSlug, citySlug } = useParams<{ stateSlug: string; citySlug?: string }>();
  if (!stateSlug) return <Navigate to="/locations" replace />;

  const seo = citySlug
    ? getLocationPageSEO(stateSlug, citySlug)
    : getLocationPageSEO(stateSlug);

  if (!seo) return <Navigate to="/locations" replace />;

  const state = getStateBySlug(stateSlug);
  if (!state) return <Navigate to="/locations" replace />;

  const city = citySlug ? getCityInState(stateSlug, citySlug) : undefined;
  const locationName = city ? `${city.city.name}, ${state.name}` : state.name;

  // Get industries relevant to this state
  const relevantIndustries = industries.filter((i) =>
    state.majorIndustries.includes(i.slug)
  );

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />

      <section className="section-padding pb-10">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-brand-400" />
            <span className="text-brand-400 font-medium text-sm uppercase tracking-wider">
              {locationName}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Foam Control Solutions in{" "}
            <span className="text-gradient">{locationName}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {state.industrialProfile}
          </p>
        </div>
      </section>

      {/* Industries in this location */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-6">
            Industries We Serve in {locationName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relevantIndustries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/solutions/${ind.slug}`}
                className="block p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.07] transition-colors duration-200 group"
              >
                <IndustryIcon slug={ind.slug} className="w-8 h-8 text-brand-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {ind.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities in this state (only on state pages) */}
      {!citySlug && state.cities.length > 0 && (
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-white mb-6">
              Industrial Cities in {state.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {state.cities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/locations/${stateSlug}/${c.slug}`}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-500/30 transition-colors text-sm font-medium"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nearby states */}
      {!citySlug && (
        <section className="section-padding bg-navy-950/50">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-white mb-6">
              Other States We Serve
            </h2>
            <div className="flex flex-wrap gap-3">
              {states
                .filter((s) => s.slug !== stateSlug)
                .slice(0, 8)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to={`/locations/${s.slug}`}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-500/30 transition-colors text-sm font-medium"
                  >
                    {s.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={seo.faqs} heading={`Foam Control in ${locationName} — FAQ`} />
      <RelatedPages links={seo.relatedPages} heading="Related Solutions" hubLink={seo.hubPage} />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need foam control solutions in {locationName}?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our technical team serves industrial clients across {state.name}. Tell us about your process and we'll configure a solution for your plant.
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
