import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import { BlogCatalogClient } from '@/components/blog/blog-catalog-client';
import { business } from '@/lib/business';

export const revalidate = 3600; // 1 hour

export const metadata: Metadata = {
  title: `Roofing Blog & Storm Damage Guides | ${business.name} ${business.cityState}`,
  description:
    'Homeowner advice, storm & hail damage inspection tips, shingle comparisons, and roof maintenance guides for Aurora, Naperville, and Chicagoland homeowners.',
  keywords: [
    'roofing blog',
    'hail damage inspection aurora il',
    'roof repair tips illinois',
    'architectural shingles vs 3 tab',
    'preventing ice dams chicagoland',
    'roof replacement guide fox valley',
  ],
  openGraph: {
    title: `Roofing Blog & Storm Damage Guides | ${business.name}`,
    description:
      'Homeowner advice, storm & hail damage inspection tips, and roof maintenance guides for Northern Illinois homeowners.',
    url: `${business.domain}/blog`,
    siteName: business.name,
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ink text-white flex items-center justify-center font-mono text-sm">
          Loading roofing articles...
        </div>
      }
    >
      <BlogCatalogClient initialPosts={posts} />
    </Suspense>
  );
}
