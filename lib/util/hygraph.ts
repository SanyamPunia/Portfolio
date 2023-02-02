import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import { Blogs } from "types/blogs";

export const getBlogs = async () => {
  const hygraph = new GraphQLClient(
    "https://api-ap-south-1.hygraph.com/v2/clc66e6q413f401t6cimh9qqq/master"
  );
  const QUERY = gql`
    {
      portfolioBlogs(orderBy: publishedAt_DESC) {
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
  const { portfolioBlogs } = await hygraph.request(QUERY);

  return portfolioBlogs;
};

export const getBlog = async (slug: string) => {
  const hygraph = new GraphQLClient(
    "https://api-ap-south-1.hygraph.com/v2/clc66e6q413f401t6cimh9qqq/master"
  );
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
