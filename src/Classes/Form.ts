import { v4 as uuidv4 } from "uuid";

class BaseForm {
  id: string;
  constructor(
    public label: string = "",
    public type: string = "",
    public required: boolean = true,
    public errorMessage: string = "",
    public value: string = "",
  ) {
    this.id = uuidv4();
  }
}

// Text input
class TextInputForm extends BaseForm {
  constructor(
    label: string = "Text Input",
    required: boolean = false,
    public placeholder: string = "Enter text here",
    value: string = "",
  ) {
    super(label, "text", required, "Please enter a valid text", value);
  }
}

// Textarea input
class TextareaInputForm extends BaseForm {
  constructor(
    label: string = "Textarea Input",
    required: boolean = false,
    public placeholder: string = "Enter long text here",
    value: string = "",
  ) {
    super(label, "textarea", required, "Please enter a valid text", value);
  }
}

// Radio input
class RadioInputForm extends BaseForm {
  constructor(
    label: string = "Radio Input",
    required: boolean = false,
    public options: Array<{ value: string; label: string }> = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    value: string = "",
  ) {
    super(label, "radio", required, "Please select an option", value);
  }
}

type BaseFormType = InstanceType<typeof BaseForm>;
type TextInputFormType = InstanceType<typeof TextInputForm>;
type TextareaInputFormType = InstanceType<typeof TextareaInputForm>;
type RadioInputFormType = InstanceType<typeof RadioInputForm>;
type FormField = TextInputFormType | TextareaInputFormType | RadioInputFormType;

type FormStructure = {
  formName: string;
  formFields: FormField[];
};

export { BaseForm, TextInputForm, TextareaInputForm, RadioInputForm };
export type {
  BaseFormType,
  TextInputFormType,
  TextareaInputFormType,
  RadioInputFormType,
  FormField,
  FormStructure,
};
