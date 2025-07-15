import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rajat Goyal - Company Secretary | Corporate Compliance & Legal Services",
  description:
    "Professional Company Secretary services by Rajat Goyal. Expert in corporate compliance, legal documentation, and business advisory services.",
  keywords: "Company Secretary, Corporate Compliance, Legal Services, Business Advisory, Rajat Goyal",
  authors: [{ name: "Rajat Goyal" }],
  openGraph: {
    title: "Rajat Goyal - Company Secretary",
    description: "Empowering Businesses with Compliance & Clarity",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajat Goyal - Company Secretary",
    description: "Empowering Businesses with Compliance & Clarity",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter antialiased bg-white text-gray-900">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
