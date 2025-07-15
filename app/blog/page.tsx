import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/BlogHero"
import { BlogGrid } from "@/components/blog/BlogGrid"
import { BlogCategories } from "@/components/blog/BlogCategories"

export const metadata: Metadata = {
  title: "Legal Insights & Business Blog | Company Secretary Updates & Articles",
  description:
    "Stay updated with the latest legal insights, compliance updates, and business advisory articles from Rajat Goyal, Company Secretary.",
  keywords: "Legal Blog, Compliance Updates, Business Articles, Company Secretary Insights, Corporate Law",
}

export default function BlogPage() {
  return (
    <div className="pt-16">
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
    </div>
  )
}
