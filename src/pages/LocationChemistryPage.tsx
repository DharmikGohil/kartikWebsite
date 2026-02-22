// ─── Location × Chemistry Cross-Product Page ──────────────────────

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { getChemistryBySlug, chemistryPlatforms } from "../data/chemistryPlatforms";
import { industries } from "../data/industries";
import { getStateBySlug, getCityInState, getCountryBySlug, getCityInCountry } from "../data/locations";
import { SEOHead, Breadcrumbs, FAQSection, RelatedPages } from "../seo";
import { getLocationChemistryPageSEO } from "../seo/crossProductSeo";

export default function LocationChemistryPage() {
  const { stateSlug, citySlug, chemistrySlug, countrySlug } = useParams<{
    stateSlug?: string; citySlug?: string; chemistrySlug: string; countrySlug?: string;
  }>();

  if (!chemistrySlug) return <Navigate to="/chemistry" replace />;
  const chem = getChemistryBySlug(chemistrySlug);
  if (!chem) return <Navigate to="/chemistry" replace />;

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

  const seo = getLocationChemistryPageSEO(locationName, chemistrySlug, parentPath);
  if (!seo) return <Navigate to="/chemistry" replace />;

  const applicableIndustries = industries.filter((i) =>
    chem.applicableIndustries.includes(i.slug)
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
              {locationName} · {chem.shortName}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {chem.name} in{" "}
            <span className="text-gradient">{locationName}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {chem.description.split(".").slice(0, 2).join(".")}. Available for industrial applications in {locationName}.
          </p>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white/5 border border-white/5">
              <p className="text-brand-400 text-sm font-medium mb-1">Temperature Range</p>
              <p className="text-white font-semibold">{chem.temperatureRange}</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/5">
              <p className="text-brand-400 text-sm font-medium mb-1">pH Range</p>
              <p className="text-white font-semibold">{chem.phRange}</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/5">
              <p className="text-brand-400 text-sm font-medium mb-1">Biodegradability</p>
              <p className="text-white font-semibold">{chem.biodegradability}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-6">
            Industries Using {chem.shortName} in {locationName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applicableIndustries.map((ind) => (
              <Link key={ind.slug} to={`/solutions/${ind.slug}`}
                className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-colors group">
                <h3 className="text-white font-semibold mb-1 group-hover:text-brand-400 transition-colors">{ind.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{ind.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-4">Other Chemistry Platforms</h2>
          <div className="flex flex-wrap gap-3">
            {chemistryPlatforms.filter((c) => c.slug !== chemistrySlug).map((c) => (
              <Link key={c.slug} to={`/chemistry/${c.slug}`}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-500/30 transition-colors text-sm">
                {c.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={seo.faqs} heading={`${chem.shortName} Defoamers in ${locationName} - FAQ`} />
      <RelatedPages links={seo.relatedPages} heading="Related Solutions" hubLink={seo.hubPage} />

      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need {chem.shortName.toLowerCase()} defoamers in {locationName}?
            </h2>
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
