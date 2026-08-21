"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { business } from "@/lib/business"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0"
      >
        <img
          src="/images/hero-roof.webp"
          alt="Rugerios Roofing crew installing new architectural shingles in Aurora, IL"
          width={1024}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-20 sm:px-6 lg:pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
        >
          {business.cityState} &middot; Family-owned roofing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-4xl text-balance font-display text-5xl font-black leading-[0.95] tracking-tight text-ink-foreground sm:text-7xl lg:text-8xl"
        >
          Roofing contractor in <span className="text-primary">{business.cityState}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-foreground/70"
        >
          Roofs built to weather anything. Rugerios Roofing is a family-owned crew delivering
          honest, high-craft roof replacement, repair, and storm restoration. Get a free
          inspection today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <LinkButton href="/schedule" className="group h-13">
            Schedule Free Inspection
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </LinkButton>
          <div className="flex items-center gap-2 text-sm text-ink-foreground/70">
            <ShieldCheck className="size-5 text-primary" />
            Licensed, insured &amp; warranty-backed
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
