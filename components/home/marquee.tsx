const items = [
  "Roof Replacement",
  "Storm Damage",
  "Free Inspections",
  "Leak Repair",
  "Seamless Gutters",
  "Insurance Claims",
  "Licensed & Insured",
  "Financing Available",
]

export function Marquee() {
  return (
    <div className="will-marquee overflow-hidden border-y border-primary/20 bg-primary py-4">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg font-extrabold uppercase tracking-wide text-primary-foreground">
            {item}
            <span className="text-primary-foreground/50">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
