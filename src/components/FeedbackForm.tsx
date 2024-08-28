import { useEffect, useState } from "react";
import {
  CategoryFeedbackInputFormType,
  FormField,
  NumericRatingInputFormType,
  RadioInputFormType,
  SmileyRatingInputFormType,
  StarRatingInputFormType,
  TextareaInputFormType,
  TextInputFormType,
} from "../Classes/Form";
import TextInput from "../components/Admin/FormFields/TextInput";
import TextareaInput from "../components/Admin/FormFields/TextareaInput";
import NumericRatingInput from "../components/Admin/FormFields/NumericRatingInput";
import RadioInput from "../components/Admin/FormFields/RadioInput";
import SmileyRatingInput from "../components/Admin/FormFields/SmileyRatingInput";
import StarRatingInput from "../components/Admin/FormFields/StarRatingInput";
import CategoryFeedbackInput from "../components/Admin/FormFields/CategoryFeedbackInput";
import { validateForm } from "../helpers";
import { X } from "@phosphor-icons/react";
import ThankYou from "./ThankYou";
import apiClient from "../axios/apiClient";
import { FeedbackFormResponseType } from "../types";

const FeedbackForm = ({
  closeDialog,
}: {
  closeDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formErrors, setFormErrors] = useState<boolean[]>([]);
  const [formStructure, setFormStructure] = useState<FeedbackFormResponseType>({
    createdAt: "",
    id: "",
    updatedAt: "",
    formName: "",
    formFields: [],
  });

  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const incrementCount = (id: string) => {
    apiClient.get(`/feedback/forms/increment-view/${id}`);
  };

  const submitForm = async () => {
    const result = await apiClient.post(
      "/feedback/forms/d53be41b-8406-488a-880c-23d2b8886bcb/responses",
      { formFields: formStructure.formFields },
    );
    console.log(result);
  };
  useEffect(() => {
    const getForm = async () => {
      const result = await apiClient.get(
        "/feedback/forms/d53be41b-8406-488a-880c-23d2b8886bcb",
      );
      setFormStructure(result.data as FeedbackFormResponseType);
      incrementCount((result.data as FeedbackFormResponseType).id);
    };
    getForm();
  }, []);

  const onChange = (id: string, updatedField: Partial<FormField>) => {
    setFormStructure((prevStructure) => ({
      ...prevStructure,
      formFields: prevStructure.formFields.map((field) =>
        field.id === id ? { ...field, ...updatedField } : field,
      ),
    }));
  };

  const renderFormField = (field: FormField, index: number) => {
    const showError = formErrors[index];
    if (field.type === "text") {
      return (
        <TextInput
          key={field.id}
          field={field as TextInputFormType}
          onChange={onChange}
          showError={showError}
        />
      );
    } else if (field.type === "textarea") {
      return (
        <TextareaInput
          key={field.id}
          field={field as TextareaInputFormType}
          onChange={onChange}
          showError={showError}
        />
      );
    } else if (field.type === "radio") {
      switch ((field as CategoryFeedbackInputFormType).subtype) {
        case "numericrating":
          return (
            <NumericRatingInput
              key={field.id}
              field={field as NumericRatingInputFormType}
              onChange={onChange}
              showError={showError}
            />
          );
        case "starrating":
          return (
            <StarRatingInput
              key={field.id}
              field={field as StarRatingInputFormType}
              onChange={onChange}
              showError={showError}
            />
          );
        case "smileyrating":
          return (
            <SmileyRatingInput
              key={field.id}
              field={field as SmileyRatingInputFormType}
              onChange={onChange}
              showError={showError}
            />
          );

        case "categoryfeedback":
          return (
            <CategoryFeedbackInput
              key={field.id}
              field={field as CategoryFeedbackInputFormType}
              onChange={onChange}
              showError={showError}
            />
          );
        default:
          return (
            <RadioInput
              key={field.id}
              field={field as RadioInputFormType}
              onChange={onChange}
              showError={showError}
            />
          );
      }
    } else {
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(formStructure);
    setFormErrors(validationResult.fieldErrors);
    if (validationResult.isValid) {
      console.log("Form is valid, proceed with submission");
      console.log(formStructure);
      await submitForm();
      setIsFormSubmit(true);
    } else {
      console.log("Form is invalid");
    }
  };

  if (isFormSubmit) {
    return <ThankYou closeDialog={closeDialog} />;
  }

  return (
    <div className="relative max-w-xl w-full">
      <div
        className="p-2 rounded-full bg-white w-fit absolute -top-2 -right-2 z-10 cursor-pointer"
        onClick={() => closeDialog(false)}
      >
        <X size={16} className="text-black" />
      </div>
      <form
        className="h-[40rem] bg-white overflow-y-hidden"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col h-full space-y-2">
          <h1 className="p-3 bg-violet-800 outline-none w-full font-semibold tracking-wide text-white h-10">
            {formStructure.formName}
          </h1>
          <div
            className="p-2 space-y-5 overflow-y-auto flex-1"
            style={{ scrollbarWidth: "thin" }}
          >
            {formStructure.formFields.map((field, index) =>
              renderFormField(field, index),
            )}
          </div>
          {formStructure.formFields.length > 0 && (
            <div className="align-bottom self-center p-2">
              <button
                type="submit"
                className="px-3 py-1.5 bg-blue-500 rounded-md text-white"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
