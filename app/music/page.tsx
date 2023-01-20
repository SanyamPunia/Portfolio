import Divider from "components/Divider";
import React from "react";
import PageWrapper from "components/PageWrapper";
import StatsCardContainer from "components/music/StatsCardContainer";
import Hero from "components/music/Hero";

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
