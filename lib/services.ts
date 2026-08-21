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
    if (!res.ok) throw new Error('API request failed');
    return await res.json();
  } catch (err) {
    console.warn('Using fallback portfolio:', err);
    return [];
  }
}

export const services: Service[] = fallbackServices;

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
