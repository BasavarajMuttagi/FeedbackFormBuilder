import { useState, useEffect } from "react";
import {
  FormField,
  RadioInputFormType,
  NumericRatingInputFormType,
} from "../../Classes/Form";
import { useActiveSelection } from "../../hooks/useActiveSelection";

type FieldValue = string | boolean | Array<{ value: string; label: string }>;

const EditFieldForm = ({
  onChange,
  formFields,
}: {
  onChange: (id: string, updatedField: Partial<FormField>) => void;
  formFields: FormField[];
}) => {
  const [activeSelection, setActiveSelection] = useActiveSelection();
  const [editedField, setEditedField] = useState<FormField | null>(null);

  useEffect(() => {
    if (activeSelection && typeof activeSelection === "object") {
      const field = formFields.find((item) => item.id === activeSelection.id);
      if (field) {
        setEditedField({ ...field });
      }
    }
  }, [activeSelection, formFields]);

  if (!activeSelection || typeof activeSelection !== "object") {
    setActiveSelection("FIELDS");
    return null;
  }

  const handleInputChange = (key: keyof FormField, value: FieldValue) => {
    if (editedField) {
      setEditedField((prev) => {
        if (prev) {
          return { ...prev, [key]: value };
        }
        return null;
      });
    }
  };

  const handleOptionChange = (index: number, newValue: string) => {
    if (editedField && "options" in editedField) {
      const newOptions = editedField.options.map((option, i) =>
        i === index ? { value: newValue, label: newValue } : option,
      );
      setEditedField({ ...editedField, options: newOptions });
    }
  };

  const handleSave = () => {
    if (editedField) {
      onChange(editedField.id, editedField);
      setActiveSelection("FIELDS");
    }
  };

  const handleCancel = () => {
    setActiveSelection("FIELDS");
  };

  if (!editedField) return null;

  return (
    <form className="text-white p-2 text-sm space-y-5">
      <div className="space-y-1">
        <label htmlFor="label" className="block">
          Enter Label
        </label>
        <input
          id="label"
          type="text"
          placeholder="Enter Label"
          className="px-3 py-1 bg-inherit outline-none border border-white/10 w-full"
          value={editedField.label}
          onChange={(e) => handleInputChange("label", e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="error" className="block">
          Enter Error Message
        </label>
        <input
          id="error"
          type="text"
          value={editedField.errorMessage}
          placeholder="Enter Error Message"
          className="px-3 py-1 bg-inherit outline-none border border-white/10 w-full"
          onChange={(e) => handleInputChange("errorMessage", e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="required" className="block">
          Required
        </label>
        <input
          id="required"
          type="checkbox"
          checked={editedField.required}
          className="px-3 py-1 bg-inherit outline-none border border-white/10"
          onChange={(e) => handleInputChange("required", e.target.checked)}
        />
      </div>

      {(editedField.type === "radio" ||
        (editedField as NumericRatingInputFormType).subtype ===
          "numericrating") && (
        <div className="space-y-2">
          <label className="block">Options</label>
          {(
            editedField as RadioInputFormType | NumericRatingInputFormType
          ).options.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                value={option.value}
                placeholder={`Option ${index + 1}`}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="px-3 py-1 bg-inherit outline-none border border-white/10 flex-grow"
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditFieldForm;
