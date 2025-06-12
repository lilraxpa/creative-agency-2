"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Owner",
    content:
      "Guard helped me recover my Bitcoin wallet worth $50,000. Their expertise and professionalism are unmatched. The team was incredibly supportive throughout the entire process.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Crypto Trader",
    content:
      "The crypto trading guidance I received was exceptional. My portfolio has grown by 300% following their strategies and market insights. Highly recommend their services!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Social Media Manager",
    content:
      "When my Instagram account with 100K followers was compromised, Guard recovered it within 48 hours. Their quick response and expertise saved my business.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=ER",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Gaming Enthusiast",
    content:
      "Lost access to my Steam account with $2000+ worth of games. Guard's team recovered everything perfectly and helped secure my account for the future.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=DT",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

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
      <Card className="card-modern border-0 shadow-2xl overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 animate-soft-pulse">
              <Quote className="h-8 w-8 text-white" />
            </div>

            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400 mx-0.5" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-slate-200 mb-8 italic leading-relaxed max-w-3xl mx-auto">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-br from-teal-400 to-cyan-400 shadow-lg">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg text-slate-100">{testimonials[currentIndex].name}</div>
                <div className="text-teal-400 font-medium">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center space-x-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full border-teal-400/30 hover:bg-teal-400/10 hover:border-teal-400/50 bg-transparent"
        >
          <ChevronLeft className="h-5 w-5 text-teal-400" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full border-teal-400/30 hover:bg-teal-400/10 hover:border-teal-400/50 bg-transparent"
        >
          <ChevronRight className="h-5 w-5 text-teal-400" />
        </Button>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-teal-500 to-cyan-500 w-8"
                : "bg-slate-600 hover:bg-teal-400/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
