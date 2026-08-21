import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { fetchServicesFromAPI } from "@/lib/services"
import { Reveal } from "@/components/reveal"

export async function ServicesSection() {
  const services = await fetchServicesFromAPI()
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
            What we do
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-6xl">
            Full-service roofing, done right the first time.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-extrabold tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={services.length * 0.08}>
            <Link
              href="/schedule"
              className="group flex h-full min-h-52 flex-col justify-between rounded-2xl bg-primary p-6 text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="font-display text-2xl font-black leading-tight tracking-tight">
                Not sure what you need?
              </span>
              <span className="flex items-center gap-2 font-semibold">
                Book a free inspection
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
