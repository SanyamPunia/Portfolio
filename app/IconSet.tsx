import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

type Props = {};

const IconSet = (props: Props) => {
  const icons = [
    {
      component: <FaGithub key="1" />,
      href: "https://github.com/SanyamPunia",
      gradientBg:
        "hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500",
    },
    {
      component: <FaLinkedin key="2" />,
      href: "https://www.linkedin.com/in/sanyampunia/",
      gradientBg:
        "hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500",
    },
    {
      component: <FaTwitter key="3" />,
      href: "https://twitter.com/prodmxle",
      gradientBg:
        "hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500",
    },
    {
      component: <FaEnvelope key="4" />,
      href: "mailto:lewarends@gmail.com",
      gradientBg:
        "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500",
    },
  ];

  return (
    <div className="flex gap-5">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={` ${icon.gradientBg} shadow-lg text-[#e0e0e0] bg-zinc-800 cursor-pointer hover:bg-zinc-700 transition duration-300 p-1 text-xl rounded-md`}
        >
          <Link href={icon.href} target="_blank">
            {icon.component}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default IconSet;
