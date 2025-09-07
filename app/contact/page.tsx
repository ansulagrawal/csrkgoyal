import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { GoogleMap } from "@/components/contact/GoogleMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Rajat Kumar Goyal - Company Secretary",
  description:
    "Get in touch with Rajat Kumar Goyal for professional company secretary services. Schedule a consultation, request a quote, or ask questions about your compliance needs.",
  keywords:
    "Contact Company Secretary, Legal Consultation, Business Advisory Contact, Rajat Kumar Goyal Contact",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactHero />
      {/* <ContactForm /> */}
      <ContactInfo />
      <GoogleMap />
    </div>
  );
}
