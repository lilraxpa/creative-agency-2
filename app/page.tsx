import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Bitcoin,
  Mail,
  Shield,
  ShieldCheck,
  TrendingUp,
  Zap,
  Lock,
  Eye,
  Users,
  Award,
  Clock,
} from "lucide-react"

import { brandConfig } from "@/lib/brand-config"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingElements } from "@/components/floating-elements"
import { Testimonials } from "@/components/testimonials"
import { FadeInOnScroll } from "@/components/fade-in-on-scroll"
import { StaggeredFadeIn } from "@/components/staggered-fade-in"

export default function Home() {
  // Featured services (showing only 3 on homepage)
  const featuredServices = brandConfig.services.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden cyber-grid">
        <FloatingElements />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll direction="left" duration={800}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium">
                  <Zap className="h-4 w-4 mr-2" />
                  Advanced Cyber Security Solutions
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="gradient-text">{brandConfig.tagline}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Professional cyber security solutions to protect and recover your valuable digital assets with
                  cutting-edge technology and expert knowledge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300 animate-pulse-glow"
                  >
                    <Link href="/services">
                      Our Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="hover:bg-purple-50 hover:border-purple-300 hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="right" duration={800} delay={200}>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-700/20 rounded-lg animate-pulse-glow"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500&text=Cyber+Security"
                  alt="Cyber Security"
                  fill
                  className="object-cover rounded-lg animate-float"
                  priority
                />
                <div className="absolute top-4 right-4 glass-effect rounded-lg p-3">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-purple-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-0 left-1/4 w-1/4 h-1/3 bg-purple-700/10 blur-3xl rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="container">
          <FadeInOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <StaggeredFadeIn staggerDelay={150}>
                {[
                  { end: 500, suffix: "+", label: "Successful Recoveries" },
                  { end: 50, prefix: "$", suffix: "M+", label: "Assets Recovered" },
                  { end: 98, suffix: "%", label: "Success Rate" },
                  { end: 24, suffix: "/7", label: "Support Available" },
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
                    <p className="text-purple-200">{stat.label}</p>
                  </div>
                ))}
              </StaggeredFadeIn>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="gradient-text">{brandConfig.name}</span>
              </h2>
              <p className="text-muted-foreground">
                We combine technical expertise with exceptional service to deliver secure and reliable solutions.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggeredFadeIn staggerDelay={100}>
              {[
                {
                  icon: ShieldCheck,
                  title: "Advanced Security",
                  description:
                    "Industry-leading security protocols to protect your digital assets and personal information with military-grade encryption.",
                },
                {
                  icon: Award,
                  title: "Proven Results",
                  description:
                    "High success rate in recovery operations with satisfied clients worldwide and industry recognition.",
                },
                {
                  icon: Lock,
                  title: "Confidentiality",
                  description:
                    "Your information remains private with our strict confidentiality policies and secure processes.",
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  description:
                    "Round-the-clock technical support and emergency response for critical security incidents.",
                },
                {
                  icon: Eye,
                  title: "Real-time Monitoring",
                  description:
                    "Continuous monitoring and threat detection to prevent security breaches before they occur.",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description:
                    "Certified cybersecurity professionals with years of experience in digital asset recovery.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cyber-border"
                >
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-purple-600 mb-2 group-hover:animate-pulse" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </StaggeredFadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-muted-foreground">
                Comprehensive digital recovery and security solutions for all your needs.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggeredFadeIn staggerDelay={150}>
              {featuredServices.map((service) => {
                const IconComponent =
                  service.icon === "Bitcoin"
                    ? Bitcoin
                    : service.icon === "TrendingUp"
                      ? TrendingUp
                      : service.icon === "Mail"
                        ? Mail
                        : Shield

                return (
                  <Card
                    key={service.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cyber-border"
                  >
                    <CardHeader>
                      <IconComponent className="h-8 w-8 text-purple-600 mb-2 group-hover:animate-pulse" />
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription>{service.description}</CardDescription>
                      <Link
                        href={`/services#${service.id}`}
                        className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </StaggeredFadeIn>
          </div>

          <FadeInOnScroll delay={400}>
            <div className="text-center mt-12">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cutting-Edge <span className="gradient-text">Technology</span>
              </h2>
              <p className="text-muted-foreground">
                We leverage the latest cybersecurity technologies and methodologies to ensure maximum protection and
                recovery success.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StaggeredFadeIn staggerDelay={100}>
              {[
                { name: "AI-Powered Analysis", icon: "🤖" },
                { name: "Blockchain Forensics", icon: "⛓️" },
                { name: "Quantum Encryption", icon: "🔐" },
                { name: "Neural Networks", icon: "🧠" },
                { name: "Machine Learning", icon: "📊" },
                { name: "Cloud Security", icon: "☁️" },
                { name: "Biometric Auth", icon: "👁️" },
                { name: "Zero Trust", icon: "🛡️" },
              ].map((tech) => (
                <div key={tech.name} className="text-center space-y-4 group">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <h3 className="font-semibold text-sm group-hover:text-purple-600 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </StaggeredFadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-muted-foreground">
                Don't just take our word for it. Here's what our satisfied clients have to say about our services.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={200} direction="up">
            <div className="max-w-4xl mx-auto">
              <Testimonials />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-muted-foreground">
                A systematic approach to ensure maximum security and recovery success.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StaggeredFadeIn staggerDelay={200}>
              {[
                {
                  step: "01",
                  title: "Initial Assessment",
                  description: "Comprehensive analysis of your security needs and current vulnerabilities.",
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "Custom security strategy tailored to your specific requirements and risk profile.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Deployment of advanced security measures and recovery protocols.",
                },
                {
                  step: "04",
                  title: "Monitoring & Support",
                  description: "Continuous monitoring and 24/7 support to ensure ongoing protection.",
                },
              ].map((process, index) => (
                <div key={process.step} className="text-center space-y-4">
                  <div className="relative">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xl font-bold mx-auto animate-pulse-glow">
                      {process.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </StaggeredFadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <FloatingElements />
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to secure your digital future?</h2>
              <p className="text-purple-100 text-lg">
                Contact our team today for a consultation and discover how we can help protect and recover your valuable
                digital information with our advanced cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-all duration-300">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-700 hover:scale-105 transition-all duration-300"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  )
}
