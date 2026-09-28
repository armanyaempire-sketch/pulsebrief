import Link from "next/link";

export const metadata = {
  title: "Sources | PulseViral",
  description: "Selected primary sources used by PulseViral for U.S. gaming research.",
};

export default function SourcesPage() {
  return (
    <main className="simple-page">
      <div className="simple-card">
        <Link className="back-link" href="/">← PulseViral</Link>
        <h1>Sources</h1>
        <p>
          We favor primary or authoritative sources for industry statistics,
          release information and platform documentation.
        </p>
        <ul>
          <li><a href="https://www.theesa.com/data-insights/" target="_blank" rel="noopener noreferrer">Entertainment Software Association — Data &amp; Insights</a></li>
          <li><a href="https://www.theesa.com/video-games-remain-americas-favorite-pastime-with-more-than-212-million-americans-playing-regularly/" target="_blank" rel="noopener noreferrer">ESA — 2026 U.S. video game participation report</a></li>
          <li><a href="https://www.theesa.com/2025-u-s-consumer-spending-on-video-games-nears-pandemic-level-peak-at-60-7-billion-second-highest-on-record/" target="_blank" rel="noopener noreferrer">ESA — 2025 U.S. consumer spending report</a></li>
        </ul>
      </div>
    </main>
  );
}
