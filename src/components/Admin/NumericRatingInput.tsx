import { PencilSimple, Trash } from "@phosphor-icons/react";

const NumericRatingInput = () => {
  return (
    <div className="space-y-2 px-2 py-2 border border-gray-600/15 shadow text-gray-600">
      <label className="block" htmlFor="">
        ABCD
      </label>
      <div>
        <fieldset className="flex justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <div>
              <input
                type="radio"
                value={value}
                className="appearance-none peer"
              />
              <label
                htmlFor=""
                className="flex items-center justify-center size-10 border border-gray-300 cursor-pointer peer-checked:bg-green-500 peer-checked:text-white peer-checked:border-green-500"
              >
                {value}
              </label>
            </div>
          ))}
        </fieldset>
      </div>

      <p className="text-red-400 text-xs"></p>

      <div className="flex items-center justify-end space-x-5">
        <PencilSimple
          size={20}
          weight="fill"
          className="text-gray-600 cursor-pointer"
        />
        <Trash
          size={20}
          weight="fill"
          className="text-gray-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NumericRatingInput;
