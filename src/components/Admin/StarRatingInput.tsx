import { PencilSimple, Star, Trash } from "@phosphor-icons/react";
import { FormField, StarRatingInputFormType } from "../../Classes/Form";
import { useActiveSelection } from "../../hooks/useActiveSelection";

const StarRatingInput = ({
  field,
  onDelete,
  onChange,
}: {
  field: StarRatingInputFormType;
  onDelete: () => void;
  onChange: (id: string, updatedField: Partial<FormField>) => void;
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
          {options.map(({ value: optionValue }) => (
            <div key={optionValue} className="mr-2">
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
                className="flex items-center justify-center h-10 w-10 cursor-pointer"
              >
                <Star
                  weight={
                    Number(value) >= Number(optionValue) ? "fill" : "regular"
                  }
                  size={24}
                  className={
                    Number(value) >= Number(optionValue)
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }
                />
              </label>
            </div>
          ))}
        </fieldset>
      </div>

      {errorMessage && <p className="text-red-400 text-xs">{errorMessage}</p>}

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
    </div>
  );
};

export default StarRatingInput;
