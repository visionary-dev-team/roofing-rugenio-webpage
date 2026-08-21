import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { business, serviceAreas } from '@/lib/business'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: `Roofing Contractor in ${business.cityState} | Rugerios Roofing`,
  description: `Rugerios Roofing is a family-owned roofing contractor in ${business.city}, ${business.state}. Roof replacement, repair & storm damage. Book your free inspection today.`,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: business.domain,
    siteName: 'Rugerios Roofing',
    title: `Roofing Contractor in ${business.cityState} | Rugerios Roofing`,
    description: `Family-owned roofing contractor serving ${business.city}, ${business.state}. Roof replacement, repair, storm damage & free inspections.`,
    images: [{ url: business.heroImage, width: 1024, height: 1024, alt: 'Rugerios Roofing crew installing a new roof' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Roofing Contractor in ${business.cityState} | Rugerios Roofing`,
    description: `Family-owned roofing contractor serving ${business.city}, ${business.state}. Free inspections available.`,
    images: [business.heroImage],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a1a1a',
}

const roofingContractorSchema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': `${business.domain}/#business`,
  name: business.name,
  image: `${business.domain}${business.heroImage}`,
  logo: `${business.domain}${business.logo}`,
  url: business.domain,
  telephone: business.phoneDisplay,
  email: business.email,
  priceRange: business.priceRange,
  address: {
    '@type': 'PostalAddress',
    addressLocality: business.city,
    addressRegion: business.state,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
  ],
  areaServed: serviceAreas.map((area) => ({
    '@type': 'AdministrativeArea',
    name: `${area.name} County, ${business.state}`,
  })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${archivo.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(roofingContractorSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
