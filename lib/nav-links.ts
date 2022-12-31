import { Key } from "react";

interface NavLink {
  id: Key;
  routeName: string;
  route: string;
}

export const navLinks: Array<NavLink> = [
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
