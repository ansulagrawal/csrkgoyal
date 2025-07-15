import Link from "next/link"
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react"

export function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Secure Your Business Compliance?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Don't let compliance issues hold your business back. Get expert guidance and comprehensive solutions
            tailored to your needs.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200">
            <Phone className="w-8 h-8 text-emerald-200 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-slate-300 mb-4 text-sm">Immediate assistance available</p>
            <a
              href="tel:+919876543210"
              className="text-white font-semibold hover:text-emerald-200 transition-colors duration-200"
            >
              +91 98765 43210
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200">
            <Mail className="w-8 h-8 text-emerald-200 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-slate-300 mb-4 text-sm">Detailed queries welcome</p>
            <a
              href="mailto:rajat@example.com"
              className="text-white font-semibold hover:text-emerald-200 transition-colors duration-200"
            >
              rajat@example.com
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200">
            <Calendar className="w-8 h-8 text-emerald-200 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Schedule Meeting</h3>
            <p className="text-slate-300 mb-4 text-sm">Free consultation available</p>
            <Link
              href="/contact"
              className="text-white font-semibold hover:text-emerald-200 transition-colors duration-200"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 mr-4"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-200"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
