import Divider from "components/Divider";
import PageWrapper from "components/PageWrapper";
import { getBlogs } from "lib/util/hygraph";
import Hero from "components/blogs/Hero";
import BlogContainer from "components/blogs/BlogContainer";
import { Blogs, BlogType } from "types/blogs";

type Props = {};

const page = async (props: Props) => {
  const portfolioBlogs = await getBlogs();

  return (
    <PageWrapper>
      <Divider />
      <Hero />
      <BlogContainer portfolioBlogs={portfolioBlogs} />
      <Divider />
    </PageWrapper>
  );
};

export default page;
