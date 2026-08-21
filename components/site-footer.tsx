import Link from "next/link"
import Image from "next/image"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { services } from "@/lib/services"
import { business, serviceAreas } from "@/lib/business"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex" aria-label="Rugerios Roofing home">
              <span className="inline-flex items-center justify-center rounded-lg bg-white px-3 py-2">
                <Image
                  src="/images/rugerios-logo.png"
                  alt="Rugerios Roofing"
                  width={160}
                  height={160}
                  className="h-16 w-auto"
                />
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
              Family-owned roofing craftsmanship you can trust. Licensed, insured, and
              committed to protecting what matters most.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-ink-foreground/70 transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/#why" className="text-ink-foreground/70 hover:text-primary">
                  Why Rugerios
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-ink-foreground/70 hover:text-primary">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-ink-foreground/70 hover:text-primary">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-ink-foreground/70 hover:text-primary">
                  Free Inspection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Contact
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-ink-foreground/70">
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-primary" />
                <a href={business.phoneHref} className="hover:text-primary">
                  {business.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-primary" />
                <a href={business.emailHref} className="hover:text-primary">
                  {business.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Serving {business.cityState} &amp; surrounding counties</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  {business.hours.label}
                  <br />
                  <span className="text-ink-foreground/50">{business.hours.note}</span>
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Areas we serve
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="text-ink-foreground/70 transition-colors hover:text-primary"
                >
                  {area.name} County
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-ink-foreground/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Rugerios Roofing. All rights reserved.</p>
          <p>Licensed &amp; Insured &middot; Free Estimates &middot; Financing Available</p>
        </div>
      </div>
    </footer>
  )
}
