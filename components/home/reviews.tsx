import { Star, ShieldCheck, ExternalLink, CheckCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { LinkButton } from "@/components/ui/link-button"
import { business } from "@/lib/business"

export interface ReviewItem {
  name: string
  location: string
  rating: number
  date: string
  project: string
  comment: string
  verified: boolean
}

const homeAdvisorReviews: ReviewItem[] = [
  {
    name: "John C.",
    location: "Aurora, IL",
    rating: 5,
    date: "July 2024",
    project: "Repair Flat, Foam, or Single Ply Roof",
    comment:
      "Very knowledgeable and professional. They solved my flat roof problem that two previous roofing companies could not. Rugerios is simply the best flat roofing company I have had. Ask for George—he is great!",
    verified: true,
  },
  {
    name: "Maurice H.",
    location: "Aurora, IL",
    rating: 5,
    date: "Verified Customer",
    project: "Roof Inspection & Repair",
    comment:
      "Jorge was very honest and showed me pictures of what needed to be repaired and then showed me pictures of the work he did. Great communication, on time, and professional service throughout.",
    verified: true,
  },
  {
    name: "Carolyn P.",
    location: "Newark, IL",
    rating: 5,
    date: "December 2021",
    project: "Flat / Single-Ply Roof Repair",
    comment:
      "On time, the work was completed within a few days of the estimate, and the price was good! Thank you, Jorge!",
    verified: true,
  },
  {
    name: "Verified Customer",
    location: "Illinois",
    rating: 5,
    date: "Verified Homeowner",
    project: "Custom Siding & Exterior",
    comment:
      "The siding I have is not available anymore and I have a steel framed home. Rugerios was able to find similar siding and have tongue and groove custom cut to match perfectly.",
    verified: true,
  },
  {
    name: "Muhammad J.",
    location: "Illinois",
    rating: 5,
    date: "October 2021",
    project: "Roof Repair & Maintenance",
    comment:
      "On time and performed a good job. Professional crew, fair and honest price, and left the worksite clean and organized.",
    verified: true,
  },
  {
    name: "Phillip B.",
    location: "Illinois",
    rating: 5,
    date: "August 2023",
    project: "Exterior & Siding Project",
    comment:
      "Did a great job on our exterior project. Timely estimate, courteous communication, and reliable high-quality craftsmanship.",
    verified: true,
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-ink py-24 text-ink-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              5.0 Star Rating &middot; HomeAdvisor Verified
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <CheckCircle className="size-3.5" />
              100% Recommended (17 Reviews)
            </span>
          </div>

          <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Trusted across the neighborhood.
          </h2>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-ink-foreground/70">
            Real feedback from local homeowners and property managers on our verified HomeAdvisor profile.
            Every review represents our commitment to honest pricing, punctuality, and lasting craftsmanship.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeAdvisorReviews.map((review, i) => (
            <Reveal key={review.name + i} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Star key={idx} className="size-4 fill-current" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-medium text-ink-foreground/70">
                      <ShieldCheck className="size-3 text-emerald-400" />
                      HomeAdvisor
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">
                    {review.project}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-ink-foreground/90">
                    "{review.comment}"
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-display text-base font-bold text-ink-foreground">{review.name}</p>
                    <p className="text-xs text-ink-foreground/60">{review.location}</p>
                  </div>
                  <span className="text-xs text-ink-foreground/50">{review.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <LinkButton href="/schedule">
              Schedule Free Inspection
            </LinkButton>
            <a
              href={business.homeAdvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-ink-foreground transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <span>View all 17 reviews on HomeAdvisor</span>
              <ExternalLink className="size-4 text-primary" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
