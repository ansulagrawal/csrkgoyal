"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "CEO, TechStart Solutions",
    company: "Technology Startup",
    content:
      "Rajat's expertise in corporate compliance has been invaluable to our startup. His proactive approach and attention to detail have saved us from potential regulatory issues.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Amit Patel",
    position: "Managing Director, Global Enterprises",
    company: "Manufacturing Company",
    content:
      "Working with Rajat has transformed our approach to legal compliance. His strategic guidance has helped us navigate complex regulatory requirements with confidence.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Founder, InnovateCorp",
    company: "Consulting Firm",
    content:
      "Exceptional service and deep knowledge of corporate law. Rajat's team has been instrumental in our company's growth and compliance journey.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Ravi Kumar",
    position: "Director, Finance Plus",
    company: "Financial Services",
    content:
      "Professional, reliable, and always available when we need guidance. Rajat's expertise in regulatory matters is unmatched.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses across industries for reliable legal services and expert guidance.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-primary-100">
              <Quote className="w-16 h-16" />
            </div>

            {/* Testimonial Content */}
            <div className="relative">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium mb-8">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                />
                <div>
                  <h4 className="font-semibold text-lg text-slate-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary-600 font-medium">{testimonials[currentIndex].position}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white text-primary-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 focus-visible:focus"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white text-primary-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 focus-visible:focus"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-primary-600 w-8" : "bg-primary-200 hover:bg-primary-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">1000+</div>
            <div className="text-gray-600">Cases Handled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">100%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
