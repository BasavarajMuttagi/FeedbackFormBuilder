const EditFieldForm = () => {
  return (
    <form className="text-white p-2 text-sm space-y-5">
      <div className="space-y-1">
        <label htmlFor="label" className="block">
          Enter Label
        </label>
        <input
          id="label"
          type="text"
          placeholder="Enter Label"
          className="px-3 py-1 bg-inherit outline-none border border-white/10 w-full"
        />
        <p className="text-red-400 text-xs">Required!</p>
      </div>

      <div className="space-y-1">
        <label htmlFor="label" className="block">
          Enter Error Message
        </label>
        <input
          id="label"
          type="text"
          placeholder="Enter Error Message"
          className="px-3 py-1 bg-inherit outline-none border border-white/10 w-full"
        />
        <p className="text-red-400 text-xs">Required!</p>
      </div>

      <div className="space-y-1">
        <label htmlFor="label" className="block">
          Required
        </label>
        <input
          id="label"
          type="checkbox"
          className="px-3 py-1 bg-inherit outline-none border border-white/10 w-full"
        />
        <p className="text-red-400 text-xs">Required!</p>
      </div>
    </form>
  );
};

export default EditFieldForm;
