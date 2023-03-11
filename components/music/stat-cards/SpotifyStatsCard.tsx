"use client";

import Divider from "components/Divider";
import { manrope, poppins } from "lib/util/get-class";
import React from "react";
import useSWR from "swr";
import { fetcher } from "lib/util/fetcher";
import { ArtistType } from "types/spotify";
import { FaExternalLinkAlt, FaSpotify } from "react-icons/fa";
import SkeletonCard from "./SkeletonCard";
import clsx from "clsx";

const SpotifyStatsCard = () => {
  const { data } = useSWR<ArtistType>("/api/get-artist", fetcher);

  return (
    <>
      {!data ? (
        <SkeletonCard />
      ) : (
        // See globals.css
        <div className="stats-card">
          <div
            className={clsx(
              "flex justify-between",
              "text-primary-white text-xl"
            )}
          >
            <h1 className={poppins}>Spotify</h1>
            <div
              className={clsx("p-1 rounded-md", "transition-all duration-300")}
            >
              <span style={{ color: "#1DB954" }}>
                <FaSpotify />
              </span>
            </div>
          </div>

          <Divider />

          <div className={clsx(manrope, "text-md text-secondary-white")}>
            <div className="mb-2 flex justify-between">
              <span>Artist Name</span>
              <h1>{data?.name}</h1>
            </div>
            <div className="mt-2 flex justify-between">
              <span>Followers</span>
              <h1 className="">{data?.followers.total}</h1>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span>URL</span>
              <a
                target="_blank"
                rel="noreferrer"
                href={data?.external_urls.spotify}
                className=""
              >
                <FaExternalLinkAlt className="text-sm transition-all hover:text-primary-gray" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpotifyStatsCard;
