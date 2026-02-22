import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  AlertTriangle,
  Thermometer,
  FlaskConical,
  Settings,
  Leaf,
  CheckCircle,
  Info,
} from "lucide-react";
import { industries, SubProcess } from "../data/industries";
import { IndustryIcon } from "../data/industryIcons";
import {
  SEOHead,
  Breadcrumbs,
  FAQSection,
  RelatedPages,
  getIndustryPageSEO,
  slugify,
} from "../seo";

const SubProcessBlock = ({
  sub,
  industrySlug,
}: {
  sub: SubProcess;
  industrySlug: string;
}) => (
  <div className="border border-white/5 rounded-2xl overflow-hidden">
    <div className="bg-white/[0.03] px-6 sm:px-8 py-5 border-b border-white/5 flex items-center justify-between">
      <h3 className="text-xl sm:text-2xl font-bold text-white">
        Defoamer for {sub.name}{sub.productGrades?.[0] && <span className="text-brand-400 ml-2">{sub.productGrades[0].code}</span>}
      </h3>
      <Link
        to={`/solutions/${industrySlug}/${slugify(sub.name)}`}
        className="text-brand-400 hover:text-brand-300 text-xs font-medium inline-flex items-center transition-colors"
      >
        Full details <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </Link>
    </div>

    <div className="p-6 sm:p-8 space-y-8">
      {/* Foam Challenges */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
            Common Foam Challenges
          </h4>
        </div>
        <div className="space-y-2">
          {sub.foamChallenges.map((c, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-amber-400/70 rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Operating Conditions */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Thermometer className="w-4 h-4 text-brand-400" />
          <h4 className="text-sm font-semibold text-brand-400 uppercase tracking-wider">
            Operating Conditions
          </h4>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: "Temperature", value: sub.operatingConditions.temperature },
            { label: "pH", value: sub.operatingConditions.ph },
            { label: "Foam Type", value: sub.operatingConditions.foamType },
            { label: "Shear Level", value: sub.operatingConditions.shearLevel },
          ].map((cond, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                {cond.label}
              </div>
              <div className="text-white text-xs font-medium">{cond.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Approach */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <FlaskConical className="w-4 h-4 text-brand-400" />
          <h4 className="text-sm font-semibold text-brand-400 uppercase tracking-wider">
            Engineering Approach
          </h4>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {sub.engineeringApproach.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Chemistry Platforms", value: sub.engineeringApproach.chemistryPlatforms },
            { label: "Physical Forms", value: sub.engineeringApproach.physicalForms },
            { label: "Incompatibility Level", value: sub.engineeringApproach.incompatibilityLevel },
            { label: "ECO Grade", value: sub.engineeringApproach.ecoGrade },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="text-white text-xs font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Configurations */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Settings className="w-4 h-4 text-brand-400" />
          <h4 className="text-sm font-semibold text-brand-400 uppercase tracking-wider">
            Solution Configurations
          </h4>
        </div>
        <div className="space-y-2">
          {sub.solutionConfigurations.map((config, i) => (
            <div
              key={i}
              className="flex items-start space-x-3 p-3 rounded-lg bg-brand-900/10 border border-brand-500/10"
            >
              <CheckCircle className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{config}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

const IndustryPage = () => {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const industry = industries.find((i) => i.slug === industrySlug);

  if (!industry) return <Navigate to="/solutions" replace />;

  const seo = getIndustryPageSEO(industrySlug!);
  if (!seo) return <Navigate to="/solutions" replace />;

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />

      {/* Hero */}
      <section className="section-padding pb-10">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <IndustryIcon slug={industry.slug} className="w-12 h-12 text-brand-400 mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {industry.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {industry.shortDesc}
          </p>
        </div>
      </section>

      {/* Positioning Note */}
      {industry.positioningNote && (
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="container-max">
            <div className="flex items-start space-x-3 p-5 rounded-xl bg-brand-900/15 border border-brand-500/15">
              <Info className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm leading-relaxed">
                {industry.positioningNote}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Sub-process navigation */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="container-max">
          <div className="flex flex-wrap gap-2">
            {industry.subProcesses.map((sub, i) => (
              <Link
                key={i}
                to={`/solutions/${industrySlug}/${slugify(sub.name)}`}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-brand-500/30 transition-colors duration-200"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-processes */}
      <section className="section-padding pt-4">
        <div className="container-max space-y-8">
          {industry.subProcesses.map((sub, i) => (
            <div key={i} id={`process-${i}`}>
              <SubProcessBlock sub={sub} industrySlug={industrySlug!} />
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Note */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="flex items-center space-x-3 mb-6">
            <Leaf className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Sustainability Note
            </h2>
          </div>
          <div className="p-6 rounded-xl bg-green-900/10 border border-green-500/15">
            <p className="text-gray-300 leading-relaxed">
              {industry.sustainabilityNote}
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={seo.faqs} heading={`${industry.name} Foam Control FAQ`} />

      {/* Related Industries (hub-and-spoke) */}
      <RelatedPages
        links={seo.relatedPages}
        heading="Explore Other Industries"
        hubLink={seo.hubPage}
      />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Discuss your {industry.name.toLowerCase()} process with our technical team
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Tell us about your foam challenge and operating conditions. We'll recommend
              a solution configured for your specific process.
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
};

export default IndustryPage;
