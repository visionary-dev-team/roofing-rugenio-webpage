"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"

import { business, serviceAreas } from "@/lib/business"

const stats = [
  { value: business.roofsCompleted, suffix: "+", label: "Roofs completed" },
  { value: business.yearsInBusiness, suffix: " yrs", label: "Years in business" },
  { value: serviceAreas.length, suffix: "", label: "Counties served" },
  { value: 100, suffix: "%", label: "Satisfaction promise" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  // Initialize to the real value so the server-rendered HTML shows the final
  // number (never "0"), then animate up from 0 once the component mounts.
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  const shown = Math.round(display).toLocaleString()

  return <span ref={ref}>{`${shown}${suffix}`}</span>
}

export function Stats() {
  return (
    <section className="bg-ink py-20 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-5xl font-black tracking-tight text-primary sm:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-ink-foreground/60">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
