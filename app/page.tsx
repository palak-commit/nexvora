"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Code2, Image, Video, Brain, Zap, Star, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── DATA ─────────────────────────────────────────────────────── */

const tools = [
  { name: "ChatGPT", desc: "World's most popular AI assistant", tag: "Trending", color: "#10b981", emoji: "🤖" },
  { name: "Claude", desc: "Anthropic's powerful reasoning AI", tag: "Top Pick", color: "#0ea5e9", emoji: "⚡" },
  { name: "Midjourney", desc: "Stunning AI image generation", tag: "Creative", color: "#9333ea", emoji: "🎨" },
  { name: "Gemini", desc: "Google's multimodal AI model", tag: "New", color: "#f59e0b", emoji: "💎" },
  { name: "Cursor", desc: "AI-first code editor", tag: "Dev", color: "#ef4444", emoji: "🖥️" },
  { name: "Perplexity", desc: "AI-powered search engine", tag: "Search", color: "#06b6d4", emoji: "🔍" },
];

const categories = [
  { icon: <Code2 size={22} />, label: "Coding AI", href: "/best-ai-coding-tools", color: "#0ea5e9", count: "12 tools" },
  { icon: <Image size={22} />, label: "Image AI", href: "/best-ai-image-generators", color: "#9333ea", count: "10 tools" },
  { icon: <Video size={22} />, label: "Video AI", href: "/best-ai-video-tools", color: "#ef4444", count: "8 tools" },
  { icon: <Brain size={22} />, label: "Productivity AI", href: "/best-ai-productivity-tools", color: "#10b981", count: "15 tools" },
  { icon: <Sparkles size={22} />, label: "Free AI Tools", href: "/best-free-ai-tools", color: "#f59e0b", count: "20+ tools" },
  { icon: <Users size={22} />, label: "AI for Students", href: "/best-ai-tools-for-students", color: "#06b6d4", count: "10 tools" },
];

const articles = [
  { title: "Best AI Tools for Students in 2025", slug: "best-ai-tools-for-students", readTime: "5 min", tag: "Students" },
  { title: "10 Best ChatGPT Alternatives You Must Try", slug: "best-chatgpt-alternatives", readTime: "6 min", tag: "Comparison" },
  { title: "Best Free AI Tools That Replace Paid Software", slug: "best-free-ai-tools", readTime: "7 min", tag: "Free" },
  { title: "AI Coding Tools Every Developer Needs in 2025", slug: "best-ai-coding-tools", readTime: "5 min", tag: "Dev" },
  { title: "Top 10 AI Logo Makers for Professional Branding", slug: "best-ai-logo-makers", readTime: "4 min", tag: "Design" },
];

/* ─── PARTICLES ─────────────────────────────────────────────────── */

