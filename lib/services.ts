export type PortfolioImage = {
  id?: string;
  url: string;
  s3Key?: string;
  caption?: string;
  isBeforeAfter?: boolean;
  isCover?: boolean;
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  city?: string;
  state?: string;
  completedAt?: string;
  serviceId?: string;
  serviceSlug?: string;
  images: PortfolioImage[];
  isFeatured?: boolean;
};

export type Service = {
  id?: string;
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  features: string[];
  steps: { title: string; detail: string }[];
  projects?: PortfolioItem[];
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.rugeriosroofing.com/api';

export const fallbackPortfolio: PortfolioItem[] = [
  {
    id: "proj-1",
    title: "Complete Architectural Shingle Replacement",
    description: "Full tear-off of 2 layers of aging 3-tab shingles, plywood deck inspection & reinforcement, and installation of Owens Corning TruDefinition Duration architectural shingles with high-wind nailing and ridge ventilation.",
    city: "Aurora",
    state: "IL",
    completedAt: "2026-08-15",
    serviceSlug: "roof-replacement",
    isFeatured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1600&q=85",
        caption: "Finished dimensional architectural roof in Aurora, IL",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
        caption: "Decking inspection and ice & water barrier installation",
      },
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85",
        caption: "High-wind six-nail shingle fastening in progress",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption: "Continuous ridge vent and clean curb appeal completion",
      },
    ],
  },
  {
    id: "proj-2",
    title: "Steep-Slope Luxury Roofing & Flashing",
    description: "Multi-gable residential roof replacement featuring heavy-gauge step flashing around brick chimneys, drip edges, and seamless black aluminum gutters.",
    city: "Naperville",
    state: "IL",
    completedAt: "2026-07-22",
    serviceSlug: "roof-replacement",
    isFeatured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption: "Completed steep-slope roof replacement in Naperville, IL",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
        caption: "Aerial view of clean valley flashing and ridge vent line",
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
        caption: "Custom step flashing around masonry chimney",
      },
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1600&q=85",
        caption: "Heavy duty drip edge and perimeter protection",
      },
    ],
  },
  {
    id: "proj-3",
    title: "Chimney Flashing & Valley Leak Restoration",
    description: "Diagnosed active ceiling leak, replaced deteriorated valley metal and custom-bent aluminum step flashing, sealing all penetrations against Midwest freeze-thaw cycles.",
    city: "Batavia",
    state: "IL",
    completedAt: "2026-09-02",
    serviceSlug: "roof-repair",
    isFeatured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1600&q=85",
        caption: "Waterproof valley and step flashing repair in Batavia, IL",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
        caption: "Sub-surface leak detection and damaged wood repair",
      },
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85",
        caption: "Restored thermal seal and water-shedding valley",
      },
    ],
  },
  {
    id: "proj-4",
    title: "Severe Storm Wind Damage Shingle Patch",
    description: "Emergency dispatch following 55 mph wind gust storm. Replaced blown-off tabs with exact color-matched shingles and resealed compromised thermal strips.",
    city: "St. Charles",
    state: "IL",
    completedAt: "2026-08-30",
    serviceSlug: "roof-repair",
    isFeatured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        caption: "Seamless shingle repair and reseal in St. Charles, IL",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1600&q=85",
        caption: "Wind-lifted shingles replaced with exact color match",
      },
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
        caption: "Roof edge sealing and attic moisture inspection",
      },
    ],
  },
  {
    id: "proj-5",
    title: "Hail Damage Insurance Claim Restoration",
    description: "Documented 30+ hail impact bruises for the homeowner insurance adjuster. Full claim approval secured with zero out-of-pocket surprise costs, upgraded to Class 3 impact-resistant shingles.",
    city: "Geneva",
    state: "IL",
    completedAt: "2026-08-10",
    serviceSlug: "storm-damage",
    isFeatured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
        caption: "Insurance restored residential roof in Geneva, IL",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
        caption: "Chalked hail strike inspection documentation for insurance adjuster",
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
        caption: "Upgraded Class 3 impact-resistant architectural shingles",
      },
    ],
  },
  {
    id: "proj-6",
    title: "Seamless Gutters & Leaf Protection System",
    description: "Custom fabricated 6-inch seamless aluminum gutters on-site with oversized 3x4 downspouts and stainless steel micro-mesh guards to eliminate gutter clogs and ice dam risks.",
    city: "Oswego",
    state: "IL",
    completedAt: "2026-09-12",
    serviceSlug: "gutters",
    isFeatured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
        caption: "Seamless aluminum gutter installation in Oswego, IL",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1600&q=85",
        caption: "Custom roll-formed 6-inch seamless gutters",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption: "Oversized 3x4 downspout routing away from foundation",
      },
    ],
  },
];

