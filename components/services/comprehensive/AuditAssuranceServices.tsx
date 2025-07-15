import { Shield, Search, FileCheck, TrendingUp, Users, Building } from "lucide-react"

export function AuditAssuranceServices() {
  return (
    <section id="audit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-6">
            <Shield className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Audit & Assurance
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive audit and assurance services designed to strengthen governance mechanisms, ensure
            compliance, and add value to your organization through systematic and professional evaluation.
          </p>
        </div>

        {/* Internal Audit Section */}
        <div className="mb-16">
          <div className="bg-emerald-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-slate-900">Internal Audit</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Internal Audit is an independent function, involving systematic, planned, continuous and critical
                  appraisal of the functioning of an entity with a view to suggest improvements therein. It is aimed at
                  adding value and strengthening the overall governance mechanism of the entity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Risk management evaluation and improvement</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Control and corporate governance enhancement</span>
                  </div>
                  <div className="flex items-center">
                    <FileCheck className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Compliance testing and statutory adherence</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Multidisciplinary expert deployment</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-slate-900 mb-4">Our Internal Audit Approach</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">
                      Systematic evaluation of business processes and controls
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">
                      Risk-based audit methodology for comprehensive coverage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Continuous monitoring and improvement recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Technology-driven processes for enhanced efficiency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Statutory Audit Section */}
        <div className="mb-16">
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-slate-900 mb-4">Statutory Audit Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">
                      Ensures completeness and accuracy of financial statements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Provides reasonable assurance to stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Risk-based audit approach for comprehensive coverage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Technology-driven processes by skilled professionals</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-slate-900">Statutory Audit</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Statutory Audit is aimed at ensuring completeness, accuracy, fair presentation and disclosures of
                  information for facilitating reasonable assurance over the financial statements being audited. For us,
                  Statutory Audit is not merely a legal obligation, but rather a highly relied upon document for various
                  stakeholders.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Building className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Investor and shareholder confidence</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Government and regulatory compliance</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Bank and creditor assurance</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Stakeholder transparency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Robust Process</h4>
            <p className="text-sm text-gray-600">
              Transparent and technology-driven audit processes ensuring comprehensive coverage and accuracy.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Expert Team</h4>
            <p className="text-sm text-gray-600">
              Highly-skilled professionals with multidisciplinary expertise and extensive audit experience.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Value Addition</h4>
            <p className="text-sm text-gray-600">
              Focus on adding value through improvement suggestions and governance enhancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
