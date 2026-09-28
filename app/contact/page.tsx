import Link from "next/link";

export const metadata = {
  title: "Contact PulseViral",
  description: "Contact PulseViral about corrections, privacy and editorial questions.",
};

export default function ContactPage() {
  return (
    <main className="simple-page">
      <div className="simple-card">
        <Link className="back-link" href="/">← PulseViral</Link>
        <h1>Contact</h1>
        <p>
          Use this page for editorial questions, factual corrections, privacy
          requests or general feedback about PulseViral.
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@pulseviral.example">contact@pulseviral.example</a>
        </p>
        <p className="small-note">
          Replace this placeholder address with the production mailbox before
          publishing the site publicly.
        </p>
      </div>
    </main>
  );
}
