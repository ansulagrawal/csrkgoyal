"use client"

import { useEffect, useRef } from "react"
import { Award, Users, Shield, TrendingUp } from "lucide-react"

export function AboutHero() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.3
        imageRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Meet <span className="text-emerald-600">Rajat Goyal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A dedicated Company Secretary with over 10 years of experience in corporate compliance, legal advisory,
                and business governance. Committed to empowering businesses with clarity and compliance.
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-slate-900">Professional Qualifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-emerald-500 mr-3" />
                  Company Secretary (CS) - Institute of Company Secretaries of India
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-emerald-500 mr-3" />
                  Bachelor of Commerce (B.Com) - Delhi University
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-emerald-500 mr-3" />
                  Certified Corporate Governance Professional
                </li>
              </ul>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-2 mx-auto">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-gray-600">Compliance Rate</div>
              </div>
            </div>
          </div>

          {/* Professional Photo with Animation */}
          <div className="relative">
            <div
              ref={imageRef}
              className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-slate-900">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                    <span className="text-5xl font-bold text-emerald-600">RG</span>
                  </div>
                  <h3 className="font-playfair text-3xl font-bold mb-2">Rajat Goyal</h3>
                  <p className="text-xl mb-2">Company Secretary</p>
                  <p className="text-sm opacity-80">CS, B.Com, CCGP</p>
                </div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute top-10 left-10 bg-white/20 backdrop-blur-sm rounded-lg p-3 animate-pulse">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse delay-1000">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 right-10 bg-white/20 backdrop-blur-sm rounded-lg p-3 animate-pulse delay-500">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
