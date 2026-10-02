"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { LinkButton } from "@/components/ui/link-button"
import { business } from "@/lib/business"

const links = [
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#why", label: "Why Us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
]

interface SiteNavbarProps {
  solid?: boolean
}

export function SiteNavbar({ solid }: SiteNavbarProps = {}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // On inner pages (like /projects/...), or when scrolled, or when solid=true, show solid dark background
  const isHomePage = pathname === "/"
  const isSolid = solid !== undefined ? solid : (!isHomePage || scrolled)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isSolid
          ? "bg-ink/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <Link href="/" className="flex items-center" aria-label="Rugerios Roofing home">
          <Image
            src="/images/rugerios-logo.png"
            alt="Rugerios Roofing"
            width={220}
            height={220}
            priority
            className="h-14 w-auto lg:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink-foreground"
          >
            <Phone className="size-4 text-primary" />
            {business.phoneDisplay}
          </a>
          <LinkButton href="/schedule" sizeClass="h-10 gap-2 px-5 text-sm">
            Free Inspection
          </LinkButton>
        </div>

        <button
          type="button"
          className="text-ink-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-ink-foreground/90"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LinkButton
            href="/schedule"
            onClick={() => setOpen(false)}
            className="mt-4 w-full"
          >
            Schedule Free Inspection
          </LinkButton>
        </div>
      )}
    </header>
  )
}
