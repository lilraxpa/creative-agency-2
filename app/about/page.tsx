import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Shield, Users } from "lucide-react"

import { brandConfig } from "@/lib/brand-config"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInOnScroll } from "@/components/fade-in-on-scroll"
import { StaggeredFadeIn } from "@/components/staggered-fade-in"

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
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Our+Team"
                  alt="Our Team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll direction="left">
              <div className="order-2 lg:order-1 relative h-[300px] md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Our+Mission"
                  alt="Our Mission"
                  fill
                  className="object-cover rounded-lg"
                />
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
                  className="cyber-border hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="text-center">
                    <value.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
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
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <FadeInOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Expert <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted-foreground">Meet the professionals behind {brandConfig.name}.</p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggeredFadeIn staggerDelay={200}>
              {[1, 2, 3].map((member) => (
                <div key={member} className="text-center group">
                  <div className="relative h-64 w-64 mx-auto mb-4 overflow-hidden rounded-full group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={`/placeholder.svg?height=256&width=256&text=Team Member ${member}`}
                      alt={`Team Member ${member}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Team Member {member}</h3>
                  <p className="text-purple-600 mb-2">Security Expert</p>
                  <p className="text-muted-foreground">
                    Experienced professional with expertise in digital security and asset recovery.
                  </p>
                </div>
              ))}
            </StaggeredFadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-600 text-white">
        <div className="container">
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to work with us?</h2>
              <p className="text-purple-100 text-lg">
                Contact our team today to learn more about our services and how we can help secure your digital assets.
              </p>
              <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-all duration-300">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  )
}
