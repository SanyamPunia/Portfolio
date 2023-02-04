"use client";

import Divider from "components/Divider";
import { manrope, poppins } from "lib/util/get-class";
import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { getYoutubeStats } from "lib/util/get-youtube-stats";
import { YouTubeChannelResponse } from "types/youtube";
import SkeletonCard from "./SkeletonCard";
import Link from "next/link";
import clsx from "clsx";

type Props = {};

const YouTubeStatsCard = (props: Props) => {
  const [data, setData] = useState<YouTubeChannelResponse>();

  useEffect(() => {
    async function setResponse() {
      const response = await getYoutubeStats();
      setData(response);
    }

    setResponse();
  }, []);

  return (
    <>
      {!data ? (
        <SkeletonCard />
      ) : (
        <div className="stats-card">
          <div className="flex justify-between text-primary-white text-xl">
            <h1 className={`${poppins}`}>YouTube</h1>
            <div className="p-1 roudned-md transition-all duration-300">
              <span style={{ color: "#C4302B" }}>
                <FaYoutube />
              </span>
            </div>
          </div>

          <Divider />

          <div className={clsx(manrope, "text-md text-secondary-white")}>
            <div className="mb-2 flex justify-between">
              <span>Channel</span>
              <Link
                className="transition-all hover:text-primary-gray"
                href={`https://youtube.com/${data?.items[0].snippet.customUrl}`}
              >
                {data?.items[0].snippet.customUrl}
              </Link>
            </div>
            <div className="mt-2 flex justify-between">
              <span>Subscribers</span>
              <h1 className="">{data?.items[0].statistics.subscriberCount}</h1>
            </div>
            <div className="mt-2 flex justify-between">
              <span>Total Views</span>
              <h1 className="">{data?.items[0].statistics.viewCount}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YouTubeStatsCard;
