import { IconType } from "react-icons/lib";

export interface StatsType {
  id: number;
  platformName: string;
  platformLogo: IconType;
  plays: string;
  totalSongs: number;
  logoHexCode: string;
}