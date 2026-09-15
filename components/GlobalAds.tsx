import Script from "next/script";
import { pulseAds } from "../config/ads";

export function GlobalAds() {
  return (
    <>
      <Script
        id="pulse-popunder"
        src={pulseAds.popunderScriptSrc}
        strategy="afterInteractive"
      />

      <Script
        id="pulse-social-bar"
        src={pulseAds.socialBarScriptSrc}
        strategy="afterInteractive"
      />
    </>
  );
}
