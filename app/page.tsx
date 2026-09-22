import { BannerAd, NativeAd } from "../components/Ad";
import AutoScrollToSection from "../components/AutoScrollToSection";

const sections = [
  {
    title: "Why games remain such a big part of U.S. culture",
    paragraphs: [
      "Games have become one of the easiest ways for people in the United States to share an interest across age groups. A household might have someone following a major console release, another person playing a competitive mobile title, and someone else spending an evening with a long-running sports game. The formats are different, but the habit is similar: games give people a quick way to relax, compete, explore and connect.",
      "The biggest change is that the idea of a “game” is no longer limited to a box bought at a store. A blockbuster release, a free-to-play mobile title, a live-service update and a competitive tournament can all compete for the same attention. That creates a crowded market, but it also gives players more choices than ever.",
    ],
  },
  {
    title: "The games pulling attention right now",
    paragraphs: [
      "In the U.S., the strongest gaming conversations usually happen around a handful of categories: major console and PC releases, sports titles, competitive multiplayer games, social games and the next big portable or mobile experience. A game does not need to dominate every category to matter. Strong communities can keep a title visible for months or years through tournaments, creators, updates and player-made content.",
      "Sports games have a special advantage because they connect a digital experience to a real-world season. Football, basketball, baseball, racing and college sports give publishers a natural calendar for new editions, events and content drops. Meanwhile, competitive games can create their own calendars around ranked seasons, championships and major patches.",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            PULSE <span>/ USA Games</span>
          </div>

          <div className="header-note">
            Fast U.S. trend coverage
          </div>
        </div>
      </header>

      <main className="page">
        <AutoScrollToSection targetId="sports-games-audience" />
        <div className="top-ad top-ad-stack">
          <div className="top-ad-wide">
            <BannerAd size="wide" />
          </div>

          <div className="top-ad-medium">
            <BannerAd size="medium" />
          </div>

          <div className="top-ad-mobile">
            <BannerAd size="mobile" />
          </div>
        </div>

        <div className="layout">
          <article className="article-card">
            <div className="kicker">USA Games</div>

            <h1>
              The Games Capturing America's Attention Right Now
            </h1>

            <div className="top-ad">
              <BannerAd size="wide" />
            </div>

            <p className="dek">
              From major console releases to competitive favorites and sports
              titles, these are the gaming categories shaping what players are
              talking about across the United States.
            </p>

            <div className="meta">
              Published September 15, 2026 · Approx. 6 minute read
            </div>

            <div className="article-body">
              <BannerAd size="medium" />

              <p>
                Gaming in the United States has never been just one thing. The
                country has a huge audience for console and PC releases, a
                deeply established sports-game culture, fast-growing mobile
                communities and a competitive scene that can turn a game into a
                spectator event. The result is a market where players often
                move between several kinds of games during the same week.
              </p>

              {sections.map((section, index) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  <BannerAd
                    size={
                      index % 2 === 0
                        ? "medium"
                        : "mobile"
                    }
                  />
                </section>
              ))}

              <h2>Console and PC still matter</h2>

              <p>
                Big-budget releases continue to attract attention because they
                combine recognizable characters, large production values and
                communities that are ready to discuss every detail. For many
                U.S. players, a new release becomes a shared event: friends
                compare experiences, creators publish guides, and online
                communities quickly build their own vocabulary around a title.
              </p>

              <BannerAd size="medium" />

              <p>
                PC gaming adds another layer because the platform is unusually
                flexible. Players can move between major releases, independent
                games, competitive titles and user-created content without
                needing a separate device for every experience. That variety
                helps keep the PC audience active even when there is no single
                dominant release.
              </p>

              <BannerAd size="mobile" />

              <h2>Competitive play has become entertainment</h2>

              <p>
                Competitive games occupy an interesting position in U.S.
                culture. Players can participate directly, watch professional
                matches, follow creators or simply keep up with major events.
                Streaming has made this easier because the same game can exist
                simultaneously as a product, a hobby, a social space and a
                spectator sport.
              </p>

              <BannerAd size="medium" />

              <p>
                The competitive audience also rewards games that can evolve.
                Regular balance changes, new maps, seasons and tournaments give
                players a reason to return. That creates an ongoing conversation
                rather than the one-time attention associated with an older
                release cycle.
              </p>

              <BannerAd size="mobile" />

              <h2 id="sports-games-audience">Sports games have a built-in U.S. audience</h2>

              <p>
                Sports titles are especially durable in America because the
                calendar itself creates recurring demand. When a new football,
                basketball, baseball or racing season approaches, players are
                already thinking about teams, players, rivalries and predictions.
                A game can ride that real-world interest while adding its own
                online competition and community features.
              </p>

              <BannerAd size="medium" />

              <p>
                That is why sports games often have a different rhythm from
                other releases. The conversation is not only about graphics or
                gameplay. It is also about rosters, trades, rankings, player
                ratings, seasonal events and the feeling of controlling a
                favorite team.
              </p>

              <BannerAd size="mobile" />

              <h2>What players are likely to watch next</h2>

              <p>
                The next wave of attention will probably be driven by a mix of
                major launches and unexpected community hits. A game can break
                through because it arrives with a famous franchise, but it can
                also become popular because creators discover something fun,
                competitive or social that spreads quickly.
              </p>

              <BannerAd size="medium" />

              <p>
                For players, that means the best way to understand the U.S.
                gaming landscape is not to look for one “biggest game.” The
                market is too broad for that. It is better to watch the
                conversations around releases, updates, tournaments, sports
                seasons and the communities that grow around them.
              </p>

              <BannerAd size="mobile" />

              <h2>The bottom line</h2>

              <p>
                Games remain a powerful part of everyday entertainment in the
                United States because they fit many different habits. Some
                players want a long single-player adventure. Others want ten
                quick competitive matches. Some follow sports, while others
                follow creators and online communities. The biggest games are
                the ones that give people a reason to keep talking, playing and
                coming back.
              </p>

              <NativeAd ratio="4:1" />
            </div>
          </article>

          <aside className="sidebar">
            <div className="sidebar-card">
              <h3>Featured</h3>
              <NativeAd ratio="1:4" />
            </div>
          </aside>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <BannerAd size="wide" />

          © 2026 Pulse. Independent U.S. games coverage.
        </div>
      </footer>
    </>
  );
}
