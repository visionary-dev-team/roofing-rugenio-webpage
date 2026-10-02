export interface BlogAuthor {
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readingTime: string;
  coverImage: string;
  publishedAt: string;
  isPublished?: boolean;
  author: BlogAuthor;
  tags: string[];
}

export const SEED_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'how-to-spot-storm-hail-damage-roof',
    title: 'How to Spot Storm and Hail Damage on Your Chicagoland Roof',
    excerpt: 'Severe Midwest storms can cause hidden shingle bruises, granule loss, and leak vulnerabilities. Here is how Aurora and Fox Valley homeowners can identify storm damage before leaks start.',
    category: 'Storm & Hail Damage',
    readingTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-09-28',
    isPublished: true,
    author: {
      name: 'Rugerios Roofing Team',
      role: 'Storm Restoration & Roofing Experts',
      avatarUrl: '/images/rugerios-logo.png',
    },
    tags: ['Storm Damage', 'Hail Inspection', 'Aurora IL', 'Insurance Claims', 'Roof Repair'],
    content: `<h2>The Hidden Danger of Hail Damage in Northern Illinois</h2>
<p>Living in Aurora and the greater Chicagoland area means dealing with severe summer hail and intense thunderstorms. While broken siding or smashed gutters are easy to spot, hail damage to asphalt shingles often goes unnoticed until water starts dripping through your ceiling months later.</p>

<figure class="my-8 block">
  <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80" alt="Storm damage roof assessment" class="rounded-2xl border border-white/10 w-full max-h-[500px] object-cover shadow-2xl" />
  <figcaption class="text-xs text-ink-foreground/50 text-center mt-2.5 font-mono">Professional inspection of asphalt shingles following severe hail storm in Illinois</figcaption>
</figure>

<h3>1. Granule Loss and Dark Indentations</h3>
<p>Hailstones strike roofing shingles with tremendous velocity, dislodging the protective ceramic granules that shield asphalt from ultraviolet radiation. Look for dark, circular bruises where the underlying black bitumen is exposed.</p>

<h3>2. Cracked or Lifted Shingle Tabs</h3>
<p>High winds accompanying severe storms frequently get underneath shingle tabs, breaking the thermal sealant strip. Once lifted, subsequent wind gusts can crack or tear shingles clean off the roof deck.</p>

<h3>3. Dents on Metal Vents, Flashing, and Gutters</h3>
<p>Before inspecting your steep roof slopes, check soft metals around your home. Dents on roof vents, drip edges, downspouts, and AC condenser fins are prime indicators that your roof sustained hail impact.</p>

<blockquote class="border-l-4 border-primary pl-4 py-3 my-6 bg-primary/10 rounded-r-xl italic text-ink-foreground/90">
  <strong>Insurance Tip:</strong> Most Illinois homeowner insurance policies have strict deadlines (often 12 months) for storm damage claims. Scheduling a prompt, documented inspection ensures your claim is properly supported with photo evidence.
</blockquote>

<h3>Next Steps for Chicagoland Homeowners</h3>
<p>If your neighborhood was hit by recent hail or 50+ mph wind gusts, contact <strong>Rugerios Roofing</strong> for a free, comprehensive storm damage assessment. Our local certified specialists provide honest evaluations and detailed inspection reports for insurance adjusters.</p>`,
  },
  {
    id: 'post-2',
    slug: 'architectural-vs-3-tab-asphalt-shingles-illinois',
    title: 'Architectural vs. 3-Tab Asphalt Shingles: Which is Best for Illinois Winters?',
    excerpt: 'Comparing durability, wind ratings, ice dam resistance, and long-term value between 3-tab and dimensional architectural shingles in harsh Midwest climates.',
    category: 'Shingles & Materials',
    readingTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-09-25',
    isPublished: true,
    author: {
      name: 'Rugerios Roofing Team',
      role: 'Residential Roofing Specialists',
      avatarUrl: '/images/rugerios-logo.png',
    },
    tags: ['Asphalt Shingles', 'Architectural Shingles', 'Roof Replacement', 'Chicagoland'],
    content: `<h2>Choosing the Right Shingle for Severe Midwest Climates</h2>
<p>When it comes time to replace your roof in Illinois, the choice between traditional <strong>3-tab shingles</strong> and modern <strong>architectural (dimensional) shingles</strong> is one of the most critical decisions affecting your home's protection and curb appeal.</p>

<figure class="my-8 block">
  <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80" alt="Architectural shingles installation" class="rounded-2xl border border-white/10 w-full max-h-[500px] object-cover shadow-2xl" />
  <figcaption class="text-xs text-ink-foreground/50 text-center mt-2.5 font-mono">Dimensional architectural shingles installed with high-wind fasteners</figcaption>
</figure>

<h3>What Are 3-Tab Shingles?</h3>
<p>3-tab shingles are single-layer asphalt shingles cut into three uniform tabs. Historically, they have been the standard budget option for residential homes. However, their thinner profile makes them rated for winds only up to 60–70 mph, making them vulnerable to gusty Midwest winter storms.</p>

<h3>What Are Architectural (Dimensional) Shingles?</h3>
<p>Architectural shingles feature two or more layers of asphalt laminated together. This dual-layer construction creates a textured, multi-dimensional wood shake appearance with vastly superior performance characteristics:</p>
<ul class="list-disc list-inside space-y-2 my-4 text-ink-foreground/80">
  <li><strong>Wind Resistance:</strong> Rated up to 130 mph with high-wind nailing patterns.</li>
  <li><strong>Lifespan:</strong> Typically 30 to 50 years compared to 15 to 20 years for 3-tab.</li>
  <li><strong>Hail Impact:</strong> Thicker matting absorbs impacts much better without cracking.</li>
</ul>

<h3>Which Delivers Better Value?</h3>
<p>While architectural shingles cost slightly more upfront (roughly 15–20% higher material cost), their longer lifespan, extended warranties, and enhanced resistance to winter freeze-thaw cycles make them the clear winner for Illinois homeowners.</p>`,
  },
  {
    id: 'post-3',
    slug: 'preventing-ice-dams-attic-condensation-midwest-winters',
    title: 'Preventing Ice Dams and Attic Condensation During Midwest Winters',
    excerpt: 'Learn how proper soffit and ridge ventilation paired with adequate attic insulation prevents dangerous ice dams that destroy gutters and cause interior ceiling leaks.',
    category: 'Roof Repair & Maintenance',
    readingTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-09-20',
    isPublished: true,
    author: {
      name: 'Rugerios Roofing Team',
      role: 'Maintenance & Winterization Specialists',
      avatarUrl: '/images/rugerios-logo.png',
    },
    tags: ['Ice Dams', 'Winter Roofing', 'Attic Ventilation', 'Roof Maintenance', 'Illinois'],
    content: `<h2>The Science Behind Winter Ice Dams</h2>
<p>Every winter, homeowners across Kane, DuPage, and Will Counties face the headache of icicles hanging off their eaves. While they may look picturesque, large icicles are often a warning sign of an <strong>ice dam</strong> forming on your roof edge.</p>

<h3>How an Ice Dam Forms</h3>
<ol class="list-decimal list-inside space-y-2 my-4 text-ink-foreground/80">
  <li>Heat escapes from your living area into an uninsulated or poorly vented attic.</li>
  <li>The warm attic air heats the underside of the roof deck, melting the snow sitting on top of the shingles.</li>
  <li>The melted water trickles down the roof slope until it reaches the colder eaves and overhangs.</li>
  <li>The water refreezes at the edge, building up a ridge of ice that blocks further runoff.</li>
  <li>Ponding water backs up behind the ice dam, slipping under shingles and infiltrating your interior walls and ceilings.</li>
</ol>

<blockquote class="border-l-4 border-primary pl-4 py-3 my-6 bg-primary/10 rounded-r-xl italic text-ink-foreground/90">
  <strong>Crucial Warning:</strong> Chipping at ice with axes or shovels punctures shingles and voids warranties. The only permanent solution is balanced attic ventilation, ice and water shield underlayment, and proper air sealing.
</blockquote>

<h3>The Real Fix: Ventilation & Insulation</h3>
<p>The true permanent fix addresses the root thermal issue:</p>
<ul class="list-disc list-inside space-y-2 my-4 text-ink-foreground/80">
  <li><strong>Balanced Intake & Exhaust:</strong> Continuous soffit vents combined with ridge vents keep attic temperatures close to outdoor temperatures.</li>
  <li><strong>Ice & Water Shield Barrier:</strong> Installing a self-adhering waterproof membrane at least 3 to 6 feet up from the roof edge during re-roofing protects against unavoidable freeze-back.</li>
  <li><strong>Air Sealing:</strong> Sealing attic bypasses around can lights, chimney chases, and plumbing stacks stops heat leakage into the attic.</li>
</ul>

<p>Need your roof winter-ready? Contact Rugerios Roofing for a pre-winter inspection and ventilation check.</p>`,
  },
];

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_BASE_URL;

  if (apiUrl) {
    try {
      const res = await fetch(`${apiUrl}/api/blog?isPublished=true`, {
        next: { revalidate: 3600 },
      });
      if (res.ok) {
        const data = await res.json();
        const items = Array.isArray(data) ? data : data?.items;
        if (Array.isArray(items) && items.length > 0) {
          return items;
        }
      }
    } catch {
      // Fallback to seeds
    }
  }

  return SEED_BLOG_POSTS;
}

export async function getBlogPostBySlug(slug: string): Promise<{ post: BlogPost | null; related: BlogPost[] }> {
  const all = await getAllBlogPosts();
  const post = all.find((p) => p.slug === slug) || null;
  const related = all.filter((p) => p.slug !== slug).slice(0, 3);
  return { post, related };
}
