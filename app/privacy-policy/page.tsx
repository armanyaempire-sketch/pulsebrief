import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | PulseViral",
  description: "Privacy policy for PulseViral.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="simple-page">
      <div className="simple-card">
        <Link className="back-link" href="/">← PulseViral</Link>
        <h1>Privacy Policy</h1>
        <p>
          This page explains the general categories of information that may be
          processed when you visit PulseViral.
        </p>
        <h2>Analytics and logs</h2>
        <p>
          Our hosting and analytics providers may process technical information
          such as IP-derived location, browser type, device information and
          page requests for security, reliability and traffic measurement.
        </p>
        <h2>Advertising</h2>
        <p>
          We may use third-party advertising services. Those providers can use
          cookies or similar technologies according to their own privacy
          policies and applicable consent requirements.
        </p>
        <h2>External links</h2>
        <p>
          Articles may link to external publishers, services and sources. Their
          privacy practices are governed by their own policies.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions or requests, use the contact page.
        </p>
        <p><Link href="/contact/">Contact PulseViral →</Link></p>
      </div>
    </main>
  );
}
