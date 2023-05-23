import { Author } from "@prisma/client";

interface INovel extends Novel {
    [x: string]: Key | null | undefined;
    authors: Author[]
}