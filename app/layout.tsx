import type { Metadata } from "next";
import "./globals.css";
import { GlobalAds } from "../components/GlobalAds";

export const metadata: Metadata = {
  title: "Pulse — USA Games: What Players Are Watching",
  description:
    "A fast, mobile-first guide to the games capturing attention across the United States, from blockbuster releases to competitive play.",
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
