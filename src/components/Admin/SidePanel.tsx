import {
  Hash,
  Notches,
  Plus,
  RadioButton,
  Smiley,
  Star,
  Table,
  Textbox,
} from "@phosphor-icons/react";

const SidePanel = ({
  createFormField,
}: {
  createFormField: (
    type: "text" | "textarea" | "radio",
    subtype?:
      | "numericrating"
      | "starrating"
      | "smileyrating"
      | "categoryfeedback",
  ) => void;
}) => {
  return (
    <div className="h-full text-white/60 space-y-5 p-4">
      <h2 className="font-semibold tracking-wide text-center text-white">
        Add Fields
      </h2>
      <ul className="flex flex-col space-y-5">
        <li className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-3">
            <Textbox size={24} weight="bold" />
            <span>Single line input</span>
          </div>
          <Plus
            size={24}
            weight="bold"
            className="text-blue-500 cursor-pointer"
            onClick={() => createFormField("text")}
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-3">
            <Notches size={24} weight="bold" />
            <span>Textarea</span>
          </div>
          <Plus
            size={24}
            weight="bold"
            className="text-blue-500 cursor-pointer"
            onClick={() => createFormField("textarea")}
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-3">
            <Hash size={24} weight="bold" />
            <span>Numeric Rating</span>
          </div>
          <Plus
            size={24}
            weight="bold"
            className="text-blue-500 cursor-pointer"
            onClick={() => createFormField("radio", "numericrating")}
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-3">
            <RadioButton size={24} weight="bold" />
            <span>Radio button</span>
          </div>
          <Plus
            size={24}
            weight="bold"
            className="text-blue-500 cursor-pointer"
            onClick={() => createFormField("radio")}
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-3">
            <Star size={24} weight="bold" />
            <span>Star Rating</span>
          </div>
          <Plus
            size={24}
            weight="bold"
            className="text-blue-500 cursor-pointer"
            onClick={() => createFormField("radio", "starrating")}
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-3">
            <Smiley size={24} weight="bold" />
            <span>Smiley Rating</span>
          </div>
          <Plus
            size={24}
            weight="bold"
            className="text-blue-500 cursor-pointer"
            onClick={() => createFormField("radio", "smileyrating")}
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-3">
            <Table size={24} weight="bold" />
            <span>Categories</span>
          </div>
          <Plus
            size={24}
            weight="bold"
            className="text-blue-500 cursor-pointer"
            onClick={() => createFormField("radio", "categoryfeedback")}
          />
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;
