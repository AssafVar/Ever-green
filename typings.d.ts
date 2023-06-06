import { Author } from "@prisma/client";

interface INovel extends Novel {
    [x: string]: Key | null | undefined;
    authors: Author[]
}

interface Search {
    id: string,
    userId: string,
    searchCode: string | undefined,
    searchString?: string,
    createdAt?: string,
}

interface UserInputFieldProps {
    label: string;
    type: string;
    id: string;
    autoComplete?: string;
    autoFocus?: boolean;
    required?: boolean;
}
interface SubmitButtonProps {
    text: string;
}
interface FormLine {
    name: string;
    value: string;
}