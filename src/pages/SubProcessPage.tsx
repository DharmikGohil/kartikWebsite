// ─── Sub-Process Page (Programmatic SEO Template) ─────────────────
// Each industry × sub-process gets a unique, content-rich page.

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, AlertTriangle, Thermometer, FlaskConical, Settings, CheckCircle, Leaf } from "lucide-react";
import { industries } from "../data/industries";
import { IndustryIcon } from "../data/industryIcons";
import { SEOHead, Breadcrumbs, FAQSection, RelatedPages, getSubProcessPageSEO, slugify } from "../seo";

export default function SubProcessPage() {
  const { industrySlug, subProcessSlug } = useParams<{
    industrySlug: string;
    subProcessSlug: string;
  }>();

  const industry = industries.find((i) => i.slug === industrySlug);
  if (!industry) return <Navigate to="/solutions" replace />;

  const subProcess = industry.subProcesses.find(
    (sp) => slugify(sp.name) === subProcessSlug
  );
  if (!subProcess) return <Navigate to={`/solutions/${industrySlug}`} replace />;

  const seo = getSubProcessPageSEO(industrySlug!, subProcessSlug!);
  if (!seo) return <Navigate to="/solutions" replace />;

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead meta={seo.meta} schemas={seo.schemas} />

      {/* Header */}
      <section className="section-padding pb-10">
        <div className="container-max">
          <Breadcrumbs items={seo.breadcrumbs} />
          <div className="flex items-center gap-3 mb-4">
            <IndustryIcon slug={industry.slug} className="w-10 h-10 text-brand-400" />
            <Link
              to={`/solutions/${industry.slug}`}
              className="text-brand-400 hover:text-brand-300 text-sm font-medium transition-colors"
            >
              {industry.name}
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {subProcess.name} <span className="text-gradient">Foam Control</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {subProcess.engineeringApproach.description}
          </p>
        </div>
      </section>

      {/* Foam Challenges */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="flex items-center space-x-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Common Foam Challenges</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subProcess.foamChallenges.map((c, i) => (
              <div key={i} className="flex items-start space-x-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-1.5 h-1.5 bg-amber-400/70 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Conditions */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex items-center space-x-2 mb-6">
            <Thermometer className="w-5 h-5 text-brand-400" />
            <h2 className="text-2xl font-bold text-white">Operating Conditions</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Temperature", value: subProcess.operatingConditions.temperature },
              { label: "pH", value: subProcess.operatingConditions.ph },
              { label: "Foam Type", value: subProcess.operatingConditions.foamType },
              { label: "Shear Level", value: subProcess.operatingConditions.shearLevel },
            ].map((cond, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{cond.label}</div>
                <div className="text-white text-sm font-medium">{cond.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Approach */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="flex items-center space-x-2 mb-6">
            <FlaskConical className="w-5 h-5 text-brand-400" />
            <h2 className="text-2xl font-bold text-white">Engineering Approach</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            {subProcess.engineeringApproach.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Chemistry Platforms", value: subProcess.engineeringApproach.chemistryPlatforms },
              { label: "Physical Forms", value: subProcess.engineeringApproach.physicalForms },
              { label: "Incompatibility Level", value: subProcess.engineeringApproach.incompatibilityLevel },
              { label: "ECO Grade", value: subProcess.engineeringApproach.ecoGrade },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-white text-sm font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Configurations */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex items-center space-x-2 mb-6">
            <Settings className="w-5 h-5 text-brand-400" />
            <h2 className="text-2xl font-bold text-white">Solution Configurations</h2>
          </div>
          <div className="space-y-3 max-w-2xl">
            {subProcess.solutionConfigurations.map((config, i) => (
              <div key={i} className="flex items-start space-x-3 p-4 rounded-xl bg-brand-900/10 border border-brand-500/10">
                <CheckCircle className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{config}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Note */}
      <section className="section-padding bg-navy-950/50">
        <div className="container-max">
          <div className="flex items-center space-x-2 mb-4">
            <Leaf className="w-5 h-5 text-green-400" />
            <h2 className="text-xl font-bold text-white">Sustainability</h2>
          </div>
          <div className="p-5 rounded-xl bg-green-900/10 border border-green-500/15 max-w-3xl">
            <p className="text-gray-300 text-sm leading-relaxed">{industry.sustainabilityNote}</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={seo.faqs} heading={`${subProcess.name} Foam Control FAQ`} />

      {/* Related Pages (hub-and-spoke internal linking) */}
      <RelatedPages
        links={seo.relatedPages}
        heading="Related Foam Control Solutions"
        hubLink={seo.hubPage}
      />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-brand-900/20 to-brand-800/10 border border-brand-500/15 rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need foam control for {subProcess.name.toLowerCase()}?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Tell us about your operating conditions. We'll configure a solution for your specific {industry.name.toLowerCase()} process.
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
