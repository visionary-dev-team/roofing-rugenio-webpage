import { ArrowRight, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { LinkButton } from "@/components/ui/link-button"
import { business } from "@/lib/business"

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="max-w-2xl text-balance font-display text-4xl font-black leading-[1.05] tracking-tight text-primary-foreground sm:text-6xl">
                Ready to protect your home?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                Book a free, no-obligation inspection and get an honest assessment of your
                roof within 48 hours.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <LinkButton href="/schedule" variant="secondary" className="group h-13">
                Schedule Inspection
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </LinkButton>
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="size-5" />
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
