import type { Metadata } from "next"
import Image from "next/image"
import { Award, CheckCircle2, ShieldCheck, HeartHandshake, Sparkles, Users } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { LinkButton } from "@/components/ui/link-button"
import { business } from "@/lib/business"

export const metadata: Metadata = {
  title: "About Us | Our Story & Craftsmanship | Rugerios Roofing",
  description:
    "Learn about Rugerios Roofing — a family-owned roofing contractor in Aurora, IL built on honest craftsmanship, family values, and protecting Northern Illinois homes.",
}

const values = [
  {
    icon: HeartHandshake,
    title: "Honesty & Transparency",
    description: "No hidden charges or pushy sales tactics. We treat every home inspection with total integrity.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description: "We use top-tier manufacturer-backed materials and rigorous installation standards that stand the test of time.",
  },
  {
    icon: Users,
    title: "Family Values",
    description: "As a local family business, we treat our customers and crew members like extensions of our own family.",
  },
  {
    icon: Award,
    title: "Dedicated Craftsmanship",
    description: "Over a decade of specialized expertise in roof replacements, storm damage restoration, and emergency repairs.",
  },
]

const galleryImages = [
  {
    src: "/images/hero-roof.webp",
    title: "Precision Installation",
    caption: "High-grade architectural shingle installation in progress",
  },
  {
    src: "/images/team.webp",
    title: "Our Expert Crew",
    caption: "Experienced professionals committed to safety and clean work sites",
  },
  {
    src: "/images/hero-roof.webp",
    title: "Finished Roof Replacement",
    caption: "Durable, weather-resistant protection for Northern Illinois families",
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteNavbar />
      <main className="overflow-hidden">
        {/* Hero Banner (Dark Theme - matching schedule / subpages) */}
        <section className="bg-ink pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="text-ink-foreground">
                <Reveal>
                  <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    Our Story &amp; Heritage
                  </p>
                  <h1 className="mt-3 text-balance font-display text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                    Building Trust, One Roof at a Time.
                  </h1>
                  <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-foreground/80">
                    Founded in {business.cityState}, Rugerios Roofing was built on a simple belief:
                    local families deserve honest, reliable roofing craftsmanship without the stress or sales pressure.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-8">
                    <div>
                      <span className="font-display text-3xl font-black text-primary">
                        {business.yearsInBusiness}+
                      </span>
                      <p className="text-xs uppercase tracking-wider text-ink-foreground/60">Years Experience</p>
                    </div>
                    <div className="h-10 w-px bg-white/10" />
                    <div>
                      <span className="font-display text-3xl font-black text-primary">
                        {business.roofsCompleted}+
                      </span>
                      <p className="text-xs uppercase tracking-wider text-ink-foreground/60">Roofs Completed</p>
                    </div>
                    <div className="h-10 w-px bg-white/10" />
                    <div>
                      <span className="font-display text-3xl font-black text-primary">100%</span>
                      <p className="text-xs uppercase tracking-wider text-ink-foreground/60">Local &amp; Family-Owned</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Hero Image / Badge Showcase */}
              <Reveal delay={0.2}>
                <div className="relative">
                  <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                    <Image
                      src="/images/team.webp"
                      alt="Rugerios Roofing team members on site"
                      width={1024}
                      height={1024}
                      className="aspect-[4/3] w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl bg-card p-4 text-card-foreground shadow-2xl sm:-left-6 border border-border">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Sparkles className="size-6" />
                    </span>
                    <div>
                      <p className="font-display font-bold text-sm">Licensed &amp; Insured</p>
                      <p className="text-xs text-muted-foreground">Northern Illinois Service Area</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Company History Section */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Who We Are
                </p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-5xl">
                  A Family Business Dedicated to Protecting Yours
                </h2>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div className="space-y-5 leading-relaxed text-muted-foreground">
                  <p className="text-lg font-medium text-foreground">
                    At Rugerios Roofing, we understand that your home is your most valuable investment. That&apos;s why we approach every roof replacement, repair, and inspection with meticulous care.
                  </p>
                  <p>
                    What started over a decade ago as a passion for quality construction has grown into one of the most trusted family-owned roofing contractors across Northern Illinois. From storm damage response to scheduled upgrades, our owners are directly involved in daily operations.
                  </p>
                  <p>
                    When you call Rugerios, you don&apos;t talk to an out-of-state call center. You speak directly with dedicated local experts who know the Illinois weather conditions and recommendations for maximum longevity.
                  </p>

                  <div className="pt-4 space-y-3">
                    {[
                      "Direct owner oversight on every job site",
                      "Certified installers for leading shingle manufacturers",
                      "Clean job site promise: zero leftover nails or debris",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                        <CheckCircle2 className="size-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-xl">
                  <Image
                    src="/images/hero-roof.webp"
                    alt="Rugerios Roofing project detail"
                    width={1024}
                    height={1024}
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Our Guiding Principles
                </p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  The Values That Define Our Work
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

        {/* Photo Gallery Showcase Section */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Our Work &amp; Crew
                </p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  Craftsmanship in Action
                </h2>
                <p className="mt-3 text-muted-foreground">
                  A glimpse of our team, ongoing installations, and finished roofing projects.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {galleryImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-md">
                    <div className="overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.title}
                        width={600}
                        height={400}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-base font-bold text-foreground">{img.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{img.caption}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Banner */}
        <section className="bg-ink py-20 text-ink-foreground">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl">
                Ready to Experience the Rugerios Difference?
              </h2>
              <p className="mt-4 text-lg text-ink-foreground/70">
                Contact our local team today for a free, no-obligation roof inspection and personalized quote.
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
