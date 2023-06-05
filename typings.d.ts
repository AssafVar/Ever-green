import { Author } from "@prisma/client";

interface INovel extends Novel {
    [x: string]: Key | null | undefined;
    authors: Author[]
}

interface Search {
    id:string,
    userId:string,
    searchCode:string|undefined,
    searchString?:string,
    createdAt?:string,
  }