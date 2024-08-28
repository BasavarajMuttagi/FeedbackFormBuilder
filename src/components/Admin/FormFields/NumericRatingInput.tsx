import { PencilSimple, Trash } from "@phosphor-icons/react";
import { FormField, NumericRatingInputFormType } from "../../../Classes/Form";
import { useActiveSelection } from "../../../hooks/useActiveSelection";

const NumericRatingInput = ({
  field,
  onDelete,
  onChange,
  showError,
}: {
  field: NumericRatingInputFormType;
  onDelete?: () => void;
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
        <fieldset className="flex">
          {options.map(({ label, value: optionValue }) => (
            <div key={optionValue}>
              <input
                type="radio"
                id={`${id}-${optionValue}`}
                name={id}
                value={optionValue}
                checked={value === optionValue}
                onChange={() => handleInputChange(optionValue)}
                required={required}
                className="appearance-none peer"
              />
              <label
                htmlFor={`${id}-${optionValue}`}
                className="flex items-center justify-center h-10 w-12 border border-gray-300 cursor-pointer peer-checked:bg-green-500 peer-checked:text-white peer-checked:border-green-500"
              >
                {label}
              </label>
            </div>
          ))}
        </fieldset>
      </div>

      {showError && <p className="text-red-400 text-xs">{errorMessage}</p>}

      {onDelete && (
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
            onClick={() => onDelete()}
          />
        </div>
      )}
    </div>
  );
};

export default NumericRatingInput;