export const fallbackServices: Service[] = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    short: "Full tear-off and new installs built to outlast the next storm.",
    description:
      "When repairs no longer make sense, we replace your roof from the deck up. We tear off old materials, inspect and repair the decking, and install premium architectural shingles with proper underlayment, flashing, and ventilation for a roof engineered to last decades.",
    image: "/images/service-replacement.png",
    features: [
      "Complete tear-off & disposal",
      "Architectural & designer shingles",
      "Upgraded underlayment & flashing",
      "Manufacturer-backed warranties",
    ],
    steps: [
      { title: "Free Inspection", detail: "We assess your current roof and give you an honest, itemized quote." },
      { title: "Material Selection", detail: "Choose colors and materials with guidance from our team." },
      { title: "Tear-Off & Install", detail: "Our crew removes the old roof and installs your new system in days." },
      { title: "Final Walkthrough", detail: "We clean up completely and walk the finished roof with you." },
    ],
    projects: fallbackPortfolio.filter((p) => p.serviceSlug === "roof-replacement"),
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    short: "Fast, lasting fixes for leaks, missing shingles, and wear.",
    description:
      "Small problems become expensive fast. Our repair crew tracks down the source of leaks, replaces damaged shingles, reseals flashing, and restores the integrity of your roof so you can stop worrying about the next rain.",
    image: "/images/service-repair.png",
    features: [
      "Leak detection & sealing",
      "Shingle & tile replacement",
      "Flashing & vent repair",
      "Emergency same-week service",
    ],
    steps: [
      { title: "Diagnose", detail: "We find the true source of the problem, not just the symptom." },
      { title: "Quote", detail: "Clear pricing before any work begins, no surprises." },
      { title: "Repair", detail: "Durable repairs using materials that match your existing roof." },
      { title: "Verify", detail: "We test and confirm the fix holds before we leave." },
    ],
    projects: fallbackPortfolio.filter((p) => p.serviceSlug === "roof-repair"),
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspection",
    short: "Detailed, no-pressure inspections with a full photo report.",
    description:
      "Whether you are buying a home, filing an insurance claim, or just want peace of mind, our thorough inspections catch issues early. You get a complete photo report and straight talk about what needs attention now versus later.",
    image: "/images/service-inspection.png",
    features: [
      "Free & no-obligation",
      "Full photo documentation",
      "Insurance claim support",
      "Drone-assisted assessment",
    ],
    steps: [
      { title: "Schedule", detail: "Pick a time that works, we handle the rest." },
      { title: "Assess", detail: "We inspect shingles, flashing, gutters, and ventilation." },
      { title: "Report", detail: "You receive a detailed report with photos and priorities." },
      { title: "Plan", detail: "We help you plan repairs and navigate insurance if needed." },
    ],
    projects: fallbackPortfolio.filter((p) => p.serviceSlug === "roof-replacement"),
  },
  {
    slug: "storm-damage",
    title: "Storm Damage Restoration",
    short: "Hail and wind damage restored, with insurance handled for you.",
    description:
      "After a storm, every hour counts. We provide emergency tarping, document all damage for your insurance company, and restore your roof to better-than-before condition. We work directly with adjusters so you are never stuck in the middle.",
    image: "/images/service-storm.png",
    features: [
      "Emergency tarping & mitigation",
      "Hail & wind damage repair",
      "Full insurance claim assistance",
      "Direct adjuster coordination",
    ],
    steps: [
      { title: "Respond", detail: "Rapid emergency response to stop further damage." },
      { title: "Document", detail: "We photograph and record every point of damage." },
      { title: "Claim", detail: "We meet your adjuster and advocate on your behalf." },
      { title: "Restore", detail: "Your roof is rebuilt to current code and standards." },
    ],
    projects: fallbackPortfolio.filter((p) => p.serviceSlug === "storm-damage"),
  },
  {
    slug: "gutters",
    title: "Gutters & Drainage",
    short: "Seamless gutters that protect your roof, walls, and foundation.",
    description:
      "Your roof is only as good as the water flowing off it. We design and install seamless gutter systems and guards that move water away from your home, protecting your fascia, siding, and foundation from costly water damage.",
    image: "/images/service-gutters.png",
    features: [
      "Seamless aluminum gutters",
      "Leaf guards & screens",
      "Downspout & drainage design",
      "Color-matched to your home",
    ],
    steps: [
      { title: "Measure", detail: "Precise on-site measurements for a custom fit." },
      { title: "Fabricate", detail: "Seamless gutters formed on-site for your home." },
      { title: "Install", detail: "Secure mounting with proper pitch for drainage." },
      { title: "Protect", detail: "Optional guards keep debris out for years." },
    ],
    projects: fallbackPortfolio.filter((p) => p.serviceSlug === "gutters"),
  },
];

export async function fetchServicesFromAPI(): Promise<Service[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/services`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch {
    // API request silent fallback
  }
  return fallbackServices;
}

export async function fetchServiceBySlugFromAPI(slug: string): Promise<Service | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/services/${slug}`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.slug) {
        // If API returned service without projects, attach fallback projects
        if (!data.projects || data.projects.length === 0) {
          const fallback = fallbackServices.find((s) => s.slug === slug);
          if (fallback?.projects) {
            data.projects = fallback.projects;
          }
        }
        return data;
      }
    }
  } catch {
    // API request silent fallback
  }
  return fallbackServices.find((s) => s.slug === slug) || null;
}

export async function fetchPortfolioFromAPI(): Promise<PortfolioItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/portfolio`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (err) {
    console.warn('Using fallback portfolio:', err);
  }
  return fallbackPortfolio;
}

export async function fetchPortfolioItemById(id: string): Promise<PortfolioItem | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/portfolio/${id}`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.id) {
        return data;
      }
    }
  } catch {
    // API request silent fallback
  }
  const fallback = fallbackPortfolio.find((p) => p.id === id);
  return fallback || null;
}

export const services: Service[] = fallbackServices;

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

