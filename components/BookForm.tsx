import React from "react";
import { CiSearch } from "react-icons/ci";

const BookForm = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="w-full md:h-16 md:bg-white rounded-full md:shadow-lg hover:shadow-none duration-200 md:overflow-hidden flex flex-col md:flex-row max-md:gap-3">
        <button className="h-full max-md:bg-white w-full md:w-4/12 hover:bg-gray-200 duration-200 rounded-full text-start p-3 pl-10">
          <label className="flex flex-col text-sm">
            Where
            <input
              type="text"
              className="bg-transparent outline-none"
              placeholder="Search destinations"
            />
          </label>
        </button>
        <button className="h-full max-md:bg-white w-full md:w-2/12 hover:bg-gray-200 duration-200 rounded-full p-3 pl-7 flex flex-col text-sm">
          Check in
          <p className="text-gray-400">Add date</p>
        </button>
        <button className="h-full max-md:bg-white w-full md:w-2/12 hover:bg-gray-200 duration-200 rounded-full p-3 pl-7 flex flex-col text-sm">
          Check out
          <p className="text-gray-400">Add date</p>
        </button>
        <div className="h-full max-md:h-14 max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:fixed max-md:bg-white w-full md:w-4/12 cursor-pointer hover:bg-gray-200 duration-200 md:rounded-full flex items-center justify-between md:p-3 px-5 py-2 md:pl-7 text-sm">
          <div className="flex items-start flex-col">
            Who
            <p className="text-gray-400">Add guests</p>
          </div>
          <div className="w-20 md:w-10 flex items-center justify-center bg-rose-500 h-full rounded-md md:rounded-full">
            <CiSearch className="text-xl text-white font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
