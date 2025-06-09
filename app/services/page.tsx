import Link from "next/link"
import { Bitcoin, Gamepad2, Mail, Share2, Shield, TrendingUp } from "lucide-react"

import { brandConfig } from "@/lib/brand-config"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInOnScroll } from "@/components/fade-in-on-scroll"
import { StaggeredFadeIn } from "@/components/staggered-fade-in"

export const metadata = {
  title: "Our Services",
  description: "Explore the comprehensive digital security and recovery services offered by Guard.",
}

export default function ServicesPage() {
  // Map service icons to Lucide components
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Bitcoin":
        return <Bitcoin className="h-10 w-10 text-purple-600 mb-4" />
      case "TrendingUp":
        return <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
      case "Mail":
        return <Mail className="h-10 w-10 text-purple-600 mb-4" />
      case "Gamepad2":
        return <Gamepad2 className="h-10 w-10 text-purple-600 mb-4" />
      case "Share2":
        return <Share2 className="h-10 w-10 text-purple-600 mb-4" />
      default:
        return <Shield className="h-10 w-10 text-purple-600 mb-4" />
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive digital security and recovery solutions tailored to your needs.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggeredFadeIn staggerDelay={150}>
              {brandConfig.services.map((service) => (
                <Card
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-20 cyber-border hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    {getServiceIcon(service.icon)}
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <div className="pt-4">
                      <Button asChild className="bg-purple-600 hover:bg-purple-700">
                        <Link href="/contact">Request Service</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredFadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground">
              We follow a structured approach to ensure efficient and secure service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold">Consultation</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your specific needs and challenges.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold">Analysis & Strategy</h3>
              <p className="text-muted-foreground">
                Our experts analyze your situation and develop a customized strategy for recovery or security.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-muted-foreground">
                We implement the solution with the highest standards of security and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about our services and processes.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How long does the recovery process typically take?</h3>
              <p className="text-muted-foreground">
                Recovery timeframes vary depending on the complexity of the case. Simple recoveries may take a few days,
                while more complex cases could take several weeks. We provide estimated timeframes during the initial
                consultation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Is my data kept confidential during the recovery process?</h3>
              <p className="text-muted-foreground">
                Absolutely. We maintain strict confidentiality protocols for all client data. Your information is
                protected with industry-leading security measures throughout the entire process.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">What is your success rate for recovery services?</h3>
              <p className="text-muted-foreground">
                We maintain a high success rate across our recovery services. While each case is unique, our experienced
                team has successfully resolved the majority of cases we've handled. We provide honest assessments of
                recovery possibilities during consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need our services?</h2>
            <p className="text-purple-100 text-lg">
              Contact us today for a consultation and discover how we can help with your digital security and recovery
              needs.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
