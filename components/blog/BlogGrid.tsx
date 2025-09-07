import Link from "next/link";
import { Calendar, Clock, User, Eye, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title:
      "New Corporate Compliance Requirements for 2024: What Businesses Need to Know",
    excerpt:
      "Understanding the latest regulatory changes and their impact on your business operations. A comprehensive guide to staying compliant in the evolving legal landscape.",
    category: "Compliance",
    author: "Rajat Kumar Goyal",
    date: "2024-01-15",
    readTime: "8 min read",
    views: 1250,
    image: "/placeholder.svg?height=300&width=500",
    slug: "corporate-compliance-2024",
    categoryColor: "from-green-500 to-green-600",
  },
  {
    id: 2,
    title: "Essential Legal Documents Every Startup Needs Before Launch",
    excerpt:
      "A comprehensive checklist of must-have legal documentation for new businesses. Protect your startup from day one with proper legal foundations.",
    category: "Startup Guide",
    author: "Rajat Kumar Goyal",
    date: "2024-01-12",
    readTime: "6 min read",
    views: 980,
    image: "/placeholder.svg?height=300&width=500",
    slug: "startup-legal-documents",
    categoryColor: "from-amber-500 to-amber-600",
  },
  {
    id: 3,
    title:
      "Board Meeting Best Practices: Ensuring Effective Corporate Governance",
    excerpt:
      "How to conduct productive board meetings that drive business success while maintaining compliance with governance requirements.",
    category: "Corporate Governance",
    author: "Rajat Kumar Goyal",
    date: "2024-01-10",
    readTime: "7 min read",
    views: 756,
    image: "/placeholder.svg?height=300&width=500",
    slug: "board-meeting-best-practices",
    categoryColor: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    title:
      "Digital Transformation in Legal Services: Embracing Technology for Better Client Service",
    excerpt:
      "Exploring how technology is revolutionizing legal services and improving client experiences in the modern business environment.",
    category: "Legal Updates",
    author: "Rajat Kumar Goyal",
    date: "2024-01-08",
    readTime: "5 min read",
    views: 642,
    image: "/placeholder.svg?height=300&width=500",
    slug: "digital-transformation-legal",
    categoryColor: "from-red-500 to-red-600",
  },
  {
    id: 5,
    title:
      "Understanding Due Diligence: A Complete Guide for Business Transactions",
    excerpt:
      "Everything you need to know about due diligence processes in mergers, acquisitions, and investment transactions.",
    category: "Business Advisory",
    author: "Rajat Kumar Goyal",
    date: "2024-01-05",
    readTime: "10 min read",
    views: 1100,
    image: "/placeholder.svg?height=300&width=500",
    slug: "due-diligence-guide",
    categoryColor: "from-blue-500 to-blue-600",
  },
  {
    id: 6,
    title:
      "Contract Drafting Essentials: Key Clauses Every Business Contract Should Include",
    excerpt:
      "Master the art of contract drafting with our guide to essential clauses that protect your business interests.",
    category: "Legal Updates",
    author: "Rajat Kumar Goyal",
    date: "2024-01-03",
    readTime: "9 min read",
    views: 890,
    image: "/placeholder.svg?height=300&width=500",
    slug: "contract-drafting-essentials",
    categoryColor: "from-red-500 to-red-600",
  },
];

export function BlogGrid() {
  return (
    <section className="py-20 pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span
                    className={`bg-gradient-to-r ${post.categoryColor} text-white px-3 py-1 rounded-full text-xs font-bold`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 group/link"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
