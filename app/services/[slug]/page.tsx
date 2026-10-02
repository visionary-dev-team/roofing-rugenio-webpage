import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, ChevronRight, ExternalLink } from "lucide-react"
import { fetchServiceBySlugFromAPI, fetchServicesFromAPI } from "@/lib/services"
import { business } from "@/lib/business"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { LinkButton } from "@/components/ui/link-button"

export async function generateStaticParams() {
  const allServices = await fetchServicesFromAPI()
  return allServices.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await fetchServiceBySlugFromAPI(slug)
  if (!service) return { title: "Service | Rugerios Roofing" }
  return {
    title: `${service.title} in ${business.cityState} | Rugerios Roofing`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      url: `${business.domain}/services/${service.slug}`,
      title: `${service.title} in ${business.cityState} | Rugerios Roofing`,
      description: service.short,
      images: [{ url: service.image, width: 1024, height: 1024, alt: service.title }],
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [service, allServices] = await Promise.all([
    fetchServiceBySlugFromAPI(slug),
    fetchServicesFromAPI(),
  ])
  if (!service) notFound()

  const others = allServices.filter((s) => s.slug !== service.slug).slice(0, 3)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: business.domain },
      { "@type": "ListItem", position: 2, name: "Services", item: `${business.domain}/#services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${business.domain}/services/${service.slug}`,
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
        <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-ink pb-16 pt-28">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            width={1024}
            height={1024}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
            <Reveal>
              {/* <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-ink-foreground/70">
                  <li>
                    <Link href="/" className="transition-colors hover:text-primary">
                      Home
                    </Link>
                  </li>
                  <ChevronRight className="size-4" aria-hidden="true" />
                  <li>
                    <Link href="/#services" className="transition-colors hover:text-primary">
                      Services
                    </Link>
                  </li>
                  <ChevronRight className="size-4" aria-hidden="true" />
                  <li className="text-primary">{service.title}</li>
                </ol>
              </nav> */}
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-foreground/70 transition-colors hover:text-primary"
              >
                <ArrowLeft className="size-4" />
                All services
              </Link>
              <h1 className="mt-5 max-w-3xl text-balance font-display text-5xl font-black leading-[0.95] tracking-tight text-ink-foreground sm:text-7xl   text-primary "
             style={{ WebkitTextStroke: "0.5px black" }}>
                {service.title}
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-foreground/75">
                {service.short}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-background py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Overview
              </p>
              <p className="mt-4 text-pretty text-2xl font-medium leading-relaxed text-foreground">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-7">
                <h2 className="font-display text-lg font-extrabold tracking-tight text-foreground">
                  What&apos;s included
                </h2>
                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <LinkButton href="/schedule" className="mt-7 w-full">
                  Book This Service
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <h2 className="max-w-2xl text-balance font-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
                How your {service.title.toLowerCase()} goes.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {service.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1}>
                  <div>
                    <span className="font-display text-5xl font-black text-primary/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Projects for this service */}
        {service.projects && service.projects.length > 0 && (
          <section className="bg-card py-24 lg:py-28 border-y border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                      Recent Work
                    </p>
                    <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                      {service.title} Projects Gallery
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Click any photo to view full-resolution project details in a new page/tab.
                  </p>
                </div>
              </Reveal>
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {service.projects.map((project, i) => {
                  const coverImg = project.images?.find((img) => img.isCover)?.url || project.images?.[0]?.url
                  const additionalImages = (project.images || []).filter((img) => img.url !== coverImg)

                  return (
                    <Reveal key={project.id} delay={i * 0.08}>
                      <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* Cover Image (Clickable Link to Project Page) */}
                        <div className="relative h-60 overflow-hidden bg-muted">
                          {coverImg ? (
                            <Link
                              href={`/projects/${project.id}`}
                              aria-label={`View ${project.title} project and all photos`}
                              className="group/img block size-full"
                            >
                              <img
                                src={coverImg}
                                alt={project.title}
                                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              {/* Hover Overlay with Action Pill */}
                              <div className="absolute inset-0 bg-ink/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                                  <span>View Project &amp; All Photos</span>
                                  <ArrowRight className="size-3.5 text-primary" />
                                </span>
                              </div>
                            </Link>
                          ) : (
                            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                              No image uploaded
                            </div>
                          )}

                          {/* Location Badge */}
                          <div className="pointer-events-none absolute top-3 right-3 bg-ink/80 text-xs px-2.5 py-1 rounded-md text-white font-semibold backdrop-blur-md">
                            {project.city || "Aurora"}, {project.state || "IL"}
                          </div>

                          {/* Photo Count Badge */}
                          {project.images && project.images.length > 1 && (
                            <div className="pointer-events-none absolute bottom-3 left-3 bg-ink/80 text-[11px] px-2 py-0.5 rounded text-white/90 backdrop-blur-md">
                              {project.images.length} photos
                            </div>
                          )}
                        </div>

                        {/* Additional Thumbnails Strip */}
                        {additionalImages.length > 0 && (
                          <div className="flex items-center gap-2 border-b border-border/60 bg-muted/30 px-5 py-2.5 overflow-x-auto">
                            <span className="text-[11px] font-medium text-muted-foreground shrink-0">Preview:</span>
                            {additionalImages.slice(0, 4).map((img, imgIdx) => (
                              <Link
                                key={imgIdx}
                                href={`/projects/${project.id}`}
                                title={img.caption || `View all photos in project page`}
                                className="group/thumb relative size-9 shrink-0 overflow-hidden rounded-md border border-border transition-all hover:scale-105 hover:ring-2 hover:ring-primary"
                              >
                                <img
                                  src={img.url}
                                  alt={img.caption || `${project.title} photo`}
                                  className="size-full object-cover"
                                />
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Project Details */}
                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="font-display text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                            <Link href={`/projects/${project.id}`}>
                              {project.title}
                            </Link>
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                            {project.description}
                          </p>

                          {/* Card Footer Actions */}
                          <div className="mt-auto pt-5 flex items-center justify-between border-t border-border/60">
                            <Link
                              href={`/projects/${project.id}`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary/80"
                            >
                              <span>View project &amp; all photos ({project.images?.length || 1})</span>
                              <ArrowRight className="size-3.5" />
                            </Link>
                            <span className="text-xs text-muted-foreground">
                              {project.completedAt ? new Date(project.completedAt).getFullYear() : "Recent"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Other services */}
        <section className="bg-background py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                Explore more services
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={i * 0.08}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={other.image || "/placeholder.svg"}
                        alt={other.title}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-extrabold tracking-tight text-foreground">
                        {other.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {other.short}
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
      </main>
      <SiteFooter />
    </>
  )
}
