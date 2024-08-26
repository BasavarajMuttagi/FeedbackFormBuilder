import { PencilSimple, Trash } from "@phosphor-icons/react";
import { FormField, TextInputFormType } from "../../Classes/Form";
import { useActiveSelection } from "../../hooks/useActiveSelection";

const TextInput = ({
  field,
  onDelete,
  onChange,
}: {
  field: TextInputFormType;
  onDelete: () => void;
  onChange: (id: string, updatedField: Partial<FormField>) => void;
}) => {
  const setActiveSelection = useActiveSelection()[1];
  const { errorMessage, id, label, ...rest } = field;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(id, { value });
  };
  return (
    <div className="space-y-2 px-2 py-2 border border-gray-600/15 shadow text-gray-600">
      <label className="block space-y-2 ">
        <span>{label}</span>
        <input
          {...rest}
          onChange={(e) => handleInputChange(e)}
          className="border border-gray-600/15 w-full p-2 outline-none"
        />
        <p className="text-red-400 text-xs">{errorMessage}</p>
      </label>

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

export default TextInput;
