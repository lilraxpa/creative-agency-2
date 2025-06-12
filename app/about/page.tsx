import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Shield, Users } from "lucide-react"

import { brandConfig } from "@/lib/brand-config"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInOnScroll } from "@/components/fade-in-on-scroll"
import { StaggeredFadeIn } from "@/components/staggered-fade-in"
import { TeamSection } from "@/components/team-section"

export const metadata = {
  title: "About Us",
  description: "Learn more about Guard, our mission, values, and expert team.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll direction="left">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  About <span className="gradient-text">{brandConfig.name}</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  We are a team of cyber security experts dedicated to protecting and recovering your valuable digital
                  assets.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll direction="right" delay={200}>
              <div className="relative h-[300px] md:h-[400px] cyber-border-enhanced overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Cyber+Security+Team"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-2xl font-bold text-white font-mono">ELITE SECURITY TEAM</h2>
                  <p className="text-green-300">Protecting your digital assets since 2015</p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll direction="left">
              <div className="order-2 lg:order-1 relative h-[300px] md:h-[400px] cyber-border-enhanced overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Our+Mission"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Shield className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white font-mono">MISSION STATEMENT</h3>
                    <div className="w-16 h-1 bg-green-500 mx-auto my-4"></div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll direction="right" delay={200}>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  At {brandConfig.name}, our mission is to provide cutting-edge cyber security solutions that protect
                  individuals and businesses from digital threats while offering expert recovery services for lost or
                  compromised digital assets.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe in combining technical expertise with exceptional customer service to deliver secure,
                  reliable, and effective solutions for all your digital security needs.
                </p>
                <div className="pt-4">
                  <Button asChild className="btn-hacker">
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core <span className="gradient-text">Values</span>
              </h2>
              <p className="text-muted-foreground">The principles that guide everything we do at {brandConfig.name}.</p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggeredFadeIn staggerDelay={150}>
              {[
                {
                  icon: Shield,
                  title: "Security",
                  description:
                    "We prioritize the security and confidentiality of our clients' data and digital assets above all else.",
                },
                {
                  icon: CheckCircle,
                  title: "Integrity",
                  description:
                    "We operate with complete transparency and honesty in all our client interactions and business practices.",
                },
                {
                  icon: Users,
                  title: "Excellence",
                  description:
                    "We strive for excellence in every service we provide, continuously improving our methods and technologies.",
                },
              ].map((value) => (
                <Card
                  key={value.title}
                  className="cyber-border-enhanced hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="text-center">
                    <value.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </StaggeredFadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Expert <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted-foreground">Meet the professionals behind {brandConfig.name}.</p>
            </div>
          </FadeInOnScroll>

          <TeamSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
        <div className="container relative z-10">
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to work with us?</h2>
              <p className="text-green-100 text-lg">
                Contact our team today to learn more about our services and how we can help secure your digital assets.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="hover:scale-105 transition-all duration-300 btn-hacker"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  )
}
