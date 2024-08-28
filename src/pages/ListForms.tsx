import FormImpressions from "../components/Admin/FormImpressions";
import AddNewForm from "../components/Admin/AddNewForm";
import { useEffect, useState } from "react";
import apiClient from "../axios/apiClient";
import { FormOverview } from "../types";

const ListForms = () => {
  const [forms, setForms] = useState<FormOverview[]>([]);
  const getForm = async () => {
    const result = await apiClient.get("/feedback/forms/overview");
    setForms(result.data as FormOverview[]);
  };

  useEffect(() => {
    getForm();
  }, []);
  return (
    <div className="mt-10 flex-1 gap-x-5 gap-y-10 grid grid-cols-1  place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <AddNewForm />
      {forms.map(
        (
          { createdAt, formId, formName, submissionCount, viewCount },
          index,
        ) => (
          <FormImpressions
            key={index}
            createdAt={createdAt}
            name={formName}
            submissions={submissionCount}
            formId={formId}
            viewed={viewCount}
          />
        ),
      )}
    </div>
  );
};

export default ListForms;
