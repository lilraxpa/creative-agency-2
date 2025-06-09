"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Shield, X } from "lucide-react"
import { usePathname } from "next/navigation"

import { brandConfig } from "@/lib/brand-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
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
    // Listen for storage changes
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <Shield className="h-6 w-6 text-purple-600 group-hover:animate-pulse-glow transition-all duration-300" />
          <span className="text-xl font-bold group-hover:text-purple-600 transition-colors duration-300">
            {brandConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route, index) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-purple-600 hover:scale-105 relative group",
                pathname === route.path ? "text-purple-600" : "text-muted-foreground",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {route.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <ThemeToggle />
          {isLoggedIn && <LogoutButton />}
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-purple-600 py-2",
                  pathname === route.path ? "text-purple-600" : "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <Button asChild className="bg-purple-600 hover:bg-purple-700 w-full">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
            {isLoggedIn && (
              <div className="pt-2 border-t">
                <LogoutButton />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
