import { useState } from "react";
import {
  FormField,
  FormStructure,
  RadioInputForm,
  TextareaInputForm,
  TextareaInputFormType,
  TextInputForm,
  TextInputFormType,
} from "../Classes/Form";
import SidePanel from "../components/Admin/SidePanel";
import AdminLayout from "../layouts/AdminLayout";
import TextInput from "../components/Admin/TextInput";
import TextareaInput from "../components/Admin/TextareaInput";

const FormDetails = () => {
  const [formStructure, setFormStructure] = useState<FormStructure>({
    formName: "Enter Your Form Name",
    formFields: [],
  });

  const onDelete = (id: string) => {
    setFormStructure((prevStructure) => ({
      ...prevStructure,
      formFields: prevStructure.formFields.filter((field) => field.id !== id),
    }));
  };

  const onChange = (id: string, updatedField: Partial<FormField>) => {
    setFormStructure((prevStructure) => ({
      ...prevStructure,
      formFields: prevStructure.formFields.map((field) =>
        field.id === id ? { ...field, ...updatedField } : field,
      ),
    }));
  };

  const createFormField = (type: "text" | "textarea" | "radio") => {
    let newField: FormField;

    switch (type) {
      case "text":
        newField = new TextInputForm();
        break;
      case "textarea":
        newField = new TextareaInputForm();
        break;
      case "radio":
        newField = new RadioInputForm();
        break;
      default:
        return;
    }

    setFormStructure((prevStructure) => ({
      ...prevStructure,
      formFields: [...prevStructure.formFields, newField],
    }));
  };

  const renderFormField = (field: FormField) => {
    switch (field.type) {
      case "text":
        return (
          <TextInput
            key={field.id}
            field={field as TextInputFormType}
            onDelete={() => onDelete(field.id)}
            onChange={onChange}
          />
        );
      case "textarea":
        return (
          <TextareaInput
            key={field.id}
            field={field as TextareaInputFormType}
            onDelete={() => onDelete(field.id)}
            onChange={onChange}
          />
        );
      case "radio":
        return (
          <div key={field.id} className="flex flex-col">
            <input
              type="text"
              value={field.label}
              onChange={(e) => onChange(field.id, { label: e.target.value })}
              placeholder="Enter radio group label"
            />
            {(field as RadioInputForm).options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center">
                <input
                  type="radio"
                  name={`radio-group-${field.id}`}
                  value={option.value}
                  required={field.required}
                />
                <input
                  type="text"
                  value={option.label}
                  onChange={(e) => {
                    const updatedOptions = [
                      ...(field as RadioInputForm).options,
                    ];
                    updatedOptions[optionIndex].label = e.target.value;
                    onChange(field.id, { options: updatedOptions });
                  }}
                  className="ml-2"
                />
              </div>
            ))}
            <button onClick={() => onDelete(field.id)}>Delete</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AdminLayout>
      <AdminLayout.Main>
        <div className="h-full flex items-center justify-center">
          <form className="max-w-lg w-full min-h-48 max-h-[40rem] bg-white flex flex-col">
            <div>
              <h2 className="p-3 bg-violet-800 outline-none w-full font-semibold tracking-wide text-white">
                {formStructure.formName}
              </h2>

              <div className="p-2 space-y-2">
                {formStructure.formFields.map(renderFormField)}
              </div>
            </div>
            <div className="p-3 space-y-4"></div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </AdminLayout.Main>
      <AdminLayout.Side>
        <SidePanel createFormField={createFormField} />
      </AdminLayout.Side>
    </AdminLayout>
  );
};

export default FormDetails;
