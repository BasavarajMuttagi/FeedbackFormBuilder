import { useState } from "react";
import {
  CategoryFeedbackInputForm,
  CategoryFeedbackInputFormType,
  FormField,
  FormStructure,
  NumericRatingInputForm,
  NumericRatingInputFormType,
  RadioInputForm,
  RadioInputFormType,
  SmileyRatingInputForm,
  SmileyRatingInputFormType,
  StarRatingInputForm,
  StarRatingInputFormType,
  TextareaInputForm,
  TextareaInputFormType,
  TextInputForm,
  TextInputFormType,
} from "../Classes/Form";
import SidePanel from "../components/Admin/SidePanel";
import AdminLayout from "../layouts/AdminLayout";
import TextInput from "../components/Admin/TextInput";
import TextareaInput from "../components/Admin/TextareaInput";
import EditFieldForm from "../components/Admin/EditFieldForm";
import { useActiveSelection } from "../hooks/useActiveSelection";
import NumericRatingInput from "../components/Admin/NumericRatingInput";
import RadioInput from "../components/Admin/RadioInput";
import SmileyRatingInput from "../components/Admin/SmileyRatingInput";
import StarRatingInput from "../components/Admin/StarRatingInput";
import CategoryFeedbackInput from "../components/Admin/CategoryFeedbackInput";

const FormDetails = () => {
  const [activeSelection, setActiveSelection] = useActiveSelection();
  const [formStructure, setFormStructure] = useState<FormStructure>({
    formName: "Enter Your Form Name",
    formFields: [],
  });

  const onDelete = (id: string) => {
    setFormStructure((prevStructure) => ({
      ...prevStructure,
      formFields: prevStructure.formFields.filter((field) => field.id !== id),
    }));

    if (typeof activeSelection === "object" && activeSelection.id === id) {
      setActiveSelection("FIELDS");
    }
  };

  const onChange = (id: string, updatedField: Partial<FormField>) => {
    setFormStructure((prevStructure) => ({
      ...prevStructure,
      formFields: prevStructure.formFields.map((field) =>
        field.id === id ? { ...field, ...updatedField } : field,
      ),
    }));
  };

  const createFormField = (
    type: "text" | "textarea" | "radio",
    subtype?:
      | "numericrating"
      | "starrating"
      | "smileyrating"
      | "categoryfeedback",
  ) => {
    let newField: FormField;

    if (type === "text") {
      newField = new TextInputForm();
    } else if (type === "textarea") {
      newField = new TextareaInputForm();
    } else if (type === "radio") {
      switch (subtype) {
        case "numericrating":
          newField = new NumericRatingInputForm();
          break;
        case "starrating":
          newField = new StarRatingInputForm();
          break;
        case "smileyrating":
          newField = new SmileyRatingInputForm();
          break;
        case "categoryfeedback":
          newField = new CategoryFeedbackInputForm();
          break;
        default:
          newField = new RadioInputForm();
      }
    } else {
      console.error("Invalid field type");
      return;
    }

    setFormStructure((prevStructure) => {
      const updatedStructure = {
        ...prevStructure,
        formFields: [...prevStructure.formFields, newField],
      };
      console.log("Updated form structure:", updatedStructure);
      return updatedStructure;
    });
  };

  const renderFormField = (field: FormField) => {
    console.log(field);
    if (field.type === "text") {
      return (
        <TextInput
          key={field.id}
          field={field as TextInputFormType}
          onDelete={() => onDelete(field.id)}
          onChange={onChange}
        />
      );
    } else if (field.type === "textarea") {
      return (
        <TextareaInput
          key={field.id}
          field={field as TextareaInputFormType}
          onDelete={() => onDelete(field.id)}
          onChange={onChange}
        />
      );
    } else if (field.type === "radio") {
      switch ((field as CategoryFeedbackInputFormType).subtype) {
        case "numericrating":
          return (
            <NumericRatingInput
              key={field.id}
              field={field as NumericRatingInputFormType}
              onDelete={() => onDelete(field.id)}
              onChange={onChange}
            />
          );
        case "starrating":
          return (
            <StarRatingInput
              key={field.id}
              field={field as StarRatingInputFormType}
              onDelete={() => onDelete(field.id)}
              onChange={onChange}
            />
          );
        case "smileyrating":
          return (
            <SmileyRatingInput
              key={field.id}
              field={field as SmileyRatingInputFormType}
              onDelete={() => onDelete(field.id)}
              onChange={onChange}
            />
          );

        case "categoryfeedback":
          return (
            <CategoryFeedbackInput
              key={field.id}
              field={field as CategoryFeedbackInputFormType}
              onDelete={() => onDelete(field.id)}
              onChange={onChange}
            />
          );
        default:
          return (
            <RadioInput
              key={field.id}
              field={field as RadioInputFormType}
              onDelete={() => onDelete(field.id)}
              onChange={onChange}
            />
          );
      }
    } else {
      return null;
    }
  };

  return (
    <AdminLayout>
      <AdminLayout.Main>
        <div className="h-full flex items-center justify-center">
          <form className="max-w-lg w-full h-[40rem] bg-white overflow-y-hidden">
            <div className="flex flex-col h-full space-y-2">
              <h2 className="p-3 bg-violet-800 outline-none w-full font-semibold tracking-wide text-white">
                {formStructure.formName}
              </h2>

              <div
                className="p-2 space-y-2 overflow-y-auto flex-1"
                style={{ scrollbarWidth: "thin" }}
              >
                {formStructure.formFields.map(renderFormField)}
              </div>
              <div className="align-bottom self-center p-2">
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-blue-500 rounded-md text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </AdminLayout.Main>
      <AdminLayout.Side>
        {activeSelection === "FIELDS" ? (
          <SidePanel createFormField={createFormField} />
        ) : (
          <EditFieldForm
            onChange={onChange}
            formFields={formStructure.formFields}
          />
        )}
      </AdminLayout.Side>
    </AdminLayout>
  );
};

export default FormDetails;
