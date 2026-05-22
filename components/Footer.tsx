"use client";
import Link from "next/link";
import { Zap } from "lucide-react";

const seoLinks = [
  { href: "/best-ai-tools-for-students", label: "AI for Students" },
  { href: "/best-ai-tools-for-designers", label: "AI for Designers" },
  { href: "/best-ai-tools-for-developers", label: "AI for Developers" },
  { href: "/best-ai-tools-for-youtubers", label: "AI for YouTubers" },
  { href: "/best-ai-image-generators", label: "AI Image Generators" },
  { href: "/best-ai-coding-tools", label: "AI Coding Tools" },
  { href: "/best-free-ai-tools", label: "Free AI Tools" },
  { href: "/best-ai-productivity-tools", label: "Productivity AI" },
  { href: "/best-ai-video-tools", label: "AI Video Tools" },
  { href: "/best-chatgpt-alternatives", label: "ChatGPT Alternatives" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        marginTop: 80,
        padding: "60px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "linear-gradient(135deg, #0ea5e9, #9333ea)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zap size={13} color="#fff" fill="#fff" />
              </div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 16,
                  background: "linear-gradient(135deg, #0ea5e9, #9333ea)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                NEXVORA
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.7, maxWidth: 220 }}>
              Your guide to the future of AI tools, automation, and next-gen technology.
            </p>
          </div>

          {/* SEO Links */}
          <div>
            <h4 style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
              AI Tools
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {seoLinks.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0ea5e9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
              More Tools
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {seoLinks.slice(5).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0ea5e9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["About", "Contact", "Privacy Policy", "Disclaimer"].map((label) => (
                <li key={label}>
                  <Link href={`/${label.toLowerCase().replace(" ", "-")}`} style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
            © {new Date().getFullYear()} Nexvora. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
            Built for the future of AI discovery.
          </p>
        </div>
      </div>
    </footer>
  );
}
