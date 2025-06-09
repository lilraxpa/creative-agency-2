"use client"

import type { ReactNode } from "react"
import { FadeInOnScroll } from "./fade-in-on-scroll"

interface StaggeredFadeInProps {
  children: ReactNode[]
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export function StaggeredFadeIn({ children, staggerDelay = 100, direction = "up", className }: StaggeredFadeInProps) {
  return (
    <>
      {children.map((child, index) => (
        <FadeInOnScroll key={index} delay={index * staggerDelay} direction={direction} className={className}>
          {child}
        </FadeInOnScroll>
      ))}
    </>
  )
}