function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const dots = Array.from({ length: 40 });
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {dots.map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            borderRadius: "50%",
            background: i % 2 === 0 ? "#0ea5e9" : "#9333ea",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.4,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────────────────── */

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <>
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "120px 24px 80px",
          textAlign: "center",
        }}
      >
        {/* Ambient glows */}
        <div style={{ position: "absolute", top: "20%", left: "15%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", right: "10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <Particles />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 100,
            background: "rgba(14,165,233,0.1)",
            border: "1px solid rgba(14,165,233,0.3)",
            marginBottom: 32,
          }}
        >
          <TrendingUp size={13} color="#0ea5e9" />
          <span style={{ fontSize: 12, color: "#0ea5e9", fontWeight: 600, letterSpacing: "0.08em" }}>
            50+ AI TOOLS RANKED & REVIEWED
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Discover the{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #0ea5e9 20%, #9333ea 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Future
          </span>{" "}
          of AI Tools
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          style={{ fontSize: "clamp(15px, 2vw, 19px)", color: "rgba(255,255,255,0.5)", maxWidth: 580, lineHeight: 1.65, marginBottom: 40 }}
        >
          Explore next-generation AI tools, prompts, and automation systems. Everything you need to work smarter — in one place.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", width: "100%" }}
        >
          <Link
            href="/best-free-ai-tools"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #0ea5e9, #9333ea)",
              color: "#fff",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 700,
              minWidth: 180,
              flex: "1 1 auto",
              maxWidth: 240,
            }}
          >
            <Zap size={16} />
            Explore Tools
          </Link>
          <Link
            href="/best-chatgpt-alternatives"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              minWidth: 180,
              flex: "1 1 auto",
              maxWidth: 240,
            }}
          >
            Trending AI
            <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          style={{ display: "flex", gap: "24px 40px", marginTop: 64, flexWrap: "wrap", justifyContent: "center" }}
        >
          {[["50+", "AI Tools"], ["10K+", "Monthly Users"], ["100%", "Free Access"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center", minWidth: 100 }}>
              <div style={{ fontSize: "clamp(24px, 5vw, 28px)", fontWeight: 800, background: "linear-gradient(135deg, #0ea5e9, #9333ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{num}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 500, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── TRENDING TOOLS ──────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <TrendingUp size={14} color="#0ea5e9" />
              <span style={{ fontSize: 12, color: "#0ea5e9", fontWeight: 700, letterSpacing: "0.1em" }}>TRENDING NOW</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Top AI Tools of 2025
            </h2>
          </div>
          <Link href="/best-free-ai-tools" style={{ color: "#0ea5e9", textDecoration: "none", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
            See all tools <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                padding: 24,
                borderRadius: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow top-right */}
              <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle, ${tool.color}20 0%, transparent 70%)`, pointerEvents: "none" }} />

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ fontSize: 32 }}>{tool.emoji}</div>
                <span style={{ padding: "3px 10px", borderRadius: 100, background: `${tool.color}20`, color: tool.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em" }}>
                  {tool.tag}
                </span>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.01em" }}>{tool.name}</h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.6 }}>{tool.desc}</p>

              <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 4, color: tool.color, fontSize: 12, fontWeight: 600 }}>
                Explore tool <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ──────────────────────────────────────────── */}
      <section
        style={{
          padding: "80px 24px",
          background: "rgba(255,255,255,0.015)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: 48, textAlign: "center" }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <Sparkles size={14} color="#9333ea" />
              <span style={{ fontSize: 12, color: "#9333ea", fontWeight: 700, letterSpacing: "0.1em" }}>BROWSE BY CATEGORY</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Find AI Tools by Use Case
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
            {categories.map((cat, i) => (
              <motion.div key={cat.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link
                  href={cat.href}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <motion.div
                    whileHover={{ y: -3, boxShadow: `0 8px 30px ${cat.color}20` }}
                    transition={{ duration: 0.2 }}
                    style={{
                      padding: "24px 16px",
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      textAlign: "center",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${cat.color}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", color: cat.color }}>
                      {cat.icon}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{cat.label}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>{cat.count}</div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <Star size={14} color="#f59e0b" />
              <span style={{ fontSize: 12, color: "#f59e0b", fontWeight: 700, letterSpacing: "0.1em" }}>LATEST ARTICLES</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              AI Tool Guides & Reviews
            </h2>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {articles.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/${a.slug}`} style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: 24,
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <span style={{ padding: "3px 10px", borderRadius: 100, background: "rgba(14,165,233,0.15)", color: "#0ea5e9", fontSize: 11, fontWeight: 700 }}>
                      {a.tag}
                    </span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>{a.readTime} read</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.45, marginBottom: 16 }}>{a.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#0ea5e9", fontSize: 13, fontWeight: 600 }}>
                    Read article <ArrowRight size={13} />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            padding: "clamp(40px, 8vw, 64px) clamp(24px, 6vw, 48px)",
            borderRadius: 24,
            background: "linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(147,51,234,0.1) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -60, left: "30%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
          <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, position: "relative" }}>
            Ready to supercharge your workflow?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 2vw, 16px)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px", position: "relative" }}>
            Browse 50+ AI tools across every category — all for free.
          </p>
          <Link
            href="/best-free-ai-tools"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px 36px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #0ea5e9, #9333ea)",
              color: "#fff",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 700,
              width: "100%",
              maxWidth: 280,
              position: "relative",
            }}
          >
            <Zap size={16} />
            Start Exploring Free
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
