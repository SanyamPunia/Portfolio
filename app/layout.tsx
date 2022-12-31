"use client"

import Footer from "components/Footer";
import Header from "components/Header";
import { motion } from "framer-motion";
import "app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* PADDING ACROSS WHOLE BODY of 2.0rem x-axis */}
      <body className="px-8 max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Header />
          {children}
          <Footer />
        </motion.div>
      </body>
    </html>
  );
}
