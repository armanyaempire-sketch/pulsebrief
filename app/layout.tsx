import type { Metadata } from "next";
import "./globals.css";
import { GlobalAds } from "../components/GlobalAds";

export const metadata: Metadata = {
  title: "PulseViral | U.S. Gaming Guides & Data",
  description:
    "PulseViral publishes focused U.S. gaming guides, industry data, platform explainers and source-backed gaming information.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body>
        <GlobalAds />
        {children}
      </body>
    </html>
  );
}
