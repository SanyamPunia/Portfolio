import React from "react";
import Divider from "components/Divider";
import PageWrapper from "components/PageWrapper";
import Hero from "components/work/Hero";
import Project from "components/work/Project";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Sanyam | Work",
  description:
    "Explore a list of projects I've built using the modern tech stack. Discover how I've used the latest technologies to create powerful web applications that deliver results.",
};

type Props = {};
const page = (props: Props) => {
  return (
    <PageWrapper>
      <Divider />
      <Hero />
      <Project />
      <Divider />
    </PageWrapper>
  );
};

export default page;
