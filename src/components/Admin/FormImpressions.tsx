import moment from "moment";
import { useNavigate } from "react-router-dom";

const FormImpressions = ({
  name,
  submissions,
  viewed,
  createdAt,
  formId,
}: {
  name: string;
  submissions: number;
  viewed: number;
  createdAt: string;
  formId: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-60 h-80 rounded-md bg-neutral-800/50 border border-neutral-700/30 flex flex-col justify-between p-3">
      <h2 className="text-lg font-medium text-white tracking-wide text-ellipsis overflow-x-hidden">
        {name}
      </h2>
      <div className="space-y-2 text-white/35">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Submitted</span>
          <span>{submissions}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Viewed</span>
          <span>{viewed}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Date Published</span>
          <span>{moment(createdAt).format("DD/MM/YYYY")}</span>
        </div>
      </div>
      <div className="text-white space-y-4 flex flex-col">
        <button
          className="px-3 py-1.5 rounded-md bg-violet-700"
          onClick={() => navigate(`/admin/form/details/${formId}`)}
        >
          View Submissions
        </button>
        <div className="flex items-center justify-between">
          <button className="px-4 py-1 rounded-md bg-green-700">Edit</button>
          <button className="px-4 py-1.5 rounded-md bg-black">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default FormImpressions;
