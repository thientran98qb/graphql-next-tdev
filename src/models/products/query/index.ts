import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      images {
        url
      }
      slug
      categories {
        id
        name
      }
    }
  }
`

export const GET_PRODUCT_CONNECTIONS = gql`
  query GetProductConnections($id: ID, $first: Int = 2, $after: String) {
    productsConnection(where: {categories_every: {id_contains: $id}}, first: $first, after: $after) {
      edges {
        node {
          id
          name
          price
          publishedAt
          slug
          categories {
            id
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`
