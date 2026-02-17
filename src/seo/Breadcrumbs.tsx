// ─── Breadcrumb Navigation Component ──────────────────────────────

import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "./types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.url} className="flex items-center">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 mx-1 text-gray-600" />}
              {isLast ? (
                <span className="text-gray-300" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="hover:text-brand-400 transition-colors duration-150"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
