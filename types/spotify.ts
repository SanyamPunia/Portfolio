export interface SpotifyDataType {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

export interface SpotifyApiDataType {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

export interface ArtistType {
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  name: string;
  popularity?: number;
}

interface ExternalUrls {
  spotify: string;
}

interface Followers {
  total: number;
}
