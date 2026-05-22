import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexvora.vercel.app"),
  title: {
    default: "Nexvora — Discover the Future of AI Tools",
    template: "%s | Nexvora",
  },
  description:
    "Explore next-generation AI tools, prompts, and automation systems. Nexvora is your guide to the best AI tools for every workflow.",
  keywords: ["AI tools", "artificial intelligence", "best AI tools", "AI for productivity", "ChatGPT alternatives"],
  openGraph: {
    type: "website",
    url: "https://nexvora.vercel.app",
    siteName: "Nexvora",
    title: "Nexvora — Discover the Future of AI Tools",
    description: "Explore next-generation AI tools, prompts, and automation systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexvora — Discover the Future of AI Tools",
    description: "Explore next-generation AI tools, prompts, and automation systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
