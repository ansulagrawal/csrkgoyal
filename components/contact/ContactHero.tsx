import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's Start a Conversation
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Get in{" "}
            <span className="text-primary-600 relative">
              Touch
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Ready to secure your business compliance and unlock growth opportunities? Our expert team is here to provide
            personalized solutions tailored to your unique business needs.
          </p>
        </div>

        {/* Enhanced Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-white/50 hover:border-primary-200 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-3">Immediate assistance available</p>
            <a
              href="tel:+919876543210"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 text-lg"
            >
              +91 98765 43210
            </a>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-white/50 hover:border-primary-200 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-3">Detailed inquiries welcome</p>
            <a
              href="mailto:rajat@example.com"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
            >
              rajat@example.com
            </a>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-white/50 hover:border-primary-200 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Visit Office</h3>
            <p className="text-gray-600 text-sm mb-3">In-person consultations</p>
            <address className="text-primary-600 font-semibold not-italic">New Delhi, India</address>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-white/50 hover:border-primary-200 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Business Hours</h3>
            <p className="text-gray-600 text-sm mb-3">Monday - Friday</p>
            <p className="text-primary-600 font-semibold">9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Free Consultation
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-200">
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Live Chat
          </button>
        </div>
      </div>
    </section>
  )
}
