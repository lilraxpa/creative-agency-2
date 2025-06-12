import Link from "next/link"
import { Bitcoin, Gamepad2, Mail, Share2, Shield, TrendingUp, CheckCircle, Terminal, Lock } from "lucide-react"

import { brandConfig } from "@/lib/brand-config"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInOnScroll } from "@/components/fade-in-on-scroll"
import { StaggeredFadeIn } from "@/components/staggered-fade-in"
import { ServiceShowcase } from "@/components/service-showcase"

export const metadata = {
  title: "Our Services",
  description: "Explore the comprehensive digital security and recovery services offered by Guard.",
}

export default function ServicesPage() {
  // Map service icons to Lucide components
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Bitcoin":
        return <Bitcoin className="h-10 w-10 text-green-500 mb-4" />
      case "TrendingUp":
        return <TrendingUp className="h-10 w-10 text-green-500 mb-4" />
      case "Mail":
        return <Mail className="h-10 w-10 text-green-500 mb-4" />
      case "Gamepad2":
        return <Gamepad2 className="h-10 w-10 text-green-500 mb-4" />
      case "Share2":
        return <Share2 className="h-10 w-10 text-green-500 mb-4" />
      default:
        return <Shield className="h-10 w-10 text-green-500 mb-4" />
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden hacker-matrix-bg">
        <div className="absolute inset-0 cyber-grid-enhanced opacity-30"></div>
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="gradient-text-hacker">Services</span>
              </h1>
              <p className="text-xl text-green-200 mb-8 font-mono">
                Comprehensive digital security and recovery solutions tailored to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {brandConfig.services.map((service, index) => (
                  <Link
                    key={service.id}
                    href={`#${service.id}`}
                    className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full border border-green-500/30 
                             hover:bg-green-900/50 hover:border-green-500/50 transition-all duration-300
                             hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 font-mono text-sm"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Featured Service Showcase */}
      <ServiceShowcase />

      {/* Services List */}
      <section className="py-16 md:py-24 bg-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-16">
            <StaggeredFadeIn staggerDelay={150}>
              {brandConfig.services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className="space-y-6">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-mono border border-green-500/30">
                        SERVICE {index + 1}
                      </div>
                      <h2 className="text-3xl font-bold font-mono">{service.title}</h2>
                      <p className="text-muted-foreground">{service.description}</p>

                      <div className="space-y-4 pt-4">
                        <h3 className="text-lg font-semibold text-green-700">Key Features</h3>
                        <ul className="space-y-2">
                          {[
                            "Advanced security protocols",
                            "24/7 expert support",
                            "Confidential handling",
                            "Proven recovery methods",
                            "Transparent reporting",
                          ].map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Button asChild className="btn-hacker">
                          <Link href="/contact">
                            <Terminal className="mr-2 h-4 w-4 text-green-500" />
                            Request This Service
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="aspect-video relative overflow-hidden rounded-lg cyber-border-enhanced">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-black/50 z-10"></div>
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          {getServiceIcon(service.icon)}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                          <h3 className="text-xl font-bold text-green-400 font-mono">{service.title}</h3>
                        </div>
                        <div className="w-full h-full bg-green-900/10 cyber-grid-enhanced"></div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-green-500/30 rounded-tr-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-green-500/30 rounded-bl-xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredFadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground">
              We follow a structured approach to ensure efficient and secure service delivery.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/80 via-green-500/50 to-green-500/20 hidden md:block"></div>

            <div className="space-y-16 md:space-y-0 relative">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description:
                    "We begin with a thorough consultation to understand your specific needs and challenges.",
                  icon: Terminal,
                },
                {
                  step: "02",
                  title: "Analysis & Strategy",
                  description:
                    "Our experts analyze your situation and develop a customized strategy for recovery or security.",
                  icon: TrendingUp,
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "We implement the solution with the highest standards of security and efficiency.",
                  icon: Shield,
                },
                {
                  step: "04",
                  title: "Monitoring & Support",
                  description: "Ongoing monitoring and support to ensure continued protection and optimal performance.",
                  icon: Lock,
                },
              ].map((process, index) => (
                <div key={process.step} className="md:flex items-center relative" style={{ minHeight: "160px" }}>
                  {/* Timeline node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 hidden md:block`}>
                    <div className="w-12 h-12 rounded-full bg-green-900 border-2 border-green-500 flex items-center justify-center text-green-400 font-mono font-bold">
                      {process.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 md:ml-auto"}`}>
                    <div className="bg-muted/40 p-6 rounded-lg cyber-border-enhanced">
                      <div className="md:hidden flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-900 border-2 border-green-500 flex items-center justify-center text-green-400 font-mono font-bold mr-4">
                          {process.step}
                        </div>
                        <h3 className="text-xl font-bold">{process.title}</h3>
                      </div>
                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{process.description}</p>
                      <div className="mt-4">
                        <process.icon className="h-6 w-6 text-green-500 md:mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about our services and processes.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does the recovery process typically take?",
                answer:
                  "Recovery timeframes vary depending on the complexity of the case. Simple recoveries may take a few days, while more complex cases could take several weeks. We provide estimated timeframes during the initial consultation.",
              },
              {
                question: "Is my data kept confidential during the recovery process?",
                answer:
                  "Absolutely. We maintain strict confidentiality protocols for all client data. Your information is protected with industry-leading security measures throughout the entire process.",
              },
              {
                question: "What is your success rate for recovery services?",
                answer:
                  "We maintain a high success rate across our recovery services. While each case is unique, our experienced team has successfully resolved the majority of cases we've handled. We provide honest assessments of recovery possibilities during consultation.",
              },
              {
                question: "Do you offer emergency services?",
                answer:
                  "Yes, we offer emergency response services for critical security incidents. Our team is available 24/7 to address urgent security breaches and recovery needs.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept various payment methods including credit cards, bank transfers, and select cryptocurrencies. Payment details are discussed during the consultation phase.",
              },
            ].map((faq, index) => (
              <Card key={index} className="cyber-border-enhanced hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-900/50 text-green-500 flex items-center justify-center text-sm font-mono mr-3">
                      Q{index + 1}
                    </span>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need our services?</h2>
            <p className="text-green-100 text-lg">
              Contact us today for a consultation and discover how we can help with your digital security and recovery
              needs.
            </p>
            <Button asChild size="lg" variant="secondary" className="btn-hacker">
              <Link href="/contact">
                <Terminal className="mr-2 h-4 w-4 text-green-500" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
