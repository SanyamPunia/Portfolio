import Divider from "components/Divider";
import React from "react";
import PageWrapper from "components/PageWrapper";

type Props = {};

const page = (props: Props) => {
  return (
    <PageWrapper>
      <Divider />
      <h1 className="text-white text-xl">Blogs</h1>
      <Divider />
    </PageWrapper>
  );
};

export default page;
