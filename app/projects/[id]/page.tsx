import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import {
  fetchPortfolioFromAPI,
  fetchPortfolioItemById,
  fetchServiceBySlugFromAPI,
} from "@/lib/services"
import { business } from "@/lib/business"
import { ProjectDetailClient } from "@/components/projects/project-detail-client"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const portfolio = await fetchPortfolioFromAPI()
  return portfolio.map((item) => ({ id: item.id }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params
  const project = await fetchPortfolioItemById(id)

  if (!project) {
    return { title: "Project Not Found | Rugerios Roofing" }
  }

  const cover = project.images?.find((img) => img.isCover)?.url || project.images?.[0]?.url || business.heroImage
  const title = `${project.title} in ${project.city || "Aurora"}, ${project.state || "IL"} | Rugerios Roofing`
  const description = project.description

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      type: "article",
      url: `${business.domain}/projects/${project.id}`,
      title,
      description,
      images: [{ url: cover, width: 1600, height: 1066, alt: project.title }],
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params
  const [project, allProjects] = await Promise.all([
    fetchPortfolioItemById(id),
    fetchPortfolioFromAPI(),
  ])

  if (!project) {
    notFound()
  }

  const service = project.serviceSlug
    ? await fetchServiceBySlugFromAPI(project.serviceSlug)
    : null

  const relatedProjects = allProjects.filter((p) => p.id !== project.id)

  const coverImg = project.images?.find((img) => img.isCover)?.url || project.images?.[0]?.url

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: project.title,
    description: project.description,
    image: coverImg,
    locationCreated: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: project.city || "Aurora",
        addressRegion: project.state || "IL",
      },
    },
    creator: {
      "@type": "RoofingContractor",
      name: business.name,
      telephone: business.phoneDisplay,
      url: business.domain,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <SiteNavbar />
      <main>
        <ProjectDetailClient
          project={project}
          service={service}
          relatedProjects={relatedProjects}
        />
      </main>
      <SiteFooter />
    </>
  )
}
