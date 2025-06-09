"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Owner",
    content:
      "Guard helped me recover my Bitcoin wallet worth $50,000. Their expertise and professionalism are unmatched. I couldn't be more grateful!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Crypto Trader",
    content:
      "The crypto trading guidance I received was exceptional. My portfolio has grown by 300% following their strategies and market insights.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Social Media Manager",
    content:
      "When my Instagram account with 100K followers was compromised, Guard recovered it within 48 hours. Absolutely incredible service!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=ER",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Gaming Enthusiast",
    content:
      "Lost access to my Steam account with $2000+ worth of games. Guard's team recovered everything perfectly. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=DT",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <Card className="cyber-border glass-effect">
        <CardContent className="p-8">
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <blockquote className="text-lg text-center mb-6 italic">"{testimonials[currentIndex].content}"</blockquote>

          <div className="flex items-center justify-center space-x-4">
            <img
              src={testimonials[currentIndex].avatar || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              className="w-12 h-12 rounded-full"
            />
            <div className="text-center">
              <div className="font-semibold">{testimonials[currentIndex].name}</div>
              <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center space-x-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="hover:bg-purple-100 hover:border-purple-300 transition-all duration-300"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="hover:bg-purple-100 hover:border-purple-300 transition-all duration-300"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-purple-600 w-8" : "bg-purple-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
