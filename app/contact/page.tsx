import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/ContactHero"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"
import { GoogleMap } from "@/components/contact/GoogleMap"

export const metadata: Metadata = {
  title: "Contact Rajat Goyal - Company Secretary | Schedule Consultation",
  description:
    "Get in touch with Rajat Goyal for professional company secretary services. Schedule a consultation, request a quote, or ask questions about your compliance needs.",
  keywords: "Contact Company Secretary, Legal Consultation, Business Advisory Contact, Rajat Goyal Contact",
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <GoogleMap />
    </div>
  )
}
