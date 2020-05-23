import express from "express";
import { makeExecutableSchema, ApolloServer } from "apollo-server-express";
import typeDefs from "./lib/typeDefs";
import resolvers from "./lib/resolvers";
import errorHandler from "errorhandler";
const app = express();

app.use(errorHandler());

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });

server.applyMiddleware({ app, path: "/graphql" });

export default app;
