import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { BlogDetailClient } from '@/components/blog/blog-detail-client';
import { business } from '@/lib/business';

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: `Article Not Found | ${business.name}`,
    };
  }

  return {
    title: `${post.title} | ${business.name}`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author?.name || business.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || business.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { post, related } = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ink text-white flex items-center justify-center font-mono text-sm">
          Loading article...
        </div>
      }
    >
      <BlogDetailClient post={post} relatedPosts={related} />
    </Suspense>
  );
}
