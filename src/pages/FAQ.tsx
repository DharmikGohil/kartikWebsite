import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "Why should I trust your report over my supplier's in-house certificate?",
    answer:
      "Great question. Many buyers and customs authorities are skeptical of in-house certificates because they lack independent verification. Our reports come from NABL/ISO-17025 accredited laboratories—the gold standard for testing. This third-party validation is what buyers and portals like SABER trust to clear shipments quickly, drastically reducing the risk of rejection.",
  },
  {
    question:
      "My last shipment was rejected at customs. How can you prevent this?",
    answer:
      "Rejections are costly and frustrating, often due to incorrect or non-verified documentation. We solve this at the source. Our secure chain-of-custody process (with photo/GPS proof) ensures the sample tested is genuinely from your shipment. The accredited lab report we provide is formatted to meet specific customs and buyer requirements, giving you the confidence that your documentation will be accepted the first time.",
  },
  {
    question: "I'm a small exporter. Is accredited testing affordable for me?",
    answer:
      "Absolutely! We've designed our service specifically for SMEs. Instead of paying for a huge, expensive test package upfront, we offer staged testing. We can start with a critical, low-cost test (like an FTIR scan to identify the dye class) to catch major issues early. You only invest in deeper, more expensive testing (like HPLC or heavy metals) once the basics are confirmed. This smart approach saves you money while protecting your shipment.",
  },
  {
    question: "I need results urgently. How fast can you get me a report?",
    answer:
      "Speed is critical in exports. We offer priority turnaround options. While complex tests take time, we manage the entire process aggressively—from instant sample pickup to constant lab follow-up. Quick screenings can be done in 24-48 hours, and we keep you updated at every step so you're never left waiting in the dark.",
  },
  {
    question: "What exactly is in the 'Certificate Pack' you provide?",
    answer:
      "We don't just give you a lab report. We provide a complete, ready-to-submit Certificate Pack that includes: The accredited Lab Test Report, a verified Certificate of Analysis (CoA), the product's MSDS/SDS for safety documentation, and a Chain-of-Custody Annex that proves the sample's integrity. This packaged solution is what buyers and import portals require, and we deliver it all in one place.",
  },
  {
    question:
      "How do you ensure the sample you test is actually from my production?",
    answer:
      "This is the core of our service! We don't just accept mailed samples. A ChemAssure representative will collect the sample directly from your production unit or warehouse. We photograph the collection process, GPS-tag the location, and immediately apply tamper-evident seals in front of you. This creates an irrefutable audit trail that gives you and your buyer 100% confidence in the results.",
  },
  {
    question:
      "We export to multiple countries (Gulf, Europe, USA). Can you handle different standards?",
    answer:
      "Yes, that's our expertise. Different regions have different compliance needs (e.g., REACH for Europe, GCC Conformity for the Gulf, CPSIA for the USA). Our experts help you select the right test panel for your target market. We ensure the report contains all necessary parameters and is formatted correctly for that region's import system, like SABER for Saudi Arabia.",
  },
  {
    question: "What makes you different from just finding a lab myself?",
    answer:
      "We are your single point of contact for a complex process. Instead of you calling multiple labs, negotiating prices, figuring out logistics, and deciphering technical reports, we handle it all. You get: one invoice, one point of contact, and a guaranteed auditable process. We translate complex lab jargon into clear, actionable steps, saving you time, hassle, and ultimately, protecting your profit.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-charcoal-800 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-2 leading-relaxed">
              Common buyer questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-navy-50 to-charcoal-50 rounded-2xl border border-navy-100/60 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left group"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-teal/20 rounded-xl flex items-center justify-center text-accent-teal font-bold text-lg sm:text-xl">
                        {index + 1}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-navy-900 pr-6">
                        {item.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-navy-600 group-hover:text-accent-teal">
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 sm:px-8 pb-6 sm:pb-8">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-gray-700 mb-6">
              Still have questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="btn-accent inline-flex items-center px-8 py-4 text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
