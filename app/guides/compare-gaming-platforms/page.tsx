import Link from "next/link";

export const metadata = {
  title: "How to Compare Gaming Platforms",
  description: "A practical guide to comparing console, PC and mobile gaming platforms.",
};

export default function ComparePlatformsPage() {
  return (
    <main className="simple-page">
      <div className="simple-card">
        <Link className="back-link" href="/">← PulseViral</Link>
        <div className="kicker">Gaming Guide</div>
        <h1>How to Compare Gaming Platforms</h1>
        <p className="dek">
          Console, PC and mobile each solve different needs. A useful comparison
          starts with the games you play, the hardware you already own and the
          way you prefer to spend your time.
        </p>
        <h2>1. Start with your games</h2>
        <p>
          Check whether the games you care about are available on the platform
          before comparing hardware. Exclusive releases, cross-platform support
          and controller or keyboard preferences can matter more than small
          technical differences.
        </p>
        <h2>2. Compare total cost</h2>
        <p>
          Look beyond the initial hardware price. Consider subscriptions, game
          prices, accessories, storage, upgrades and any recurring service fees.
        </p>
        <h2>3. Consider how you play</h2>
        <p>
          A desktop PC may suit long sessions and customization, a console can
          offer a simple living-room experience, and mobile is convenient for
          short sessions and play away from home. There is no single platform
          that fits every player.
        </p>
        <h2>4. Think about your existing devices</h2>
        <p>
          If you already own a capable phone, PC or console, the best decision may
          be the option that adds something new rather than duplicating what you
          already have.
        </p>
      </div>
    </main>
  );
}
