import Link from "next/link";

export const metadata = {
  title: "About PulseViral",
  description: "About PulseViral and our approach to U.S. gaming coverage.",
};

export default function AboutPage() {
  return (
    <main className="simple-page">
      <div className="simple-card">
        <Link className="back-link" href="/">← PulseViral</Link>
        <h1>About PulseViral</h1>
        <p>
          PulseViral is an independent gaming information site focused on useful,
          clearly sourced coverage for readers in the United States.
        </p>
        <h2>What we publish</h2>
        <p>
          We cover gaming statistics, platform guides, release information,
          comparisons and practical explainers. Our goal is to make each page
          answer a specific question rather than repeat broad trend claims.
        </p>
        <h2>How we work</h2>
        <p>
          When an article uses a statistic, release date or industry claim, we
          identify the source and the reporting period. Information can change,
          so dated pages are reviewed and updated when new authoritative data
          becomes available.
        </p>
        <p>
          PulseViral is independent and is not an official publication of any
          game publisher, platform or industry association.
        </p>
      </div>
    </main>
  );
}
