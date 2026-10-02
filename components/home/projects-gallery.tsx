"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, ArrowRight, MapPin, Layers } from "lucide-react"
import { PortfolioItem } from "@/lib/services"
import { Reveal } from "@/components/reveal"
import { LinkButton } from "@/components/ui/link-button"

interface ProjectsGalleryProps {
  projects: PortfolioItem[]
}

const CATEGORIES = [
  { slug: "all", label: "All Projects" },
  { slug: "roof-replacement", label: "Replacements" },
  { slug: "roof-repair", label: "Repairs & Leaks" },
  { slug: "storm-damage", label: "Storm Damage" },
  { slug: "gutters", label: "Seamless Gutters" },
]

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.serviceSlug === activeCategory)

  return (
    <section id="projects" className="bg-card py-24 lg:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Real Work &amp; Craftsmanship
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
              Recent Projects Across Chicagoland
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-base text-muted-foreground">
              Every roof shown below was inspected, torn off, and completed with pride. Click on any photo to open and inspect in full resolution in a new page/tab.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <LinkButton href="/schedule" sizeClass="h-11 px-5 text-sm">
                Get a Free Estimate
              </LinkButton>
            </div>
          </Reveal>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.slug
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Grid of Projects */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => {
            const coverImg = project.images?.find((img) => img.isCover)?.url || project.images?.[0]?.url
            const additionalImages = (project.images || []).filter((img) => img.url !== coverImg)

            return (
              <Reveal key={project.id} delay={i * 0.07}>
                <div className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  {/* Clickable Cover Photo */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    {coverImg ? (
                      <Link
                        href={`/projects/${project.id}`}
                        aria-label={`View ${project.title} and all photos`}
                        className="group/photo block size-full"
                      >
                        <img
                          src={coverImg}
                          alt={project.title}
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-ink/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                            <span>View Project &amp; All Photos</span>
                            <ArrowRight className="size-3.5 text-primary" />
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                        No image available
                      </div>
                    )}

                    {/* Location Badge */}
                    <div className="pointer-events-none absolute top-3 right-3 flex items-center gap-1 rounded-md bg-ink/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      <MapPin className="size-3 text-primary" />
                      {project.city || "Aurora"}, {project.state || "IL"}
                    </div>

                    {/* Photo count indicator */}
                    {project.images && project.images.length > 1 && (
                      <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1 rounded bg-ink/80 px-2 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-md">
                        <Layers className="size-3 text-primary" />
                        {project.images.length} photos
                      </div>
                    )}
                  </div>

                  {/* Multi-Photo Thumbnail Strip */}
                  {additionalImages.length > 0 && (
                    <div className="flex items-center gap-2 border-b border-border/60 bg-muted/30 px-5 py-2.5 overflow-x-auto">
                      <span className="text-[11px] font-medium text-muted-foreground shrink-0">Photos:</span>
                      {additionalImages.slice(0, 4).map((img, imgIdx) => (
                        <Link
                          key={imgIdx}
                          href={`/projects/${project.id}`}
                          title={img.caption || `View all photos in project page`}
                          className="group/thumb relative size-10 shrink-0 overflow-hidden rounded-md border border-border transition-all hover:scale-105 hover:ring-2 hover:ring-primary"
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

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-extrabold tracking-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/projects/${project.id}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>

                    {/* Card Footer */}
                    <div className="mt-auto pt-5 flex items-center justify-between border-t border-border/60">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary/80"
                      >
                        <span>View all photos ({project.images?.length || 1})</span>
                        <ArrowRight className="size-3.5" />
                      </Link>

                      {project.serviceSlug && (
                        <Link
                          href={`/services/${project.serviceSlug}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span>Service</span>
                          <ArrowRight className="size-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center py-16 bg-muted/20 rounded-2xl border border-dashed border-border">
            <p className="text-muted-foreground text-sm">
              No projects found in this category at this time.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
