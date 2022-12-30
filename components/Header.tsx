"use client";

import Image from "next/image";
import React from "react";
import { Poppins } from "@next/font/google";
import { usePathname } from "next/navigation";
import ClockWidget from "components/ClockWidget";

type Props = {};

const poppins = Poppins({
  weight: "400",
});

const navLinks = [
  {
    id: 1,
    routeName: "About",
    route: "/",
  },
  {
    id: 2,
    routeName: "Work",
    route: "/work",
  },
  {
    id: 3,
    routeName: "Music",
    route: "/music",
  },
  {
    id: 4,
    routeName: "Blogs",
    route: "/blogs",
  },
];

const Header = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav className="mt-32">
      <div className="flex justify-between items-center">
        {/* LEFT CONTAINER */}
        <div className="space-y-3.5">
          {/* AVATAR */}
          <div className="border border-gray-800 relative h-12 w-12 rounded-full bg-gradient-to-r from-[#071127] to-[#1c0942]">
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
                    ? `text-primary-gray-highlighted underline`
                    : "null"
                } cursor-pointer transition-all hover:text-primary-gray-highlighted`}
                key={link.id}
              >
                {link.routeName}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <ClockWidget />
      </div>
    </nav>
  );
};

export default Header;
