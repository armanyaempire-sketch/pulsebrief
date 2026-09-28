import Link from "next/link";

export const metadata = {
  title: "Disclaimer | PulseViral",
  description: "Important information about PulseViral editorial content and advertising.",
};

export default function DisclaimerPage() {
  return (
    <main className="simple-page">
      <div className="simple-card">
        <Link className="back-link" href="/">← PulseViral</Link>
        <h1>Disclaimer</h1>
        <h2>Information only</h2>
        <p>
          PulseViral publishes general information for readers. We do not
          guarantee that every product, service, date, price or platform detail
          remains unchanged after publication.
        </p>
        <h2>Third-party services</h2>
        <p>
          References to games, publishers, platforms and services are for
          identification and informational purposes. Unless explicitly stated,
          PulseViral is not affiliated with those third parties.
        </p>
        <h2>Advertising and commercial links</h2>
        <p>
          Some pages may contain advertising or future affiliate links. Those
          commercial relationships do not change our editorial standards.
        </p>
      </div>
    </main>
  );
}
