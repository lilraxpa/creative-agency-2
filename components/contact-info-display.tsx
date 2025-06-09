"use client"

import { useState, useEffect } from "react"
import { brandConfig } from "@/lib/brand-config"

interface ContactInfo {
  email: string
  phone: string
  location: string
  instagram: string
  whatsapp: string
}

export function useContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: brandConfig.email,
    phone: brandConfig.phone,
    location: brandConfig.location,
    instagram: brandConfig.socialMedia.instagram,
    whatsapp: brandConfig.socialMedia.whatsapp,
  })

  useEffect(() => {
    const savedData = localStorage.getItem("adminContactInfo")
    if (savedData) {
      const parsed = JSON.parse(savedData)
      setContactInfo(parsed)
    }
  }, [])

  return contactInfo
}
