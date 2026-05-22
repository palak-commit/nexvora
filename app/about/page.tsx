import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Nexvora",
  description: "Learn more about Nexvora, your ultimate destination for discovering the best AI tools and future technology.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "#050816", minHeight: "100vh", color: "#fff" }}>
      <Navbar />
      <main style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "120px", paddingBottom: "80px", paddingLeft: "20px", paddingRight: "20px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "24px", background: "linear-gradient(135deg, #0ea5e9, #9333ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          About Nexvora
        </h1>
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
          Welcome to Nexvora, the premier platform for exploring the rapidly evolving world of Artificial Intelligence. 
          Our mission is to simplify the discovery of AI tools, making advanced technology accessible to everyone—from students and designers to developers and business leaders.
        </p>
        
        <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px", color: "#fff" }}>Who We Are</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.7", color: "rgba(255,255,255,0.6)", marginBottom: "24px" }}>
          We are a team of tech enthusiasts dedicated to tracking the latest breakthroughs in AI. We believe that AI is not just a trend, but a fundamental shift in how we work and create. 
          At Nexvora, we curate, rank, and review the most effective AI tools to help you stay ahead of the curve.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px", color: "#fff" }}>What We Do</h2>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: "32px" }}>
          {[
            "In-depth comparisons of AI coding assistants, image generators, and productivity tools.",
            "Curated lists for specific niches like students, developers, and creators.",
            "Regular updates on new AI models and features.",
            "Educational guides to help you master AI-driven workflows."
          ].map((item, index) => (
            <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px", color: "rgba(255,255,255,0.6)" }}>
              <span style={{ color: "#0ea5e9", fontWeight: "bold" }}>•</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px", color: "#fff" }}>Our Vision</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.7", color: "rgba(255,255,255,0.6)" }}>
          Our vision is to become the world's most trusted directory for AI technology. We strive to provide unbiased, high-quality information that empowers our users to leverage AI for their personal and professional growth.
        </p>
      </main>
      <Footer />
    </div>
  );
}
