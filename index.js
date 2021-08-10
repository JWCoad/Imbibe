const express = require("express");
const { ApolloServer } = require("apollo-server-express");
//gql
const { readFileSync } = require("fs");
const typeDefs = readFileSync("./schema.graphql").toString("utf-8");
const resolvers = require("./resolvers");
const path = require("path");
// const cors = require("cors");
// const PORT = process.env.PORT || 4000;

require("dotenv").config();
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  // app.use(express.static(path.join(__dirname, "client", "build")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  // });
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
  }

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });

  await new Promise((resolve) =>
    app.listen({ port: process.env.PORT || 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

try {
  require("./databases/database-connection");
  startApolloServer();
} catch (error) {
  console.error("Could not start Application due to", error);
  process.exit(-1);
}

//heroku
// app.use(cors());

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

// app.use(express.static("public"));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });
