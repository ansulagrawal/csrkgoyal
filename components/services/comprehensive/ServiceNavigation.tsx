"use client"

import { useState, useEffect } from "react"
import { Calculator, FileText, Shield, Briefcase } from "lucide-react"

const serviceCategories = [
  { id: "gst", name: "GST Services", icon: Calculator },
  { id: "direct-tax", name: "Direct Tax", icon: FileText },
  { id: "audit", name: "Audit & Assurance", icon: Shield },
  { id: "other", name: "Other Services", icon: Briefcase },
]

export function ServiceNavigation() {
  const [activeSection, setActiveSection] = useState("gst")

  useEffect(() => {
    const handleScroll = () => {
      const sections = serviceCategories.map((cat) => cat.id)
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === category.id
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-emerald-600 hover:bg-white"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
