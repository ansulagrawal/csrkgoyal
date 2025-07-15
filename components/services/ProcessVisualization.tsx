"use client"

import { useState } from "react"
import { MessageCircle, FileText, Cog, CheckCircle, ArrowRight } from "lucide-react"

const processSteps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "We discuss your business needs and compliance requirements",
    icon: MessageCircle,
    details: [
      "Understanding your business structure",
      "Identifying compliance requirements",
      "Assessing current legal status",
      "Defining project scope and timeline",
    ],
    duration: "30-60 minutes",
  },
  {
    id: 2,
    title: "Documentation & Analysis",
    description: "Comprehensive review of existing documents and legal framework",
    icon: FileText,
    details: [
      "Document collection and review",
      "Legal framework analysis",
      "Compliance gap identification",
      "Risk assessment report",
    ],
    duration: "2-5 business days",
  },
  {
    id: 3,
    title: "Implementation",
    description: "Executing the planned legal and compliance solutions",
    icon: Cog,
    details: [
      "Filing necessary documents",
      "Setting up compliance systems",
      "Implementing governance frameworks",
      "Regular progress updates",
    ],
    duration: "1-4 weeks",
  },
  {
    id: 4,
    title: "Delivery & Support",
    description: "Final delivery with ongoing support and maintenance",
    icon: CheckCircle,
    details: ["Final document delivery", "Compliance certification", "Training and handover", "Ongoing support setup"],
    duration: "Ongoing",
  },
]

export function ProcessVisualization() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Service Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to delivering exceptional legal and compliance services
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-slate-300"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={step.id}
                  className="relative cursor-pointer"
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                >
                  {/* Step Card */}
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                      activeStep === step.id ? "ring-2 ring-emerald-400 shadow-xl" : ""
                    }`}
                  >
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl relative z-10">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-slate-300">0{step.id}</div>
                    </div>

                    {/* Content */}
                    <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>

                    {/* Duration */}
                    <div className="text-xs text-emerald-600 font-medium bg-emerald-100 px-3 py-1 rounded-full inline-block">
                      {step.duration}
                    </div>

                    {/* Expand Indicator */}
                    <div className="mt-4 flex justify-center">
                      <ArrowRight
                        className={`w-4 h-4 text-emerald-400 transform transition-transform duration-200 ${
                          activeStep === step.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {activeStep === step.id && (
                    <div className="mt-4 bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-100 animate-fade-in-up">
                      <h4 className="font-semibold text-slate-900 mb-3">What We Do:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our streamlined process ensures efficient delivery of high-quality legal and compliance services tailored
              to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-200">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
