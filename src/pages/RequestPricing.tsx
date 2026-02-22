import { useState } from 'react'
import { Send, CheckCircle, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { SEOHead, Breadcrumbs } from '../seo'
import { SITE_NAME } from '../seo/config'
import { buildBreadcrumbSchema, buildWebPageSchema } from '../seo/schema'

const industryOptions = [
  "Textile Processing", "Wastewater Treatment", "Paints & Coatings", "Paper & Pulp",
  "Cement & Construction", "Sugar & Fermentation", "Food & Beverage",
  "Pharmaceutical & Biotech", "Oil & Gas", "Municipal Water Reuse", "Other",
]

const RequestPricing = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Request Pricing", url: "/request-pricing" },
  ];

  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '',
    industry: '', productCodes: '', estimatedVolume: '',
    additionalNotes: '', agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeToTerms) return
    setIsSubmitting(true)

    try {
      const message = `PRICING REQUEST

Industry: ${formData.industry}
Product Codes / Grades: ${formData.productCodes || 'Not specified'}
Estimated Monthly Volume: ${formData.estimatedVolume || 'Not specified'}

Additional Notes:
${formData.additionalNotes || 'None'}

Contact: ${formData.name} | ${formData.email} | ${formData.company} | ${formData.phone}`

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, company: formData.company, phone: formData.phone, message }),
      })
      const result = await response.json()
      if (response.ok && result.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', company: '', phone: '', industry: '', productCodes: '', estimatedVolume: '', additionalNotes: '', agreeToTerms: false })
        }, 6000)
      } else {
        throw new Error(result.error || 'Failed to send')
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to send. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = "w-full px-4 py-3 bg-white/5 text-white border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500/50 transition-colors duration-200 placeholder-gray-500 text-sm"
  const labelClass = "block text-sm font-medium text-gray-300 mb-1.5"

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <SEOHead
        meta={{ title: `Request Pricing | ${SITE_NAME}`, description: "Request pricing for ChemAssure Global defoamer and antifoam products. Get a customized quote for your industrial foam control needs.", canonical: "/request-pricing" }}
        schemas={[buildBreadcrumbSchema(breadcrumbs), buildWebPageSchema("Request Pricing", "Get pricing for industrial foam control products.", "/request-pricing")]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1768268959053-770212976791?w=1200&q=80" alt="Industrial golden pipes and machinery" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pb-10 pt-28">
          <div className="container-max max-w-3xl">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Request <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us what you need and we'll provide a customized quote. Pricing depends on product grade, volume, and delivery requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className={labelClass}>Company *</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className={inputClass} placeholder="Company name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 ..." />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="industry" className={labelClass}>Industry *</label>
                    <select id="industry" name="industry" value={formData.industry} onChange={handleChange} required className={inputClass}>
                      <option value="">Select industry</option>
                      {industryOptions.map(opt => <option key={opt} value={opt} className="bg-navy-800">{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="productCodes" className={labelClass}>Product Codes / Grades (if known)</label>
                    <input type="text" id="productCodes" name="productCodes" value={formData.productCodes} onChange={handleChange} className={inputClass} placeholder="e.g. TP-101, WW-102, or describe what you need" />
                  </div>
                  <div>
                    <label htmlFor="estimatedVolume" className={labelClass}>Estimated Monthly Volume</label>
                    <input type="text" id="estimatedVolume" name="estimatedVolume" value={formData.estimatedVolume} onChange={handleChange} className={inputClass} placeholder="e.g. 200 kg/month, 1 ton/month" />
                  </div>
                  <div>
                    <label htmlFor="additionalNotes" className={labelClass}>Additional Notes</label>
                    <textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows={3} className={inputClass + " resize-none"} placeholder="Delivery location, packaging preference, urgency..." />
                  </div>
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="agreeToTerms" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} required className="w-4 h-4 text-brand-500 bg-white/5 border-white/20 rounded focus:ring-brand-500 mt-1" />
                    <label htmlFor="agreeToTerms" className="text-sm text-gray-400">
                      I agree to the processing of my data for the purpose of providing a pricing quote.
                    </label>
                  </div>
                  <button type="submit" disabled={isSubmitting || !formData.agreeToTerms} className={`w-full py-3.5 px-8 rounded-lg font-semibold text-sm ${isSubmitting || !formData.agreeToTerms ? 'bg-gray-700/30 text-gray-500 cursor-not-allowed' : 'btn-primary'}`}>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2"><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>Sending...</span></span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2"><Send className="w-4 h-4" /><span>Request Quote</span></span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center p-10 bg-white/5 rounded-2xl border border-brand-500/20">
                  <CheckCircle className="w-14 h-14 text-brand-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                  <p className="text-gray-300">We'll prepare a customized quote and respond within 1 business day.</p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:chemsassureglobal@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-brand-400 transition-colors text-sm">
                    <Mail size={16} className="text-brand-400" /><span>chemsassureglobal@gmail.com</span>
                  </a>
                  <a href="tel:+919313749421" className="flex items-center space-x-3 text-gray-400 hover:text-brand-400 transition-colors text-sm">
                    <Phone size={16} className="text-brand-400" /><span>+91 93137 49421</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-400 text-sm">
                    <MapPin size={16} className="text-brand-400" /><span>Ground Floor, Plot No. 134, Pramukh Park Society, Sanya Road, Simada Gam, Patel Park, Surat - 395006, Gujarat, India</span>
                  </div>
                </div>
              </div>
              <a href="https://wa.me/919313749421" className="flex items-center justify-center space-x-2 w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors text-sm">
                <MessageCircle className="w-4 h-4" /><span>Chat on WhatsApp</span>
              </a>
              <div className="p-6 rounded-xl bg-brand-900/15 border border-brand-500/15">
                <h3 className="text-sm font-semibold text-white mb-2">Pricing depends on:</h3>
                <ul className="space-y-1.5 text-gray-400 text-xs">
                  <li>• Product grade and chemistry platform</li>
                  <li>• Order volume and frequency</li>
                  <li>• Packaging requirements</li>
                  <li>• Delivery location</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RequestPricing
