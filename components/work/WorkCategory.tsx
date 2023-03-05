"use client";

import React from "react";
import Experience from "./experience/Experience";
import Project from "./projects/Project";
import { manrope } from "lib/util/get-class";
import { useState } from "react";
import clsx from "clsx";

type Props = {};

const WorkCategory = (props: Props) => {
  const [category, setCategory] = useState<string>("project");

  return (
    <div>
      <div
        className={`text-lg flex gap-4 text-secondary-white ${manrope} mb-8 justify-center`}
      >
        <p
          className={clsx(
            category === "project" &&
              "underline underline-offset-4 decoration-wavy text-primary-white",
            "cursor-pointer",
            "transition hover:text-primary-white"
          )}
          onClick={() => setCategory("project")}
        >
          Projects
        </p>
        <span className="select-none">•</span>
        <p
          className={clsx(
            category === "experience" &&
              "underline underline-offset-4 decoration-wavy text-primary-white",
            "cursor-pointer",
            "transition hover:text-primary-white"
          )}
          onClick={() => setCategory("experience")}
        >
          Experience
        </p>
      </div>
      {category === "project" ? <Project /> : <Experience />}
    </div>
  );
};

export default WorkCategory;
