import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/home/hero"
import { Marquee } from "@/components/home/marquee"
import { ServicesSection } from "@/components/home/services-section"
import { Stats } from "@/components/home/stats"
import { Process } from "@/components/home/process"
import { WhyUs } from "@/components/home/why-us"
import { Reviews } from "@/components/home/reviews"
import { FAQ } from "@/components/home/faq"
import { CTA } from "@/components/home/cta"

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main>
        <Hero />
        <Marquee />
        <ServicesSection />
        <Stats />
        <Process />
        <WhyUs />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
