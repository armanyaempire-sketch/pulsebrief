import { pulseAds, type BannerSize } from "../config/ads";

export function AdLabel() {
  return <span className="ad-label">Advertisement</span>;
}

export function BannerAd({ size }: { size: BannerSize }) {
  const config = pulseAds.banner[size];

  return (
    <div className={`ad-unit banner-${size}`} data-ad-size={size}>
      <AdLabel />
      <iframe
        title="Advertisement"
        width={config.width}
        height={config.height}
        frameBorder="0"
        scrolling="no"
        src={`/${config.src}`}
      />
    </div>
  );
}

export function ResponsiveBanner() {
  return (
    <div className="responsive-banner">
      <div className="responsive-banner-desktop">
        <BannerAd size="wide" />
      </div>

      <div className="responsive-banner-tablet">
        <BannerAd size="medium" />
      </div>

      <div className="responsive-banner-mobile">
        <BannerAd size="mobile" />
      </div>
    </div>
  );
}

export function NativeAd({ ratio }: { ratio: "1:4" | "4:1" }) {
  if (ratio === "1:4") {
    return (
      <div className="ad-unit native-rail">
        <AdLabel />
        <iframe
          title="Native Advertisement"
          width="160"
          height="600"
          frameBorder="0"
          scrolling="no"
          src="/ads/160x600.html"
        />
      </div>
    );
  }

  return (
    <div className="ad-unit native-unit">
      <AdLabel />
      <iframe
        title="Native Advertisement"
        width="640"
        height="160"
        frameBorder="0"
        scrolling="no"
        src="/ads/native.html"
        className="native-frame"
      />
    </div>
  );
}

export function RailAd({ tall = true }: { tall?: boolean }) {
  const config = tall
    ? pulseAds.banner.railTall
    : pulseAds.banner.railSmall;

  return (
    <div className="ad-unit rail-unit">
      <AdLabel />
      <iframe
        title="Advertisement"
        width={config.width}
        height={config.height}
        frameBorder="0"
        scrolling="no"
        src={`/${config.src}`}
      />
    </div>
  );
}