import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Bitcoin,
  Mail,
  Shield,
  ShieldCheck,
  TrendingUp,
  Lock,
  Eye,
  Users,
  Award,
  Clock,
  Sparkles,
  Cpu,
  Network,
  Bug,
  Heart,
  Star,
  Zap,
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
  const featuredServices = brandConfig.services.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden aurora-bg">
        <div className="absolute inset-0 gradient-bg-soft"></div>
        <FloatingElements />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll direction="left" duration={800}>
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full glass-modern text-sm font-medium text-teal-300 shadow-lg">
                  <Sparkles className="h-4 w-4 mr-2 text-teal-400" />
                  Trusted Digital Security Solutions
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="gradient-text-modern">{brandConfig.tagline}</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 max-w-lg leading-relaxed">
                  Professional cybersecurity solutions designed to protect and recover your valuable digital assets with
                  cutting-edge technology and human expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-modern group">
                    <Link href="/services" className="flex items-center">
                      <Shield className="mr-2 h-5 w-5 group-hover:animate-gentle-float" />
                      Explore Services
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="btn-outline-modern">
                    <Link href="/contact" className="flex items-center">
                      <Heart className="mr-2 h-5 w-5" />
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="right" duration={800} delay={200}>
              <div className="relative">
                <div className="aspect-square relative overflow-hidden rounded-3xl modern-border">
                  <div className="absolute inset-0 gradient-bg-primary opacity-20"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Cybersecurity+Team"
                    alt="Cybersecurity Team"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Floating badges */}
                  <div className="absolute top-6 right-6 glass-modern rounded-2xl p-4 animate-gentle-float">
                    <Shield className="h-8 w-8 text-teal-400" />
                  </div>
                  <div
                    className="absolute bottom-6 left-6 glass-modern rounded-2xl p-3 animate-gentle-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="flex items-center space-x-2 text-teal-400">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">System Secure</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl animate-soft-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-soft-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 gradient-bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <StaggeredFadeIn staggerDelay={150}>
                {[
                  { end: 500, suffix: "+", label: "Successful Recoveries", icon: ShieldCheck },
                  { end: 50, prefix: "$", suffix: "M+", label: "Assets Recovered", icon: TrendingUp },
                  { end: 98, suffix: "%", label: "Success Rate", icon: Award },
                  { end: 24, suffix: "/7", label: "Support Available", icon: Clock },
                ].map((stat, index) => (
                  <div key={index} className="space-y-4 p-6 glass-darker rounded-2xl">
                    <stat.icon className="h-10 w-10 text-cyan-300 mx-auto animate-gentle-float" />
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
                    <p className="text-cyan-100 text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </StaggeredFadeIn>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 section-dark relative overflow-hidden">
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-100">
                Why Choose <span className="gradient-text-modern">{brandConfig.name}</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                We combine cutting-edge technology with human expertise to deliver secure, reliable, and effective
                solutions for all your digital security needs.
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
                    "Industry-leading security protocols to protect your digital assets with military-grade encryption and real-time monitoring.",
                  color: "from-teal-500 to-cyan-500",
                },
                {
                  icon: Award,
                  title: "Proven Results",
                  description:
                    "High success rate in recovery operations with satisfied clients worldwide and industry recognition for excellence.",
                  color: "from-emerald-500 to-teal-500",
                },
                {
                  icon: Lock,
                  title: "Complete Privacy",
                  description:
                    "Your information remains confidential with our strict privacy policies and secure, encrypted processes.",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  description:
                    "Round-the-clock expert support and emergency response for critical security incidents and recovery needs.",
                  color: "from-teal-500 to-emerald-500",
                },
                {
                  icon: Eye,
                  title: "Real-time Monitoring",
                  description:
                    "Continuous monitoring and threat detection to prevent security breaches before they can cause damage.",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description:
                    "Certified cybersecurity professionals with years of experience in digital asset recovery and protection.",
                  color: "from-emerald-500 to-cyan-500",
                },
              ].map((feature, index) => (
                <Card key={index} className="card-modern group border-0 shadow-xl">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-100">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </StaggeredFadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 md:py-24 relative overflow-hidden aurora-bg">
        <div className="absolute inset-0 gradient-bg-soft"></div>
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-100">
                Our <span className="gradient-text-modern">Services</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Comprehensive digital recovery and security solutions designed with your needs in mind.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggeredFadeIn staggerDelay={150}>
              {featuredServices.map((service, index) => {
                const IconComponent =
                  service.icon === "Bitcoin"
                    ? Bitcoin
                    : service.icon === "TrendingUp"
                      ? TrendingUp
                      : service.icon === "Mail"
                        ? Mail
                        : Shield

                const colors = [
                  "from-teal-500 to-cyan-500",
                  "from-emerald-500 to-teal-500",
                  "from-cyan-500 to-blue-500",
                ]

                return (
                  <Card key={service.id} className="card-modern group border-0 shadow-xl overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${colors[index]}`}></div>
                    <CardHeader className="pb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[index]} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-100">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-slate-300 leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <Link
                        href={`/services#${service.id}`}
                        className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </StaggeredFadeIn>
          </div>

          <FadeInOnScroll delay={400}>
            <div className="text-center mt-12">
              <Button size="lg" className="btn-modern">
                <Link href="/services" className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  View All Services
                </Link>
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 section-darker">
        <div className="container">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-100">
                Cutting-Edge <span className="gradient-text-modern">Technology</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                We leverage the latest cybersecurity technologies and methodologies to ensure maximum protection and
                recovery success.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StaggeredFadeIn staggerDelay={100}>
              {[
                { name: "AI Analysis", icon: Cpu, color: "from-purple-500 to-pink-500" },
                { name: "Blockchain Forensics", icon: Network, color: "from-teal-500 to-cyan-500" },
                { name: "Quantum Encryption", icon: Lock, color: "from-emerald-500 to-teal-500" },
                { name: "Neural Networks", icon: Eye, color: "from-blue-500 to-cyan-500" },
                { name: "Machine Learning", icon: TrendingUp, color: "from-cyan-500 to-blue-500" },
                { name: "Cloud Security", icon: Shield, color: "from-teal-500 to-emerald-500" },
                { name: "Biometric Auth", icon: Users, color: "from-emerald-500 to-cyan-500" },
                { name: "Zero Trust", icon: ShieldCheck, color: "from-indigo-500 to-purple-500" },
              ].map((tech, index) => (
                <div key={tech.name} className="text-center space-y-4 group p-6 card-darker border-0 shadow-lg">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} p-2.5 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tech.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm text-slate-300 group-hover:text-teal-400 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </StaggeredFadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 relative overflow-hidden aurora-bg">
        <div className="absolute inset-0 gradient-bg-soft"></div>
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-100">
                What Our <span className="gradient-text-modern">Clients Say</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
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
      <section className="py-16 md:py-24 section-dark">
        <div className="container">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-100">
                Our <span className="gradient-text-modern">Process</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                A systematic approach designed to ensure maximum security and recovery success.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggeredFadeIn staggerDelay={200}>
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Comprehensive analysis of your security needs and current vulnerabilities.",
                  icon: Bug,
                  color: "from-teal-500 to-cyan-500",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Custom security strategy tailored to your specific requirements and risk profile.",
                  icon: Cpu,
                  color: "from-emerald-500 to-teal-500",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Deployment of advanced security measures and recovery protocols.",
                  icon: Zap,
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  step: "04",
                  title: "Support",
                  description: "Continuous monitoring and 24/7 support to ensure ongoing protection.",
                  icon: Eye,
                  color: "from-blue-500 to-indigo-500",
                },
              ].map((process, index) => (
                <div key={process.step} className="text-center space-y-6">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center text-white text-xl font-bold mx-auto shadow-lg`}
                    >
                      {process.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-teal-400/50 to-transparent"></div>
                    )}
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${process.color} p-2.5 mx-auto`}>
                    <process.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 mb-2">{process.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </StaggeredFadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <FloatingElements />
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Ready to Secure Your Digital Future?</h2>
              <p className="text-xl text-cyan-100 leading-relaxed max-w-2xl mx-auto">
                Contact our team today for a consultation and discover how we can help protect and recover your valuable
                digital information with our advanced cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-slate-800 hover:bg-gray-100 shadow-lg font-semibold"
                >
                  <Link href="/contact" className="flex items-center">
                    <Heart className="mr-2 h-5 w-5" />
                    Start Conversation
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-800 font-semibold"
                >
                  <Link href="/services" className="flex items-center">
                    <Star className="mr-2 h-5 w-5" />
                    Explore Services
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
