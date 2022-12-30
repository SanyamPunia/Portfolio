import { Manrope } from "@next/font/google";
import Image from "next/image";

const manrope = Manrope({
  weight: "700",
});

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="text-secondary-white mb-20">
      <div className="space-y-12 text-hero-primary-para">
        <p className="leading-normal tracking-wide">
          <span className="text-4xl">Hi</span> there! My name is <span className={manrope.className}>Sanyam</span>
          , and welcome to my portfolio website! I am a fullstack web developer
          from India and I am passionate about creating web applications that
          are both functional and user-friendly.
        </p>
        <p className="leading-normal tracking-wide">
          In my experience as a developer, I have found that simplicity is key
          to creating a great user experience. Whether it&apos;s through a clean
          and intuitive design, or by ensuring that the code behind the scenes
          is efficient and well-structured, I always strive to create web
          applications that are a pleasure to use.
        </p>
        <div className="w-full">
          <Image
            src="/assets/main-image-2.png"
            className="select-none rounded-md aspect-auto grayscale-0"
            width={1000}
            height={1000}
            alt="main-image"
            draggable="false"
          />
          <p className="mt-1 text-center italic">
            <span className="text-stone-500 text-sm">a picture of me 😁</span>{" "}
          </p>
        </div>
        <p className="leading-normal tracking-wide">
          I am currently seeking internship opportunities as a frontend
          developer. If you have any inquiries or would like to discuss
          potential opportunities, please don&apos;t hesitate to reach out.
          Thank you for visiting my portfolio website, and I look forward to
          connecting with you.
        </p>
      </div>
    </div>
  );
};

export default Hero;
