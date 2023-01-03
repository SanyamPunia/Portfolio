import React from "react";
import { Manrope } from "@next/font/google";
import Divider from "components/Divider";
import Hero from "components/about/Hero";
import PageWrapper from "components/PageWrapper";

const manrope = Manrope();

export default function Home() {
  return (
    <PageWrapper>
      <div className={manrope.className}>
        <Divider />
        <Hero />
        <Divider />
      </div>
    </PageWrapper>
  );
}
