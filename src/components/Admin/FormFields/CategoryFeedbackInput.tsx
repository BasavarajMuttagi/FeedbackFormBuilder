import { PencilSimple, Trash } from "@phosphor-icons/react";
import {
  FormField,
  CategoryFeedbackInputFormType,
} from "../../../Classes/Form";
import { useActiveSelection } from "../../../hooks/useActiveSelection";

const CategoryFeedbackInput = ({
  field,
  onDelete,
  onChange,
  showError,
}: {
  field: CategoryFeedbackInputFormType;
  onDelete: () => void;
  onChange: (id: string, updatedField: Partial<FormField>) => void;
  showError: boolean;
}) => {
  const setActiveSelection = useActiveSelection()[1];
  const { errorMessage, id, label, options, value, required, textareaInput } =
    field;

  const handleCategoryChange = (newValue: string) => {
    onChange(id, { value: newValue });
  };

  const handleFeedbackChange = (newValue: string) => {
    onChange(id, {
      textareaInput: { ...field.textareaInput, value: newValue },
    });
  };

  return (
    <div className="space-y-4 px-2 py-2 border border-gray-600/15 shadow text-gray-600">
      <label className="block font-medium" htmlFor={id}>
        {label}
      </label>
      <div className="flex items-center space-x-5">
        {options.map(({ value: optionValue, label: optionLabel }) => (
          <div key={optionValue} className="flex items-center">
            <input
              type="radio"
              id={`${id}-${optionValue}`}
              name={`${id}-category`}
              value={optionValue}
              checked={value === optionValue}
              onChange={() => handleCategoryChange(optionValue)}
              required={required}
              className="appearance-none peer"
            />
            <label
              htmlFor={`${id}-${optionValue}`}
              className="flex items-center justify-center h-10 p-2 border border-gray-300 cursor-pointer peer-checked:bg-green-500 peer-checked:text-white peer-checked:border-green-500"
            >
              {optionLabel}
            </label>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <label className="block" htmlFor={`${id}-feedback`}>
          {textareaInput.label}
        </label>
        <textarea
          id={`${id}-feedback`}
          value={textareaInput.value}
          onChange={(e) => handleFeedbackChange(e.target.value)}
          placeholder={textareaInput.placeholder}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={3}
        />
      </div>

      {showError && <p className="text-red-400 text-xs">{errorMessage}</p>}

      <div className="flex items-center justify-end space-x-5">
        <PencilSimple
          size={20}
          weight="fill"
          className="text-gray-600 cursor-pointer"
          onClick={() => setActiveSelection({ id })}
        />
        <Trash
          size={20}
          weight="fill"
          className="text-gray-600 cursor-pointer"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default CategoryFeedbackInput;
