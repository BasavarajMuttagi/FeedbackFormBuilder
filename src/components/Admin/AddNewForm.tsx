import { Plus } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const AddNewForm = () => {
  return (
    <Link to={"/admin/create"}>
      <div className="cursor-pointer w-60 h-80 rounded-md bg-neutral-800/50 border border-neutral-700/30 flex flex-col items-center justify-center space-y-5">
        <Plus size={50} weight="duotone" className="text-green-500" />
        <p className="text-blue-500 text-2xl font-semibold">New Form</p>
      </div>
    </Link>
  );
};

export default AddNewForm;
