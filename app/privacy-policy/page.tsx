import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexvora",
  description: "Read our privacy policy to understand how we handle your data and protect your privacy at Nexvora.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "#050816", minHeight: "100vh", color: "#fff" }}>
      <Navbar />
      <main style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "120px", paddingBottom: "80px", paddingLeft: "20px", paddingRight: "20px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "24px", background: "linear-gradient(135deg, #0ea5e9, #9333ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>Last Updated: May 22, 2026</p>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>1. Information We Collect</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
            Nexvora collects minimal information to provide a better user experience. We may collect non-personally identifiable information such as browser type, device type, and pages visited via Google Analytics.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>2. Use of Cookies</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
            We use cookies to understand site usage and improve our content. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>3. Advertising (Google AdSense)</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
            Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Ads Settings.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>4. Data Protection</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
            We take reasonable measures to protect any information collected from unauthorized access or disclosure.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>5. Contact Us</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
            If you have any questions about this Privacy Policy, please contact us at support@nexvora.ai.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
