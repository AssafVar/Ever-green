import { generateToken } from "@/lib/jwt";
import { User } from "@/typings";
import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'


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
    userSearches: async (_: any, args: any, context: Context) => {
      return await context.prisma.search.findMany({
        where: {
          userId: args.userId,
        },
      });
    },
    userLogin: async (_: any, args: any, context: Context) => {
      const { email, password } = args;
      try {
        const user: User | null = await context.prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        const isValid = await bcrypt.compare(password, user?.password ? user.password : '')
        if (isValid) {
          const token = user && generateToken(user);
          return { token, user };
        } else {
          return { error: 'Wrong email or password' }
        }
      } catch (err: any) {
        return { error: err.message }
      }
    }
  },
  Mutation: {
    insertUser: async (_: any, args: any, context: Context) => {
      const user: User = {
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: args.password,
        role: args.role,
      };

      try {
        const response = await context.prisma.user.create({
          data: { ...user },
        });
        if (response) {
          return { status: true };
        }
      } catch (err: any) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
          throw new Error(err.code);
        }
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
            id: args.id,
            userId: args.userId,
            searchCode: args.searchCode,
            searchString: args.searchString,
            createdAt: args.createdAt,
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
