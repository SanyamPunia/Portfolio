import React from "react";
import { Manrope } from "@next/font/google";
import Divider from "components/Divider";
import Hero from "app/Hero";

const manrope = Manrope();

export default function Home() {
  return (
    <div className={manrope.className}>
      <Divider />
      <Hero />
      <Divider />
    </div>
  );
}
