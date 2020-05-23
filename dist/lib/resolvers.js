"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userClient = void 0;
const cosmos_1 = require("@azure/cosmos");
exports.userClient = new cosmos_1.CosmosClient(process.env.CosmosKey)
    .database("database")
    .container("users");
const removeDBMetadata = (resource) => {
    const { _ts, _rid, _etag, _attachments } = resource, rest = __rest(resource, ["_ts", "_rid", "_etag", "_attachments"]);
    return rest;
};
function getUser(_, { userId, }) {
    return __awaiter(this, void 0, void 0, function* () {
        return exports.userClient
            .item(userId, userId)
            .read()
            .then(({ resource }) => removeDBMetadata(resource))
            .catch((error) => {
            console.log(error);
        });
    });
}
function addUser(_, { user, }) {
    return __awaiter(this, void 0, void 0, function* () {
        return exports.userClient.items
            .upsert(user)
            .then(({ resource }) => removeDBMetadata(resource))
            .catch((error) => {
            console.log(error);
        });
    });
}
function addUsers(_, { users, }) {
    return __awaiter(this, void 0, void 0, function* () {
        return exports.userClient.items
            .upsert(users)
            .then(() => users.length)
            .catch((error) => {
            console.log(error);
        });
    });
}
const resolvers = {
    Query: { getUser },
    Mutation: { addUser, addUsers },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map