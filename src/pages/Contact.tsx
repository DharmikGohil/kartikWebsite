import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react'
import { SEOHead, Breadcrumbs, getContactPageSEO } from '../seo'

const industryOptions = [
  "Textile Processing",
  "Wastewater Treatment & Water Reuse",
  "Paints & Coatings",
  "Paper & Pulp",
  "Cement & Construction",
  "Sugar & Fermentation",
  "Food & Beverage",
  "Pharmaceutical & Biotech",
  "Oil & Gas / Petrochemical",
  "Municipal Water Reuse & Advanced STP",
  "Other",
]

const processStepOptions: Record<string, string[]> = {
  "Textile Processing": ["Washing / Scouring", "High-Temperature Dyeing", "Finishing / Padding", "Printing", "Other"],
  "Wastewater Treatment & Water Reuse": ["Aeration Tank", "Clarifier", "Sludge Handling", "MBR System", "Other"],
  "Paints & Coatings": ["Grinding / Dispersion", "Let-Down", "Filling / Packaging", "Application", "Other"],
  "Paper & Pulp": ["Pulp Washing", "Paper Machine (Forming)", "Coating", "Bleaching", "Other"],
  "Cement & Construction": ["Dry Mortar / Premix", "Ready-Mix Concrete", "Tile Adhesive", "Self-Leveling", "Other"],
  "Sugar & Fermentation": ["Fermentation", "Evaporation / Distillation", "Sugar Boiling", "Other"],
  "Food & Beverage": ["Fermentation", "CIP System", "Evaporation / Concentration", "Beverage Filling", "Other"],
  "Pharmaceutical & Biotech": ["Bioreactor", "Fermentation", "API Processing", "CIP / Sterilization", "Other"],
  "Oil & Gas / Petrochemical": ["Gas-Oil Separation", "Distillation", "Amine Treating", "Drilling Mud", "Other"],
  "Municipal Water Reuse & Advanced STP": ["Aeration Tank", "Clarifier", "MBR System", "Tertiary Treatment", "Other"],
  "Other": ["Please describe in message"],
}

const Contact = () => {
  const seo = getContactPageSEO();
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '',
    industry: '', processStep: '', temperatureRange: '',
    phRange: '', foamDescription: '', preferredForm: '',
    sustainabilityImportance: '', agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'industry' ? { processStep: '' } : {}),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeToTerms) return
    setIsSubmitting(true)

    try {
      const message = `FOAM CONTROL INQUIRY

Industry: ${formData.industry}
Process Step: ${formData.processStep}
Temperature Range: ${formData.temperatureRange}
pH Range: ${formData.phRange}
Preferred Form: ${formData.preferredForm}
Sustainability Importance: ${formData.sustainabilityImportance}

Foam Problem Description:
${formData.foamDescription}

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
          setFormData({ name: '', email: '', company: '', phone: '', industry: '', processStep: '', temperatureRange: '', phRange: '', foamDescription: '', preferredForm: '', sustainabilityImportance: '', agreeToTerms: false })
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
      <SEOHead meta={seo.meta} schemas={seo.schemas} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1764504985836-d494945ee174?w=1200&q=80" alt="Chemical reaction in laboratory" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pb-10 pt-28">
          <div className="container-max max-w-3xl">
            <Breadcrumbs items={seo.breadcrumbs} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Discuss Your <span className="text-gradient">Process</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us about your foam challenge and operating conditions. Our technical team will recommend a solution configured for your specific process.
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
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Company name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 ..." />
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-5">
                    <h3 className="text-lg font-semibold text-white mb-4">Process Details</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="industry" className={labelClass}>Industry *</label>
                      <select id="industry" name="industry" value={formData.industry} onChange={handleChange} required className={inputClass}>
                        <option value="">Select industry</option>
                        {industryOptions.map(opt => <option key={opt} value={opt} className="bg-navy-800">{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="processStep" className={labelClass}>Process Step</label>
                      <select id="processStep" name="processStep" value={formData.processStep} onChange={handleChange} className={inputClass} disabled={!formData.industry}>
                        <option value="">Select process step</option>
                        {(processStepOptions[formData.industry] || []).map(opt => <option key={opt} value={opt} className="bg-navy-800">{opt}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="temperatureRange" className={labelClass}>Temperature Range</label>
                      <input type="text" id="temperatureRange" name="temperatureRange" value={formData.temperatureRange} onChange={handleChange} className={inputClass} placeholder="e.g. 60–90°C" />
                    </div>
                    <div>
                      <label htmlFor="phRange" className={labelClass}>pH Range</label>
                      <input type="text" id="phRange" name="phRange" value={formData.phRange} onChange={handleChange} className={inputClass} placeholder="e.g. 6–8" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="foamDescription" className={labelClass}>Foam Problem Description *</label>
                    <textarea id="foamDescription" name="foamDescription" value={formData.foamDescription} onChange={handleChange} required rows={4} className={inputClass + " resize-none"} placeholder="Describe the foam issue - where it occurs, how severe, what you've tried..." />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredForm" className={labelClass}>Preferred Form</label>
                      <select id="preferredForm" name="preferredForm" value={formData.preferredForm} onChange={handleChange} className={inputClass}>
                        <option value="">No preference</option>
                        <option value="Liquid" className="bg-navy-800">Liquid</option>
                        <option value="Emulsion" className="bg-navy-800">Emulsion</option>
                        <option value="Powder" className="bg-navy-800">Powder</option>
                        <option value="Not sure" className="bg-navy-800">Not sure</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sustainabilityImportance" className={labelClass}>Sustainability Importance</label>
                      <select id="sustainabilityImportance" name="sustainabilityImportance" value={formData.sustainabilityImportance} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        <option value="Low" className="bg-navy-800">Low</option>
                        <option value="Medium" className="bg-navy-800">Medium</option>
                        <option value="High" className="bg-navy-800">High</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="agreeToTerms" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} required className="w-4 h-4 text-brand-500 bg-white/5 border-white/20 rounded focus:ring-brand-500 mt-1" />
                    <label htmlFor="agreeToTerms" className="text-sm text-gray-400">
                      I agree to the processing of my data for the purpose of responding to this inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToTerms}
                    className={`w-full py-3.5 px-8 rounded-lg font-semibold text-sm ${
                      isSubmitting || !formData.agreeToTerms
                        ? 'bg-gray-700/30 text-gray-500 cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center p-10 bg-white/5 rounded-2xl border border-brand-500/20">
                  <CheckCircle className="w-14 h-14 text-brand-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received</h3>
                  <p className="text-gray-300">Our technical team will review your process details and respond within 1 business day.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:chemsassureglobal@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm">
                    <Mail size={16} className="text-brand-400" />
                    <span>chemsassureglobal@gmail.com</span>
                  </a>
                  <a href="tel:+919313749421" className="flex items-center space-x-3 text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm">
                    <Phone size={16} className="text-brand-400" />
                    <span>+91 93137 49421</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-400 text-sm">
                    <MapPin size={16} className="text-brand-400" />
                    <span>Ground Floor, Plot No. 134, Pramukh Park Society, Sanya Road, Simada Gam, Surat - 395006, Gujarat, India</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919313749421"
                className="flex items-center justify-center space-x-2 w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="p-6 rounded-xl bg-brand-900/15 border border-brand-500/15">
                <h3 className="text-sm font-semibold text-white mb-2">Why this form?</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  The process details you provide help our technical team understand your foam challenge before the first conversation. This means faster, more relevant recommendations - configured for your specific conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
