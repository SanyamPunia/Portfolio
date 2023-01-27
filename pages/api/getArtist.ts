import axios from "axios";
import { ARTIST_ID } from "lib/constants";
import { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken } from "./spotify";

const ARTIST_ENDPOINT = "https://api.spotify.com/v1/artists/";

export const getArtist = async () => {
  const access_token: string = await getAccessToken();
  const artistId: string = ARTIST_ID;

  const response = await axios.get(ARTIST_ENDPOINT + artistId, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.data;
};

export default async function spotifyGetData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getArtist();

  return res.status(200).json(response);
}
