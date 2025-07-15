import { Calculator, FileText, Shield, TrendingUp } from "lucide-react"

const serviceStats = [
  { icon: Calculator, label: "GST Compliance", value: "100%" },
  { icon: FileText, label: "Tax Advisory", value: "Expert" },
  { icon: Shield, label: "Audit Services", value: "Certified" },
  { icon: TrendingUp, label: "Client Success", value: "500+" },
]

export function ComprehensiveServicesHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Comprehensive <span className="text-emerald-600">Tax & Legal</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            From GST compliance to direct tax advisory, audit services to specialized business solutions - we provide
            end-to-end professional services to ensure your business stays compliant and thrives in today's complex
            regulatory environment.
          </p>
        </div>

        {/* Service Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4 mx-auto">
                  <IconComponent className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Key Highlights */}
        <div className="bg-emerald-50 rounded-2xl p-8 lg:p-12">
          <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-slate-900 text-center mb-8">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Expert Knowledge</h3>
              <p className="text-gray-600 text-sm">
                Deep understanding of tax laws, regulations, and compliance requirements across all domains.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">
                Track record of successful compliance management and tax optimization for diverse businesses.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Comprehensive Support</h3>
              <p className="text-gray-600 text-sm">
                End-to-end services from advisory to implementation, ensuring complete business support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
