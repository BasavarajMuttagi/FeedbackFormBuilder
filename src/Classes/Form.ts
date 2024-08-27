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
    required: boolean = true,
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
    required: boolean = true,
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
    required: boolean = true,
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

class StarRatingInputForm extends BaseForm {
  constructor(
    label: string = "Star Rating",
    required: boolean = true,
    public options: Array<{ value: string; label: string }> = [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
    ],
    value: string = "",
    public subtype: string = "starrating",
  ) {
    super(label, "radio", required, "Please select an star rating", value);
  }
}

class SmileyRatingInputForm extends BaseForm {
  constructor(
    label: string = "Smiley Rating",
    required: boolean = true,
    public options: Array<{ value: string; label: string }> = [
      { value: "Very Unsatisfied", label: "Very Unsatisfied" },
      { value: "Unsatisfied", label: "Unsatisfied" },
      { value: "Neutral", label: "Neutral" },
      { value: "Satisfied", label: "Satisfied" },
      { value: "Very Satisfied", label: "Very Satisfied" },
    ],
    value: string = "",
    public subtype: string = "smileyrating",
  ) {
    super(label, "radio", required, "Please select a smiley rating", value);
  }
}

class NumericRatingInputForm extends BaseForm {
  constructor(
    label: string = "Numeric Rating",
    required: boolean = true,
    public options: Array<{ value: string; label: string }> = [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
      { value: "7", label: "7" },
      { value: "8", label: "8" },
      { value: "9", label: "9" },
      { value: "10", label: "10" },
    ],
    value: string = "",
    public subtype: string = "numericrating",
  ) {
    super(label, "radio", required, "Please select a rating", value);
  }
}

class CategoryFeedbackInputForm extends RadioInputForm {
  textareaInput: TextareaInputForm;

  constructor(
    label: string = "Category Feedback",
    required: boolean = true,
    options: Array<{ value: string; label: string }> = [
      { value: "Bug", label: "Bug" },
      { value: "Content", label: "Content" },
      { value: "Other", label: "Other" },
    ],
    value: string = "",
    textareaLabel: string = "Provide feedback",
    textareaPlaceholder: string = "Enter text here",
    textareaValue: string = "",
    public subtype: string = "categoryfeedback",
  ) {
    super(label, required, options, value);
    this.textareaInput = new TextareaInputForm(
      textareaLabel,
      required,
      textareaPlaceholder,
      textareaValue,
    );
    this.type = "radio";
  }
}

type BaseFormType = InstanceType<typeof BaseForm>;
type TextInputFormType = InstanceType<typeof TextInputForm>;
type TextareaInputFormType = InstanceType<typeof TextareaInputForm>;
type RadioInputFormType = InstanceType<typeof RadioInputForm>;
type NumericRatingInputFormType = InstanceType<typeof NumericRatingInputForm>;
type StarRatingInputFormType = InstanceType<typeof StarRatingInputForm>;
type SmileyRatingInputFormType = InstanceType<typeof SmileyRatingInputForm>;
type CategoryFeedbackInputFormType = InstanceType<
  typeof CategoryFeedbackInputForm
>;
type FormField =
  | TextInputFormType
  | TextareaInputFormType
  | RadioInputFormType
  | NumericRatingInputFormType
  | StarRatingInputFormType
  | SmileyRatingInputFormType
  | CategoryFeedbackInputFormType;

type FormStructure = {
  formName: string;
  formFields: FormField[];
};

export {
  BaseForm,
  TextInputForm,
  TextareaInputForm,
  RadioInputForm,
  NumericRatingInputForm,
  StarRatingInputForm,
  SmileyRatingInputForm,
  CategoryFeedbackInputForm,
};
export type {
  BaseFormType,
  TextInputFormType,
  TextareaInputFormType,
  RadioInputFormType,
  NumericRatingInputFormType,
  StarRatingInputFormType,
  SmileyRatingInputFormType,
  CategoryFeedbackInputFormType,
  FormField,
  FormStructure,
};
