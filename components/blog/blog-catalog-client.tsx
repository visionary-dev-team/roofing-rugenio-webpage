"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiteNavbar } from '@/components/site-navbar';
import { SiteFooter } from '@/components/site-footer';
import { BlogPost } from '@/lib/blog';
import { Search, Clock, Calendar, ArrowRight, BookOpen, ShieldAlert, X } from 'lucide-react';
import { LinkButton } from '@/components/ui/link-button';

interface BlogCatalogClientProps {
  initialPosts: BlogPost[];
}

export function BlogCatalogClient({ initialPosts }: BlogCatalogClientProps) {
  const [allPosts, setAllPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sync client-side if API URL exists
  useEffect(() => {
    let isMounted = true;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (apiUrl) {
      fetch(`${apiUrl}/api/blog?isPublished=true`)
        .then((res) => res.json())
        .then((data) => {
          const items = Array.isArray(data) ? data : data?.items;
          if (isMounted && Array.isArray(items) && items.length > 0) {
            setAllPosts(items);
          }
        })
        .catch(() => {});
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    allPosts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['All', ...Array.from(set)];
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchCat =
        selectedCategory === 'All' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchQuery =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchCat && matchQuery;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  const featuredPost = allPosts[0];

  return (
    <div className="min-h-screen bg-ink text-ink-foreground flex flex-col font-sans">
      <SiteNavbar />

      <main className="flex-grow pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-4">
              <BookOpen className="size-3.5" />
              <span>Chicagoland Roofing Advice &amp; Guides</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Roofing Knowledge &amp; Storm Guides
            </h1>
            <p className="mt-4 text-base sm:text-lg text-ink-foreground/70 leading-relaxed">
              Expert advice for homeowners across Aurora, Naperville, and Northern Illinois. Learn how to identify hail damage, choose durable shingles, and protect your home investment.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-primary text-ink font-bold shadow-md shadow-primary/20'
                      : 'bg-white/5 text-ink-foreground/70 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-foreground/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, hail damage..."
                className="w-full pl-10 pr-9 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-ink-foreground/40 focus:outline-none focus:border-primary transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-foreground/40 hover:text-white"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>

          {/* Featured Post Card (when All and no search) */}
          {selectedCategory === 'All' && !searchQuery && featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group mb-14 block rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 h-72 lg:h-[420px] relative overflow-hidden bg-ink">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-ink text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow">
                      Featured Guide
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs font-mono text-ink-foreground/60">
                      <span className="text-primary font-bold">{featuredPost.category}</span>
                      <span>•</span>
                      <span>{featuredPost.readingTime}</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>
                    <p className="text-ink-foreground/70 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2.5 text-xs text-ink-foreground/80">
                      <div className="size-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs">
                        R
                      </div>
                      <span>{featuredPost.author.name}</span>
                    </div>
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl p-8">
              <ShieldAlert className="size-10 text-ink-foreground/40 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white">No articles found</h3>
              <p className="text-sm text-ink-foreground/60 mt-1 max-w-sm mx-auto">
                Try searching for a different keyword or select another roofing category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl"
                >
                  <div className="h-56 relative bg-ink overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/75 backdrop-blur-md text-amber-400 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-amber-500/30">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3 text-xs text-ink-foreground/50">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          <span>{post.publishedAt}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5" />
                          <span>{post.readingTime}</span>
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-ink-foreground/70 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs text-ink-foreground/60">{post.author.name}</span>
                      <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Consultation CTA Banner */}
          <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-transparent border border-primary/30 p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Suspect Storm Damage on Your Illinois Home?
              </h2>
              <p className="mt-2 text-ink-foreground/80 text-sm sm:text-base leading-relaxed">
                Don&apos;t wait for ceiling leaks. Our licensed roofing inspectors provide comprehensive evaluations and insurance adjuster documentation at zero cost to you.
              </p>
            </div>
            <div className="shrink-0">
              <LinkButton href="/schedule" sizeClass="h-12 px-6 text-sm font-bold">
                Schedule Free Inspection
              </LinkButton>
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
