"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { services } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const fieldClass =
  "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"

const labelClass = "mb-1.5 block text-sm font-semibold text-foreground"

export function ScheduleForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    // Simulate a request round-trip; wire to email/DB when a backend is connected.
    await new Promise((r) => setTimeout(r, 1100))
    setStatus("success")
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-9" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-foreground">
          Request received!
        </h2>
        <p className="mt-2 max-w-sm text-pretty text-muted-foreground">
          Thanks for reaching out to Rugerios Roofing. A team member will call you within one
          business day to confirm your free inspection.
        </p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input id="name" name="name" required placeholder="Jane Doe" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 123-4567"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="address" className={labelClass}>
            Property address
          </label>
          <input
            id="address"
            name="address"
            required
            placeholder="123 Main St, Your City"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Service needed
          </label>
          <select id="service" name="service" defaultValue="" required className={cn(fieldClass, "appearance-none")}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className={labelClass}>
            Preferred date
          </label>
          <input id="date" name="date" type="date" className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Tell us about your roof
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Leaks, storm damage, age of roof, or anything else..."
            className={cn(fieldClass, "resize-none")}
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-6 w-full text-base"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Request My Free Inspection"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No obligation. We&apos;ll never share your information.
      </p>
    </form>
  )
}
