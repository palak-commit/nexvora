"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { href: "/best-ai-tools-for-students", label: "Students" },
  { href: "/best-ai-tools-for-developers", label: "Developers" },
  { href: "/best-free-ai-tools", label: "Free Tools" },
  { href: "/best-chatgpt-alternatives", label: "Alternatives" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize to accurately detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open, isMobile]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#050816", // Solid background for nav
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        height: "64px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link 
          href="/" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "10px", 
            textDecoration: "none",
            flexShrink: 0 
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #0ea5e9, #9333ea)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap size={18} color="#fff" fill="#fff" />
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 900,
              background: "linear-gradient(135deg, #0ea5e9, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.03em",
              fontFamily: "inherit",
            }}
          >
            NEXVORA
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/best-ai-tools-for-students"
              style={{
                padding: "10px 24px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #0ea5e9, #9333ea)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              EXPLORE →
            </Link>
          </div>
        )}

        {/* Mobile Toggle Button */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              padding: 0,
            }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && open && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#050816", // Solid background to prevent see-through
            zIndex: 9999,
            padding: "10px 0",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <div style={{ padding: "10px 20px" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "16px 0",
                  color: "rgba(255, 255, 255, 0.8)",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "auto", padding: "20px" }}>
            <Link
              href="/best-ai-tools-for-students"
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #0ea5e9, #9333ea)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 700,
                boxShadow: "0 8px 25px rgba(14, 165, 233, 0.3)",
              }}
            >
              Explore All Tools →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
