import { Prisma, PrismaClient } from "@prisma/client";

export type Context = {
  prisma: PrismaClient;
};

export const resolvers = {
  Query: {
    users: async (_: any, args: any, context: Context) => {
      return await context.prisma.user.findMany();
    },
    user: async (_: any, args: any, context: Context) => {
      return await context.prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    userSearches: async (_:any, args:any, context:Context) => {
      return await context.prisma.search.findMany({
        where: {
          userId: args.userId,
        },
      });
    }
  },
  Mutation: {
    insertUser: async (_: any, args: any, context: Context) => {
      try {
        return await context.prisma.user.create({
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            password: args.password,
            role: args.role,
          },
        });
      } catch (err:any) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
          throw new Error(err.code)
        };
        throw new Error(err.message);
      }
    },
    updateUser: async (_: any, args: any, context: any) => {
      return await context.prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
        },
      });
    },
    deleteUser: async (_: any, args: any, context: any) => {
      return await context.prisma.user.delete({
        where: {
          id: args.id,
        },
      });
    },
    insertSearch: async (_: any, args: any, context: any) => {
      try {
        return await context.prisma.search.create({
          data: {
            id:args.id,
            userId: args.userId,
            searchCode: args.searchCode,
            searchString: args.searchString,
            createdAt:args.createdAt,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
    deleteSingleSearch: async (_: any, args: any, context: Context) => {
      return await context.prisma.search.delete({
        where: {
          id: args.id,
        },
      });
    },
    deleteAllSearch: async (_: any, args: any, context: Context) => {
      const deletedSearches = await context.prisma.search.findMany({
        where: {
          userId: args.userId,
        },
      });
    
      await context.prisma.search.deleteMany({
        where: {
          userId: args.userId,
        },
      });
    
      return deletedSearches;
    }
  },
  User: {
    search: async (parent: any, __: any, context: Context) => {
      return await context.prisma.search.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
  },
};
