import type { Metadata } from "next"
import { AboutHero } from "@/components/about/AboutHero"
import { VisionMission } from "@/components/about/VisionMission"
import { ValuesGrid } from "@/components/about/ValuesGrid"

export const metadata: Metadata = {
  title: "About Rajat Goyal - Experienced Company Secretary | Professional Background",
  description:
    "Learn about Rajat Goyal's professional journey, qualifications, and commitment to providing exceptional company secretary services.",
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <VisionMission />
      <ValuesGrid />
    </div>
  )
}
