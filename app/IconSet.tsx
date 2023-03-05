"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";
import { IconObjctType } from "types/icons";
import clsx from "clsx";

export const icons: IconObjctType[] = [
  {
    component: FaGithub,
    href: "https://github.com/SanyamPunia",
    className:
      "hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500",
  },
  {
    component: FaLinkedin,
    href: "https://www.linkedin.com/in/sanyampunia/",
    className: "hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500",
  },
  {
    component: FaTwitter,
    href: "https://twitter.com/prodmxle",
    className: "hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500",
  },
  {
    component: FaEnvelope,
    href: "mailto:lewarends@gmail.com",
    className: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500",
  },
  {
    component: FaFilePdf,
    href: "https://drive.google.com/file/d/1a1zZeIBVPh2lKD_VDyHDkTzuj0Q2H8Bt/view?usp=sharing",
    className:
      "hover:bg-gradient-to-r hover:from-emerald-500 hover:to-lime-600",
  },
];

const IconSet = () => {
  return (
    <>
      <div className="flex gap-5 w-full">
        {icons.map((icon: IconObjctType, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8, transition: { duration: 0 } }}
            key={index}
            className={clsx(
              "transition duration-300",
              "hover:bg-zinc-700 hover:shadow-blue-500/50",
              "text-xl text-[#e0e0e0] bg-zinc-800",
              "shadow-lg cursor-pointer p-1 rounded-md",
              icon.className
            )}
          >
            <a href={icon.href} target="_blank">
              <icon.component />
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default IconSet;
