import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        <button
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 ${
            category === data.title ? "" : "bg-opacity-30 border-white"
          }`}
          key={data.id}
          onClick={() => filterHandler(data.title)} // ✅ Fixed: Wrapped in arrow function
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
