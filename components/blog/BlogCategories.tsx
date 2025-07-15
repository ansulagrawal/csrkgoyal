"use client"

import { useState } from "react"
import { Shield, TrendingUp, Users, Gavel, Building, Sparkles, Filter } from "lucide-react"

const categories = [
  { id: "all", name: "All Articles", icon: Sparkles, count: 45, color: "from-primary-500 to-primary-600" },
  { id: "compliance", name: "Compliance", icon: Shield, count: 12, color: "from-green-500 to-green-600" },
  { id: "legal", name: "Legal Updates", icon: Gavel, count: 15, color: "from-red-500 to-red-600" },
  { id: "business", name: "Business Advisory", icon: TrendingUp, count: 8, color: "from-blue-500 to-blue-600" },
  { id: "governance", name: "Corporate Governance", icon: Users, count: 6, color: "from-purple-500 to-purple-600" },
  { id: "startup", name: "Startup Guide", icon: Building, count: 4, color: "from-amber-500 to-amber-600" },
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-playfair text-2xl font-bold text-slate-900">Browse by Category</h2>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 hover:border-primary-200"
                }`}
              >
                <div
                  className={`p-1 rounded-full ${
                    activeCategory === category.id ? "bg-white/20" : `bg-gradient-to-br ${category.color}`
                  }`}
                >
                  <IconComponent
                    className={`w-4 h-4 ${activeCategory === category.id ? "text-white" : "text-white"}`}
                  />
                </div>
                <span>{category.name}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-700"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
