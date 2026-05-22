"use client";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Star, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface Tool {
  rank: number;
  name: string;
  description: string;
  features: string[];
  pricing: string;
  bestFor: string;
  link: string;
}

export interface FAQ {
  q: string;
  a: string;
}

interface SEOPageProps {
  title: string;
  subtitle: string;
  intro: string;
  tools: Tool[];
  faqs: FAQ[];
  conclusion: string;
}

export default function SEOPage({ title, subtitle, intro, tools, faqs, conclusion }: SEOPageProps) {
  return (
    <div style={{ background: "#050816", minHeight: "100vh", color: "#fff" }}>
      <Navbar />

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "120px 24px 80px" }}>
        {/* Breadcrumb */}
        <Link 
          href="/" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 6, 
            color: "#0ea5e9", 
            textDecoration: "none", 
            fontSize: 14, 
            fontWeight: 600,
            marginBottom: 32 
          }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Hero */}
        <header style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <Star size={14} color="#0ea5e9" />
            <span style={{ fontSize: 12, color: "#0ea5e9", fontWeight: 700, letterSpacing: "0.1em" }}>{subtitle}</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.1 }}>
            {title}
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, maxWidth: 700 }}>
            {intro}
          </p>
        </header>

        {/* Tools List */}
        <section style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 80 }}>
          {tools.map((tool) => (
            <div 
              key={tool.name} 
              style={{ 
                padding: "clamp(24px, 5vw, 40px)", 
                borderRadius: 24, 
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid rgba(255,255,255,0.06)",
                position: "relative"
              }}
            >
              <div style={{ position: "absolute", top: 24, right: 24, fontSize: 40, fontWeight: 900, color: "rgba(255,255,255,0.03)", pointerEvents: "none" }}>
                #{tool.rank}
              </div>

              <h2 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 800, marginBottom: 12, display: "flex", alignItems: "center", gap: 12 }}>
                {tool.name}
              </h2>

              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 24 }}>
                {tool.description}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, marginBottom: 32 }}>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Key Features</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {tool.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
                        <CheckCircle2 size={14} color="#10b981" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Pricing</h4>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{tool.pricing}</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Best For</h4>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{tool.bestFor}</p>
                  </div>
                </div>
              </div>

              <a 
                href={tool.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: "inline-flex", 
                  padding: "12px 28px", 
                  borderRadius: 10, 
                  background: "rgba(14,165,233,0.1)", 
                  border: "1px solid rgba(14,165,233,0.2)", 
                  color: "#0ea5e9", 
                  textDecoration: "none", 
                  fontSize: 14, 
                  fontWeight: 700,
                  width: "100%",
                  justifyContent: "center",
                  maxWidth: 240
                }}
              >
                Visit {tool.name} →
              </a>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32, textAlign: "center" }}>Common Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((faq) => (
              <details key={faq.q} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "4px 12px" }}>
                <summary style={{ padding: "16px 8px", cursor: "pointer", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {faq.q}
                  <ChevronDown size={18} color="rgba(255,255,255,0.3)" />
                </summary>
                <div style={{ padding: "0 8px 20px", color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.6 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section style={{ padding: "48px", borderRadius: 24, background: "linear-gradient(135deg, rgba(14,165,233,0.05) 0%, rgba(147,51,234,0.05) 100%)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Final Thoughts</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: 15 }}>
            {conclusion}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
