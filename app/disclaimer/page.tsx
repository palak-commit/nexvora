import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | Nexvora",
  description: "Read our disclaimer regarding the accuracy and usage of information provided on Nexvora.",
};

export default function DisclaimerPage() {
  return (
    <div style={{ background: "#050816", minHeight: "100vh", color: "#fff" }}>
      <Navbar />
      <main style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "120px", paddingBottom: "80px", paddingLeft: "20px", paddingRight: "20px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "24px", background: "linear-gradient(135deg, #0ea5e9, #9333ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Disclaimer
        </h1>
        
        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>1. Information Accuracy</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
            The information provided on Nexvora is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the tools and services listed.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>2. Affiliate Disclosure</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
            Nexvora may participate in affiliate marketing programs. This means we may earn a commission if you click on certain links or make a purchase through those links, at no additional cost to you. This helps support our site and allows us to continue providing high-quality content.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>3. External Links</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
            Our website contains links to external websites that are not provided or maintained by or in any way affiliated with Nexvora. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>4. Use at Your Own Risk</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
            Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage arising from the use of this website.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
