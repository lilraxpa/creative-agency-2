"use client"

import { Shield, Lock, Zap, Heart, Star, Sparkles } from "lucide-react"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 animate-gentle-float" style={{ animationDelay: "0s" }}>
        <Shield className="h-8 w-8 text-teal-400/30" />
      </div>
      <div className="absolute top-40 right-20 animate-gentle-float" style={{ animationDelay: "1s" }}>
        <Lock className="h-6 w-6 text-cyan-500/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-gentle-float" style={{ animationDelay: "2s" }}>
        <Sparkles className="h-10 w-10 text-emerald-400/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-gentle-float" style={{ animationDelay: "3s" }}>
        <Heart className="h-7 w-7 text-teal-500/30" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-gentle-float" style={{ animationDelay: "4s" }}>
        <Star className="h-5 w-5 text-cyan-400/20" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-gentle-float" style={{ animationDelay: "5s" }}>
        <Zap className="h-6 w-6 text-emerald-500/20" />
      </div>
    </div>
  )
}
