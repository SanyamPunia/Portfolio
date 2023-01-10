"use client";

import { stats } from "lib/stats-info";
import Divider from "components/Divider";
import { manrope, poppins } from "lib/util/get-class";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { SpotifyData } from "types/spotify";

const StatsCard = () => {
  return (
    <>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="border transition-all duration-300 hover:border-hover-card-border shadow hover:shadow-sm border-primary-card-border p-6 rounded-xl space-y-5"
        >
          <div className="flex justify-between text-primary-white text-xl">
            <h1 className={`${poppins}`}>{stat.platformName}</h1>
            <Link
              href=""
              className="p-1 rounded-md transition-all duration-300"
            >
              <span
                className={`text-[${stat.logoHexCode}]`}
                style={{ color: `${stat.logoHexCode}` }}
              >
                <stat.platformLogo />
              </span>
            </Link>
          </div>

          <Divider />

          <div className={`${manrope} text-md text-secondary-white`}>
            <div className="mb-2 flex justify-between">
              <h1 className="">{stat.plays}</h1>
              <span>Monthly Listeners</span>
            </div>
            <div className="mt-2 flex justify-between">
              <h1>9</h1>
              <span>Songs</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StatsCard;
