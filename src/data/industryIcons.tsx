import { Shirt, Droplets, Paintbrush, FileText, HardHat, Wheat, UtensilsCrossed, Pill, Fuel, Waves, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  "textile-processing": Shirt,
  "wastewater-treatment": Droplets,
  "paints-coatings": Paintbrush,
  "paper-pulp": FileText,
  "cement-construction": HardHat,
  "sugar-fermentation": Wheat,
  "food-beverage": UtensilsCrossed,
  "pharma-biotech": Pill,
  "oil-gas": Fuel,
  "municipal-water-reuse": Waves,
}

export function IndustryIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = iconMap[slug] || Droplets
  return <Icon className={className} />
}
