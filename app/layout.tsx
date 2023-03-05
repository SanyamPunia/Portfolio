import Footer from "components/Footer";
import Header from "components/Header";
import "app/globals.css";
import type { Metadata } from "next/types";
import { AnalyticsWrapper } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Sanyam | Personal Portfolio",
    template: "Sanyam | %s",
  },
  description:
    "Welcome to my peronsal portfolio where you'll get to know about my experiences of my professional life. I love building personal/pet projects & writing technical articles. I also make music as my side hobby.",
  openGraph: {
    title: "Sanyam | Personal Portfolio",
    description:
      "Welcome to my peronsal portfolio where you'll get to know about my experiences of my professional life. I love building personal/pet projects & writing technical articles. I also make music as my side hobby.",
    url: "https://sanyam.xyz",
    siteName: "Sanyam's Portfolio",
    images: [
      {
        url: "https://sanyam.xyz/og-image.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <AnalyticsWrapper />
        <Footer />
      </body>
    </html>
  );
}
