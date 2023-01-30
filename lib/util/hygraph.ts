import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import { Blogs } from "types/blogs";

export const getBlogs = async () => {
  const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string);
  const QUERY = gql`
    {
      portfolioBlogs {
        title
        coverImage {
          url
          width
          height
        }
        slug
        description
        blogDate
        id
        tags
        content
      }
    }
  `;
  const { portfolioBlogs }: Blogs = await hygraph.request(QUERY);

  return portfolioBlogs;
};

export const getBlog = async (slug: string) => {
  const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string);
  const QUERY = gql`
    query getBlog($slug: String) {
      portfolioBlogs(where: { slug: $slug }) {
        title
        coverImage {
          url
          width
          height
        }
        slug
        description
        blogDate
        id
        tags
        content
      }
    }
  `;

  const variables = {
    slug,
  };

  return await hygraph.request(QUERY, variables);
};
