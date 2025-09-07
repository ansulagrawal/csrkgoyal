import Link from "next/link"
import { ArrowRight, Phone, Mail, Calendar, MessageCircle } from "lucide-react"
import { EMAIL, PHONE } from "@/config"

export function ServicesContact() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started with Our Services?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Whether you need GST compliance, direct tax advisory, audit services, or specialized business solutions, our
            expert team is ready to help you achieve your goals.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200">
            <Phone className="w-8 h-8 text-primary-200 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-slate-300 mb-4 text-sm">Immediate consultation</p>
            <a
              href={`tel:+91${PHONE}`}
              className="text-white font-semibold hover:text-primary-200 transition-colors duration-200"
            >
              +91 {PHONE}
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200">
            <Mail className="w-8 h-8 text-primary-200 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-slate-300 mb-4 text-sm">Detailed inquiries</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-white font-semibold hover:text-primary-200 transition-colors duration-200 block w-full overflow-hidden truncate"
            >
              {EMAIL}
            </a>
          </div>

          {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200">
            <Calendar className="w-8 h-8 text-primary-200 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Schedule Meeting</h3>
            <p className="text-slate-300 mb-4 text-sm">Free consultation</p>
            <Link
              href="/contact"
              className="text-white font-semibold hover:text-primary-200 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200">
            <MessageCircle className="w-8 h-8 text-primary-200 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
            <p className="text-slate-300 mb-4 text-sm">Quick questions</p>
            <button className="text-white font-semibold hover:text-primary-200 transition-colors duration-200">
              Start Chat
            </button>
          </div> */}
        </div>

        {/* Main CTA */}
        <div className="text-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 mr-4"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Service Categories Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-2">GST Services</h4>
            <p className="text-slate-300 text-sm">Complete GST compliance and advisory solutions</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-2">Direct Tax</h4>
            <p className="text-slate-300 text-sm">Expert direct tax planning and compliance</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-2">Audit & Assurance</h4>
            <p className="text-slate-300 text-sm">Professional audit and assurance services</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-2">Specialized Services</h4>
            <p className="text-slate-300 text-sm">Custom solutions for unique business needs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
