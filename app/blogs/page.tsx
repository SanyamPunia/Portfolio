import Divider from "components/Divider";
import PageWrapper from "components/PageWrapper";
import { getBlogs } from "lib/util/hygraph";
import Hero from "components/blogs/Hero";
import FilteredBlogs from "components/blogs/FilteredBlogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanyam | Blogs",
  description:
    "Explore my technical articles and hopefully learn something new about the frontend web tech stack. I write occasionally about my experiences & different problems I solved during a period.",
};

type Props = {};

const page = async (props: Props) => {
  const portfolioBlogs = await getBlogs();

  console.log(portfolioBlogs);

  return (
    <PageWrapper>
      <Divider />
      <Hero />
      <FilteredBlogs portfolioBlogs={portfolioBlogs} />
      <Divider />
    </PageWrapper>
  );
};

export default page;
