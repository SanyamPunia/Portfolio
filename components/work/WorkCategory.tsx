"use client";

import React from "react";
import Experience from "./experience/Experience";
import Project from "./projects/Project";
import { manrope } from "lib/util/get-class";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {};

const categoryArray: Array<string> = ["Project", "Experience"];

const WorkCategory = (props: Props) => {
  const [category, setCategory] = useState<string>("Project");

  return (
    <>
      <div
        className={`text-lg flex gap-4 text-secondary-white ${manrope} mb-8 justify-center`}
      >
        {categoryArray.map((c, index) => (
          <>
            <p
              key={index}
              className={clsx(
                "text-primary-white",
                "cursor-pointer",
                "transition hover:text-secondary-white",
                "relative"
              )}
              onClick={() => setCategory(c)}
            >
              {c === category && (
                <motion.span
                  layoutId="underline"
                  className={clsx(
                    "absolute left-0 top-full block",
                    "bg-primary-gray-highlighted",
                    "h-[2px] w-full"
                  )}
                />
              )}
              {c}
            </p>
            <span className="select-none">•</span>
          </>
        ))}
      </div>
      {category === "Project" ? <Project /> : <Experience />}
    </>
  );
};

export default WorkCategory;
