// ─── Location × Industry Cross-Product Page ───────────────────────

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { industries } from "../data/industries";
import { getStateBySlug, getCityInState, getCountryBySlug, getCityInCountry } from "../data/locations";
import { chemistryPlatforms } from "../data/chemistryPlatforms";
import { foamProblems } from "../data/foamProblems";
import { SEOHead, Breadcrumbs, FAQSection, RelatedPages } from "../seo";
import { getLocationIndustryPageSEO } from "../seo/crossProductSeo";

export default function LocationIndustryPage() {
  const { stateSlug, citySlug, industrySlug, countrySlug } = useParams<{
    stateSlug?: string; citySlug?: string; industrySlug: string; countrySlug?: string;
  }>();

  if (!industrySlug) return <Navigate to="/solutions" replace />;

  const industry = industries.find((i) => i.slug === industrySlug);
  if (!industry) return <Navigate to="/solutions" replace />;

  // Determine location context (India vs International)
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

  const seo = getLocationIndustryPageSEO(locationName, industrySlug, parentPath);
  if (!seo) return <Navigate to="/solutions" replace />;

  const relevantChemistry = chemistryPlatforms.filter((c) =>
    c.applicableIndustries.includes(industrySlug)
  );
  const relevantProblems = foamProblems.filter((p) =>
    p.applicableIndustries.includes(industrySlug)
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
              {locationName} · {industry.name}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {industry.name} Foam Control in{" "}
            <span className="text-gradient">{locationName}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {industry.shortDesc} Engineered defoamer solutions configured for {locationName} industrial operations.
          </p>
        </div>
      </section>

      {/* Sub-processes */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-6">
            {industry.name} Process Stages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industry.subProcesses.map((sp) => (
              <div key={sp.name} className="p-6 rounded-xl bg-white/5 border border-white/5">
                <h3 className="text-lg font-semibold text-white mb-2">{sp.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{sp.engineeringApproach.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-brand-500/10 text-brand-400">
                    {sp.operatingConditions.temperature}
                  </span>
                  <span className="px-2 py-1 rounded bg-brand-500/10 text-brand-400">
                    pH {sp.operatingConditions.ph}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chemistry options */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-6">
            Defoamer Chemistry for {industry.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relevantChemistry.slice(0, 4).map((chem) => (
              <Link key={chem.slug} to={`/chemistry/${chem.slug}/${industrySlug}`}
                className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-colors group">
                <h3 className="text-white font-semibold mb-1 group-hover:text-brand-400 transition-colors">
                  {chem.shortName}
                </h3>
                <p className="text-gray-400 text-sm">{chem.temperatureRange} · pH {chem.phRange}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common problems */}
      {relevantProblems.length > 0 && (
        <section className="section-padding bg-navy-950/50">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-white mb-6">
              Common Foam Problems in {industry.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {relevantProblems.slice(0, 6).map((p) => (
                <Link key={p.slug} to={`/foam-problems/${p.slug}`}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-500/30 transition-colors text-sm">
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={seo.faqs} heading={`${industry.name} Foam Control in ${locationName} — FAQ`} />
      <RelatedPages links={seo.relatedPages} heading="Related Solutions" hubLink={seo.hubPage} />

      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need {industry.name.toLowerCase()} foam control in {locationName}?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Tell us about your {industry.name.toLowerCase()} process and we'll configure a defoamer solution for your plant.
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
