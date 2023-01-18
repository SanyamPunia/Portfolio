import { FaSpotify } from "react-icons/fa";
import { manrope } from "lib/util/get-class";
import useSWR from "swr";
import { SpotifyDataType } from "types/spotify";
import { fetcher } from "lib/util/fetcher";

const Spotify = () => {
  const { data } = useSWR<SpotifyDataType>("/api/spotify", fetcher, {
    refreshInterval: 1000,
  });

  return (
    <div className="sm:flex-row flex-col flex sm:items-center sm:gap-2 mb-4">
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
        {/* <FaExclamationTriangle className="text-white" /> */}
        <div className="flex gap-1 text-primary-gray">
          <p>
            {data?.isPlaying ? (
              <>
                <span className="cursor-pointer transition hover:text-primary-gray-highlighted underline underline-offset-2">
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
