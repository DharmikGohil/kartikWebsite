import { SEOHead, Breadcrumbs } from '../seo'
import { SITE_NAME } from '../seo/config'
import { buildBreadcrumbSchema } from '../seo/schema'

const Terms = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms" },
  ];

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead
        meta={{ title: `Terms of Service | ${SITE_NAME}`, description: "Terms of service for ChemAssure Global website.", canonical: "/terms", noindex: true }}
        schemas={[buildBreadcrumbSchema(breadcrumbs)]}
      />
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="space-y-6 text-gray-300 leading-relaxed text-sm">
            <p className="text-gray-400 text-xs">Last updated: February 2026</p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">1. About This Website</h2>
              <p>This website is operated by ChemAssure Global, a foam control engineering company based in Surat, Gujarat, India. The website provides information about our services, technologies, and industry solutions.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">2. Information Accuracy</h2>
              <p>The technical information, product descriptions, and process recommendations on this website are provided for general informational purposes. While we strive for accuracy, specific product performance depends on actual process conditions and must be validated through testing. Nothing on this website constitutes a guarantee of performance.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">3. Product Recommendations</h2>
              <p>Product codes, trade names, and technical specifications listed on this website are indicative. Final product selection, dosage, and application method must be confirmed through direct consultation with our technical team and validated under your actual plant conditions.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">4. Intellectual Property</h2>
              <p>All content on this website - including text, graphics, data, and design - is the property of ChemAssure Global and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use our content without written permission.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">5. Limitation of Liability</h2>
              <p>ChemAssure Global shall not be liable for any direct, indirect, or consequential damages arising from the use of information on this website. All product applications should be validated through proper testing and consultation.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">6. Contact</h2>
              <p>For questions about these terms, contact us at: chemsassureglobal@gmail.com.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
