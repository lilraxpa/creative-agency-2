"use client"

import { Shield, Lock, Zap, Eye } from "lucide-react"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: "0s" }}>
        <Shield className="h-8 w-8 text-purple-400/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <Lock className="h-6 w-6 text-purple-500/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <Zap className="h-10 w-10 text-purple-300/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "3s" }}>
        <Eye className="h-7 w-7 text-purple-600/30" />
      </div>
    </div>
  )
}
