import Link from "next/link";
// import { IconType } from "react-icons/lib";

// interface IconObjct {
//   component: IconType;
//   href: string;
//   className: string;
// }

// interface Props {
//   icons: IconObjct[];
// }
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface IconObjct {
  component: IconType;
  href: string;
  className: string;
}

const icons: IconObjct[] = [
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
];

const IconSet = () => {
  return (
    <div className="flex gap-5 w-full">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`hover:bg-zinc-700 shadow-lg text-[#e0e0e0] bg-zinc-800 cursor-pointer transition duration-300 p-1 text-xl rounded-md hover:shadow-blue-500/50 ${icon.className}`}
        >
          <Link href={icon.href} target="_blank">
            <icon.component />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default IconSet;
