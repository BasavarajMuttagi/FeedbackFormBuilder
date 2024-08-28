import {
  PencilSimple,
  Smiley,
  SmileyMeh,
  SmileySad,
  SmileyWink,
  SmileyXEyes,
  Trash,
} from "@phosphor-icons/react";
import { FormField, SmileyRatingInputFormType } from "../../../Classes/Form";
import { useActiveSelection } from "../../../hooks/useActiveSelection";

const getSmileyIcon = (value: string, isSelected: boolean) => {
  const baseSize = 24;
  const selectedSize = 28;
  const size = isSelected ? selectedSize : baseSize;
  const colorClass = isSelected ? getColorClass(value) : "";

  switch (value) {
    case "Very Unsatisfied":
      return (
        <SmileyXEyes
          size={size}
          className={colorClass}
          weight={isSelected ? "fill" : "regular"}
        />
      );
    case "Unsatisfied":
      return (
        <SmileySad
          size={size}
          className={colorClass}
          weight={isSelected ? "fill" : "regular"}
        />
      );
    case "Neutral":
      return (
        <SmileyMeh
          size={size}
          className={colorClass}
          weight={isSelected ? "fill" : "regular"}
        />
      );
    case "Satisfied":
      return (
        <Smiley
          size={size}
          className={colorClass}
          weight={isSelected ? "fill" : "regular"}
        />
      );
    case "Very Satisfied":
      return (
        <SmileyWink
          size={size}
          className={colorClass}
          weight={isSelected ? "fill" : "regular"}
        />
      );
    default:
      return (
        <Smiley
          size={size}
          className={colorClass}
          weight={isSelected ? "fill" : "regular"}
        />
      );
  }
};

const getColorClass = (value: string) => {
  switch (value) {
    case "Very Unsatisfied":
      return "text-red-500";
    case "Unsatisfied":
      return "text-orange-500";
    case "Neutral":
      return "text-yellow-500";
    case "Satisfied":
      return "text-lime-500";
    case "Very Satisfied":
      return "text-green-500";
    default:
      return "";
  }
};

const SmileyRatingInput = ({
  field,
  onDelete,
  onChange,
  showError,
}: {
  field: SmileyRatingInputFormType;
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
        <fieldset className="flex justify-between">
          {options.map(({ label, value: optionValue }) => (
            <div key={optionValue} className="flex flex-col items-center">
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
                className="flex flex-col items-center cursor-pointer"
              >
                {getSmileyIcon(optionValue, value === optionValue)}
                <span
                  className={`text-xs mt-1 ${value === optionValue ? "font-bold" : ""}`}
                >
                  {label}
                </span>
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
          onClick={() => onDelete()}
        />
      </div>
    </div>
  );
};

export default SmileyRatingInput;
