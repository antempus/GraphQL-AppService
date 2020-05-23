# GraphQL-AppService

GraphQL App Service backed by CosmosDB

# Develop Locally

### Docker

- `docker build --tag <DOCKER_ID>/<REPO_NAME>:<TAG>
- `docker run -e CosmosKey="COSMOS_CONNECTION_STRING" -p 8080:80 -it <DOCKER_ID>/<REPO_NAME>:<TAG>`
- navigate to `http://localhost:8080/graphql` for GraphQL Playground

## vscode

- clone antempus/GraphQL-AppService locally
- copy `env.example` to `.env` and fill in the required properties
- `npm i`
- launch using VS Code debugger or `npm serve`
- navigate to the route displayed in console
  - should look like `https://localhost:8080/graphql` or `https://localhost:<PORT>/graphql`
