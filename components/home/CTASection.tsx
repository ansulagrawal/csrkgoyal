import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Ensure Your Business Compliance?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get expert legal guidance tailored to your business needs. Schedule a consultation today and take the
              first step towards complete compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 focus-visible:focus"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-200 focus-visible:focus"
              >
                View Our Services
              </Link>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-200">
              <Phone className="w-8 h-8 text-emerald-200 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Call Us Directly</h3>
              <p className="text-slate-300 mb-4">Speak with our team for immediate assistance</p>
              <a
                href="tel:+919876543210"
                className="text-white font-semibold hover:text-emerald-200 transition-colors duration-200"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-200">
              <Mail className="w-8 h-8 text-emerald-200 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-slate-300 mb-4">Send us your queries and we'll respond promptly</p>
              <a
                href="mailto:rajat@example.com"
                className="text-white font-semibold hover:text-emerald-200 transition-colors duration-200"
              >
                rajat@example.com
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-slate-600">
            <p className="text-slate-300 mb-4">Trusted by leading businesses across industries</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-medium">500+ Clients Served</div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="text-sm font-medium">10+ Years Experience</div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="text-sm font-medium">100% Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
