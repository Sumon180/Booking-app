"use client";

import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { format, addDays } from "date-fns";
import { CiSearch } from "react-icons/ci";

interface CustomDateRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

const BookForm = () => {
  const [place, setPlace] = useState(false);
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [guest, setGuest] = useState(false);
  const [state, setState] = useState<CustomDateRange[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 5),
      key: "selection",
    },
  ]);

  const startDate = format(state[0]?.startDate, "LLL dd");
  const endDate = format(state[0]?.endDate, "LLL dd");

  const handlePlace = () => {
    setPlace(!place);
    setIsCheckIn(false);
    setIsCheckOut(false);
    setGuest(false);
  };
  const handleCheckIn = () => {
    setIsCheckIn(!isCheckIn);
    setPlace(false);
    setIsCheckOut(false);
    setGuest(false);
  };
  const handleCheckOut = () => {
    setIsCheckOut(!isCheckOut);
    setIsCheckIn(false);
    setPlace(false);
    setGuest(false);
  };
  const handleGuest = () => {
    setGuest(!guest);
    setIsCheckOut(false);
    setIsCheckIn(false);
    setPlace(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative w-full md:h-16 md:bg-white rounded-full md:shadow-lg hover:shadow-none duration-200 flex flex-col md:flex-row max-md:gap-3">
        <button
          onClick={handlePlace}
          className={`h-full max-md:bg-white w-full md:w-4/12 hover:bg-gray-200 duration-200 rounded-full text-start p-3 pl-10 font-medium ${
            place && "bg-gray-200"
          }`}
        >
          <label className="flex flex-col text-sm cursor-pointer">Where</label>
          <input
            type="text"
            className="bg-transparent outline-none text-sm"
            placeholder="Search destinations"
          />
        </button>
        <button
          onClick={handleCheckIn}
          className={`h-full max-md:bg-white w-full md:w-2/12 hover:bg-gray-200 duration-200 rounded-full p-3 pl-7 flex flex-col text-sm font-medium ${
            isCheckIn && "bg-gray-200"
          }`}
        >
          Check in
          <p className="text-gray-500">{startDate ? startDate : "Add date"}</p>
        </button>
        <button
          onClick={handleCheckOut}
          className={`h-full max-md:bg-white w-full md:w-2/12 hover:bg-gray-200 duration-200 rounded-full p-3 pl-7 flex flex-col text-sm font-medium ${
            isCheckOut && "bg-gray-200"
          }`}
        >
          Check out
          <p className="text-gray-500">{endDate ? endDate : "Add date"}</p>
        </button>
        <div
          onClick={handleGuest}
          className={`h-full max-md:h-14 max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:fixed max-md:bg-white w-full md:w-4/12 cursor-pointer hover:bg-gray-200 duration-200 md:rounded-full flex items-center justify-between md:p-3 px-5 py-2 md:pl-7 text-sm font-medium ${
            guest && "bg-gray-200"
          }`}
        >
          <div className="flex items-start flex-col">
            Who
            <p className="text-gray-400">Add guests</p>
          </div>
          <div
            className={`duration-300 flex items-center justify-center bg-rose-500 h-full rounded-md md:rounded-full overflow-hidden ${
              place || isCheckIn || isCheckOut || guest
                ? "w-28 md:w-28 gap-3"
                : "w-20 md:w-10"
            }`}
          >
            <CiSearch className="text-xl text-white font-bold" />
            {(place || isCheckIn || isCheckOut || guest) && <p>Search</p>}
          </div>
        </div>
        {place && (
          <div className="absolute bg-white shadow-lg p-5 rounded-md top-[5rem]">
            <p>Search by region</p>
            <ul>
              <li>I’m flexible</li>
              <li>Europe</li>
              <li>Canada</li>
              <li>Southeast Asia</li>
              <li>United Kingdom</li>
              <li>Middle East</li>
            </ul>
          </div>
        )}
        {isCheckIn && (
          <div className="absolute bg-white shadow-lg p-5 rounded-md top-[5rem]">
            <DateRangePicker
              onChange={(item) => setState([item.selection as CustomDateRange])}
              showPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
            />
          </div>
        )}
        {isCheckOut && (
          <div className="absolute bg-white shadow-lg p-5 rounded-md top-[5rem]">
            <DateRangePicker
              onChange={(item) => setState([item.selection as CustomDateRange])}
              showPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
            />
          </div>
        )}
        {guest && (
          <div className="absolute bg-white shadow-lg p-5 rounded-md top-[5rem] left-3/4">
            <p>guest</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookForm;
