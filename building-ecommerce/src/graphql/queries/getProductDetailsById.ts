import { gql } from 'graphql-request';

export default gql`
  query GetProductDetailByID($ids: [ID!]) {
    products(where: { id_in: $ids }) {
      id
      name
      price
      slug
      description
      images {
        id
        url
      }
    }
  }
`;
