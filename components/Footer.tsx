"use client";

import { FaHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { scrollToTop } from "lib/util/scroll-to-top";
import { motion } from "framer-motion";
import { manrope } from "lib/util/get-class";
import useSWR from "swr";
import { fetcher } from "lib/util/fetcher";
import { SpotifyData } from "types/spotify";
import Spotify from "./Spotify";

type Props = {};

const Footer = (props: Props) => {
  const pathname = usePathname();
  const { data } = useSWR<SpotifyData>("/api/spotify", fetcher);

  console.log(data);

  return (
    <div className="px-8 max-w-3xl mx-auto">
      <Spotify />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-between text-[#646464] mb-24 tracking-wide flex-col gap-4 sm:flex-row"
      >
        <div className={`${manrope} space-y-4`}>
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
      </motion.div>
    </div>
  );
};

export default Footer;
