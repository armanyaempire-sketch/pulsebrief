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
        <h2>Corrections and questions</h2>
        <p>
          A dedicated production contact address will be published here before
          the site moves from the temporary Pages address to its final custom
          domain.
        </p>
        <p className="small-note">
          Contact details are intentionally not fabricated or redirected through
          a third-party mailbox.
        </p>
      </div>
    </main>
  );
}
