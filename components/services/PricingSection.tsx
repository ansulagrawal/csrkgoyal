"use client"

import { useState } from "react"
import { Check, Star, ArrowRight } from "lucide-react"

const pricingPlans = [
  {
    id: 1,
    name: "Startup Package",
    description: "Perfect for new businesses and startups",
    price: "₹25,000",
    period: "one-time",
    popular: false,
    features: [
      "Company Incorporation",
      "Basic Compliance Setup",
      "3 Months Support",
      "Essential Documentation",
      "ROC Filings",
      "Email Support",
    ],
    limitations: ["Limited to basic services", "3-month support only"],
    cta: "Get Started",
  },
  {
    id: 2,
    name: "Business Pro",
    description: "Comprehensive solution for growing businesses",
    price: "₹15,000",
    period: "per month",
    popular: true,
    features: [
      "All Startup Package features",
      "Monthly Compliance Management",
      "Board Meeting Support",
      "Legal Documentation",
      "Priority Support",
      "Compliance Calendar",
      "Quarterly Reviews",
      "Risk Assessment",
    ],
    limitations: [],
    cta: "Most Popular",
  },
  {
    id: 3,
    name: "Enterprise",
    description: "Full-service solution for established companies",
    price: "₹35,000",
    period: "per month",
    popular: false,
    features: [
      "All Business Pro features",
      "Dedicated Account Manager",
      "24/7 Support",
      "Custom Legal Solutions",
      "Due Diligence Support",
      "Strategic Advisory",
      "Unlimited Consultations",
      "Annual Compliance Audit",
    ],
    limitations: [],
    cta: "Contact Sales",
  },
]

const addOnServices = [
  { name: "Due Diligence", price: "₹50,000", description: "Per project" },
  { name: "Contract Drafting", price: "₹5,000", description: "Per document" },
  { name: "Legal Opinion", price: "₹10,000", description: "Per opinion" },
  { name: "Urgent Filing", price: "₹2,500", description: "Express service" },
]

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our commitment to excellence and timely
            delivery.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                billingCycle === "monthly"
                  ? "bg-white text-primary-600 shadow-sm"
                  : "text-gray-600 hover:text-primary-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                billingCycle === "annual"
                  ? "bg-white text-primary-600 shadow-sm"
                  : "text-gray-600 hover:text-primary-600"
              }`}
            >
              Annual
              <span className="ml-2 bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full text-xs">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                plan.popular ? "ring-2 ring-primary-400 scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mb-8">
                    <p className="text-sm font-medium text-gray-700 mb-2">Limitations:</p>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="text-sm text-gray-500">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                    plan.popular
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="font-playfair text-2xl font-bold text-slate-900 text-center mb-8">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-semibold text-slate-900 mb-2">{service.name}</h4>
                <p className="text-2xl font-bold text-primary-600 mb-1">{service.price}</p>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 text-white rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-persianBlue-100 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored service package.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
