import React from "react";
import Divider from "components/Divider";
import PageWrapper from "components/PageWrapper";
import Hero from "components/work/Hero";
import Project from "components/work/Project";
import useSWR from "swr";

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
