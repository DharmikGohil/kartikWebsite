// ─── Related Pages / Internal Linking Component ──────────────────

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { InternalLink } from "./types";

interface RelatedPagesProps {
  links: InternalLink[];
  heading?: string;
  hubLink?: InternalLink;
}

export default function RelatedPages({
  links,
  heading = "Related Solutions",
  hubLink,
}: RelatedPagesProps) {
  if (!links.length) return null;

  return (
    <section className="section-padding bg-navy-950/50">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block p-5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.07] transition-colors duration-200 group"
            >
              <h3 className="text-base font-semibold text-white mb-1 group-hover:text-brand-400 transition-colors">
                {link.label}
              </h3>
              {link.description && (
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                  {link.description}
                </p>
              )}
            </Link>
          ))}
        </div>
        {hubLink && (
          <div className="mt-6">
            <Link
              to={hubLink.href}
              className="text-brand-400 hover:text-brand-300 font-medium inline-flex items-center group text-sm transition-colors"
            >
              {hubLink.label}
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
