import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Eye,
  Share2,
  BookmarkPlus,
  ArrowLeft,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// This would typically come from a CMS or database
const blogPost: {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  slug: string;
  tags: string[];
  categoryColor: string;
} = {
  id: 1,
  title:
    "New Corporate Compliance Requirements for 2024: What Businesses Need to Know",
  content: `
    <p>The corporate landscape is constantly evolving, and 2024 brings significant changes to compliance requirements that every business must understand and implement. These new regulations are designed to enhance transparency, protect stakeholders, and ensure sustainable business practices.</p>

    <h2>Key Changes in Corporate Compliance for 2024</h2>
    
    <p>The regulatory framework has been updated to address emerging challenges in the business environment. Companies must now comply with enhanced reporting standards, stricter governance protocols, and new environmental sustainability requirements.</p>

    <h3>1. Enhanced Financial Reporting Standards</h3>
    
    <p>The new financial reporting standards require companies to provide more detailed disclosures about their financial position, performance, and cash flows. This includes:</p>
    
    <ul>
      <li>Quarterly sustainability impact reports</li>
      <li>Enhanced risk assessment disclosures</li>
      <li>Detailed stakeholder engagement summaries</li>
      <li>Technology investment and digital transformation reporting</li>
    </ul>

    <h3>2. Strengthened Corporate Governance</h3>
    
    <p>Corporate governance requirements have been significantly strengthened to ensure better oversight and accountability. Key changes include:</p>
    
    <ul>
      <li>Mandatory independent director representation of at least 50%</li>
      <li>Enhanced board diversity requirements</li>
      <li>Stricter audit committee independence standards</li>
      <li>Regular governance effectiveness assessments</li>
    </ul>

    <h3>3. Environmental and Social Responsibility</h3>
    
    <p>Companies are now required to demonstrate their commitment to environmental and social responsibility through:</p>
    
    <ul>
      <li>Carbon footprint reduction plans</li>
      <li>Supply chain sustainability audits</li>
      <li>Employee welfare and development programs</li>
      <li>Community impact assessments</li>
    </ul>

    <h2>Implementation Timeline and Key Deadlines</h2>
    
    <p>The implementation of these new requirements follows a phased approach:</p>
    
    <ul>
      <li><strong>Phase 1 (Q1 2024):</strong> Large corporations and listed companies</li>
      <li><strong>Phase 2 (Q2 2024):</strong> Medium-sized enterprises</li>
      <li><strong>Phase 3 (Q3 2024):</strong> Small businesses and startups</li>
    </ul>

    <h2>Practical Steps for Compliance</h2>
    
    <p>To ensure smooth compliance with the new requirements, businesses should:</p>
    
    <ol>
      <li>Conduct a comprehensive compliance audit</li>
      <li>Update internal policies and procedures</li>
      <li>Train staff on new requirements</li>
      <li>Implement necessary technology solutions</li>
      <li>Establish monitoring and reporting systems</li>
    </ol>

    <h2>Conclusion</h2>
    
    <p>The new corporate compliance requirements for 2024 represent a significant shift towards greater transparency and accountability in business operations. While the implementation may seem challenging, these changes ultimately benefit all stakeholders by creating a more sustainable and trustworthy business environment.</p>
    
    <p>Companies that proactively embrace these changes will not only ensure compliance but also gain a competitive advantage in the marketplace. It's essential to start preparing now to meet these new requirements effectively.</p>
  `,
  excerpt:
    "Understanding the latest regulatory changes and their impact on your business operations. A comprehensive guide to staying compliant in the evolving legal landscape.",
  category: "Compliance",
  author: "Rajat Kumar Goyal",
  date: "2024-01-15",
  readTime: "8 min read",
  // image: "/placeholder.svg?height=400&width=800",
  slug: "corporate-compliance-2024",
  tags: [
    "Compliance",
    "Regulations",
    "2024 Updates",
    "Corporate Governance",
    "Business Law",
  ],
  categoryColor: "from-green-500 to-green-600",
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `${blogPost.title} | Rajat Kumar Goyal`,
    description: blogPost.excerpt,
    keywords: blogPost.tags.join(", "),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-primary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span
              className={`bg-gradient-to-r ${blogPost.categoryColor} text-white px-4 py-2 rounded-full text-sm font-bold`}
            >
              {blogPost.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-2">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{blogPost.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(blogPost.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex items-center space-x-4 mb-8">
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <BookmarkPlus className="w-4 h-4" />
              <span>Save Article</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {blogPost.image && (
            <div className="mb-12">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-2 mb-4">
              <Tag className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl">
            <div className="flex items-start space-x-4">
              <img
                src="/placeholder-user.jpg"
                alt={blogPost.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">
                  {blogPost.author}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Rajat Kumar Goyal is a qualified Company Secretary with over 10
                  years of experience in corporate law, compliance, and business
                  advisory services. He specializes in helping businesses
                  navigate complex regulatory requirements and achieve
                  sustainable growth.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-8">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blog/startup-legal-documents"
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-playfair text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Essential Legal Documents Every Startup Needs
                </h4>
                <p className="text-gray-600 text-sm">
                  A comprehensive checklist of must-have legal documentation for
                  new businesses.
                </p>
              </Link>
              <Link
                href="/blog/board-meeting-best-practices"
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-playfair text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Board Meeting Best Practices
                </h4>
                <p className="text-gray-600 text-sm">
                  How to conduct productive board meetings that drive business
                  success.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
