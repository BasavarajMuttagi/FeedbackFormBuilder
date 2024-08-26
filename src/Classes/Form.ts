class BaseForm {
  constructor(
    public label: string = "",
    public type: string = "",
    public required: boolean = false,
    public errorMessage: string = "",
    public placeholder: string | null = null,
  ) {}
}

// Text input
class TextInputForm extends BaseForm {
  constructor(
    label: string = "Text Input",
    required: boolean = false,
    placeholder: string | null = "Enter text here",
  ) {
    super(label, "text", required, "Please enter a valid text", placeholder);
  }
}

// Textarea input
class TextareaInputForm extends BaseForm {
  constructor(
    label: string = "Textarea Input",
    required: boolean = false,
    placeholder: string | null = "Enter long text here",
  ) {
    super(
      label,
      "textarea",
      required,
      "Please enter a valid text",
      placeholder,
    );
  }
}

// Radio input
class RadioInputForm extends BaseForm {
  constructor(
    label: string = "Radio Input",
    required: boolean = false,
    public options: Array<{ value: string; label: string }> = [
      { value: "option 1", label: "Option 1" },
      { value: "option 2", label: "Option 2" },
      { value: "option 3", label: "Option 3" },
    ],
  ) {
    super(label, "radio", required, "Please select an option");
  }
}

type BaseFormType = InstanceType<typeof BaseForm>;
type TextInputFormType = InstanceType<typeof TextInputForm>;
type TextareaInputFormType = InstanceType<typeof TextareaInputForm>;
type RadioInputFormType = InstanceType<typeof RadioInputForm>;
type FormFields =
  | TextInputFormType
  | TextareaInputFormType
  | RadioInputFormType;

export { BaseForm, TextInputForm, TextareaInputForm, RadioInputForm };
export type {
  BaseFormType,
  TextInputFormType,
  TextareaInputFormType,
  RadioInputFormType,
  FormFields,
};
