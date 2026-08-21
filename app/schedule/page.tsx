import type { Metadata } from "next"
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { ScheduleForm } from "@/components/schedule-form"

export const metadata: Metadata = {
  title: "Schedule a Free Inspection | Rugerios Roofing",
  description:
    "Book your free, no-obligation roof inspection with Rugerios Roofing. Fast scheduling, honest assessments, and full photo reports.",
}

const perks = [
  { icon: ShieldCheck, title: "100% free & no pressure", detail: "No obligation, no pushy sales. Just an honest assessment." },
  { icon: Clock, title: "Fast turnaround", detail: "We confirm within one business day and inspect quickly." },
  { icon: MapPin, title: "Full photo report", detail: "You get documented findings and clear priorities." },
]

export default function SchedulePage() {
  return (
    <>
      <SiteNavbar />
      <main className="bg-ink pt-16 lg:pt-20">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: pitch */}
            <div className="text-ink-foreground">
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Free inspection
              </p>
              <h1 className="mt-3 text-balance font-display text-4xl font-black leading-[0.98] tracking-tight sm:text-6xl">
                Let&apos;s take a look at your roof.
              </h1>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-ink-foreground/70">
                Fill out the form and our team will reach out within one business day to schedule
                your free, no-obligation inspection.
              </p>

              <div className="mt-10 space-y-6">
                {perks.map((perk) => (
                  <div key={perk.title} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <perk.icon className="size-5" />
                    </span>
                    <div>
                      <h2 className="font-display font-bold tracking-tight">{perk.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-ink-foreground/60">
                        {perk.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:gap-8">
                <a href="tel:+15551234567" className="flex items-center gap-3 text-ink-foreground">
                  <Phone className="size-5 text-primary" />
                  <span className="font-semibold">(555) 123-4567</span>
                </a>
                <a
                  href="mailto:hello@rugeriosroofing.com"
                  className="flex items-center gap-3 text-ink-foreground"
                >
                  <Mail className="size-5 text-primary" />
                  <span className="font-semibold">hello@rugeriosroofing.com</span>
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ScheduleForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
