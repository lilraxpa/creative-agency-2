"use client"

import { useState, useEffect } from "react"

interface CyberTerminalProps {
  text: string
  speed?: number
  className?: string
}

export function CyberTerminal({ text, speed = 50, className = "" }: CyberTerminalProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <div className={`terminal-text font-mono ${className}`}>
      {displayText}
      <span className="animate-terminal-blink">_</span>
    </div>
  )
}
