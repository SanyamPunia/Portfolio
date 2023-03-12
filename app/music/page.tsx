import Divider from "components/Divider";
import React from "react";
import PageWrapper from "components/PageWrapper";
import Hero from "components/music/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Listen to my music and explore some new tunes. Discover my unique sound and see how my music has resonated with audiences over the years.",
};

type Props = {};

const page = (props: Props) => {
  return (
    <PageWrapper>
      <Divider />
      <Hero />
      <Divider />
    </PageWrapper>
  );
};

export default page;
