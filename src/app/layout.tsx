import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DistroAgents | AI Agents for Wholesale Distribution",
    template: "%s | DistroAgents",
  },
  description:
    "Purpose-built AI agents for wholesale distributors. Automate sales, orders, collections, pricing, and compliance. Recover revenue and reduce costs with distribution-native AI.",
  keywords: [
    "wholesale distribution AI",
    "distribution automation",
    "food distribution software",
    "AI agents for distributors",
    "distribution ERP integration",
    "wholesale order management",
    "distribution collections software",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://distroagents.com",
    siteName: "DistroAgents",
    title: "DistroAgents | AI Agents for Wholesale Distribution",
    description:
      "Purpose-built AI agents for wholesale distributors. Automate sales, orders, collections, pricing, and compliance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DistroAgents | AI Agents for Wholesale Distribution",
    description:
      "Purpose-built AI agents for wholesale distributors.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DistroAgents",
  url: "https://distroagents.com",
  logo: "https://distroagents.com/logo.png",
  description:
    "Purpose-built AI agents for wholesale distributors. Automate sales, orders, collections, pricing, and compliance.",
  email: "hello@distroagents.com",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
