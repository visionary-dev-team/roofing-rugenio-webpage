import { Star } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { LinkButton } from "@/components/ui/link-button"

const sampleReviews = [
  {
    name: "Carlos M.",
    location: "Aurora, IL",
    rating: 5,
    comment: "Rugerios replaced our entire roof in less than two days. Excellent attention to detail and zero mess left behind. Highly recommended!",
  },
  {
    name: "David K.",
    location: "Naperville, IL",
    rating: 5,
    comment: "They handled the storm damage inspection and worked with our insurance smoothly. Very professional crew from start to finish.",
  },
  {
    name: "Sarah L.",
    location: "Elgin, IL",
    rating: 5,
    comment: "Transparent pricing, no hidden fees, and great communication throughout. The roof looks fantastic!",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-ink py-24 text-ink-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Homeowners talk
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Trusted across the neighborhood.
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-ink-foreground/70">
            See what our satisfied clients have to say about our roofing and exterior services.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {sampleReviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-2xl bg-white/5 p-6 border border-white/10">
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-foreground/90">
                    "{review.comment}"
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-display text-base font-bold text-ink-foreground">{review.name}</p>
                  <p className="text-xs text-ink-foreground/60">{review.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center sm:text-left">
            <LinkButton href="/schedule">
              Become our next success story
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

