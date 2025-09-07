import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { WEBSITE_URL } from "@/config"

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
  metadataBase: new URL(WEBSITE_URL as string),
  title: "Rajat Kumar Goyal - Company Secretary | Corporate Compliance & Legal Services",
  description:
    "Professional Company Secretary services by Rajat Kumar Goyal. Expert in corporate compliance, legal documentation, and business advisory services.",
  keywords: [
    "Company Secretary",
    "Corporate Compliance",
    "Legal Services",
    "Business Advisory",
    "Rajat Kumar Goyal",
    "CS Jaipur",
    "Company Law",
  ],
  authors: [{ name: "Rajat Kumar Goyal" }],
  applicationName: "Rajat Kumar Goyal - CS",
  publisher: "Rajat Kumar Goyal",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Rajat Kumar Goyal - Company Secretary",
    description: "Empowering Businesses with Compliance & Clarity",
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    siteName: "Rajat Kumar Goyal",
    images: [
      {
        url: WEBSITE_URL + "/og-image.png", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Rajat Kumar Goyal Logo and Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajat Kumar Goyal - Company Secretary",
    description: "Empowering Businesses with Compliance & Clarity",
    images: [WEBSITE_URL + "/og-image.png"],
    // creator: "@csrajatkgoyal",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "Next.js",
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
