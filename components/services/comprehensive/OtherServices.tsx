import { Search, AlertTriangle, Package, Calculator, FileText, Settings, BarChart, Award } from "lucide-react"

const otherServices = [
  {
    icon: Search,
    title: "Due Diligence",
    description:
      "Comprehensive due diligence services for mergers, acquisitions, and investment decisions with thorough analysis and risk assessment.",
    features: ["Financial due diligence", "Legal compliance review", "Risk assessment", "Valuation support"],
  },
  {
    icon: AlertTriangle,
    title: "Area-based Special Investigations",
    description:
      "Specialized investigative services focusing on specific business areas or concerns requiring detailed examination.",
    features: ["Fraud investigation", "Compliance breaches", "Financial irregularities", "Process evaluation"],
  },
  {
    icon: Package,
    title: "Surprise Audits",
    description:
      "Unannounced audit services to ensure ongoing compliance and identify potential issues in real-time operations.",
    features: ["Operational audits", "Compliance checks", "Process verification", "Real-time assessment"],
  },
  {
    icon: Calculator,
    title: "Stock and Fixed Assets Audit",
    description:
      "Detailed verification and valuation of inventory and fixed assets to ensure accurate financial reporting.",
    features: ["Physical verification", "Valuation assessment", "Documentation review", "Reconciliation services"],
  },
  {
    icon: FileText,
    title: "Accounting Advisory Services",
    description:
      "Professional guidance on accounting standards, financial reporting, and best practices implementation.",
    features: ["Accounting standards guidance", "Financial reporting", "Process improvement", "Compliance advisory"],
  },
  {
    icon: Settings,
    title: "Preparation of Process Manuals",
    description:
      "Development of comprehensive process manuals and standard operating procedures for business operations.",
    features: ["SOP development", "Process documentation", "Workflow design", "Training materials"],
  },
  {
    icon: BarChart,
    title: "Excel-based Testing Tools",
    description:
      "Custom Excel-based analytical tools and testing frameworks for enhanced audit efficiency and accuracy.",
    features: ["Custom testing tools", "Data analysis templates", "Automated calculations", "Reporting dashboards"],
  },
  {
    icon: Award,
    title: "Certification under Different Statutes",
    description: "Professional certification services under various statutory requirements and regulatory frameworks.",
    features: ["Statutory certifications", "Compliance certificates", "Regulatory filings", "Legal attestations"],
  },
]

export function OtherServices() {
  return (
    <section id="other" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-6">
            <Settings className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Other Specialized Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Beyond our core tax and audit services, we offer a comprehensive range of specialized business services
            designed to support various aspects of your organization's operations and compliance requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherServices.map((service, index) => {
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

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-6 text-center">
            Why Choose Our Specialized Services?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Thorough Analysis</h4>
              <p className="text-sm text-gray-600">
                Comprehensive examination and analysis tailored to your specific business needs and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Professional Excellence</h4>
              <p className="text-sm text-gray-600">
                Delivered by experienced professionals with deep expertise in their respective domains.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Customized Solutions</h4>
              <p className="text-sm text-gray-600">
                Tailored approaches and solutions designed to address your unique business challenges and objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
