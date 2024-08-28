import { useState, useEffect } from "react";
import {
  FormField,
  RadioInputFormType,
  NumericRatingInputFormType,
  StarRatingInputFormType,
  SmileyRatingInputFormType,
} from "../../Classes/Form";
import { useActiveSelection } from "../../hooks/useActiveSelection";
import Switch from "react-switch";

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

  const showOptionsEdit =
    editedField.type === "radio" &&
    !(
      editedField as
        | NumericRatingInputFormType
        | StarRatingInputFormType
        | SmileyRatingInputFormType
    ).subtype;
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

      <div className="flex items-center space-x-5">
        <label htmlFor="required">Required</label>

        <Switch
          checked={editedField.required}
          onChange={(e) => handleInputChange("required", e)}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
      </div>

      {showOptionsEdit && (
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
