import type { Metadata } from "next"
import Image from "next/image"
import { HeartHandshake, MapPin, ShieldCheck, Sparkles, Heart, HardHat } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { LinkButton } from "@/components/ui/link-button"
import { business } from "@/lib/business"

export const metadata: Metadata = {
  title: "About Us | Meet Jorge — Rugerio's Roofing in Aurora, IL",
  description:
    "Meet Jorge, owner-operator of Rugerio's Roofing, serving Aurora and the Fox Valley. 200+ roofs and 600+ repairs completed, backed by real warranties and a hands-on approach to every job.",
}

const values = [
  {
    icon: HeartHandshake,
    title: "Real Relationships",
    description: "You deal with Jorge directly — same person on your inspection, your quote, and your job site, every time.",
  },
  {
    icon: MapPin,
    title: "Local & Storm-Ready",
    description: "Based in Aurora and rooted in the Fox Valley, we know how Northern Illinois hail and wind seasons treat a roof — and we'll handle your insurance claim from start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by Real Warranties",
    description: "Manufacturer-certified installs backed by a 5-year workmanship warranty and full material warranty — protection that actually means something.",
  },
  {
    icon: Heart,
    title: "Family First",
    description: "As a family man, I treat your home and family with the exact same care, safety, and respect I'd want for my own.",
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteNavbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="bg-ink pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="text-ink-foreground">
                <Reveal>
                  <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    Meet the Owner
                  </p>
                  <h1 className="mt-3 text-balance font-display text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                    Hi, I&apos;m Jorge.
                  </h1>
                  <p className="mt-3 text-xl font-semibold text-primary">
                    Owner of Rugerio&apos;s Roofing
                  </p>
                  <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-foreground/80">
                    I started Rugerio&apos;s Roofing right here in Aurora, and I&apos;m still the one who shows up to your inspection, your quote, and your job site — not a call center, not a rotating crew you&apos;ve never met.
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-8">
                    <div>
                      <span className="font-display text-3xl font-black text-primary">4+</span>
                      <p className="text-xs uppercase tracking-wider text-ink-foreground/60">Years Growing</p>
                    </div>
                    <div className="h-10 w-px bg-white/10" />
                    <div>
                      <span className="font-display text-3xl font-black text-primary">200+</span>
                      <p className="text-xs uppercase tracking-wider text-ink-foreground/60">Roofing Projects</p>
                    </div>
                    <div className="h-10 w-px bg-white/10" />
                    <div>
                      <span className="font-display text-3xl font-black text-primary">600+</span>
                      <p className="text-xs uppercase tracking-wider text-ink-foreground/60">Repairs Completed</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Owner Photo: Jorge at Work */}
              <Reveal delay={0.2}>
                <div className="relative">
                  <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                    <Image
                      src="/images/about/jorge-work.jpg"
                      alt="Jorge Rugerio - Owner of Rugerio's Roofing on job site"
                      width={1024}
                      height={1365}
                      className="aspect-[4/5] w-full object-cover object-top"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl bg-card p-4 text-card-foreground shadow-2xl sm:-left-6 border border-border">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Sparkles className="size-6" />
                    </span>
                    <div>
                      <p className="font-display font-bold text-sm">Jorge Rugerio</p>
                      <p className="text-xs text-muted-foreground">Founder &amp; Dedicated Hands-on Owner</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    Our Story &amp; Values
                  </p>
                  <h2 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                    Building Relationships, Not Just Roofs
                  </h2>

                  <p>
                    &ldquo;I&apos;ve walked hundreds of roofs across Aurora and the Fox Valley — through hailstorms, wind damage, and everything Illinois weather throws at a home. I still climb the ladder myself on every job, because that&apos;s the only way I know a roof gets done right.&rdquo;
                  </p>

                  <p>
                    &ldquo;I&apos;m a family man first, and I treat every homeowner&apos;s roof with the same care, safety, and respect I&apos;d want for my own family&apos;s home.&rdquo;
                  </p>

                  <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 text-foreground">
                    <p className="italic font-medium text-pretty text-foreground">
                      &ldquo;I believe in building relationships with the same people I do business with, not just showing up, completing a job, and leaving.&rdquo;
                    </p>
                    <p className="mt-3 text-sm font-bold text-primary">— Jorge Rugerio</p>
                  </div>

                  <p>
                    &ldquo;I&apos;d love the opportunity to help with your next project — whether it&apos;s a full roof replacement, a repair, or just an inspection to see what your roof needs. You&apos;ll get an honest, itemized quote with no pressure, and my team makes sure the job is done right.&rdquo;
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <LinkButton href="/schedule" sizeClass="h-11 px-6 text-sm">
                      Schedule an Inspection
                    </LinkButton>
                    <a
                      href={business.phoneHref}
                      className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
                    >
                      Call {business.phoneDisplay}
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Family Photo Showcase */}
              <Reveal delay={0.2}>
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-xl">
                    <Image
                      src="/images/about/jorge-family.jpg"
                      alt="Jorge Rugerio with his family"
                      width={1152}
                      height={768}
                      className="aspect-[4/3] w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div className="rounded-2xl border border-border bg-card p-4 text-center">
                      <Heart className="mx-auto size-5 text-primary" />
                      <p className="mt-1.5 font-display text-xs font-bold text-foreground">Family First</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">Core Foundation</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-4 text-center">
                      <HardHat className="mx-auto size-5 text-primary" />
                      <p className="mt-1.5 font-display text-xs font-bold text-foreground">Owner-Operated</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">On Every Job</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-4 text-center">
                      <MapPin className="mx-auto size-5 text-primary" />
                      <p className="mt-1.5 font-display text-xs font-bold text-foreground">Aurora-Based</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">Fox Valley Local</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Why Choose Rugerio&apos;s
                </p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  What Makes Rugerio&apos;s Different
                </h2>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((val, idx) => (
                <Reveal key={val.title} delay={idx * 0.1}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <val.icon className="size-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">{val.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{val.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-ink py-20 text-ink-foreground">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl">
                Let&apos;s Work Together on Your Next Project
              </h2>
              <p className="mt-4 text-lg text-ink-foreground/70">
                Free, no-pressure inspections. Honest, itemized quotes. Jorge and the team are ready to help — anywhere in Aurora and the Fox Valley.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <LinkButton href="/schedule" sizeClass="h-12 px-8 text-base">
                  Schedule Free Inspection
                </LinkButton>
                <a
                  href={business.phoneHref}
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 text-base font-medium text-ink-foreground transition-colors hover:bg-white/10"
                >
                  Call {business.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
