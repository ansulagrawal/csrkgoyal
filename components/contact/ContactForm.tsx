"use client"

import type React from "react"
import { useState } from "react"
import { Send, User, Mail, Phone, Building, MessageSquare, CheckCircle, Sparkles } from "lucide-react"

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Manufacturing",
  "Retail",
  "Real Estate",
  "Education",
  "Consulting",
  "Other",
]

const serviceTypes = [
  "Corporate Compliance",
  "Legal Documentation",
  "Business Advisory",
  "Due Diligence",
  "Startup Services",
  "General Inquiry",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    serviceType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        serviceType: "",
        message: "",
      })
    }, 3000)
  }

  if (submitted) {
    return (
      <section className="bg-gradient-to-br from-green-50 to-primary-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-green-100">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-playfair text-3xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
            <p className="text-green-700 text-lg mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours with a personalized response.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
              <Sparkles className="w-4 h-4" />
              <span>Redirecting to form in a few seconds...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below and we'll get back to you as soon as possible with a tailored solution.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-primary-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors duration-200" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm transition-all duration-200 text-lg"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors duration-200" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm transition-all duration-200 text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Phone and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors duration-200" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm transition-all duration-200 text-lg"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors duration-200" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm transition-all duration-200 text-lg"
                    placeholder="Your company name"
                  />
                </div>
              </div>
            </div>

            {/* Industry and Service Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-3">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm transition-all duration-200 text-lg"
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-3">
                  Service Needed *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm transition-all duration-200 text-lg"
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="group">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors duration-200" />
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none bg-white/80 backdrop-blur-sm transition-all duration-200 text-lg"
                  placeholder="Please describe your requirements or questions in detail..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-3 w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Privacy Notice */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="text-primary-600 hover:text-primary-700 font-medium">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-primary-600 hover:text-primary-700 font-medium">
                  Terms of Service
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
