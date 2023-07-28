import axios from "axios";
import { NextResponse } from "next/server";
import { YouTubeChannelResponse } from "types/youtube";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

const getYoutubeStats = async (): Promise<YouTubeChannelResponse> => {
  try {
    const res = await axios.get<YouTubeChannelResponse>(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};

export async function GET() {
  const response = await getYoutubeStats();

  return NextResponse.json(response);
}
