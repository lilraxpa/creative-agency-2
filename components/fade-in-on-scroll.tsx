"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface FadeInOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  threshold?: number
  triggerOnce?: boolean
}

export function FadeInOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 600,
  threshold = 0.1,
  triggerOnce = true,
}: FadeInOnScrollProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce,
  })

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return "translate-y-8"
      case "down":
        return "-translate-y-8"
      case "left":
        return "translate-x-8"
      case "right":
        return "-translate-x-8"
      default:
        return ""
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isIntersecting ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getDirectionClasses()}`,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
