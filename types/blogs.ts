export interface BlogType {
  title: string;
  coverImage: {
    url: string;
    width: number;
    height: number;
  };
  slug: string;
  description: string;
  blogDate: string;
  id: string;
  tags: Array<string>;
  content: any;
}

export interface Blogs {
  portfolioBlogs: BlogType[];
}
