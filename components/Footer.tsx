"use client";

import { FaHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";

type Props = {};

const Footer = (props: Props) => {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-between text-[#646464] mb-24 tracking-wide">
      <div className="space-y-4">
        <p
          className="footer-item"
          onClick={pathname === "/" ? scrollToTop : undefined}
        >
          About
        </p>
        <p className="footer-item">Work</p>
        <p className="footer-item">Blogs</p>
      </div>
      <div className="space-y-4">
        <p className="footer-item">Spotify</p>
        <p className="footer-item">SoundCloud</p>
      </div>
      <div>
        <p>
          Developed with{" "}
          <span className="text-red-500 inline-block text-xs">
            <FaHeart />
          </span>{" "}
          by Sanyam
        </p>
      </div>
    </div>
  );
};

export default Footer;
