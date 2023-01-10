import { FaSoundcloud, FaSpotify, FaYoutube } from "react-icons/fa";
import { StatsType } from "types/stats";

export const stats: StatsType[] = [
  {
    id: 1,
    platformName: "Spotify",
    platformLogo: FaSpotify,
    plays: "69,420",
    totalSongs: 9,
    logoHexCode: "#1DB954",
  },
  {
    id: 2,
    platformName: "SoundCloud",
    platformLogo: FaSoundcloud,
    plays: "69,420",
    totalSongs: 9,
    logoHexCode: "#FF7700",
  },
  {
    id: 3,
    platformName: "YouTube",
    platformLogo: FaYoutube,
    plays: "69,420",
    totalSongs: 9,
    logoHexCode: "#C4302B",
  },
];
