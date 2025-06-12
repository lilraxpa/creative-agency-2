"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bitcoin, Shield, TrendingUp, Mail, Gamepad2, Share2, ArrowRight } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServiceShowcase() {
  const [activeService, setActiveService] = useState(0)

  // Map service icons to Lucide components
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Bitcoin":
        return <Bitcoin className="h-16 w-16 text-green-500" />
      case "TrendingUp":
        return <TrendingUp className="h-16 w-16 text-green-500" />
      case "Mail":
        return <Mail className="h-16 w-16 text-green-500" />
      case "Gamepad2":
        return <Gamepad2 className="h-16 w-16 text-green-500" />
      case "Share2":
        return <Share2 className="h-16 w-16 text-green-500" />
      default:
        return <Shield className="h-16 w-16 text-green-500" />
    }
  }

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Featured Services</h2>
            <div className="space-y-2">
              {brandConfig.services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
                    activeService === index ? "bg-green-900/20 border-l-4 border-green-500" : "hover:bg-muted/60"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        activeService === index ? "bg-green-900/50 text-green-400" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className={activeService === index ? "font-semibold" : ""}>{service.title}</span>
                  </div>
                  {activeService === index && <ArrowRight className="h-4 w-4 text-green-500" />}
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-3">
            <div className="relative h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-muted/40 p-8 rounded-lg cyber-border-enhanced h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">{getServiceIcon(brandConfig.services[activeService].icon)}</div>
                    <h3 className="text-2xl font-bold mb-4">{brandConfig.services[activeService].title}</h3>
                    <p className="text-muted-foreground mb-6">{brandConfig.services[activeService].description}</p>

                    <div className="space-y-4 mb-8">
                      <h4 className="font-semibold text-green-700">What we offer:</h4>
                      <ul className="space-y-2">
                        {[
                          "Professional consultation and assessment",
                          "Advanced technical solutions",
                          "Ongoing support and monitoring",
                          "Comprehensive security reports",
                          "Expert guidance and recommendations",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <Button asChild className="btn-hacker">
                        <Link href={`#${brandConfig.services[activeService].id}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4 text-green-500" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-green-500/30 rounded-tr-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-green-500/30 rounded-bl-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
