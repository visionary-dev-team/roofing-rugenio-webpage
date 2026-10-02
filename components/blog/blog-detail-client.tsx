"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiteNavbar } from '@/components/site-navbar';
import { SiteFooter } from '@/components/site-footer';
import { BlogPost } from '@/lib/blog';
import { business } from '@/lib/business';
import { LinkButton } from '@/components/ui/link-button';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  Phone,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author?.name || 'Rugerios Roofing Team',
      url: business.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      logo: {
        '@type': 'ImageObject',
        url: `${business.domain}/images/rugerios-logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${business.domain}/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-ink text-ink-foreground flex flex-col font-sans">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteNavbar />

      <main className="flex-grow pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-foreground/50 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-ink-foreground/80 truncate max-w-[200px] sm:max-w-none">{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className="space-y-6 mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-primary text-ink text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs font-mono text-ink-foreground/60">
                {post.readingTime}
              </span>
              <span className="text-xs font-mono text-ink-foreground/40">•</span>
              <span className="text-xs font-mono text-ink-foreground/60">
                Published {post.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-lg sm:text-xl text-ink-foreground/80 font-light leading-relaxed border-l-2 border-primary pl-4 py-1">
                {post.excerpt}
              </p>
            )}

            {/* Author Card & Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                  R
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-snug">{post.author?.name || 'Rugerios Roofing Team'}</p>
                  <p className="text-xs text-ink-foreground/60 font-mono">{post.author?.role || 'Certified Roofing Specialist'}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-ink-foreground border border-white/10 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="size-3.5 text-primary" /> : <Share2 className="size-3.5" />}
                  <span>{copied ? 'Link Copied!' : 'Share'}</span>
                </button>
                <a
                  href={business.phoneHref}
                  className="px-3.5 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Phone className="size-3.5" />
                  <span>{business.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </header>

          {/* Featured Cover Image */}
          {post.coverImage && (
            <div className="w-full h-72 sm:h-96 md:h-[450px] relative rounded-3xl overflow-hidden mb-12 border border-white/10 bg-ink">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Article Body Content */}
          <article className="space-y-6 text-ink-foreground/80 leading-relaxed font-light text-base md:text-lg [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:pt-8 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-white/10 [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:pt-6 [&_p]:text-ink-foreground/85 [&_p]:text-base sm:[&_p]:text-lg [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:py-2.5 [&_blockquote]:my-6 [&_blockquote]:bg-primary/10 [&_blockquote]:rounded-r-xl [&_blockquote]:italic [&_blockquote]:text-ink-foreground/90 [&_img]:rounded-2xl [&_img]:border [&_img]:border-white/10 [&_img]:w-full [&_img]:max-h-[500px] [&_img]:object-cover [&_img]:my-6 [&_figure]:my-6 [&_figcaption]:text-xs [&_figcaption]:text-ink-foreground/50 [&_figcaption]:font-mono [&_figcaption]:text-center [&_figcaption]:mt-2 [&_a]:text-primary [&_a]:underline">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Author Trust Badge */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center gap-5">
            <div className="size-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xl shrink-0">
              <ShieldCheck className="size-8" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white">About Rugerios Roofing</h4>
              <p className="text-xs sm:text-sm text-ink-foreground/70 leading-relaxed">
                Licensed and insured roofing contractors in {business.cityState}. Specializing in residential roof replacement, commercial flat roofing, storm damage repair, and insurance restoration throughout Northern Illinois.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-transparent border border-primary/30 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Need an Expert Roof Inspection in Aurora?
              </h3>
              <p className="mt-1 text-sm text-ink-foreground/80">
                Call {business.phoneDisplay} or book online. 100% free inspection with no obligation.
              </p>
            </div>
            <div className="shrink-0">
              <LinkButton href="/schedule" sizeClass="h-11 px-5 text-sm font-bold">
                Book Free Inspection
              </LinkButton>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-white/10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Related Roofing Articles
                </h3>
                <Link href="/blog" className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
                  <span>View all articles</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-36 relative rounded-xl overflow-hidden mb-3 bg-ink">
                        <Image
                          src={rel.coverImage}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="text-[10px] font-mono text-primary font-bold uppercase">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mt-1">
                        {rel.title}
                      </h4>
                    </div>
                    <p className="text-xs text-ink-foreground/50 mt-3 font-mono">
                      {rel.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-ink-foreground/60 hover:text-primary transition-colors"
            >
              <ArrowLeft className="size-4" />
              <span>Back to all roofing guides</span>
            </Link>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
