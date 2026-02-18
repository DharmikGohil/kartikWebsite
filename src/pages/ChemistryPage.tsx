// ─── Chemistry Platform × Industry Programmatic Page ──────────────

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, FlaskConical, CheckCircle, AlertTriangle } from "lucide-react";
import { industries } from "../data/industries";
import { getChemistryBySlug, chemistryPlatforms } from "../data/chemistryPlatforms";
import { IndustryIcon } from "../data/industryIcons";
import { SEOHead, Breadcrumbs, FAQSection, RelatedPages } from "../seo";
import { getChemistryPageSEO, getChemistryIndustryPageSEO } from "../seo/chemistrySeo";

export function ChemistryHubPage() {
  const seo = getChemistryPageSEO();

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      <section className="section-padding">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Defoamer Chemistry <span className="text-gradient">Platforms</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            We engineer foam control solutions using five chemistry platforms, each selected based on your process conditions, compatibility requirements, and environmental profile.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="space-y-6">
            {chemistryPlatforms.map((chem) => (
              <Link
                key={chem.slug}
                to={`/chemistry/${chem.slug}`}
                className="block p-7 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.07] transition-colors duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <FlaskConical className="w-8 h-8 text-brand-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">
                      {chem.name}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                      {chem.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                        {chem.temperatureRange}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                        pH {chem.phRange}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                        Biodegradability: {chem.biodegradability}
                      </span>
                    </div>
                  </div>
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

export default function ChemistryPage() {
  const { chemistrySlug, industrySlug } = useParams<{
    chemistrySlug: string;
    industrySlug?: string;
  }>();

  if (!chemistrySlug) return <Navigate to="/chemistry" replace />;

  const chemistry = getChemistryBySlug(chemistrySlug);
  if (!chemistry) return <Navigate to="/chemistry" replace />;

  // If industry-specific chemistry page
  if (industrySlug) {
    const industry = industries.find((i) => i.slug === industrySlug);
    if (!industry) return <Navigate to={`/chemistry/${chemistrySlug}`} replace />;

    const seo = getChemistryIndustryPageSEO(chemistrySlug, industrySlug);
    if (!seo) return <Navigate to={`/chemistry/${chemistrySlug}`} replace />;

    return (
      <div className="min-h-screen bg-navy-900 pt-20">
        <SEOHead meta={seo.meta} schemas={seo.schemas} />
        <section className="section-padding pb-10">
          <div className="container-max">
            <Breadcrumbs items={seo.breadcrumbs} />
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="w-6 h-6 text-brand-400" />
              <IndustryIcon slug={industry.slug} className="w-6 h-6 text-brand-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {chemistry.shortName} Defoamers for{" "}
              <span className="text-gradient">{industry.name}</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              {chemistry.description}
            </p>
          </div>
        </section>

        <section className="section-padding bg-navy-950/50">
          <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Advantages
              </h2>
              <div className="space-y-2">
                {chemistry.advantages.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{a}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" /> Considerations
              </h2>
              <div className="space-y-2">
                {chemistry.limitations.map((l, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-xl font-bold text-white mb-4">
              {industry.name} Process Stages Using {chemistry.shortName} Chemistry
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industry.subProcesses
                .filter((sp) =>
                  sp.engineeringApproach.chemistryPlatforms
                    .toLowerCase()
                    .includes(chemistry.shortName.toLowerCase().split("-")[0].split(" ")[0])
                )
                .map((sp, i) => (
                  <Link
                    key={i}
                    to={`/solutions/${industry.slug}/${sp.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-colors group"
                  >
                    <h3 className="text-base font-semibold text-white mb-1 group-hover:text-brand-400 transition-colors">
                      {sp.name}
                    </h3>
                    <p className="text-gray-400 text-xs">{sp.operatingConditions.temperature} · pH {sp.operatingConditions.ph}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={seo.faqs} />
        <RelatedPages links={seo.relatedPages} hubLink={seo.hubPage} />

        <section className="section-padding">
          <div className="container-max">
            <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need {chemistry.shortName.toLowerCase()} defoamers for {industry.name.toLowerCase()}?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our technical team will evaluate your process conditions and recommend the optimal {chemistry.shortName.toLowerCase()} formulation.
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

  // Chemistry platform overview page
  const seo = getChemistryPageSEO(chemistrySlug);

  const applicableInds = industries.filter((i) =>
    chemistry.applicableIndustries.includes(i.slug)
  );

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      <section className="section-padding pb-10">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <FlaskConical className="w-10 h-10 text-brand-400 mb-4" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {chemistry.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {chemistry.description}
          </p>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">{chemistry.mechanism}</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Temperature</div>
              <div className="text-white text-sm font-medium">{chemistry.temperatureRange}</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">pH Range</div>
              <div className="text-white text-sm font-medium">{chemistry.phRange}</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Biodegradability</div>
              <div className="text-white text-sm font-medium">{chemistry.biodegradability}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-6">Industries Using {chemistry.shortName} Chemistry</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applicableInds.map((ind) => (
              <Link
                key={ind.slug}
                to={`/chemistry/${chemistrySlug}/${ind.slug}`}
                className="block p-5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-colors group"
              >
                <IndustryIcon slug={ind.slug} className="w-7 h-7 text-brand-400 mb-2" />
                <h3 className="text-base font-semibold text-white group-hover:text-brand-400 transition-colors">
                  {chemistry.shortName} for {ind.name}
                </h3>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2">{ind.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={seo.faqs} heading={`${chemistry.shortName} Defoamer FAQ`} />
      <RelatedPages links={seo.relatedPages} heading="Other Chemistry Platforms" hubLink={seo.hubPage} />
    </div>
  );
}
