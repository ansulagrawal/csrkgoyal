import type { Metadata } from "next"
import { ComprehensiveServicesHero } from "@/components/services/comprehensive/ComprehensiveServicesHero"
import { ServiceNavigation } from "@/components/services/comprehensive/ServiceNavigation"
import { GSTServices } from "@/components/services/comprehensive/GSTServices"
import { DirectTaxServices } from "@/components/services/comprehensive/DirectTaxServices"
import { AuditAssuranceServices } from "@/components/services/comprehensive/AuditAssuranceServices"
import { OtherServices } from "@/components/services/comprehensive/OtherServices"
import { ServicesContact } from "@/components/services/comprehensive/ServicesContact"

export const metadata: Metadata = {
  title: "Comprehensive Tax & Legal Services | GST, Direct Tax, Audit & Assurance",
  description:
    "Complete range of professional services including GST compliance, Direct Tax advisory, Audit & Assurance, and specialized business services. Expert guidance for all your tax and legal needs.",
  keywords:
    "GST Services, Direct Tax, Audit Services, Tax Compliance, Transfer Pricing, Internal Audit, Statutory Audit, Tax Advisory",
}

export default function ComprehensiveServicesPage() {
  return (
    <div className="pt-16">
      <ComprehensiveServicesHero />
      <ServiceNavigation />
      <GSTServices />
      <DirectTaxServices />
      <AuditAssuranceServices />
      <OtherServices />
      <ServicesContact />
    </div>
  )
}
