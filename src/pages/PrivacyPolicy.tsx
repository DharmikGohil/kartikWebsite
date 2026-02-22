import { SEOHead, Breadcrumbs } from '../seo'
import { SITE_NAME } from '../seo/config'
import { buildBreadcrumbSchema } from '../seo/schema'

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ];

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead
        meta={{ title: `Privacy Policy | ${SITE_NAME}`, description: "Privacy policy for ChemAssure Global website.", canonical: "/privacy-policy", noindex: true }}
        schemas={[buildBreadcrumbSchema(breadcrumbs)]}
      />
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-gray-300 leading-relaxed text-sm">
            <p className="text-gray-400 text-xs">Last updated: February 2026</p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">1. Information We Collect</h2>
              <p>When you use our contact form or request pricing, we collect the information you provide: name, email address, company name, phone number, and details about your industrial process. We do not collect information automatically beyond standard web analytics (page views, referral source).</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">2. How We Use Your Information</h2>
              <p>We use the information you provide solely to respond to your inquiry, recommend foam control solutions for your process, and communicate with you about our services. We do not use your information for automated marketing or sell it to third parties.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">3. Data Sharing</h2>
              <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share your information with service providers who help us operate our website (email delivery via Resend, hosting via Vercel, analytics via Vercel Analytics) - these providers process data only on our behalf.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">4. Data Retention</h2>
              <p>We retain your contact information for as long as necessary to respond to your inquiry and maintain our business relationship. You may request deletion of your data at any time by contacting us.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">5. Cookies & Analytics</h2>
              <p>We use Vercel Analytics for basic website usage statistics. This service collects anonymized page view data and does not use cookies for tracking. No personally identifiable information is collected through analytics.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also withdraw consent for data processing at any time. To exercise these rights, contact us at chemsassureglobal@gmail.com.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">7. Contact</h2>
              <p>For privacy-related questions, contact us at: chemsassureglobal@gmail.com or +91 93137 49421.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
