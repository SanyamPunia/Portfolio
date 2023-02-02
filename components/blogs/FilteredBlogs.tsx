"use client";

import { poppins } from "lib/util/get-class";
import React, { useState } from "react";
import { Blogs } from "types/blogs";
import BlogContainer from "./BlogContainer";

const FilteredBlogs = ({ portfolioBlogs }: Blogs) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const filteredBlogs = portfolioBlogs
    .sort((a, b) => Number(new Date(b.blogDate)) - Number(new Date(a.blogDate)))
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <div>
      <div className="w-full text-primary-white mb-6 flex">
        <input
          className={`${poppins} outline-none transition-all w-full rounded-md bg-transparent border border-primary-card-border py-3 px-4 placeholder-primary-gray focus:border focus:border-hover-card-border focus:shadow-2xl`}
          placeholder="Search blogs..."
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>

      <BlogContainer portfolioBlogs={filteredBlogs} />
    </div>
  );
};

export default FilteredBlogs;
