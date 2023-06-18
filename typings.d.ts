import { Author } from "@prisma/client";
import { FieldProps } from "formik";

interface INovel extends Novel {
    [x: string]: Key | null | undefined;
    authors: Author[]
}

interface User {
    firstName: string
    lastName: string
    password: string
    email: string
    role: string
}

interface UserInContext {
    firstName: string
    lastName: string
    email: string
}

interface Search {
    id: string,
    email: string,
    searchCode: string | undefined,
    searchString?: string,
    createdAt?: string,
}

interface InputFieldProps extends FieldProps{
    label: string;
    type: string;
    id: string;
    autoComplete: string;
    autoFocus: boolean;
    required: boolean;
    onChange: (any)=>void;
    error: boolean;
    helperText: string;
    name:string;
    name:string;
  }

interface SubmitButtonProps {
    text: string;
    disabled: boolean;
    loading: boolean;
}

interface FormLine {
    name: string;
    value: string;
}
type UserContextType = {
    user: User|null;
    setUser: (user: User) => void;
  };