import Link from "next/link";

export const metadata = {
  title: "U.S. Mobile Gaming Explained",
  description: "How mobile gaming fits into the wider U.S. gaming audience.",
};

export default function USMobileGamingPage() {
  return (
    <main className="simple-page">
      <div className="simple-card">
        <Link className="back-link" href="/">← PulseViral</Link>
        <div className="kicker">Gaming Data</div>
        <h1>U.S. Mobile Gaming Explained</h1>
        <p className="dek">
          Mobile is no longer a side category of gaming. It is part of the
          everyday U.S. gaming landscape and reaches players who may also use
          consoles or PCs.
        </p>
        <h2>Mobile reaches a large player base</h2>
        <p>
          The Entertainment Software Association reported in its 2025 U.S.
          industry data that 82% of players age 8 and older used a mobile device
          to play games. The figure covers a broad group rather than a single
          genre or platform.
        </p>
        <h2>Short sessions change the experience</h2>
        <p>
          Phones make games available during commutes, breaks and other parts of
          the day when a console or PC is not nearby. That makes mobile suitable
          for both short sessions and longer play.
        </p>
        <h2>Mobile and other platforms overlap</h2>
        <p>
          Players do not have to choose only one platform. A person can use a
          phone for casual play, a console for a living-room game and a PC for
          competitive or strategy titles. Looking at gaming as a multi-device
          activity gives a more complete picture of the market.
        </p>
        <p className="source-note">
          Source: Entertainment Software Association U.S. industry research.
          Reporting periods are identified in the relevant ESA publications.
        </p>
      </div>
    </main>
  );
}
