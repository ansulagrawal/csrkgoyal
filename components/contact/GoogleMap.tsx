"use client";

import { ADDRESS, DIRECTIONS, MAP_IFRAME, MAP_URL, OFFICE_TIMINGS } from "@/config";
import { MapPin, Navigation } from "lucide-react";
import { Fragment, useState } from "react";

export function GoogleMap() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our office is located at {ADDRESS}. It’s easy to reach by public
            transport and has convenient parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96 relative">
              <iframe
                src={MAP_IFRAME}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
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
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Office Address
                  </h3>
                  <address className="text-gray-600 not-italic leading-relaxed">
                    {ADDRESS}
                  </address>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">
                Getting Here
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                {DIRECTIONS.map((direction) => (
                  <div className="flex space-x-2" key={direction}>
                    <div className="min-w-2 w-2 h-2 mt-[6px] bg-primary-400 rounded-full"></div>
                    <span>{direction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>

            {/* Office Hours Reminder */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">
                Office Hours
              </h4>
              <p className="text-sm text-yellow-700">
                {OFFICE_TIMINGS.map((timing) => (
                  <Fragment key={timing.day}>
                    {timing.day}: {timing.timings}
                    <br />
                  </Fragment>
                ))}
              </p>
              <p className="text-xs text-yellow-600 mt-2">
                Please call ahead to confirm availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
