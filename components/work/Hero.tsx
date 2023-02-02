import { manrope } from "lib/util/get-class";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="text-secondary-white mb-20">
      <div className={`${manrope} space-y-12 text-hero-primary-para`}>
        <p className="leading-normal tracking-wide">
          <span className="text-3xl">Here</span>, you can find a collection of
          my projects which showcase my skills as a full-stack developer and
          demonstrate my ability to deliver functional and visually appealing
          web applications.
        </p>
        <p className="leading-normal tracking-wide">
          From simple static websites to complex web applications with dynamic
          functionality, I have experience working on a wide range of projects.
          I am always looking for new opportunities to learn and grow as a
          developer, and I am excited to continue building my portfolio with
          more challenging and rewarding projects in the future.
        </p>
      </div>
    </div>
  );
};

export default Hero;
