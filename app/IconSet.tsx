import Link from "next/link";

interface IconObjct {
  component: JSX.Element;
  href: string;
  gradientBg: string;
}

interface Props {
  icons: Array<IconObjct>;
}

const IconSet = ({ icons }: Props) => {
  return (
    <div className="flex gap-5 w-full">
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
