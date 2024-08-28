import { useEffect, useState } from "react";
import {
  CategoryFeedbackInputFormType,
  FormField,
  FormStructure,
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

const FeedbackForm = ({
  closeDialog,
}: {
  closeDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formErrors, setFormErrors] = useState<boolean[]>([]);
  const [formStructure, setFormStructure] = useState<FormStructure>({
    formName: "Enter Your Form Name",
    formFields: [],
  });

  const [isFormSubmit, setIsFormSubmit] = useState(false);

  useEffect(() => {
    setFormStructure({
      formName: "Enter Your Form Name",
      formFields: [
        {
          label: "Text Input",
          type: "text",
          required: true,
          errorMessage: "Please enter a valid text",
          value: "ABCD",
          id: "3648ba8c-50af-4348-bb23-842c6adf6532",
          placeholder: "Enter text here",
        },
        {
          label: "Textarea Input",
          type: "textarea",
          required: true,
          errorMessage: "Please enter a valid text",
          value: "EFGH",
          id: "44e943fe-2090-4b01-aba1-2ae1b2b11ca1",
          placeholder: "Enter long text here",
        },
        {
          label: "Numeric Rating",
          type: "radio",
          required: true,
          errorMessage: "Please select a rating",
          value: "7",
          id: "9519fd99-066a-461b-a189-e5ba5d446bd8",
          options: [
            {
              value: "1",
              label: "1",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "3",
              label: "3",
            },
            {
              value: "4",
              label: "4",
            },
            {
              value: "5",
              label: "5",
            },
            {
              value: "6",
              label: "6",
            },
            {
              value: "7",
              label: "7",
            },
            {
              value: "8",
              label: "8",
            },
            {
              value: "9",
              label: "9",
            },
            {
              value: "10",
              label: "10",
            },
          ],
          subtype: "numericrating",
        },
        {
          label: "Radio Input",
          type: "radio",
          required: true,
          errorMessage: "Please select an option",
          value: "option3",
          id: "5856189f-21f7-4c3a-a0a4-10b8d4a773de",
          options: [
            {
              value: "option1",
              label: "Option 1",
            },
            {
              value: "option2",
              label: "Option 2",
            },
            {
              value: "option3",
              label: "Option 3",
            },
          ],
        },
        {
          label: "Star Rating",
          type: "radio",
          required: true,
          errorMessage: "Please select an star rating",
          value: "5",
          id: "77843970-b77d-413b-85b2-968197f931b0",
          options: [
            {
              value: "1",
              label: "1",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "3",
              label: "3",
            },
            {
              value: "4",
              label: "4",
            },
            {
              value: "5",
              label: "5",
            },
          ],
          subtype: "starrating",
        },
        {
          label: "Smiley Rating",
          type: "radio",
          required: true,
          errorMessage: "Please select a smiley rating",
          value: "Very Satisfied",
          id: "f920fe32-1a9a-4e43-985b-08175ad0cf90",
          options: [
            {
              value: "Very Unsatisfied",
              label: "Very Unsatisfied",
            },
            {
              value: "Unsatisfied",
              label: "Unsatisfied",
            },
            {
              value: "Neutral",
              label: "Neutral",
            },
            {
              value: "Satisfied",
              label: "Satisfied",
            },
            {
              value: "Very Satisfied",
              label: "Very Satisfied",
            },
          ],
          subtype: "smileyrating",
        },
        {
          label: "Category Feedback",
          type: "radio",
          required: true,
          errorMessage: "Please select an option",
          value: "Bug",
          id: "ce3cdf65-bbc0-4c3e-b9bd-1051ce0ffe8f",
          options: [
            {
              value: "Bug",
              label: "Bug",
            },
            {
              value: "Content",
              label: "Content",
            },
            {
              value: "Other",
              label: "Other",
            },
          ],
          subtype: "categoryfeedback",
          textareaInput: {
            label: "Provide feedback",
            type: "textarea",
            required: true,
            errorMessage: "Please enter a valid text",
            value: "Hello world!",
            id: "4e9eb668-236d-4110-a176-33e3bb4ebb0e",
            placeholder: "Enter text here",
          },
        },
      ],
    });
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(formStructure);
    setFormErrors(validationResult.fieldErrors);
    if (validationResult.isValid) {
      console.log("Form is valid, proceed with submission");
      console.log(formStructure);
      setIsFormSubmit(true);
    } else {
      console.log("Form is invalid");
    }
  };

  if (isFormSubmit) {
    return <ThankYou closeDialog={closeDialog} />;
  }

  return (
    <div className="relative">
      <div
        className="p-2 rounded-full bg-white w-fit absolute -top-2 -right-2 z-10 cursor-pointer"
        onClick={() => closeDialog(false)}
      >
        <X size={16} className="text-black" />
      </div>
      <form
        className="max-w-xl w-full h-[40rem] bg-white overflow-y-hidden"
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
