import type React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ADDRESS, EMAIL, MAP_URL, PHONE } from "@/config";

/**
 * Displays the firm’s address, phone numbers, email addresses, and business hours.
 * Used on /contact
 */
export function ContactInfo() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-primary-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 text-lg">
            Multiple ways to reach us for your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ADDRESS */}
          <Card>
            <IconWrap gradient="from-primary-500 to-primary-600">
              <MapPin className="w-6 h-6 text-white" />
            </IconWrap>

            <div>
              <h3 className="card-title">Office Address</h3>
              <a
                href={MAP_URL}
                className="text-gray-600 not-italic leading-relaxed"
              >
                {ADDRESS}
              </a>
            </div>
          </Card>

          {/* PHONE */}
          <Card>
            <IconWrap gradient="from-blue-500 to-blue-600">
              <Phone className="w-6 h-6 text-white" />
            </IconWrap>

            <div>
              <h3 className="card-title">Phone Numbers</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`tel:+91${PHONE}`} className="contact-link">
                    +91&nbsp;{PHONE}
                  </a>
                  {/* <Tag primary>Primary</Tag> */}
                </li>
              </ul>
            </div>
          </Card>

          {/* EMAIL */}
          <Card>
            <IconWrap gradient="from-purple-500 to-purple-600">
              <Mail className="w-6 h-6 text-white" />
            </IconWrap>

            <div>
              <h3 className="card-title">Email Addresses</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${EMAIL}`} className="contact-link">
                    {EMAIL}
                  </a>
                  {/* <Tag primary>General</Tag> */}
                </li>
                {/* <li>
                  <a href="mailto:info@example.com" className="contact-link">
                    info@example.com
                  </a>
                  <Tag>Inquiries</Tag>
                </li> */}
              </ul>
            </div>
          </Card>

          {/* HOURS */}
          <Card>
            <IconWrap gradient="from-amber-500 to-amber-600">
              <Clock className="w-6 h-6 text-white" />
            </IconWrap>

            <div>
              <h3 className="card-title">Business Hours</h3>
              <ul className="text-gray-600 space-y-1">
                <li className="flex justify-between">
                  <span>Monday – Friday:</span>{" "}
                  <span className="font-medium">9:00 AM – 6:00 PM</span>
                </li>
                {/* <li className="flex justify-between">
                  <span>Saturday:</span>{" "}
                  <span className="font-medium">10:00 AM – 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>{" "}
                  <span className="font-medium">Closed</span>
                </li> */}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Utility Components ---------- */

/** Generic container for each info block */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-white/50 flex space-x-4">
      {children}
    </div>
  );
}

/** Colored square wrapper for icons */
function IconWrap({
  children,
  gradient,
}: {
  children: React.ReactNode;
  gradient: string;
}) {
  return (
    <div
      className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex-shrink-0`}
    >
      {children}
    </div>
  );
}

/** Re-usable label badge */
function Tag({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <span
      className={`ml-2 text-xs px-2 py-1 rounded-full ${
        primary
          ? "bg-primary-100 text-primary-700"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      {children}
    </span>
  );
}

/** Anchor / tel / mail link style */
const linkBase =
  "hover:text-primary-600 transition-colors duration-200 font-medium";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
