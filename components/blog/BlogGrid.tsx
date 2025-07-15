"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, User, Eye, Share2, BookmarkPlus, ArrowRight, TrendingUp, Star } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "New Corporate Compliance Requirements for 2024: What Businesses Need to Know",
    excerpt:
      "Understanding the latest regulatory changes and their impact on your business operations. A comprehensive guide to staying compliant in the evolving legal landscape.",
    category: "Compliance",
    author: "Rajat Goyal",
    date: "2024-01-15",
    readTime: "8 min read",
    views: 1250,
    image: "/placeholder.svg?height=300&width=500",
    slug: "corporate-compliance-2024",
    featured: true,
    trending: true,
    tags: ["Compliance", "Regulations", "2024 Updates"],
    categoryColor: "from-green-500 to-green-600",
  },
  {
    id: 2,
    title: "Essential Legal Documents Every Startup Needs Before Launch",
    excerpt:
      "A comprehensive checklist of must-have legal documentation for new businesses. Protect your startup from day one with proper legal foundations.",
    category: "Startup Guide",
    author: "Rajat Goyal",
    date: "2024-01-12",
    readTime: "6 min read",
    views: 980,
    image: "/placeholder.svg?height=300&width=500",
    slug: "startup-legal-documents",
    featured: false,
    trending: false,
    tags: ["Startup", "Legal Documents", "Business Formation"],
    categoryColor: "from-amber-500 to-amber-600",
  },
  {
    id: 3,
    title: "Board Meeting Best Practices: Ensuring Effective Corporate Governance",
    excerpt:
      "How to conduct productive board meetings that drive business success while maintaining compliance with governance requirements.",
    category: "Corporate Governance",
    author: "Rajat Goyal",
    date: "2024-01-10",
    readTime: "7 min read",
    views: 756,
    image: "/placeholder.svg?height=300&width=500",
    slug: "board-meeting-best-practices",
    featured: false,
    trending: true,
    tags: ["Governance", "Board Meetings", "Best Practices"],
    categoryColor: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    title: "Digital Transformation in Legal Services: Embracing Technology for Better Client Service",
    excerpt:
      "Exploring how technology is revolutionizing legal services and improving client experiences in the modern business environment.",
    category: "Legal Updates",
    author: "Rajat Goyal",
    date: "2024-01-08",
    readTime: "5 min read",
    views: 642,
    image: "/placeholder.svg?height=300&width=500",
    slug: "digital-transformation-legal",
    featured: false,
    trending: false,
    tags: ["Technology", "Legal Innovation", "Client Service"],
    categoryColor: "from-red-500 to-red-600",
  },
  {
    id: 5,
    title: "Understanding Due Diligence: A Complete Guide for Business Transactions",
    excerpt:
      "Everything you need to know about due diligence processes in mergers, acquisitions, and investment transactions.",
    category: "Business Advisory",
    author: "Rajat Goyal",
    date: "2024-01-05",
    readTime: "10 min read",
    views: 1100,
    image: "/placeholder.svg?height=300&width=500",
    slug: "due-diligence-guide",
    featured: true,
    trending: false,
    tags: ["Due Diligence", "M&A", "Business Transactions"],
    categoryColor: "from-blue-500 to-blue-600",
  },
  {
    id: 6,
    title: "Contract Drafting Essentials: Key Clauses Every Business Contract Should Include",
    excerpt:
      "Master the art of contract drafting with our guide to essential clauses that protect your business interests.",
    category: "Legal Updates",
    author: "Rajat Goyal",
    date: "2024-01-03",
    readTime: "9 min read",
    views: 890,
    image: "/placeholder.svg?height=300&width=500",
    slug: "contract-drafting-essentials",
    featured: false,
    trending: true,
    tags: ["Contracts", "Legal Drafting", "Business Protection"],
    categoryColor: "from-red-500 to-red-600",
  },
]

export function BlogGrid() {
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "featured">("latest")

  const sortedPosts = [...blogPosts].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views
      case "featured":
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  const featuredPost = sortedPosts.find((post) => post.featured)
  const regularPosts = sortedPosts.filter((post) => !post.featured || sortBy === "featured")

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600">Discover insights that drive business success</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-gray-600 text-sm font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "latest" | "popular" | "featured")}
              className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
            >
              <option value="latest">Latest First</option>
              <option value="popular">Most Popular</option>
              <option value="featured">Featured</option>
            </select>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && sortBy !== "featured" && (
          <div className="mb-16">
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="absolute top-6 left-6 z-10">
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </span>
                  {featuredPost.trending && (
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span
                      className={`bg-gradient-to-r ${featuredPost.categoryColor} text-white px-3 py-1 rounded-full font-medium`}
                    >
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredPost.views.toLocaleString()} views</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 group/link"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span
                    className={`bg-gradient-to-r ${post.categoryColor} text-white px-3 py-1 rounded-full text-xs font-bold`}
                  >
                    {post.category}
                  </span>
                  {post.trending && (
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Hot
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-colors duration-200 backdrop-blur-sm">
                    <BookmarkPlus className="w-4 h-4" />
                  </button>
                  <button className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-colors duration-200 backdrop-blur-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

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
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 text-sm group-hover:underline"
                  >
                    Read More
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
  )
}
