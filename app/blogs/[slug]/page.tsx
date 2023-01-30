import PageWrapper from "components/PageWrapper";
import { getBlog, getBlogs } from "lib/util/hygraph";
import React from "react";
import { BlogType, Blogs } from "types/blogs";
import { serialize } from "next-mdx-remote/serialize";
import MDXContent from "components/blogs/mdx/MDXContent";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "lib/mdx-components";
import rehypeHighlight from "rehype-highlight/lib";
import Divider from "components/Divider";
import BlogHeader from "components/blogs/mdx/BlogHeader";

type Props = {};

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blog: Blogs = await getBlog(slug);
  const content = blog.portfolioBlogs[0]?.content;
  const mdx: MDXRemoteSerializeResult = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  return (
    <PageWrapper>
      <Divider />
      <BlogHeader portfolioBlogs={blog.portfolioBlogs} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/srcery.min.css"
      ></link>
      <div className="leading-normal tracking-wide">
        <MDXContent source={mdx} components={components} />
      </div>
      <Divider />
    </PageWrapper>
  );
};

export default page;

export async function generateStaticParams() {
  const portfolioBlogs = await getBlogs();

  return portfolioBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}
