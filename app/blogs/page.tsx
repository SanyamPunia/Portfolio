import Divider from "components/Divider";
import PageWrapper from "components/PageWrapper";
import { getBlogs } from "lib/util/hygraph";
import Hero from "components/blogs/Hero";
import FilteredBlogs from "components/blogs/FilteredBlogs";

type Props = {};

const page = async (props: Props) => {
  const portfolioBlogs = await getBlogs();
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
