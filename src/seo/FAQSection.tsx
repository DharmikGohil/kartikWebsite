// ─── FAQ Accordion Component ──────────────────────────────────────

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "./types";

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

export default function FAQSection({ faqs, heading = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <section className="section-padding">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{heading}</h2>
        <div className="space-y-3 max-w-3xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-white/[0.03] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-white font-medium text-sm pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
