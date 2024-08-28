import { ThumbsUp } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleCancel = () => {};
  const handleSave = () => {};
  return (
    <header className="text-white font-semibold flex items-center justify-between p-4 bg-neutral-950 text-lg border-b border-white/10">
      <div className="flex items-center space-x-5">
        <ThumbsUp size={32} weight="duotone" className="text-blue-500" />
        <span>
          <Link to={"/admin"}>User Feedback</Link>
        </span>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={handleCancel}
          className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Publish
        </button>
      </div>
    </header>
  );
};

export default Header;
