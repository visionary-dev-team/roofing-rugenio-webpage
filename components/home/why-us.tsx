import { Award, Check, Clock, Users } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { LinkButton } from "@/components/ui/link-button"
import { business } from "@/lib/business"

const points = [
  { icon: Users, title: "Family-owned & local", detail: "You deal with the owners, not a call center. We live where we work." },
  { icon: Award, title: "Premium materials", detail: "Manufacturer-certified installs with warranties that actually mean something." },
  { icon: Clock, title: "On time, every time", detail: "Clear timelines, tidy job sites, and crews that show up when they say." },
]

export function WhyUs() {
  return (
    <section id="why" className="overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/team.webp"
                alt="The Rugerios Roofing crew in front of a finished home in Aurora, IL"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl bg-primary px-6 py-4 text-primary-foreground shadow-2xl sm:-right-6">
              <span className="font-display text-4xl font-black">{business.yearsInBusiness}</span>
              <span className="text-sm font-semibold leading-tight">
                Years<br />in business
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Why Rugerios
            </p>
            <h2 className="mt-3 text-balance font-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
              Craftsmanship you can stand under.
            </h2>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              We started Rugerios Roofing to raise the bar for what homeowners should expect:
              honest quotes, premium work, and a crew that treats your home like their own.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <point.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {point.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
              {["Free estimates", "Financing available", "5-year workmanship warranty"].map((tag) => (
                <span key={tag} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Check className="size-4 text-primary" />
                  {tag}
                </span>
              ))}
            </div>
            <LinkButton href="/schedule" className="mt-8">
              Get Your Free Inspection
            </LinkButton>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
