import { FaSpotify } from "react-icons/fa";
import { manrope } from "lib/util/get-class";
import useSWR from "swr";
import { SpotifyDataType } from "types/spotify";
import { fetcher } from "lib/util/fetcher";
import clsx from "clsx";

const Spotify = () => {
  const { data } = useSWR<SpotifyDataType>("/api/get-now-playing", fetcher, {
    refreshInterval: 1000,
  });

  console.log(data);
  

  return (
    <div
      className={clsx(
        "flex flex-col",
        "sm:flex-row  sm:items-center sm:gap-2",
        "mb-4"
      )}
    >
      <div className="flex items-center gap-2">
        <FaSpotify className="text-[#1DB954]" />
        <h1 className={`text-primary-white ${manrope}`}>
          {data?.isPlaying ? <>Now Playing</> : <>Not Playing</>}
        </h1>
      </div>
      <div className={`text-primary-gray sm:inline-block hidden`}>
        <span className="text-2xl select-none">•</span>
      </div>
      <div className={`flex gap-2 ${manrope}`}>
        <div className="flex gap-1 text-primary-gray">
          <p>
            {data?.isPlaying ? (
              <>
                <span
                  className={clsx(
                    "cursor-pointer",
                    "transition hover:text-primary-gray-highlighted",
                    "underline underline-offset-2"
                  )}
                >
                  <a target="_blank" rel="noreferrer" href={data?.songUrl}>
                    {data?.title}
                  </a>
                </span>{" "}
                by {data?.artist}{" "}
              </>
            ) : (
              <>Spotify</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
