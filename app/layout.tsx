import Footer from "components/Footer";
import Header from "components/Header";
import "app/globals.css";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Sanyam | About",
  description: "Sanyam's Personal Portfolio",
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
        <Footer />
      </body>
    </html>
  );
}
