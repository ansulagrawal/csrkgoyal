import { Eye, Target, Heart } from "lucide-react"

export function VisionMission() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mb-6 mx-auto">
              <Eye className="w-8 h-8 text-white" />
            </div>

            <h3 className="font-playfair text-2xl font-bold text-slate-900 text-center mb-4">Our Vision</h3>

            <p className="text-gray-600 text-center leading-relaxed">
              To be the most trusted partner for businesses seeking comprehensive compliance solutions, fostering a
              culture of transparency and ethical business practices across industries.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mb-6 mx-auto">
              <Target className="w-8 h-8 text-white" />
            </div>

            <h3 className="font-playfair text-2xl font-bold text-slate-900 text-center mb-4">Our Mission</h3>

            <p className="text-gray-600 text-center leading-relaxed">
              To provide exceptional company secretary services that empower businesses with clarity, ensure regulatory
              compliance, and drive sustainable growth through expert legal guidance.
            </p>
          </div>

          {/* Purpose */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mb-6 mx-auto">
              <Heart className="w-8 h-8 text-white" />
            </div>

            <h3 className="font-playfair text-2xl font-bold text-slate-900 text-center mb-4">Our Purpose</h3>

            <p className="text-gray-600 text-center leading-relaxed">
              To simplify complex legal requirements and make compliance accessible to businesses of all sizes, enabling
              entrepreneurs to focus on what they do best - growing their business.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <blockquote className="font-playfair text-2xl lg:text-3xl font-medium text-slate-900 mb-4 italic">
            "Success in business requires training and discipline and hard work. But if you're not frightened by these
            things, the opportunities are just as great today as they ever were."
          </blockquote>
          <cite className="text-emerald-600 font-semibold">- David Rockefeller</cite>
        </div>
      </div>
    </section>
  )
}
