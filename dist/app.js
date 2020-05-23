"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = __importDefault(require("./lib/typeDefs"));
const resolvers_1 = __importDefault(require("./lib/resolvers"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const app = express_1.default();
app.use(errorhandler_1.default());
const schema = apollo_server_express_1.makeExecutableSchema({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
const server = new apollo_server_express_1.ApolloServer({ schema });
server.applyMiddleware({ app, path: "/graphql" });
exports.default = app;
//# sourceMappingURL=app.js.map