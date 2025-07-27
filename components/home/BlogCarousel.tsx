"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "New Corporate Compliance Requirements for 2024",
    excerpt: "Understanding the latest regulatory changes and their impact on your business operations.",
    category: "Compliance",
    readTime: "5 min read",
    date: "2024-01-15",
    image: "/placeholder.svg?height=200&width=300",
    slug: "corporate-compliance-2024",
  },
  {
    id: 2,
    title: "Essential Legal Documents Every Startup Needs",
    excerpt: "A comprehensive guide to the must-have legal documentation for new businesses.",
    category: "Legal",
    readTime: "7 min read",
    date: "2024-01-10",
    image: "/placeholder.svg?height=200&width=300",
    slug: "startup-legal-documents",
  },
  {
    id: 3,
    title: "Board Meeting Best Practices and Governance",
    excerpt: "How to conduct effective board meetings that drive business success and compliance.",
    category: "Governance",
    readTime: "6 min read",
    date: "2024-01-05",
    image: "/placeholder.svg?height=200&width=300",
    slug: "board-meeting-best-practices",
  },
  {
    id: 4,
    title: "Digital Transformation in Legal Services",
    excerpt: "Leveraging technology to streamline legal processes and improve client service.",
    category: "Technology",
    readTime: "4 min read",
    date: "2024-01-01",
    image: "/placeholder.svg?height=200&width=300",
    slug: "digital-transformation-legal",
  },
]

export function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, currentIndex])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest articles on compliance, legal updates, and business advisory insights.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 lg:p-12">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 group"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden bg-primary-100">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus-visible:focus"
            aria-label="Previous blog post"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus-visible:focus"
            aria-label="Next blog post"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-primary-600 w-8" : "bg-primary-200 hover:bg-primary-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 focus-visible:focus"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
