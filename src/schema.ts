import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    case(id: ID!): Case
    cases: [Case!]!
    client(id: ID!): Client
    clients: [Client!]!
    neighborhood(id: ID!): Neighborhood
    neighborhoods: [Neighborhood!]!
    user(id: ID!): User
    users: [User!]!
  }

  type Case {
    id: ID!
    neighborhood: Neighborhood!
    client: Client!
    address: Address!
    description: String!
    status: CaseStatus!
  }

  type Address {
    id: ID!
    neighborhood: Neighborhood!
    street: String!
    exterior_number: String!
    interior_number: String
    postal_code: String!
  }

  type CaseStatus {
    id: ID!
    status_name: String!
    description: String
  }

  type Client {
    id: ID!
    name: String!
    last_name: String!
    mother_last_name: String
    phone_number: String!
    email: String!
  }

  type Neighborhood {
    id: ID!
    name: String!
  }

  type User {
    id: ID!
    username: String!
    password: String!
    type: String!
  }
`;

export default typeDefs;
