import { useEffect, useState } from "react";
import apiClient from "../axios/apiClient";
import { FormSubmissionsResponseType } from "../types";
import moment from "moment";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
const FormDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<FormSubmissionsResponseType>();
  useEffect(() => {
    const fetchFormDetails = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get(`/feedback/forms/${id}/responses`);
        setSubmissions(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching form details:", err);
        setError("Failed to load form details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchFormDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="bg-neutral-900  text-white flex justify-center items-center">
        Loading
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-neutral-900  text-white flex justify-center items-center">
        {error || "Form not found"}
      </div>
    );
  }
  return (
    <main className="bg-neutral-900  shadow-md p-6 text-white ">
      <div className="flex items-center space-x-10 mb-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            {submissions?.viewCount}
          </h2>
          <p className="text-gray-300">VIEWS</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            {submissions?.responseCount}
          </h2>
          <p className="text-gray-300">SUBMISSIONS</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-400">
          Page URL contains example.com/about
        </p>
        <p className="text-sm text-gray-400">
          Date: {moment(submissions?.createdAt).format("DD/MM/YYYY")}
        </p>
        <p className="text-sm text-gray-400">
          Time: {moment(submissions?.createdAt).format("HH:mm:ss a")}
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-4 text-white">Feedback List</h3>

      <div className="space-y-4">
        {submissions?.responses.map((eachResponse, index) => {
          return (
            <FeedbackItem
              fields={eachResponse.fields}
              index={index}
              createdAt={eachResponse.createdAt}
            />
          );
        })}
      </div>
    </main>
  );
};

export default FormDetails;

const FeedbackItem = ({
  index,
  createdAt,
  fields,
}: {
  index: number;
  createdAt: string;
  fields: Array<{
    label: string;
    value: string;
  }>;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="border border-gray-700 rounded-lg p-4 cursor-pointer"
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-white">Feedback {index + 1}</h4>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">
            {moment(createdAt).format("DD/MM/YYYY")}
          </span>
          {isExpanded ? (
            <CaretUp size={20} color="#9CA3AF" />
          ) : (
            <CaretDown size={20} color="#9CA3AF" />
          )}
        </div>
      </div>

      {isExpanded ? (
        <div className="space-y-2 mt-4">
          {fields.map((field, fieldIndex) => (
            <div key={fieldIndex}>
              <p className="font-medium text-white">{field.label}</p>
              <p className="text-sm text-gray-300">{field.value}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400 mt-2">Click to expand</p>
      )}
    </div>
  );
};
