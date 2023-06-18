import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { prisma } from "@/prisma/db";
import { resolvers, Context } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schema";

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});
