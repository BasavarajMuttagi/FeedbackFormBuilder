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
import SidePanel from "../components/Admin/SidePanel/SidePanel";
import AdminLayout from "../layouts/AdminLayout";
import TextInput from "../components/Admin/FormFields/TextInput";
import TextareaInput from "../components/Admin/FormFields/TextareaInput";
import EditFieldForm from "../components/Admin/SidePanel/EditFieldForm";
import { useActiveSelection } from "../hooks/useActiveSelection";
import NumericRatingInput from "../components/Admin/FormFields/NumericRatingInput";
import RadioInput from "../components/Admin/FormFields/RadioInput";
import SmileyRatingInput from "../components/Admin/FormFields/SmileyRatingInput";
import StarRatingInput from "../components/Admin/FormFields/StarRatingInput";
import CategoryFeedbackInput from "../components/Admin/FormFields/CategoryFeedbackInput";
import { validateForm } from "../helpers";
import apiClient from "../axios/apiClient";

const CreateForm = () => {
  const [activeSelection, setActiveSelection] = useActiveSelection();
  const [formErrors, setFormErrors] = useState<boolean[]>([]);
  const [formStructure, setFormStructure] = useState<FormStructure>({
    formName: "Enter Your Form Name",
    formFields: [],
  });

  const [isEditingFormName, setIsEditingFormName] = useState(false);

  const handleSave = async () => {
    const result = await apiClient.post(
      "/feedback/forms/create",
      formStructure,
    );
    console.log(result);
  };
  const onDelete = (id: string) => {
    const fieldIndex = formStructure.formFields.findIndex(
      (field) => field.id === id,
    );
    setFormStructure((prevStructure) => ({
      ...prevStructure,
      formFields: prevStructure.formFields.filter((field) => field.id !== id),
    }));

    setFormErrors((prevErrors) => {
      const newErrors = [...prevErrors];
      newErrors.splice(fieldIndex, 1);
      return newErrors;
    });
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
      return updatedStructure;
    });
  };

  const renderFormField = (field: FormField, index: number) => {
    const showError = formErrors[index];
    if (field.type === "text") {
      return (
        <TextInput
          key={field.id}
          field={field as TextInputFormType}
          onDelete={() => onDelete(field.id)}
          onChange={onChange}
          showError={showError}
        />
      );
    } else if (field.type === "textarea") {
      return (
        <TextareaInput
          key={field.id}
          field={field as TextareaInputFormType}
          onDelete={() => onDelete(field.id)}
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
              onDelete={() => onDelete(field.id)}
              onChange={onChange}
              showError={showError}
            />
          );
        case "starrating":
          return (
            <StarRatingInput
              key={field.id}
              field={field as StarRatingInputFormType}
              onDelete={() => onDelete(field.id)}
              onChange={onChange}
              showError={showError}
            />
          );
        case "smileyrating":
          return (
            <SmileyRatingInput
              key={field.id}
              field={field as SmileyRatingInputFormType}
              onDelete={() => onDelete(field.id)}
              onChange={onChange}
              showError={showError}
            />
          );

        case "categoryfeedback":
          return (
            <CategoryFeedbackInput
              key={field.id}
              field={field as CategoryFeedbackInputFormType}
              onDelete={() => onDelete(field.id)}
              onChange={onChange}
              showError={showError}
            />
          );
        default:
          return (
            <RadioInput
              key={field.id}
              field={field as RadioInputFormType}
              onDelete={() => onDelete(field.id)}
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
    } else {
      console.log("Form is invalid");
    }
  };

  const handleFormNameChange = (newName: string) => {
    setFormStructure((prevStructure) => ({
      ...prevStructure,
      formName: newName,
    }));
  };
  return (
    <AdminLayout>
      <AdminLayout.Main>
        <div className="h-full flex items-center justify-center">
          <form
            className="max-w-xl w-full h-[40rem] bg-white overflow-y-hidden"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col h-full space-y-2">
              {isEditingFormName ? (
                <input
                  className="p-3 bg-violet-800 outline-none w-full font-semibold tracking-wide text-white h-10"
                  value={formStructure.formName}
                  onChange={(e) => handleFormNameChange(e.target.value)}
                  onBlur={() => setIsEditingFormName(false)}
                  autoFocus
                  required
                />
              ) : (
                <h1
                  className="p-3 bg-violet-800 outline-none w-full font-semibold tracking-wide text-white h-10"
                  onClick={() => setIsEditingFormName(true)}
                >
                  {formStructure.formName}
                </h1>
              )}

              <div
                className="p-2 space-y-5 overflow-y-auto flex-1"
                style={{ scrollbarWidth: "thin" }}
              >
                {formStructure.formFields.length > 0 ? (
                  formStructure.formFields.map((field, index) =>
                    renderFormField(field, index),
                  )
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <p className="text-gray-500 text-2xl font-bold">
                      Add Fields
                    </p>
                  </div>
                )}
              </div>

              {formStructure.formFields.length > 0 && (
                <div className="align-bottom self-center p-2">
                  <button
                    type="submit"
                    onClick={handleSave}
                    className="px-3 py-1.5 bg-blue-500 rounded-md text-white"
                  >
                    Test Validation
                  </button>
                </div>
              )}
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

export default CreateForm;
