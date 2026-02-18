// ─── International Location Page ──────────────────────────────────

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";
import { industries } from "../data/industries";
import { getCountryBySlug, getCityInCountry, countries } from "../data/locations";
import { IndustryIcon } from "../data/industryIcons";
import { SEOHead, Breadcrumbs, FAQSection, RelatedPages } from "../seo";
import { getGlobalLocationPageSEO, getGlobalHubSEO } from "../seo/globalLocationSeo";

export default function GlobalLocationPage() {
  const { countrySlug, citySlug } = useParams<{ countrySlug: string; citySlug?: string }>();
  if (!countrySlug) return <Navigate to="/global" replace />;

  const seo = citySlug
    ? getGlobalLocationPageSEO(countrySlug, citySlug)
    : getGlobalLocationPageSEO(countrySlug);

  if (!seo) return <Navigate to="/global" replace />;

  const country = getCountryBySlug(countrySlug);
  if (!country) return <Navigate to="/global" replace />;

  const city = citySlug ? getCityInCountry(countrySlug, citySlug) : undefined;
  const locationName = city ? `${city.city.name}, ${country.name}` : country.name;

  const relevantIndustries = industries.filter((i) =>
    country.majorIndustries.includes(i.slug)
  );

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      <section className="section-padding pb-10">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-brand-400" />
            <span className="text-brand-400 font-medium text-sm uppercase tracking-wider">
              {country.region} · {locationName}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Foam Control Solutions in{" "}
            <span className="text-gradient">{locationName}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {country.industrialProfile}
          </p>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-6">
            Industries We Serve in {locationName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relevantIndustries.map((ind) => (
              <Link key={ind.slug} to={`/solutions/${ind.slug}`}
                className="block p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.07] transition-colors group">
                <IndustryIcon slug={ind.slug} className="w-8 h-8 text-brand-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">{ind.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{ind.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {!citySlug && country.cities.length > 0 && (
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-white mb-6">Industrial Cities in {country.name}</h2>
            <div className="flex flex-wrap gap-3">
              {country.cities.map((c) => (
                <Link key={c.slug} to={`/global/${countrySlug}/${c.slug}`}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-500/30 transition-colors text-sm font-medium">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={seo.faqs} heading={`Foam Control in ${locationName} — FAQ`} />
      <RelatedPages links={seo.relatedPages} heading="Related Solutions" hubLink={seo.hubPage} />

      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need foam control solutions in {locationName}?
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

export function GlobalHubPage() {
  const seo = getGlobalHubSEO();
  const regions = [...new Set(countries.map((c) => c.region))];

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      <section className="section-padding pb-10">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Global Foam Control <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Industrial defoamer and antifoam solutions across {countries.length}+ countries worldwide.
          </p>
        </div>
      </section>

      {regions.map((region) => (
        <section key={region} className="section-padding border-t border-white/5">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-white mb-6">{region}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {countries.filter((c) => c.region === region).map((c) => (
                <Link key={c.slug} to={`/global/${c.slug}`}
                  className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-colors group">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-brand-400 transition-colors">{c.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{c.industrialProfile.split(".")[0]}.</p>
                  <p className="text-brand-400/60 text-xs mt-2">{c.cities.length} cities</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <FAQSection faqs={seo.faqs} heading="Global Foam Control — FAQ" />
      <RelatedPages links={seo.relatedPages} heading="Related" hubLink={seo.hubPage} />
    </div>
  );
}
