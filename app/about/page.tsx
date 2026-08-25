import type { Metadata } from "next"
import Image from "next/image"
import { Award, CheckCircle2, ShieldCheck, HeartHandshake, Sparkles, Heart, Mountain, Trophy, Footprints, Flame } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { LinkButton } from "@/components/ui/link-button"
import { business } from "@/lib/business"

export const metadata: Metadata = {
  title: "About Us | Meet Jorge & Rugerio's Roofing Story",
  description:
    "Meet Jorge, owner of Rugerio's Roofing. Learn about our 4-year journey, 200+ completed projects, 600+ repairs, and our commitment to building real relationships with homeowners in Northern Illinois.",
}

const values = [
  {
    icon: HeartHandshake,
    title: "Real Relationships",
    description: "I believe in building genuine connections with the people I do business with—not just showing up, doing a job, and leaving.",
  },
  {
    icon: ShieldCheck,
    title: "Done Right the First Time",
    description: "My team and I are here to make the process as straightforward as possible and make sure every job is done right.",
  },
  {
    icon: Heart,
    title: "Family First",
    description: "As a family man, I treat your home and family with the exact same care, safety, and respect I'd want for my own.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 200 full roofing projects and more than 600 repairs completed throughout the community in the past 4 years.",
  },
]

const galleryImages = [
  {
    src: "/images/about/jorge-family.jpg",
    title: "Family First",
    caption: "Jorge with his family — the heart and foundation behind Rugerio's Roofing.",
  },
  {
    src: "/images/about/jorge-work.jpg",
    title: "Hands-On Leadership",
    caption: "Jorge on site in Chicago, bringing safety, precision, and dedication to every project.",
  },
  {
    src: "/images/about/jorge-mountain-summit.jpg",
    title: "Climbing Mountains",
    caption: "Summiting peaks — the discipline and endurance that keep Jorge grounded and driven.",
  },
  {
    src: "/images/about/jorge-family-marathon.jpg",
    title: "Chicago Marathon with Family",
    caption: "Celebrating major endurance milestones with family by his side.",
  },
  {
    src: "/images/about/jorge-mountain-team.jpg",
    title: "Exploring Trails & Peaks",
    caption: "Outdoor adventures and mountain expeditions with teammates.",
  },
  {
    src: "/images/about/jorge-marathon.jpg",
    title: "Running & Discipline",
    caption: "Crossing the finish line — applying the same perseverance to business and life.",
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
                    For the past four years, I&apos;ve had the privilege of growing this company and serving homeowners throughout our community with honest, high-quality roofing craftsmanship.
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
                    &ldquo;For the past four years, I&apos;ve had the privilege of growing this company and serving homeowners throughout the community. Since opening our doors, we&apos;ve completed more than 200 roofing projects and over 600 repairs.&rdquo;
                  </p>

                  <p>
                    &ldquo;I&apos;m a family man first, and when I&apos;m not working, I enjoy spending time with my family, running, exploring trails, and climbing mountains. Those moments outside of work are important to me and keep me grounded.&rdquo;
                  </p>

                  <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 text-foreground">
                    <p className="italic font-medium text-pretty text-foreground">
                      &ldquo;I believe in building relationships with the same people I do business with, not just showing up, completing a job, and leaving.&rdquo;
                    </p>
                    <p className="mt-3 text-sm font-bold text-primary">— Jorge Rugerio</p>
                  </div>

                  <p>
                    &ldquo;I would love the opportunity to help you with your next project, whether it&apos;s a full roof replacement, a repair, or simply an inspection to see what your roof needs. My team and I are here to make the process as straightforward as possible and make sure the job is done right.&rdquo;
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
                      <Footprints className="mx-auto size-5 text-primary" />
                      <p className="mt-1.5 font-display text-xs font-bold text-foreground">Marathons</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">Chicago Finisher</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-4 text-center">
                      <Mountain className="mx-auto size-5 text-primary" />
                      <p className="mt-1.5 font-display text-xs font-bold text-foreground">Mountains</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">Trails &amp; Peaks</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Personal Passions & Lifestyle Grid */}
        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Outside of Work
                </p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  Grounded by Passion, Discipline &amp; Family
                </h2>
                <p className="mt-3 text-muted-foreground">
                  The values of endurance, focus, and integrity that Jorge lives by outside of work are the same ones he brings to every roof installation.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Reveal delay={0.1}>
                <div className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md flex flex-col">
                  <div className="overflow-hidden">
                    <Image
                      src="/images/about/jorge-mountain-summit.jpg"
                      alt="Jorge at mountain summit"
                      width={600}
                      height={800}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <Mountain className="size-4" />
                        <span>Mountain Climbing &amp; Trails</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-bold text-foreground">Reaching High Peaks</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Exploring trails and climbing mountains keeps Jorge focused and grounded, proving that big goals require patient preparation and step-by-step perseverance.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md flex flex-col">
                  <div className="overflow-hidden">
                    <Image
                      src="/images/about/jorge-family-marathon.jpg"
                      alt="Jorge with family at Chicago Marathon"
                      width={600}
                      height={800}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <Trophy className="size-4" />
                        <span>Marathons &amp; Running</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-bold text-foreground">Endurance &amp; Family Support</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Running marathons like the Bank of America Chicago Marathon alongside family support represents the drive to cross every finish line with pride.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md flex flex-col sm:col-span-2 lg:col-span-1">
                  <div className="overflow-hidden">
                    <Image
                      src="/images/about/jorge-wife-marathon.jpg"
                      alt="Jorge and his wife celebrating marathon"
                      width={600}
                      height={800}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <Flame className="size-4" />
                        <span>Shared Commitment</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-bold text-foreground">Strong Partnerships</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Whether at home, in running competitions, or in business operations, strong partnerships and honest communication guide everything we do.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Why Choose Rugerio&apos;s
                </p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  What You Can Expect From Us
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

        {/* Photo Gallery Grid */}
        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Photo Gallery
                </p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  Moments On &amp; Off the Roof
                </h2>
                <p className="mt-3 text-muted-foreground">
                  A look at our leader, our family values, and the active lifestyle behind Rugerio&apos;s Roofing.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {galleryImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-md flex flex-col">
                    <div className="overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.title}
                        width={600}
                        height={450}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-base font-bold text-foreground">{img.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{img.caption}</p>
                      </div>
                    </div>
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
                Whether it&apos;s a full replacement, a minor repair, or a free inspection—Jorge and the team are ready to help.
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
