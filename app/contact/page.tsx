import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Nexvora",
  description: "Get in touch with the Nexvora team for any inquiries, partnerships, or support.",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#050816", minHeight: "100vh", color: "#fff" }}>
      <Navbar />
      <main style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "120px", paddingBottom: "80px", paddingLeft: "20px", paddingRight: "20px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "24px", background: "linear-gradient(135deg, #0ea5e9, #9333ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Contact Us
        </h1>
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>
          Have a question about an AI tool? Want to partner with us? Or just want to say hi? We'd love to hear from you.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", padding: "32px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Email Us</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: "8px" }}>General Inquiries:</p>
            <p style={{ color: "#0ea5e9", fontWeight: 600 }}>hello@nexvora.ai</p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginTop: "16px", marginBottom: "8px" }}>Support:</p>
            <p style={{ color: "#0ea5e9", fontWeight: 600 }}>support@nexvora.ai</p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", padding: "32px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Follow Us</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: "16px" }}>Stay updated with the latest AI trends.</p>
            <div style={{ display: "flex", gap: "16px" }}>
              <span style={{ color: "rgba(255,255,255,0.8)", cursor: "pointer" }}>Twitter</span>
              <span style={{ color: "rgba(255,255,255,0.8)", cursor: "pointer" }}>LinkedIn</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
