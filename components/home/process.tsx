import { ClipboardCheck, HardHat, PhoneCall, ThumbsUp } from "lucide-react"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    icon: PhoneCall,
    title: "Reach out",
    detail: "Call or book online. We schedule your free, no-pressure inspection fast.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspect & quote",
    detail: "We assess your roof and hand you an honest, itemized estimate with photos.",
  },
  {
    icon: HardHat,
    title: "We build it",
    detail: "Our vetted crew installs your roof with premium materials and a tidy site.",
  },
  {
    icon: ThumbsUp,
    title: "Walkthrough",
    detail: "We clean up completely and walk the finished job with you before we go.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-6xl">
            A simple, transparent process.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shrink-0">
                    <step.icon className="size-5" />
                  </span>
                  <span className="font-display text-4xl font-black tracking-tight text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
