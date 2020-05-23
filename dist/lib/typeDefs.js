"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  type Query {
    getUser(userId: String): User
  }

  type Mutation {
    addUser(user: UserInput): User!
    addUsers(users: [UserInput]): [User]!
  }

  type Name {
    first: String!
    last: String!
  }

  input NameInput {
    first: String!
    last: String!
  }

  type Location {
    state: String
    city: String
    country: String
    zipcode: String
    timezone: String!
  }

  input LocationInput {
    state: String
    city: String
    country: String
    zipcode: String
    timezone: String!
  }

  type User {
    id: String!
    name: Name!
    location: Location!
    email: String
  }

  input UserInput {
    email: String!
    name: NameInput!
    location: LocationInput!
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map