import Link from "next/link";

export const metadata = {
  title: "Editorial Policy | PulseViral",
  description: "How PulseViral researches, verifies, updates and discloses gaming content.",
};

export default function EditorialPolicyPage() {
  return (
    <main className="simple-page">
      <div className="simple-card">
        <Link className="back-link" href="/">← PulseViral</Link>
        <h1>Editorial Policy</h1>
        <h2>Specific claims, identifiable sources</h2>
        <p>
          We prefer articles built around a clear question, named subject and
          identifiable evidence. Industry statistics are presented with their
          source and reporting period wherever practical.
        </p>
        <h2>Dates matter</h2>
        <p>
          Release schedules, streaming availability, pricing and platform
          features can change. Articles that depend on time-sensitive information
          include a publication or update date and are reviewed when material
          changes occur.
        </p>
        <h2>Independence and disclosures</h2>
        <p>
          We distinguish editorial information from advertising and commercial
          links. Any future affiliate relationship will be disclosed on the
          relevant page. Advertising does not determine our factual claims.
        </p>
        <h2>Corrections</h2>
        <p>
          When we identify a material factual error, we correct the page and
          update the information rather than silently leaving an inaccurate claim
          in place.
        </p>
      </div>
    </main>
  );
}
