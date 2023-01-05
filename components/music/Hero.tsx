import { manrope } from "lib/util/get-class";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className={`text-secondary-white ${manrope} text-hero-primary-para mb-12`}>
      <p className="leading-normal tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        dolorum quis dolores sapiente quaerat eligendi, asperiores perspiciatis
        iste dicta pariatur laudantium voluptatum quidem aliquid mollitia vitae
        doloribus ipsam porro error.
      </p>
    </div>
  );
};

export default Hero;
