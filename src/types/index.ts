export type FormField = {
  id: string;
  label: string;
  type: string;
  required: boolean;
  errorMessage: string;
  value: string;
  placeholder: string;
  options: null | Array<{ value: string; label: string }>;
  subtype: string | null;
  formId: string;
};

export type FeedbackFormResponseType = {
  id: string;
  formName: string;
  createdAt: string;
  updatedAt: string;
  formFields: FormField[];
};

export type FormSubmissionsResponseType = {
  formId: string;
  createdAt: string;
  formName: string;
  responseCount: number;
  viewCount: number;
  responses: Array<{
    responseId: string;
    createdAt: string;
    fields: Array<{
      label: string;
      value: string;
    }>;
  }>;
};

export type FormOverview = {
  formId: string;
  createdAt: string;
  formName: string;
  submissionCount: number;
  viewCount: number;
};
