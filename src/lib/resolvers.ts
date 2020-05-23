import { CosmosClient } from "@azure/cosmos";
import IUser from "./types/User";

export const userClient = new CosmosClient(process.env.CosmosKey)
  .database("database")
  .container("users");

const removeDBMetadata = (resource: any) => {
  const { _ts, _rid, _etag, _attachments, ...rest } = resource;
  return rest;
};
async function getUser(
  _: any,
  {
    userId,
  }: {
    userId: string;
  }
) {
  return userClient
    .item(userId, userId)
    .read()
    .then(({ resource }) => removeDBMetadata(resource))
    .catch((error) => {
      console.log(error);
    });
}
async function addUser(
  _: any,
  {
    user,
  }: {
    user: IUser;
  }
) {
  return userClient.items
    .upsert(user)
    .then(({ resource }) => removeDBMetadata(resource))
    .catch((error) => {
      console.log(error);
    });
}
async function addUsers(
  _: any,
  {
    users,
  }: {
    users: [IUser];
  }
) {
  return userClient.items
    .upsert(users)
    .then(() => users.length)
    .catch((error) => {
      console.log(error);
    });
}

const resolvers = {
  Query: { getUser },
  Mutation: { addUser, addUsers },
};

export default resolvers;
