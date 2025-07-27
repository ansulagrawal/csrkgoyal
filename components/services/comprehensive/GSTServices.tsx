import { Calculator, FileCheck, TrendingUp, Shield, RefreshCw, Gavel, Users, FileText } from "lucide-react"

const gstServices = [
  {
    icon: FileCheck,
    title: "Comprehensive Review Services",
    description:
      "Complete assessment of your GST compliance status, identifying gaps and providing actionable recommendations for improvement.",
    features: ["Compliance health check", "Gap analysis", "Risk assessment", "Improvement roadmap"],
  },
  {
    icon: Users,
    title: "Advisory and Consultation",
    description:
      "Expert guidance on GST matters, helping you navigate complex regulations and make informed business decisions.",
    features: ["Regulatory updates", "Strategic planning", "Business impact analysis", "Expert consultation"],
  },
  {
    icon: TrendingUp,
    title: "Transaction Structuring Support",
    description: "Optimize your GST burden through strategic transaction structuring and business model optimization.",
    features: ["Tax optimization", "Structure analysis", "Cost reduction strategies", "Efficiency improvement"],
  },
  {
    icon: Shield,
    title: "Due Diligence Services",
    description:
      "Comprehensive GST due diligence to identify and curb non-compliance issues before they become problems.",
    features: ["Compliance verification", "Risk identification", "Documentation review", "Corrective measures"],
  },
  {
    icon: RefreshCw,
    title: "Comprehensive Refund Assistance",
    description: "End-to-end support for GST refund claims, ensuring maximum recovery and timely processing.",
    features: ["Refund claim preparation", "Documentation support", "Follow-up services", "Recovery optimization"],
  },
  {
    icon: Calculator,
    title: "GST Statutory Audits",
    description:
      "Professional GST audit services ensuring compliance with statutory requirements and regulatory standards.",
    features: ["Statutory compliance", "Audit reports", "Regulatory filings", "Compliance certification"],
  },
  {
    icon: FileText,
    title: "Compliance Support Services",
    description:
      "Ongoing compliance support to ensure your business meets all GST obligations and regulatory requirements.",
    features: ["Monthly compliance", "Return filing", "Record maintenance", "Regulatory updates"],
  },
  {
    icon: Gavel,
    title: "GST Litigation Management",
    description:
      "Complete litigation support including drafting replies, representation, pleading matters, and appeals management.",
    features: ["Legal representation", "Appeal filing", "Court proceedings", "Dispute resolution"],
  },
]

export function GSTServices() {
  return (
    <section id="gst" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-6">
            <Calculator className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Goods & Services Tax (GST)
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            GST is the most significant tax reform in the fiscal history of India. It has impacted costing, pricing,
            business processes, IT systems, investments, logistics and the entire supply chain in all segments of
            businesses. Our firm has invested adequately in technical, administrative and knowledge competence in GST
            matters across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gstServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* GST Litigation Details */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-6 text-center">
            GST Litigation Management Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Drafting Replies", "Legal Representation", "Pleading Matters", "Filing and Contesting Appeals"].map(
              (service, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gavel className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{service}</h4>
                  <p className="text-sm text-gray-600">Professional legal support for all GST-related matters</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
