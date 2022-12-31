import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

interface IconObjct {
  component: JSX.Element;
  href: string;
  gradientBg: string;
}

export const icons: Array<IconObjct> = [
  {
    component: <FaGithub key="1" />,
    href: "https://github.com/SanyamPunia",
    gradientBg:
      "hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500",
  },
  {
    component: <FaLinkedin key="2" />,
    href: "https://www.linkedin.com/in/sanyampunia/",
    gradientBg: "hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500",
  },
  {
    component: <FaTwitter key="3" />,
    href: "https://twitter.com/prodmxle",
    gradientBg: "hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500",
  },
  {
    component: <FaEnvelope key="4" />,
    href: "mailto:lewarends@gmail.com",
    gradientBg:
      "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500",
  },
];
