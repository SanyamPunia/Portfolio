"use client";

import Image from "next/image";
import React from "react";
import { Poppins } from "@next/font/google";
import { usePathname } from "next/navigation";
import { navLinks } from "lib/nav-links";
import ClockWidget from "components/ClockWidget";
import IconSet from "app/IconSet";
import { icons } from "lib/social-icons";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const poppins = Poppins({
  weight: "400",
});

const Header = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav className="px-8 max-w-3xl mx-auto mt-32">
      <div className="flex justify-between items-center flex-col text-center md:flex-row md:text-left">
        {/* LEFT CONTAINER */}
        <div className="space-y-3.5">
          {/* AVATAR */}
          <div className="border border-gray-800 relative h-12 w-12 rounded-full bg-gradient-to-r from-[#071127] to-[#1c0942] mx-auto md:mx-0">
            <Image
              src="/assets/pfp1.png"
              fill
              alt="profile-picture"
              className="rounded-full select-none"
              draggable="false"
            />
          </div>

          {/* HEADER NAME */}
          <h1 className="text-primary-white text-nav-primary-heading">
            <span className={poppins.className}>Sanyam</span>
          </h1>

          {/* NAV LINKS */}
          <div className="flex gap-5 text-primary-gray text-nav-primary-list">
            {navLinks.map((link) => (
              <p
                className={`${
                  pathname === link.route
                    ? `text-primary-gray-highlighted`
                    : "null"
                } cursor-pointer transition-all hover:text-primary-gray-highlighted`}
                key={link.id}
              >
                <Link href={link.route} className="relative">
                  {link.route === pathname && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-primary-gray-highlighted"
                    />
                  )}
                  {link.routeName}
                </Link>
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className="space-y-3.5">
          <ClockWidget />

          {/* ICON SET */}
          {/* icons={icons} pass as prop */}
          <IconSet />
        </div>
      </div>
    </nav>
  );
};

export default Header;
