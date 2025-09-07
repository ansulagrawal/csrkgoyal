"use client";

import { Users, Crown, ScrollText, Calendar } from "lucide-react";

const positions = [
  {
    year: "2023-2026",
    title: "Committee Member",
    organization: "Jaipur Chapter of ICSI",
    icon: Users,
  },
  {
    year: "2024",
    title: "Chairman",
    organization: "Jaipur Chapter of ICSI",
    icon: Crown,
  },
  {
    year: "2023",
    title: "Secretary",
    organization: "Jaipur Chapter of ICSI",
    icon: ScrollText,
  },
];

export function Positions() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="positions">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Professional Positions
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Key leadership roles and professional appointments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary-200 via-gray-200 to-transparent" />

          <div className="space-y-14">
            {positions.map((position, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline dot */}
                <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-200">
                  <position.icon className="w-6 h-6 text-primary-600" />
                </div>

                {/* Card */}
                <div className="ml-16 flex-1 bg-white rounded-xl shadow-sm p-6 hover:shadow-lg hover:border-primary-100 border border-gray-100 transition duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      {position.year}
                    </div>
                  </div>
                  <p className="text-gray-600">{position.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
