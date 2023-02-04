import Divider from "components/Divider";
import { manrope, poppins } from "lib/util/get-class";
import Link from "next/link";
import React from "react";
import { Blogs } from "types/blogs";
import clsx from "clsx";

const Blog = ({ portfolioBlogs }: Blogs) => {
  return (
    <>
      {portfolioBlogs?.map((blog) => (
        <div
          key={blog.id}
          className={clsx(
            "p-4 space-y-4",
            "rounded-lg shadow-sm",
            "border border-primary-card-border",
            "transition-all duration-300 hover:backdrop-blur-sm hover:border-hover-card-border",
            "bg-secondary-black"
          )}
        >
          <div className="space-y-1">
            <h1
              className={clsx(
                poppins,
                "text-primary-white text-xl font-medium",
                "cursor-pointer",
                "transition-all hover:text-secondary-white"
              )}
            >
              <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
            </h1>
            <p className={clsx(manrope, "text-secondary-gray text-md")}>
              Published on <span className="select-none">•</span>{" "}
              {blog.blogDate}
            </p>
          </div>

          <Divider />

          <p className={clsx(manrope, "text-secondary-white text-md")}>
            {blog.description}
          </p>
          <div className={clsx("flex gap-2", "flex-wrap justify-start")}>
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className={clsx(
                  "text-primary-gray",
                  "bg-[#222222]",
                  "transition-all hover:text-primary-gray-highlighted",
                  "cursor-default select-none",
                  "px-2 rounded-lg"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
