import Image from "next/image";
import React from "react";
import { Poppins } from "@next/font/google";

type Props = {};

const poppins = Poppins({
  weight: "400",
});

const Header = (props: Props) => {
  return (
    <nav className="mt-32 w-2/5 mx-auto border border-gray-800">
      <div className="flex justify-between items-center">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="border border-gray-800 relative h-14 w-14 rounded-full bg-gradient-to-r from-[#071127] to-[#1c0942]">
              <Image
                src="/assets/pfp1.png"
                fill
                alt="profile-picture"
                className="rounded-full select-none"
                draggable="false"
              />
            </div>
            <div className="text-[#D4D4D4]">
              <h1 className="text-2xl">
                <span className={poppins.className}>Sanyam</span>
              </h1>
            </div>
          </div>
          <div className="flex gap-5 text-[#545353] text-lg">
            <p className="text-[#777777] underline">About</p>
            <p>Work</p>
            <p>Blog</p>
          </div>
        </div>
        <div className={`text-[#D4D4D4] text-right ${poppins.className}`}>
          <h1 className="text-4xl">10:30 am</h1>
          <p className="text-lg text-[#545353]">20 March, 2023</p>
          <p className="text-lg text-[#545353]">Monday</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
