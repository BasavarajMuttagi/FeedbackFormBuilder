import { PencilSimple, Trash } from "@phosphor-icons/react";
import { FormField, RadioInputFormType } from "../../Classes/Form";
import { useActiveSelection } from "../../hooks/useActiveSelection";

const RadioInput = ({
  field,
  onDelete,
  onChange,
  showError,
}: {
  field: RadioInputFormType;
  onDelete: () => void;
  onChange: (id: string, updatedField: Partial<FormField>) => void;
  showError: boolean;
}) => {
  const setActiveSelection = useActiveSelection()[1];
  const { errorMessage, id, label, options, value, required } = field;

  const handleInputChange = (newValue: string) => {
    onChange(id, { value: newValue });
  };

  return (
    <div className="space-y-2 px-2 py-2 border border-gray-600/15 shadow text-gray-600">
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <div>
        <fieldset className="space-y-2">
          {options.map(({ label, value: optionValue }) => (
            <div key={optionValue} className="flex items-center">
              <input
                type="radio"
                id={`${id}-${optionValue}`}
                name={id}
                value={optionValue}
                checked={value === optionValue}
                onChange={() => handleInputChange(optionValue)}
                required={required}
                className="mr-2"
              />
              <label
                htmlFor={`${id}-${optionValue}`}
                className="cursor-pointer"
              >
                {label}
              </label>
            </div>
          ))}
        </fieldset>
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

export default RadioInput;
