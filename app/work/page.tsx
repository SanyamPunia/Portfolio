import React from "react";
import Divider from "components/Divider";
import PageWrapper from "components/PageWrapper";
import Hero from "components/work/Hero";
import Project from "components/work/Project";
import useSWR from "swr";

type Props = {};
// http://localhost:3000
// https://accounts.spotify.com/authorize?client_id=0feb70a4f0a44bbaa16f4b90bff01243&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-currently-playing
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
