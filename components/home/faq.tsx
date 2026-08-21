import { Plus } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { business } from "@/lib/business"

const faqs = [
  {
    q: `How much does a roof replacement cost in ${business.city}, ${business.state}?`,
    a: `Most residential roof replacements in the ${business.city} area range from about $8,000 to $25,000 depending on the size and pitch of your roof, the materials you choose, and any decking repairs needed. The most accurate way to know your cost is a free on-site inspection, where we give you an honest, itemized quote with no pressure.`,
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most homes are torn off and re-roofed in one to three days once we start. Larger or more complex roofs can take longer, and weather can shift the schedule. We give you a clear timeline before we begin and keep you updated throughout the project.",
  },
  {
    q: "Do you work with insurance for hail and storm damage?",
    a: "Yes. Hail and wind damage are common in Northern Illinois, and we handle the insurance process for you. We document all damage with photos, meet your adjuster on-site, and advocate on your behalf so your claim reflects the true scope of the work.",
  },
  {
    q: "What are the signs I need a new roof?",
    a: "Watch for missing, curling, or cracked shingles, granules collecting in your gutters, daylight or water stains in the attic, sagging areas, and a roof that is 20+ years old. If you notice any of these, book a free inspection and we will tell you honestly whether a repair or full replacement makes more sense.",
  },
  {
    q: "What warranty coverage do you offer?",
    a: "Your new roof is protected by both a manufacturer warranty on the materials and our own workmanship warranty on the installation. We install manufacturer-certified systems and walk you through exactly what each warranty covers before work begins.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer flexible financing options so a new roof fits your budget, along with free estimates. Ask about current financing plans during your free inspection and we will help you find an option that works for you.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
}

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Frequently asked
          </p>
          <h2 className="mt-3 text-balance font-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
            Answers before you commit.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg font-bold tracking-tight text-foreground">
                  {faq.q}
                  <Plus className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
