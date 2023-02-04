import { poppins } from "lib/util/get-class";
import React from "react";
import { Blogs } from "types/blogs";
import Blog from "./Blog";
import clsx from "clsx";

const BlogContainer = ({ portfolioBlogs }: Blogs) => {
  return (
    <div className="space-y-6">
      {portfolioBlogs.length === 0 ? (
        <h1 className={clsx(poppins, "text-secondary-white text-2xl")}>
          <span className="select-none">🙁</span> No Blogs Found
        </h1>
      ) : (
        <Blog portfolioBlogs={portfolioBlogs} />
      )}
    </div>
  );
};

export default BlogContainer;
