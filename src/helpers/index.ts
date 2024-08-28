import { FormStructure, FormField } from "../Classes/Form";

type FormValidationResult = {
  isValid: boolean;
  fieldErrors: boolean[];
};

const validateForm = (formStructure: FormStructure): FormValidationResult => {
  const fieldErrors = formStructure.formFields.map(isFieldValid);
  const isValid = fieldErrors.every((error) => !error);

  return { isValid, fieldErrors };
};

const isFieldValid = (field: FormField): boolean => {
  if (!field.required) {
    return false;
  }

  switch (field.type) {
    case "text":
    case "textarea":
      return field.value.trim() === "";
    case "radio":
      return field.value === "";
    default:
      return false;
  }
};

export { validateForm, isFieldValid };
