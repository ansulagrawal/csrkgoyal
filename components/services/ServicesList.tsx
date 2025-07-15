"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    category: "Corporate Compliance",
    title: "Regulatory Filings & Compliance Management",
    description: "Comprehensive compliance management to keep your business aligned with all regulatory requirements.",
    features: [
      "Annual Return Filings",
      "Board Meeting Management",
      "Statutory Register Maintenance",
      "Compliance Calendar Management",
      "ROC Filings",
      "Regulatory Updates & Alerts",
    ],
    pricing: "Starting from ₹15,000/month",
    timeline: "Ongoing monthly service",
    deliverables: ["Monthly compliance reports", "Filing confirmations", "Compliance calendar", "Regulatory updates"],
  },
  {
    id: 2,
    category: "Legal Documentation",
    title: "Contract Drafting & Legal Documentation",
    description:
      "Expert drafting and review of legal documents to protect your business interests and ensure compliance.",
    features: [
      "Contract Drafting",
      "Agreement Review & Analysis",
      "Legal Opinion Letters",
      "Policy Documentation",
      "Terms & Conditions",
      "Non-Disclosure Agreements",
    ],
    pricing: "Starting from ₹5,000/document",
    timeline: "3-7 business days",
    deliverables: ["Drafted documents", "Review reports", "Legal opinions", "Revision support"],
  },
  {
    id: 3,
    category: "Business Advisory",
    title: "Strategic Business & Legal Advisory",
    description:
      "Strategic guidance to help your business navigate complex regulatory landscapes and growth opportunities.",
    features: [
      "Strategic Planning Support",
      "Risk Assessment & Management",
      "Growth Strategy Advisory",
      "Corporate Restructuring",
      "Merger & Acquisition Support",
      "Investment Advisory",
    ],
    pricing: "Starting from ₹25,000/consultation",
    timeline: "Customized timeline",
    deliverables: ["Strategic reports", "Risk assessments", "Action plans", "Implementation support"],
  },
  {
    id: 4,
    category: "Corporate Governance",
    title: "Board Support & Governance Framework",
    description: "Establishing robust governance frameworks and providing comprehensive board support services.",
    features: [
      "Board Meeting Coordination",
      "Minutes Preparation",
      "Resolution Drafting",
      "Director Appointment Support",
      "Governance Policy Development",
      "Stakeholder Communication",
    ],
    pricing: "Starting from ₹20,000/month",
    timeline: "Ongoing service",
    deliverables: ["Meeting minutes", "Resolutions", "Governance policies", "Board reports"],
  },
  {
    id: 5,
    category: "Due Diligence",
    title: "Legal & Financial Due Diligence",
    description: "Thorough due diligence services for mergers, acquisitions, investments, and business transactions.",
    features: [
      "Legal Due Diligence",
      "Financial Review Support",
      "Compliance Verification",
      "Risk Analysis",
      "Documentation Review",
      "Due Diligence Reports",
    ],
    pricing: "Starting from ₹50,000/project",
    timeline: "2-4 weeks",
    deliverables: ["Due diligence reports", "Risk matrices", "Compliance certificates", "Recommendations"],
  },
  {
    id: 6,
    category: "Startup Services",
    title: "Startup Legal & Compliance Support",
    description: "Specialized services for startups including incorporation, compliance setup, and growth support.",
    features: [
      "Company Incorporation",
      "Startup Compliance Setup",
      "Funding Documentation",
      "Employee Stock Options",
      "Intellectual Property Support",
      "Regulatory Guidance",
    ],
    pricing: "Starting from ₹30,000/package",
    timeline: "1-3 weeks",
    deliverables: ["Incorporation documents", "Compliance framework", "Legal structure", "Ongoing support"],
  },
]

export function ServicesList() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Service Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal and compliance solutions designed to meet your specific business requirements
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Service Header */}
              <div
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                      <span className="text-emerald-600 font-semibold">{service.pricing}</span>
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="ml-6">
                    {expandedService === service.id ? (
                      <ChevronUp className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-emerald-600" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedService === service.id && (
                <div className="border-t border-gray-200 bg-gray-50 p-6 animate-fade-in-up">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 mb-4">What's Included</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Details */}
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 mb-4">Service Details</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-gray-700">Timeline: </span>
                          <span className="text-gray-600">{service.timeline}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Pricing: </span>
                          <span className="text-emerald-600 font-semibold">{service.pricing}</span>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 mb-4">Deliverables</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <ArrowRight className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-200"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
