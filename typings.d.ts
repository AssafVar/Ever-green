import { Author } from "@prisma/client";
import { FieldProps } from "formik";

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
  }

interface SubmitButtonProps {
    text: string;
    disabled: boolean;
}

interface FormLine {
    name: string;
    value: string;
}