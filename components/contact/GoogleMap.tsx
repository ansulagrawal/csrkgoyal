"use client"

import { useState } from "react"
import { MapPin, Navigation, ExternalLink } from "lucide-react"

export function GoogleMap() {
  const [mapLoaded, setMapLoaded] = useState(false)

  const officeLocation = {
    address: "123 Business District, Connaught Place, New Delhi, India 110001",
    coordinates: "28.6139,77.2090", // New Delhi coordinates
    googleMapsUrl: "https://maps.google.com/?q=28.6139,77.2090",
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-4">Visit Our Office</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the heart of New Delhi's business district, our office is easily accessible by public transport
            and offers convenient parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96 relative">
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                    <button
                      onClick={() => setMapLoaded(true)}
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      Load Interactive Map
                    </button>
                  </div>
                </div>
              )}

              {mapLoaded && (
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0!2d${officeLocation.coordinates.split(",")[1]}!3d${officeLocation.coordinates.split(",")[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1234567890123`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                />
              )}
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-primary-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Office Address</h3>
                  <address className="text-gray-600 not-italic leading-relaxed">{officeLocation.address}</address>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Getting Here</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>5 minutes walk from Rajiv Chowk Metro Station</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Parking available in nearby commercial complexes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Accessible by bus routes 101, 102, 103</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href={officeLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </a>

              <button className="w-full flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200">
                <ExternalLink className="w-5 h-5 mr-2" />
                View in Google Maps
              </button>
            </div>

            {/* Office Hours Reminder */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Office Hours</h4>
              <p className="text-sm text-yellow-700">
                Mon-Fri: 9:00 AM - 6:00 PM
                <br />
                Sat: 10:00 AM - 2:00 PM
                <br />
                Sun: Closed
              </p>
              <p className="text-xs text-yellow-600 mt-2">Please call ahead to confirm availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
