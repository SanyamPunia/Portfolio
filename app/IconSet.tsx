"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";
import { icons } from "lib/social-icons";

interface IconObjct {
  component: IconType;
  href: string;
  className: string;
}

interface Props {
  icons: IconObjct[];
}

const IconSet = () => {
  return (
    <div className="flex gap-5 w-full">
      {icons.map((icon, index) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, transition: { duration: 0 } }}
          key={index}
          className={` hover:bg-zinc-700 shadow-lg text-[#e0e0e0] bg-zinc-800 cursor-pointer transition duration-300 p-1 text-xl rounded-md hover:shadow-blue-500/50`}
          style={{ backgroundColor: `${icon.className}` }}
        >
          <Link href={icon.href} target="_blank">
            <icon.component />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default IconSet;
