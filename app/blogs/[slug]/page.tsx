import { getBlog, getBlogs } from "lib/util/hygraph";
import React from "react";
import { BlogType } from "types/blogs";

type Props = {};

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blog = await getBlog(slug);
  console.log(blog);
  return (
    <div>
      <h1>{blog.portfolioBlogs}</h1>
      <h1>{slug}</h1>
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const portfolioBlogs = await getBlogs();

  return portfolioBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}
