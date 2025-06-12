"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Shield, X, Sparkles } from "lucide-react"
import { usePathname } from "next/navigation"

import { brandConfig } from "@/lib/brand-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LogoutButton } from "@/components/logout-button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true")
    }

    checkAuth()
    window.addEventListener("storage", checkAuth)
    return () => window.removeEventListener("storage", checkAuth)
  }, [])

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-teal-400/20 glass-modern transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Shield className="h-7 w-7 text-teal-400 group-hover:text-teal-300 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-xl font-bold gradient-text-bright group-hover:scale-105 transition-transform duration-300">
            {brandConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route, index) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-teal-400 hover:scale-105 relative group",
                pathname === route.path ? "text-teal-400" : "text-slate-300",
              )}
            >
              {route.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300",
                  pathname === route.path ? "w-full" : "w-0 group-hover:w-full",
                )}
              ></span>
            </Link>
          ))}
          {isLoggedIn && <LogoutButton />}
          <Button className="btn-modern group">
            <Link href="/contact" className="flex items-center">
              <Sparkles className="mr-2 h-4 w-4 group-hover:animate-spin" />
              Get Started
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="hover:bg-teal-400/10"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-teal-400" /> : <Menu className="h-6 w-6 text-teal-400" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-teal-400/20 glass-darker">
          <div className="container py-4 flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-teal-400 py-2 px-4 rounded-lg hover:bg-teal-400/10",
                  pathname === route.path ? "text-teal-400 bg-teal-400/10" : "text-slate-300",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <Button className="btn-modern mt-4">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                <Sparkles className="mr-2 h-4 w-4" />
                Get Started
              </Link>
            </Button>
            {isLoggedIn && (
              <div className="pt-2 border-t border-teal-400/20">
                <LogoutButton />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
