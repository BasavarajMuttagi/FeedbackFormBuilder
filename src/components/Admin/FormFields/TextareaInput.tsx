import { PencilSimple, Trash } from "@phosphor-icons/react";
import { FormField, TextareaInputFormType } from "../../../Classes/Form";
import { useActiveSelection } from "../../../hooks/useActiveSelection";

const TextareaInput = ({
  field,
  onDelete,
  onChange,
  showError,
}: {
  field: TextareaInputFormType;
  onDelete?: () => void;
  onChange: (id: string, updatedField: Partial<FormField>) => void;
  showError: boolean;
}) => {
  const setActiveSelection = useActiveSelection()[1];
  const { errorMessage, id, label, ...rest } = field;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    onChange(id, { value });
  };
  return (
    <div className="space-y-2 px-2 py-2 border border-gray-600/15 shadow text-gray-600">
      <label className="block space-y-2 ">
        <span>{label}</span>
        <textarea
          {...rest}
          onChange={(e) => handleInputChange(e)}
          className="border border-gray-600/15 w-full p-2 outline-none"
        />
        {showError && <p className="text-red-400 text-xs">{errorMessage}</p>}
      </label>

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

export default TextareaInput;
