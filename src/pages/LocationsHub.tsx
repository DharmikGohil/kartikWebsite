// ─── Locations Hub Page ────────────────────────────────────────────

import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { states } from "../data/locations";
import { SEOHead, Breadcrumbs, FAQSection } from "../seo";
import { getLocationsHubSEO } from "../seo/locationSeo";

export default function LocationsHub() {
  const seo = getLocationsHubSEO();

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      <section className="section-padding">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Foam Control Solutions <span className="text-gradient">Across India</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            We serve industrial clients across {states.length} states with application-specific defoamer and antifoam solutions engineered for local process conditions.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {states.map((state) => (
              <Link
                key={state.slug}
                to={`/locations/${state.slug}`}
                className="block p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.07] transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white group-hover:text-brand-400 transition-colors">
                    {state.name}
                  </h2>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">
                  {state.industrialProfile.split(".")[0]}.
                </p>
                <div className="text-xs text-gray-500">
                  {state.cities.length} industrial cities
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={seo.faqs} />
    </div>
  );
}
