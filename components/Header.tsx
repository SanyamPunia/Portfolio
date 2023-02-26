"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "lib/nav-links";
import ClockWidget from "components/ClockWidget";
import IconSet from "app/IconSet";
import Link from "next/link";
import { motion } from "framer-motion";
import { manrope, poppins } from "lib/util/get-class";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="px-8 max-w-3xl mx-auto mt-32">
      <div
        className={clsx(
          "flex flex-col",
          "justify-between items-center text-center",
          "md:flex-row md:text-left"
        )}
      >
        {/* LEFT CONTAINER */}
        <div className="space-y-3.5">
          {/* AVATAR */}
          <div
            className={clsx(
              "animate-pulse",
              " ring-[5px] ring-purple-500/10",
              "group transform transition ease-out hover:scale-105 hover:from-purple-800 hover:to-amber-600  active:translate-y-px",
              "border border-gray-800 rounded-full",
              "h-12 w-12",
              "bg-gradient-to-r from-[#071127] to-[#1c0942]",
              "relative mx-auto",
              "md:mx-0"
            )}
          >
            <Image
              src="/assets/pfp.png"
              fill
              alt="profile-picture"
              className="rounded-full select-none"
              draggable="false"
            />
          </div>

          {/* HEADER NAME */}
          <h1 className="text-primary-white text-nav-primary-heading">
            <span className={poppins}>Sanyam</span>
          </h1>

          {/* NAV LINKS */}
          <div className="flex gap-5 text-primary-gray text-nav-primary-list">
            {navLinks.map((link) => (
              <p
                className={`${
                  pathname === link.route
                    ? `text-primary-gray-highlighted`
                    : "null"
                } ${manrope} cursor-pointer transition-all hover:text-primary-gray-highlighted`}
                key={link.id}
              >
                <Link href={link.route} className="relative">
                  {link.route === pathname && (
                    <motion.span
                      layoutId="underline"
                      className={clsx(
                        "absolute left-0 top-full block",
                        "bg-primary-gray-highlighted",
                        "h-[2px] w-full"
                      )}
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
          <IconSet />
        </div>
      </div>
    </nav>
  );
};

export default Header;
