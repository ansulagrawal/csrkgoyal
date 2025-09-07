import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import { ADDRESS, EMAIL, LINKEDIN, PHONE } from "@/config"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RG</span>
              </div>
              <div>
                <span className="font-playfair text-xl font-bold">Rajat Kumar Goyal</span>
                <p className="text-slate-300 text-sm">Company Secretary</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering businesses with comprehensive compliance solutions and expert legal guidance.
            </p>
            <div className="flex space-x-4">
              <a
                href={LINKEDIN}
                target="_blank"
                className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a
                href="https://twitter.com"
                className="text-slate-300 hover:text-white transition-colors duration-200"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {["Corporate Compliance", "Legal Documentation", "Business Advisory", "Regulatory Filings"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <a
                  href={`tel:+91${PHONE}`}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {PHONE}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
                <address className="text-slate-300 text-sm not-italic">
                  {ADDRESS}
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm">© {new Date().getFullYear()} Rajat Kumar Goyal. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
