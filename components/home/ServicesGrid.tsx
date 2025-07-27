"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, Shield, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Corporate Compliance",
    description: "Comprehensive compliance management to keep your business aligned with regulatory requirements.",
    icon: Shield,
    features: ["Regulatory Filings", "Board Meetings", "Annual Returns", "Compliance Audits"],
    color: "from-primary-500 to-primary-600",
  },
  {
    id: 2,
    title: "Legal Documentation",
    description: "Expert drafting and review of legal documents to protect your business interests.",
    icon: FileText,
    features: ["Contract Drafting", "Agreement Review", "Legal Opinions", "Documentation"],
    color: "from-primary-600 to-primary-700",
  },
  {
    id: 3,
    title: "Business Advisory",
    description: "Strategic guidance to help your business navigate complex regulatory landscapes.",
    icon: TrendingUp,
    features: ["Strategic Planning", "Risk Assessment", "Growth Advisory", "Restructuring"],
    color: "from-primary-400 to-primary-500",
  },
  {
    id: 4,
    title: "Corporate Governance",
    description: "Establishing robust governance frameworks for sustainable business growth.",
    icon: Users,
    features: ["Board Support", "Policy Development", "Ethics Framework", "Stakeholder Relations"],
    color: "from-primary-700 to-primary-800",
  },
  {
    id: 5,
    title: "Regulatory Filings",
    description: "Timely and accurate regulatory submissions to maintain compliance status.",
    icon: CheckCircle,
    features: ["ROC Filings", "Tax Compliance", "Statutory Returns", "Regulatory Updates"],
    color: "from-primary-500 to-primary-600",
  },
  {
    id: 6,
    title: "Due Diligence",
    description: "Thorough due diligence services for mergers, acquisitions, and investments.",
    icon: FileText,
    features: ["Legal DD", "Financial Review", "Compliance Check", "Risk Analysis"],
    color: "from-primary-600 to-primary-700",
  },
]

export function ServicesGrid() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Legal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From compliance management to strategic advisory, we provide end-to-end legal solutions tailored to your
            business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-2xl transition-colors duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 focus-visible:focus"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
