"use client"

import { useState } from "react"
import { Calendar, MapPin, Award, Briefcase } from "lucide-react"

const timelineEvents = [
  {
    year: "2024",
    title: "Expanded Digital Services",
    description: "Launched comprehensive digital compliance platform to serve clients nationwide.",
    type: "milestone",
    icon: Award,
  },
  {
    year: "2022",
    title: "Founded Independent Practice",
    description: "Established independent company secretary practice focusing on SMEs and startups.",
    type: "career",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Senior Company Secretary",
    description: "Promoted to Senior Company Secretary at leading corporate law firm.",
    type: "career",
    icon: Briefcase,
  },
  {
    year: "2018",
    title: "Specialized Certification",
    description: "Completed advanced certification in Corporate Governance and Compliance.",
    type: "education",
    icon: Award,
  },
  {
    year: "2016",
    title: "Company Secretary Associate",
    description: "Joined prestigious law firm as Company Secretary Associate.",
    type: "career",
    icon: Briefcase,
  },
  {
    year: "2014",
    title: "CS Qualification",
    description: "Successfully completed Company Secretary qualification from ICSI.",
    type: "education",
    icon: Award,
  },
  {
    year: "2012",
    title: "Bachelor of Commerce",
    description: "Graduated with honors in Commerce from Delhi University.",
    type: "education",
    icon: Award,
  },
]

export function Timeline() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decade of dedicated service in corporate compliance and legal advisory
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>

          {/* Timeline Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon
              return (
                <div
                  key={index}
                  className={`relative flex items-start space-x-6 cursor-pointer transition-all duration-300 ${
                    activeEvent === index ? "transform scale-105" : ""
                  }`}
                  onClick={() => setActiveEvent(activeEvent === index ? null : index)}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 ${
                      event.type === "milestone"
                        ? "bg-gradient-to-br from-yellow-400 to-yellow-500"
                        : event.type === "career"
                          ? "bg-gradient-to-br from-primary-500 to-primary-600"
                          : "bg-gradient-to-br from-green-500 to-green-600"
                    } ${activeEvent === index ? "scale-110 shadow-lg" : ""}`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 ${
                      activeEvent === index ? "shadow-xl border-2 border-primary-200" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-primary-600">{event.year}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.type === "milestone"
                            ? "bg-yellow-100 text-yellow-700"
                            : event.type === "career"
                              ? "bg-primary-100 text-primary-700"
                              : "bg-green-100 text-green-700"
                        }`}
                      >
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>

                    <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">{event.title}</h3>

                    <p className="text-gray-600 leading-relaxed">{event.description}</p>

                    {/* Expanded Content */}
                    {activeEvent === index && (
                      <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in-up">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{event.year}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>New Delhi, India</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
