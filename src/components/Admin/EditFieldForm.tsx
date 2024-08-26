import { FormField } from "../../Classes/Form";
import { useActiveSelection } from "../../hooks/useActiveSelection";

const EditFieldForm = ({
  onChange,
  formFields,
}: {
  onChange: (id: string, updatedField: Partial<FormField>) => void;
  formFields: FormField[];
}) => {
  const [activeSelection, setActiveSelection] = useActiveSelection();
  if (activeSelection) {
    if (typeof activeSelection !== "object") {
      setActiveSelection("FIELDS");
      return;
    }
  }

  const id = activeSelection.id;
  const field = formFields.filter((eachItem) => eachItem.id === id)[0];
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
          value={field.label}
          onChange={(e) => onChange(id, { label: e.target.value })}
        />
        <p className="text-red-400 text-xs">Required!</p>
      </div>

      <div className="space-y-1">
        <label htmlFor="error" className="block">
          Enter Error Message
        </label>
        <input
          id="error"
          type="text"
          value={field.errorMessage}
          placeholder="Enter Error Message"
          className="px-3 py-1 bg-inherit outline-none border border-white/10 w-full"
          onChange={(e) => onChange(id, { errorMessage: e.target.value })}
        />
        <p className="text-red-400 text-xs">Required!</p>
      </div>

      <div className="space-y-1">
        <label htmlFor="required" className="block">
          Required
        </label>
        <input
          id="required"
          type="checkbox"
          checked={field.required}
          className="px-3 py-1 bg-inherit outline-none border border-white/10 w-full"
          onChange={(e) => onChange(id, { required: e.target.checked })}
        />
        <p className="text-red-400 text-xs">Required!</p>
      </div>
    </form>
  );
};

export default EditFieldForm;
