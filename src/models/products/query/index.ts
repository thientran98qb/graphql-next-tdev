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
  query GetProductConnections($id: ID) {
    productsConnection(where: {categories_every: {id_contains: $id}}) {
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
    }
  }
`
