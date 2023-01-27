import { manrope } from "lib/util/get-class";
import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className={`text-secondary-white ${manrope} text-hero-primary-para space-y-6 mb-12`}
    >
      <p className="leading-normal tracking-wide">
        <span className="text-4xl">Since</span> November 2021, I have been
        writing about my experiences as a web developer, researching and
        crafting insightful blogs and articles on various technologies. All of
        my work is entirely original, and I never plagiarize.
      </p>
      <p className="leading-normal tracking-wide">
        I am also an occasional contributor on{" "}
        <span className="text-primary-white underline transition-all hover:text-secondary-white">
          <a
            href="https://medium.com/@prodmxle"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
        </span>
        , where you can find more of my work.
      </p>
    </div>
  );
};

export default Hero;
