const { GraphQLServer } = require("graphql-yoga");

let links = [
  {
    id: "link-0",
    url: "www.howtograpghql.com",
    description: "FullStack tutorial for GragphQL"
  }
];
let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (parent, { id }) => {
      const matchedLink = links.filter(link => link.id === id);
      if (matchedLink.length > 0) return matchedLink[0];
    }
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      const linkIndex = links.findIndex(link => link.id === args.id);
      if (linkIndex > -1) {
        links[linkIndex] = { ...links[linkIndex], ...args };
        return links[linkIndex];
      }
    },
    deleteLink: (parent, { id }) => {
      const matchedIndex = links.findIndex(link => link.id === id);
      if (matchedIndex > -1) {
        const deletedLink = links[matchedIndex];
        links = links.filter(link => link.id !== id);
        return deletedLink;
      }
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(({ port }) =>
  console.log(`Server is running on http://localhost:${port}`)
);
