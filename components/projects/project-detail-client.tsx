"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  Layers,
  ShieldCheck,
  CheckCircle2,
  X,
  Phone,
  Maximize2
} from "lucide-react"
import { PortfolioItem, Service } from "@/lib/services"
import { business } from "@/lib/business"
import { LinkButton } from "@/components/ui/link-button"
import { Reveal } from "@/components/reveal"

interface ProjectDetailClientProps {
  project: PortfolioItem
  service?: Service | null
  relatedProjects: PortfolioItem[]
}

export function ProjectDetailClient({
  project,
  service,
  relatedProjects,
}: ProjectDetailClientProps) {
  const images = project.images && project.images.length > 0
    ? project.images
    : [{ url: "/images/hero-roof.png", caption: project.title }]

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev + 1) % images.length)
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [lightboxOpen, images.length])

  const activeImage = images[selectedIndex] || images[0]

  return (
    <>
      {/* Dark Hero Header with high contrast */}
      <section className="bg-ink text-ink-foreground pt-28 pb-14 lg:pt-36 lg:pb-16 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumbs & Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-foreground/60 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            {service ? (
              <>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {service.title}
                </Link>
                <span>/</span>
              </>
            ) : (
              <>
                <Link href="/#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-primary font-medium truncate max-w-xs sm:max-w-md">
              {project.title}
            </span>
          </nav>

          {/* Header */}
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  {service && (
                    <Link
                      href={`/services/${service.slug}`}
                      className="rounded-full bg-primary/20 border border-primary/40 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider hover:bg-primary/30 transition-colors"
                    >
                      {service.title}
                    </Link>
                  )}
                  <span className="flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-semibold text-white">
                    <MapPin className="size-3.5 text-primary" />
                    {project.city || "Aurora"}, {project.state || "IL"}
                  </span>
                  {project.completedAt && (
                    <span className="flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-medium text-white/80">
                      <Calendar className="size-3.5" />
                      {new Date(project.completedAt).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                    </span>
                  )}
                </div>

                <h1 className="font-display text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                  {project.title}
                </h1>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Reveal delay={0.1}>
                <div className="flex flex-wrap items-center gap-3">
                  <LinkButton href="/schedule" sizeClass="h-11 px-6 text-sm">
                    Book Free Inspection
                  </LinkButton>
                  <a
                    href={business.phoneHref}
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="size-4 mr-2 text-primary" />
                    Call Us
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Gallery */}
      <div className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Main Showcase Gallery Section */}
          <div className="grid gap-8 lg:grid-cols-12 mb-16">
            {/* Primary Image Viewer */}
            <div className="lg:col-span-8 space-y-4">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-ink shadow-2xl group">
                <img
                  src={activeImage.url}
                  alt={activeImage.caption || project.title}
                  className="size-full object-cover transition-all duration-300"
                />

                {/* Top overlay badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="rounded-md bg-ink/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    Photo {selectedIndex + 1} of {images.length}
                  </span>
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <a
                      href={activeImage.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-ink/80 px-3 py-1 text-xs font-semibold text-white hover:bg-ink transition-colors backdrop-blur-md"
                      title="Open full resolution in new tab"
                    >
                      <ExternalLink className="size-3.5 text-primary" />
                      <span className="hidden sm:inline">Open file</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                      className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground hover:opacity-95 transition-opacity shadow-md"
                      title="View Fullscreen"
                    >
                      <Maximize2 className="size-3.5" />
                      <span>Zoom / Lightbox</span>
                    </button>
                  </div>
                </div>

                {/* Left / Right Nav Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)}
                      aria-label="Previous photo"
                      className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-ink/70 text-white flex items-center justify-center hover:bg-ink transition-colors backdrop-blur-md"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedIndex((prev) => (prev + 1) % images.length)}
                      aria-label="Next photo"
                      className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-ink/70 text-white flex items-center justify-center hover:bg-ink transition-colors backdrop-blur-md"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                  </>
                )}

                {/* Caption Bar */}
                {activeImage.caption && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent p-4 sm:p-6 text-white">
                    <p className="text-sm sm:text-base font-medium drop-shadow-sm">
                      {activeImage.caption}
                    </p>
                  </div>
                )}
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                  {images.map((img, i) => {
                    const isSelected = i === selectedIndex
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedIndex(i)}
                        className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary ring-2 ring-primary/40 scale-105 shadow-md"
                            : "border-border opacity-70 hover:opacity-100 hover:border-muted-foreground"
                        }`}
                      >
                        <img
                          src={img.url}
                          alt={img.caption || `Thumbnail ${i + 1}`}
                          className="size-full object-cover"
                        />
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Project Details Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                <h2 className="font-display text-xl font-bold text-foreground">
                  Project Scope &amp; Details
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                  {project.description}
                </p>

                <hr className="my-6 border-border" />

                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                  Work Specifications
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-foreground">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Complete decking &amp; moisture inspection</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Synthetic high-performance underlayment</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Ice &amp; water shield in valleys and eaves</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Custom-bent flashing around chimneys &amp; walls</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Continuous ridge ventilation &amp; cleanup</span>
                  </li>
                </ul>

                <div className="mt-8 rounded-xl bg-primary/5 border border-primary/20 p-5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Need a roof like this?
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    Get an itemized quote with zero pressure directly from Jorge Rugerio.
                  </p>
                  <LinkButton href="/schedule" sizeClass="mt-4 w-full h-10 text-xs">
                    Schedule Free Inspection
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>

          {/* Full Grid Gallery of All Project Photos */}
          <div className="border-t border-border pt-16 mb-20">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    Full Resolution Gallery
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black text-foreground">
                    All Photos ({images.length})
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Click any photo to open the interactive lightbox.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div
                    onClick={() => {
                      setSelectedIndex(i)
                      setLightboxOpen(true)
                    }}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={img.url}
                        alt={img.caption || `${project.title} photo ${i + 1}`}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                          <Maximize2 className="size-3.5 text-primary" />
                          View photo full size
                        </span>
                      </div>
                    </div>
                    {img.caption && (
                      <div className="p-4 bg-card border-t border-border">
                        <p className="text-sm font-medium text-foreground line-clamp-2">
                          {img.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="border-t border-border pt-16">
              <Reveal>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                      More Work
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black text-foreground">
                      Other Recent Projects
                    </h2>
                  </div>
                  {service && (
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      View all {service.title} <ChevronRight className="size-4" />
                    </Link>
                  )}
                </div>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedProjects.slice(0, 3).map((rel, i) => {
                  const relCover = rel.images?.find((img) => img.isCover)?.url || rel.images?.[0]?.url
                  return (
                    <Reveal key={rel.id} delay={i * 0.08}>
                      <Link
                        href={`/projects/${rel.id}`}
                        className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="relative h-48 overflow-hidden bg-muted">
                          {relCover && (
                            <img
                              src={relCover}
                              alt={rel.title}
                              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                          <div className="absolute top-3 right-3 bg-ink/80 text-xs px-2.5 py-1 rounded-md text-white font-semibold backdrop-blur-md">
                            {rel.city || "Aurora"}, {rel.state || "IL"}
                          </div>
                          {rel.images && rel.images.length > 1 && (
                            <div className="absolute bottom-3 left-3 bg-ink/80 text-[11px] px-2 py-0.5 rounded text-white backdrop-blur-md">
                              {rel.images.length} photos
                            </div>
                          )}
                        </div>
                        <div className="p-5 flex flex-1 flex-col justify-between">
                          <div>
                            <h3 className="font-display text-base font-extrabold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                              {rel.title}
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                              {rel.description}
                            </p>
                          </div>
                          <span className="mt-4 text-xs font-bold text-primary flex items-center gap-1">
                            View project &amp; all photos <ChevronRight className="size-3.5" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors"
          >
            <X className="size-6" />
          </button>

          {/* Nav Controls */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="size-7" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndex((prev) => (prev + 1) % images.length)}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="size-7" />
              </button>
            </>
          )}

          {/* Lightbox Image Container */}
          <div className="flex flex-col items-center justify-center max-w-6xl max-h-[90vh] w-full">
            <div className="relative max-h-[78vh] w-full flex items-center justify-center">
              <img
                src={activeImage.url}
                alt={activeImage.caption || project.title}
                className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
            </div>

            {/* Bottom Caption and counter */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <p className="text-white text-base font-semibold drop-shadow">
                {activeImage.caption || project.title}
              </p>
              <p className="text-white/60 text-xs mt-1">
                Photo {selectedIndex + 1} of {images.length} &middot; Press ESC to close &middot; Use arrow keys to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
