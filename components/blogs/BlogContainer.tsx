import React from "react";
import { Blogs } from "types/blogs";
import Blog from "./Blog";

const BlogContainer = ({ portfolioBlogs }: Blogs) => {
  return (
    <div className="space-y-6">
      <Blog portfolioBlogs={portfolioBlogs} />
    </div>
  );
};

export default BlogContainer;
