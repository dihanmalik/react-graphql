const { GraphQLServer } = require("graphql-yoga");
const { userId, userIP, dateTime, deviceName } = require("./mock/Value");
const moment = require("moment");

let visitors = Array(25)
  .fill()
  .map(() => ({
    id: Number(userId()),
    dateTime: dateTime(),
    ip: userIP(),
    device: deviceName()
  }));

const resolvers = {
  Query: {
    visitors: () => visitors
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(({ port }) =>
  console.log(`Server is running on http://localhost:${port}`)
);
