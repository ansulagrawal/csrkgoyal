import { BookOpen, Sparkles, TrendingUp, Users } from "lucide-react"

const stats = [
  { icon: BookOpen, label: "Articles Published", value: "150+", color: "from-primary-500 to-primary-600" },
  { icon: Users, label: "Monthly Readers", value: "10K+", color: "from-blue-500 to-blue-600" },
  { icon: TrendingUp, label: "Topics Covered", value: "25+", color: "from-purple-500 to-purple-600" },
  { icon: Sparkles, label: "Expert Insights", value: "Daily", color: "from-amber-500 to-amber-600" },
]

export function BlogHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-primary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Legal Insights &{" "}
            <span className="text-primary-600 relative">
              Business Updates
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Stay ahead with expert analysis, compliance updates, and strategic insights from our legal professionals.
            Knowledge that empowers your business decisions and keeps you informed about the evolving legal landscape.
          </p>

        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-white/50 hover:border-primary-200"
              >
                <div
                  className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="font-playfair text-2xl font-bold mb-4">Stay Updated with Legal Insights</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Get weekly updates on compliance changes, legal insights, and business advisory tips delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}
