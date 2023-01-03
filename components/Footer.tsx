"use client";

import { FaHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { scrollToTop } from "lib/util/scroll-to-top";

type Props = {};

const Footer = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="px-8 max-w-3xl mx-auto">
      <div className="flex justify-between text-[#646464] mb-24 tracking-wide flex-col gap-4 sm:flex-row">
        <div className="space-y-4">
          <p className="footer-item">
            <Link onClick={pathname === "/" ? scrollToTop : undefined} href="/">
              About
            </Link>
          </p>
          <p className="footer-item">
            <Link href="/work" className="footer-item">
              Work
            </Link>
          </p>
          <p className="footer-item">
            <Link href="/blogs" className="footer-item">
              Blogs
            </Link>
          </p>
        </div>
        <div className="space-y-4">
          <p className="footer-item">
            <Link href="/">Spotify</Link>
          </p>
          <p className="footer-item">
            <Link href="/">SoundCloud</Link>
          </p>
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
    </div>
  );
};

export default Footer;
