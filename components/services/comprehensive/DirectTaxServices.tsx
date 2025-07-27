import { FileText, Users, Globe, Building, Gavel, Calculator } from "lucide-react"

const directTaxServices = [
  {
    icon: FileText,
    title: "Comprehensive Review Services",
    description:
      "Thorough assessment of your direct tax compliance, identifying opportunities for optimization and ensuring regulatory adherence.",
    features: ["Tax position review", "Compliance assessment", "Risk evaluation", "Optimization strategies"],
  },
  {
    icon: Users,
    title: "Advisory and Consultation",
    description:
      "Expert guidance on direct tax matters with detailed understanding of your business and industry sector to develop effective strategies.",
    features: ["Strategic tax planning", "Business model optimization", "Regulatory guidance", "Industry expertise"],
  },
  {
    icon: Building,
    title: "Domestic Transfer Pricing",
    description:
      "Comprehensive domestic transfer pricing services ensuring compliance with local regulations and arm's length pricing.",
    features: ["Transfer pricing study", "Documentation preparation", "Compliance support", "Risk mitigation"],
  },
  {
    icon: Globe,
    title: "International Transfer Pricing",
    description:
      "Global transfer pricing solutions for multinational enterprises, ensuring compliance across jurisdictions.",
    features: ["Cross-border transactions", "BEPS compliance", "Documentation support", "Global coordination"],
  },
  {
    icon: Calculator,
    title: "Tax Clause Drafting and Vetting",
    description:
      "Professional drafting and review of tax clauses in agreements to ensure optimal tax treatment and compliance.",
    features: ["Contract review", "Tax clause optimization", "Risk assessment", "Compliance assurance"],
  },
  {
    icon: Gavel,
    title: "Litigation Management",
    description:
      "Complete litigation support for direct tax matters including representation, appeals, and dispute resolution.",
    features: ["Legal representation", "Appeal management", "Dispute resolution", "Court proceedings"],
  },
]

export function DirectTaxServices() {
  return (
    <section id="direct-tax" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Direct Tax</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Direct Tax Team is a dedicated group of professionals with vast experience in Tax and Regulatory
            matters. We strive to develop a detailed understanding of our clients' business and industry sector to
            develop effective strategies and business models.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {directTaxServices.map((service, index) => {
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

        {/* Compliance Support Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-6 text-center">
            Compliance Support Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Return Filing</h4>
              <p className="text-sm text-gray-600">Timely and accurate filing of all direct tax returns</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Tax Computation</h4>
              <p className="text-sm text-gray-600">Accurate tax calculations and optimization strategies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Advisory Support</h4>
              <p className="text-sm text-gray-600">Ongoing consultation and compliance guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
