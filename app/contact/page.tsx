"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  Terminal,
} from "lucide-react"

import { brandConfig } from "@/lib/brand-config"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { FadeInOnScroll } from "@/components/fade-in-on-scroll"
import { MatrixRain } from "@/components/matrix-rain"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    urgency: "normal",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormState("submitting")

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormState("success")

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          urgency: "normal",
        })
        setFormState("idle")
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden hacker-matrix-bg">
        <MatrixRain />
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Contact <span className="gradient-text-hacker">Us</span>
              </h1>
              <p className="text-xl text-green-200 mb-8 font-mono">
                Get in touch with our team for inquiries, consultations, or support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#contact-form"
                  className="px-6 py-3 bg-green-900/30 text-green-400 rounded-full border border-green-500/30 
                           hover:bg-green-900/50 hover:border-green-500/50 transition-all duration-300
                           hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 font-mono"
                >
                  <Send className="h-4 w-4 inline-block mr-2" />
                  Send Message
                </Link>
                <Link
                  href="#contact-info"
                  className="px-6 py-3 bg-black/30 text-green-400 rounded-full border border-green-500/30 
                           hover:bg-black/50 hover:border-green-500/50 transition-all duration-300
                           hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 font-mono"
                >
                  <Phone className="h-4 w-4 inline-block mr-2" />
                  Contact Info
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7" id="contact-form">
              <FadeInOnScroll direction="left">
                <Card className="cyber-border-enhanced overflow-hidden">
                  <div className="bg-green-900/20 px-6 py-3 border-b border-green-500/30">
                    <div className="flex items-center">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="ml-4 font-mono text-sm text-green-400">secure-contact-form.sh</div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Terminal className="h-5 w-5 mr-2 text-green-500" />
                      Send us a message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="border-green-500/30 focus:border-green-500/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="border-green-500/30 focus:border-green-500/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-green-500/30 focus:border-green-500/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-green-500/30 focus:border-green-500/50"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Interested In</Label>
                          <Select
                            name="service"
                            value={formData.service}
                            onValueChange={(value) => handleSelectChange("service", value)}
                          >
                            <SelectTrigger className="border-green-500/30 focus:border-green-500/50">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {brandConfig.services.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.title}
                                </SelectItem>
                              ))}
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="urgency">Urgency Level</Label>
                          <Select
                            name="urgency"
                            value={formData.urgency}
                            onValueChange={(value) => handleSelectChange("urgency", value)}
                          >
                            <SelectTrigger className="border-green-500/30 focus:border-green-500/50">
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low - General Inquiry</SelectItem>
                              <SelectItem value="normal">Normal - Need Assistance</SelectItem>
                              <SelectItem value="high">High - Urgent Matter</SelectItem>
                              <SelectItem value="critical">Critical - Emergency</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="border-green-500/30 focus:border-green-500/50"
                        />
                      </div>

                      <Button type="submit" className="w-full btn-hacker" disabled={isSubmitting}>
                        {formState === "submitting" ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-green-500 border-t-transparent mr-2"></div>
                            Processing...
                          </>
                        ) : formState === "success" ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            Message Sent!
                          </>
                        ) : formState === "error" ? (
                          <>
                            <AlertCircle className="h-4 w-4 mr-2 text-red-500" />
                            Error - Try Again
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2 text-green-500" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <div className="text-xs text-muted-foreground text-center pt-2">
                        Your information is encrypted and secure. We'll never share your details with third parties.
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5" id="contact-info">
              <FadeInOnScroll direction="right" delay={200}>
                <div className="space-y-8">
                  <Card className="cyber-border-enhanced overflow-hidden">
                    <div className="bg-green-900/20 px-6 py-3 border-b border-green-500/30">
                      <div className="flex items-center">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-4 font-mono text-sm text-green-400">contact-info.json</div>
                      </div>
                    </div>

                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center shrink-0">
                            <MapPin className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-medium text-green-700 mb-1">Address</h3>
                            <p className="text-muted-foreground">{brandConfig.location}</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center shrink-0">
                            <Phone className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-medium text-green-700 mb-1">Phone</h3>
                            <p className="text-muted-foreground">{brandConfig.phone}</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center shrink-0">
                            <Mail className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-medium text-green-700 mb-1">Email</h3>
                            <p className="text-muted-foreground">
                              <a
                                href={`mailto:${brandConfig.email}`}
                                className="hover:text-green-600 transition-colors"
                              >
                                {brandConfig.email}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-green-500/20 my-6 pt-6">
                        <h3 className="font-medium text-green-700 mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                          <Link
                            href={brandConfig.socialMedia.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-900/30 text-green-500 hover:bg-green-900/50 transition-colors"
                          >
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                          </Link>
                          <Link
                            href={brandConfig.socialMedia.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-900/30 text-green-500 hover:bg-green-900/50 transition-colors"
                          >
                            <Smartphone className="h-5 w-5" />
                            <span className="sr-only">WhatsApp</span>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cyber-border-enhanced overflow-hidden">
                    <div className="bg-green-900/20 px-6 py-3 border-b border-green-500/30">
                      <div className="flex items-center">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-4 font-mono text-sm text-green-400">hours.config</div>
                      </div>
                    </div>

                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center shrink-0">
                          <Clock className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-green-700 mb-1">Business Hours</h3>
                          <p className="text-muted-foreground text-sm">Our team is available during these hours</p>
                        </div>
                      </div>

                      <div className="space-y-2 pl-14">
                        <div className="flex justify-between text-sm">
                          <span className="font-mono">Monday - Friday</span>
                          <span className="text-green-700 font-mono">09:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="font-mono">Saturday</span>
                          <span className="text-green-700 font-mono">10:00 - 16:00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="font-mono">Sunday</span>
                          <span className="text-green-700 font-mono">CLOSED</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-green-500/20">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
                          <span className="text-sm text-green-700">24/7 Emergency Support Available</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cyber-border-enhanced overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="font-medium text-green-700 mb-4">Response Time</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">General Inquiries</span>
                            <span className="text-sm text-green-700">24 hours</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Urgent Matters</span>
                            <span className="text-sm text-green-700">4 hours</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Emergency</span>
                            <span className="text-sm text-green-700">30 minutes</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-green-100 text-lg">
                Don't wait - secure your digital assets today. Our team is standing by to help you with any security
                concerns or recovery needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="btn-hacker">
                  <Link href="#contact-form">
                    <Send className="mr-2 h-4 w-4 text-green-500" />
                    Send Message
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-hacker">
                  <Link href="/services">
                    <Terminal className="mr-2 h-4 w-4 text-green-500" />
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  )
}
