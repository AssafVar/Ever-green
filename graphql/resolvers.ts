import { PrismaClient } from "@prisma/client";


export type Context = {
    prisma: PrismaClient;
  };

export const resolvers = {
    Query: {
      novels: async (_: any, __: any, context: Context) => {
        return await context.prisma.novel.findMany();
      },
      novel: async (_: any, args: any, context: Context) => {
        return await context.prisma.novel.findUnique({
          where: {
            id: args.id
          }
        })
      },
      users: async (_: any, args: any, context: Context) =>{
        return await context.prisma.user.findMany();
      },
      user: async (_: any, args: any, context: Context) => {
        return await context.prisma.user.findUnique({
          where: {
            id: args.id
          }
        })
      }
    },
    Novel: {
      authors: async (parent: any, __: any, context: Context) => {
        return await context.prisma.author.findMany({
          where: {
            novelId: parent.id
          }
        });
      },
    },
    Mutation: {
      addNovel: async (_: any, args: any, context: Context) => {
        return await context.prisma.novel.create({
          data:{
            title: args.title,
            image: args.image
          }
        })
      },
      updateNovel: async (_: any, args: any, context: Context) => {
        return await context.prisma.novel.update({
          where: {
            id: args.id,
          },
          data: {
            title: args.title,
            image: args.image
          },
        })
      },
      deleteNovel: async (_: any, args: any, context: Context) => {
        return await context.prisma.novel.delete({
          where: {
            id: args.id,
          }
        })
      },
      addAuthor: async (_: any, args: any, context: Context) => {
        return await context.prisma.author.create({
          data: {
            novelId: args.novelId,
            name: args.name,
          }
        })
      },
      deleteAuthor: async (_: any, args: any, context: Context) => {
        return await context.prisma.author.delete({
          where: {
            id: args.id,
          }
        })
      },
      addUser: async (_: any, args: any, context: Context) => {
        try{

          return await context.prisma.user.create({
            data: {
              firstName: args.firstName,
              lastName: args.lastName,
              email: args.email,
              password: args.password,
              role: args.role,
            }
          })
        }catch(err){
          console.log(err);
        }
      },
      updateUser: async (_:any, args: any, context: any) => {
        return await context.prisma.user.update({
          where: {
            id: args.id,
          },
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
          }
        })
      },
      deleteUser: async (_:any,args: any, context: any) => {
        return await context.prisma.user.delete({
          where: {
            id: args.id,
          }
        })
      }
    }
  };