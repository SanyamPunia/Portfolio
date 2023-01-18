export interface YouTubeChannelResponse {
  items: Array<{
    snippet: {
      customUrl: string;
    };
    statistics: {
      viewCount: string;
      subscriberCount: string;
    };
  }>;
}
