import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check, ChevronRight, Phone } from "lucide-react"
import { business, getServiceArea, serviceAreas } from "@/lib/business"
import { services } from "@/lib/services"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { LinkButton } from "@/components/ui/link-button"

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ city: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const area = getServiceArea(city)
  if (!area) return { title: "Service Area | Rugerios Roofing" }
  const title = `Roofing in ${area.name} County, ${business.state} | Rugerios Roofing`
  return {
    title,
    description: `Rugerios Roofing serves ${area.name} County, ${business.state} with roof replacement, repair, storm damage restoration & free inspections. Call ${business.phoneDisplay}.`,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: {
      type: "website",
      url: `${business.domain}/service-areas/${area.slug}`,
      title,
      description: `Trusted roofing contractor serving ${area.name} County, ${business.state}.`,
      images: [{ url: business.heroImage, width: 1024, height: 1024 }],
    },
  }
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const area = getServiceArea(city)
  if (!area) notFound()

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: business.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: `${area.name} County`,
        item: `${business.domain}/service-areas/${area.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SiteNavbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-ink pb-16 pt-28">
          <img
            src={business.heroImage || "/placeholder.svg"}
            alt={`Roofing services in ${area.name} County, ${business.state}`}
            width={1024}
            height={1024}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 size-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
            <Reveal>
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm font-semibold text-ink-foreground/70">
                  <li>
                    <Link href="/" className="transition-colors hover:text-primary">
                      Home
                    </Link>
                  </li>
                  <ChevronRight className="size-4" aria-hidden="true" />
                  <li className="text-primary">{area.name} County</li>
                </ol>
              </nav>
              <h1 className="mt-5 max-w-3xl text-balance font-display text-5xl font-black leading-[0.95] tracking-tight text-ink-foreground sm:text-6xl">
                Roofing in {area.name} County, {business.state}
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-foreground/75">
                Rugerios Roofing is your local, family-owned roofing contractor serving
                homeowners across {area.name} County. Honest quotes, premium materials, and
                crews that treat your home like their own.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <LinkButton href="/schedule" className="group h-13">
                  Schedule Free Inspection
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </LinkButton>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-2 text-sm font-semibold text-ink-foreground"
                >
                  <Phone className="size-5 text-primary" />
                  {business.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services in this area */}
        <section className="bg-background py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                What we do in {area.name} County
              </p>
              <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
                Full-service roofing, close to home.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.slug} delay={i * 0.06}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-extrabold tracking-tight text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.short}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Learn more
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Local trust band */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <Reveal>
              <h2 className="max-w-xl text-balance font-display text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl">
                Why {area.name} County homeowners choose Rugerios
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {[
                  `${business.yearsInBusiness}+ years roofing homes across Northern Illinois`,
                  "Direct insurance claim support for hail and wind damage",
                  "Licensed, insured, and warranty-backed installations",
                  "Free, no-pressure inspections with a full photo report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-pretty leading-relaxed text-foreground">
                    <Check className="mt-1 size-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
