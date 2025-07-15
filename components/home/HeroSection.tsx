"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Shield, Users, Award } from "lucide-react"

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.5
        parallaxRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Parallax Background Elements */}
      <div ref={parallaxRef} className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Empowering Businesses with <span className="text-emerald-600">Compliance</span> &{" "}
                <span className="text-emerald-600">Clarity</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Professional Company Secretary services that ensure your business stays compliant, efficient, and ready
                for growth. Expert guidance you can trust.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-2 mx-auto">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-2 mx-auto">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-gray-600">Compliance Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 focus-visible:focus"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-200 focus-visible:focus"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-persianBlue-800">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <span className="text-4xl font-bold text-persianBlue-600">RG</span>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-2">Rajat Goyal</h3>
                  <p className="text-lg">Company Secretary</p>
                  <p className="text-sm mt-2 opacity-80">Certified Professional</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-white/20 rounded-lg backdrop-blur-sm animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-persianBlue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-persianBlue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
