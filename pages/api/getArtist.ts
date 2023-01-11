import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken } from "./spotify";

const ARTIST_ENDPOINT = "https://api.spotify.com/v1/artists/";
const ARTIST_ALBUM_ENDPOINT =
  "https://api.spotify.com/v1/artists/${artistId}/albums?album_type=album&market=US&limit=50";

export const getArtist = async () => {
  const access_token: string = await getAccessToken();
  const artistId: string = "2QbtOIjb8mUIsnCNqvyWAW";

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
