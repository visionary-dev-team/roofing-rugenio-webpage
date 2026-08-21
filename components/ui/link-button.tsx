import Link from "next/link"
import type { ComponentProps } from "react"
import type { VariantProps } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type LinkButtonProps = ComponentProps<typeof Link> &
  Pick<VariantProps<typeof buttonVariants>, "variant"> & {
    sizeClass?: string
  }

export function LinkButton({
  className,
  variant = "default",
  sizeClass = "h-12 gap-2 px-7 text-base",
  ...props
}: LinkButtonProps) {
  return (
    <Link className={cn(buttonVariants({ variant }), sizeClass, className)} {...props} />
  )
}
