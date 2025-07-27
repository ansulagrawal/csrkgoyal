import { Shield, FileText, Users, TrendingUp, CheckCircle, Award } from "lucide-react"

const stats = [
  { icon: Shield, label: "Services Offered", value: "15+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: CheckCircle, label: "Success Rate", value: "100%" },
  { icon: Award, label: "Years Experience", value: "10+" },
]

export function ServicesHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Professional <span className="text-primary-600">Company Secretary</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive legal and compliance solutions tailored to your business needs. From regulatory filings to
            strategic advisory, we ensure your business stays compliant and ready for growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4 mx-auto">
                  <IconComponent className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Service Categories Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">Compliance Services</h3>
            <p className="text-gray-600 text-sm">
              Regulatory filings, board meetings, annual returns, and compliance audits.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl mb-4">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">Legal Documentation</h3>
            <p className="text-gray-600 text-sm">
              Contract drafting, agreement review, legal opinions, and documentation.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl mb-4">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">Business Advisory</h3>
            <p className="text-gray-600 text-sm">
              Strategic planning, risk assessment, growth advisory, and restructuring.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
