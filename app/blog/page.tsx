import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/BlogHero"
import { BlogGrid } from "@/components/blog/BlogGrid"

export const metadata: Metadata = {
  title: "Legal Insights & Business Blog | Company Secretary Updates & Articles",
  description:
    "Stay updated with the latest legal insights, compliance updates, and business advisory articles from Rajat Kumar Goyal, Company Secretary.",
  keywords: "Legal Blog, Compliance Updates, Business Articles, Company Secretary Insights, Corporate Law",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return (
    <div className="pt-16">
      <BlogHero />
      <BlogGrid />
    </div>
  )
}
