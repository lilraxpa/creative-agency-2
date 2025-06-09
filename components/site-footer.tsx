"use client"

import Link from "next/link"
import { Instagram, Mail, MapPin, Phone, Shield, Smartphone } from "lucide-react"

import { brandConfig } from "@/lib/brand-config"
import { useContactInfo } from "@/components/contact-info-display"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const contactInfo = useContactInfo()

  return (
    <footer className="bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center space-x-2 group">
              <Shield className="h-6 w-6 text-purple-600 group-hover:animate-pulse transition-all duration-300" />
              <span className="text-xl font-bold gradient-text">{brandConfig.name}</span>
            </div>
            <p className="text-muted-foreground">{brandConfig.description}</p>
            <div className="flex space-x-4">
              <Link
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Smartphone className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Footer Links with staggered animations */}
          {brandConfig.footerLinks.map((group, groupIndex) => (
            <div
              key={group.title}
              className="space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (groupIndex + 1)}s` }}
            >
              <h3 className="text-sm font-medium gradient-text">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-purple-600 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-sm font-medium gradient-text">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground group">
                <MapPin className="h-5 w-5 text-purple-600 shrink-0 mt-0.5 group-hover:animate-pulse" />
                <span>{contactInfo.location}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground group">
                <Phone className="h-5 w-5 text-purple-600 shrink-0 group-hover:animate-pulse" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground group">
                <Mail className="h-5 w-5 text-purple-600 shrink-0 group-hover:animate-pulse" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-600 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p>
            &copy; {currentYear} {brandConfig.name}. All rights reserved. | Securing your digital future with advanced
            cybersecurity solutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
