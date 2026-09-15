import { pulseAds, type BannerSize } from "../config/ads";

function AdLabel() {
  return <span className="ad-label">Advertisement</span>;
}

function BannerFrame({
  width,
  height,
  keyId,
}: {
  width: number;
  height: number;
  keyId: string;
}) {
  const srcDoc = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
html,body{
  margin:0;
  padding:0;
  width:100%;
  min-height:100%;
  background:transparent;
  overflow:hidden;
}
</style>
</head>
<body>
<script>
window.atOptions = {
  key: '${keyId}',
  format: 'iframe',
  height: ${height},
  width: ${width},
  params: {}
};
</script>
<script src="https://disregardpervertmural.com/${keyId}/invoke.js"></script>
</body>
</html>`;

  return (
    <iframe
      title="Advertisement"
      srcDoc={srcDoc}
      width={width}
      height={height}
      loading="lazy"
      scrolling="no"
      frameBorder="0"
      style={{
        display: "block",
        border: 0,
        maxWidth: "100%",
        overflow: "hidden",
      }}
    />
  );
}

export function BannerAd({ size }: { size: BannerSize }) {
  const config = pulseAds.banner[size];

  return (
    <div className={`ad-unit banner-${size}`}>
      <AdLabel />

      <BannerFrame
        width={config.width}
        height={config.height}
        keyId={config.key}
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

export function NativeAd({
  ratio,
}: {
  ratio: "1:4" | "4:1";
}) {
  if (ratio === "1:4") {
    return (
      <div className="ad-unit native-rail">
        <AdLabel />

        <BannerFrame
          width={160}
          height={600}
          keyId="d9e3c3690acd9a9e2705553e9f895ff6"
        />
      </div>
    );
  }

  const srcDoc = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
html,body{
  margin:0;
  padding:0;
  width:100%;
  min-height:100%;
  background:transparent;
}
#container-ae3597be66f2f0d63a2cbeebeb6a1b74{
  width:100%;
  min-height:160px;
}
</style>
</head>
<body>
<div id="container-ae3597be66f2f0d63a2cbeebeb6a1b74"></div>
<script async src="https://disregardpervertmural.com/ae3597be66f2f0d63a2cbeebeb6a1b74/invoke.js"></script>
</body>
</html>`;

  return (
    <div className="ad-unit native-unit">
      <AdLabel />

      <iframe
        title="Native Advertisement"
        srcDoc={srcDoc}
        width="640"
        height="160"
        loading="lazy"
        scrolling="no"
        frameBorder="0"
        className="native-frame"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "640px",
          height: "160px",
          border: 0,
          overflow: "hidden",
        }}
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

      <BannerFrame
        width={config.width}
        height={config.height}
        keyId={config.key}
      />
    </div>
  );
}
