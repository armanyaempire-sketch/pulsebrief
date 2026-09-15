/**
 * PulseViral-only advertising configuration.
 */

export const pulseAds = {
  popunderScriptSrc:
    "https://disregardpervertmural.com/70/e8/b9/70e8b9cfa7dc34553bed0b3c1556049c.js",

  socialBarScriptSrc:
    "https://disregardpervertmural.com/fa/30/a3/fa30a33ee51e3137dfc6a449f7e339b0.js",

  native: {
    scriptSrc:
      "https://disregardpervertmural.com/ae3597be66f2f0d63a2cbeebeb6a1b74/invoke.js",
    containerId:
      "container-ae3597be66f2f0d63a2cbeebeb6a1b74",
  },

  banner: {
    wide: {
      key: "9c2f0929cf86e2dcce58bc3bd58c601e",
      width: 728,
      height: 90,
      src: "ads/728x90.html",
    },

    medium: {
      key: "81a251e5941b32457f4bd11ebf92f844",
      width: 468,
      height: 60,
      src: "ads/468x60.html",
    },

    mobile: {
      key: "631525543d12d2780cc96e13558b378c",
      width: 320,
      height: 50,
      src: "ads/320x50.html",
    },

    box: {
      key: "023cb5e8e50e6076e33c2dde7383d706",
      width: 300,
      height: 250,
      src: "ads/300x250.html",
    },

    railSmall: {
      key: "3e88576365cf81fa649f01b5d5d27371",
      width: 160,
      height: 300,
      src: "ads/160x300.html",
    },

    railTall: {
      key: "d9e3c3690acd9a9e2705553e9f895ff6",
      width: 160,
      height: 600,
      src: "ads/160x600.html",
    },
  },
} as const;

export type BannerSize = keyof typeof pulseAds.banner;
