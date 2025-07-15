import { Shield, Users, Lightbulb, Award, Clock, HandHeart, CheckCircle, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our professional dealings and client relationships.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Our clients' success is our priority. We tailor our services to meet unique business needs.",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace technology and innovative approaches to deliver efficient and modern solutions.",
    color: "from-emerald-400 to-emerald-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every service we provide, ensuring quality and precision.",
    color: "from-emerald-700 to-emerald-800",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Timely delivery and consistent service quality you can depend on for your business needs.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: HandHeart,
    title: "Empathy",
    description: "We understand the challenges businesses face and provide compassionate, supportive guidance.",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    icon: CheckCircle,
    title: "Accountability",
    description: "We take full responsibility for our work and are committed to delivering on our promises.",
    color: "from-emerald-400 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Growth-Oriented",
    description: "We focus on solutions that not only solve current issues but also support future growth.",
    color: "from-emerald-700 to-emerald-800",
  },
]

export function ValuesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to exceptional service
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100 hover:border-emerald-200"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-emerald-200 to-emerald-400 rounded-full"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Committed to Your Success
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              These values aren't just words on a page – they're the foundation of every interaction, every service we
              provide, and every relationship we build. When you work with us, you're partnering with a team that
              genuinely cares about your business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
