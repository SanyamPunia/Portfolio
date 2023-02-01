import Divider from "components/Divider";
import { manrope, poppins } from "lib/util/get-class";
import Link from "next/link";
import React from "react";
import { Blogs } from "types/blogs";

const Blog = ({ portfolioBlogs }: Blogs) => {
  return (
    <>
      {portfolioBlogs?.map((blog) => (
        <div
          key={blog.id}
          className="p-4 space-y-4 rounded-lg shadow-sm bg-secondary-black border border-primary-card-border transition-all duration-300 hover:backdrop-blur-sm hover:border-hover-card-border"
        >
          <div className="space-y-1">
            <h1
              className={`${poppins} text-primary-white text-xl font-medium cursor-pointer transition-all hover:text-secondary-white`}
            >
              <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
            </h1>
            <p className={`${manrope} text-secondary-gray text-md`}>
              Published on <span className="select-none">•</span>{" "}
              {blog.blogDate}
            </p>
          </div>

          <Divider />

          <p className={`${manrope} text-secondary-white text-md`}>
            {blog.description}
          </p>
          <div className="gap-2 flex flex-wrap justify-start">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-primary-gray bg-[#222222] transition-all hover:text-primary-gray-highlighted cursor-default select-none px-2 rounded-lg"
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
