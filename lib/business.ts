// Central source of truth for Rugerios Roofing NAP + local SEO data.

export const business = {
  name: "Rugerios Roofing",
  city: "Aurora",
  state: "IL",
  cityState: "Aurora, IL",
  domain: "https://rugeriosroofing.com",
  phoneDisplay: "(331) 425-2332",
  phoneHref: "tel:+13314252332",
  email: "info@rugeriosroofing.com",
  emailHref: "mailto:info@rugeriosroofing.com",
  priceRange: "$$",
  yearsInBusiness: 10,
  roofsCompleted: 500,
  logo: "/images/rugerios-logo.png",
  heroImage: "/images/hero-roof.webp",
  // Approximate coordinates for Aurora, IL.
  geo: { latitude: 41.7606, longitude: -88.3201 },
  hours: {
    label: "Mon–Fri 7am–5pm",
    note: "Weekends reserved for emergencies",
  },
} as const

// Service-area business: no storefront address, service is delivered on-site
// across the following Northern Illinois counties.
export type ServiceArea = { slug: string; name: string }

export const serviceAreas: ServiceArea[] = [
  "Winnebago",
  "Boone",
  "McHenry",
  "Lake",
  "Ogle",
  "Lee",
  "DeKalb",
  "Kane",
  "DuPage",
  "Cook",
  "LaSalle",
  "Grundy",
  "Will",
  "Putnam",
  "Marshall",
  "Kankakee",
].map((name) => ({
  name,
  slug: name.toLowerCase().replace(/\s+/g, "-"),
}))

export function getServiceArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug)
}
