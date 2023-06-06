import { FormLine } from "@/typings";

export const getFormElements = (elements:any) =>{
    const formDetails: FormLine[] = [];
    for (let i = 0; i < elements.length - 1; i++) {
      elements[i].type != 'fieldset' && formDetails.push({
        name: elements[i].id,
        value: elements[i].value
      })
    }
    return formDetails
  }