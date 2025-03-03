import React from "react";
import Date_Range_Model from "./Date_Range_Model";
import { useAllMediaContext } from "../../context/All_Media_Context";

export default function All_Media_2() {
  const {
    selectedDateRange,
    setShowDatePicker,
    showDatePicker,
    handleDateSelect,
    searchTerm,
    setSearchTerm,
  } = useAllMediaContext();

  return (
    <div className="mt-4 lg:flex lg:items-center lg:justify-between lg:space-x-4">
      <div className="flex-1 max-w-sm">
        <label htmlFor="searchFile" className="sr-only">
          Search
        </label>
        <div className="relative rounded-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="searchFile"
            id="searchFile"
            className="!pl-10"
            value={searchTerm} // Set the value to searchTerm
            placeholder="Search by file name..."
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on change
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:mt-0 lg:flex-shrink lg:grid-cols-none lg:flex lg:space-x-4 lg:gap-0">
        <div className="relative">
          <div className="flex-1 flex-shrink w-full col-span-2 sm:col-span-1">
            <input
              type="text"
              id="filterFilesByDate"
              placeholder="Filter by Date"
              className="cursor-pointer"
              autoComplete="off"
              readOnly
              value={selectedDateRange}
              onClick={() => setShowDatePicker(!showDatePicker)}
            />
          </div>
          {showDatePicker && (
            <Date_Range_Model onDateSelect={handleDateSelect} />
          )}
        </div>
        <div>
          <select name="" id="" className="">
            <option value="">All Media</option>
            <option value="">Images</option>
            <option value="">Videos</option>
            <option value="">GIFs</option>
            <option value="">Documents</option>
          </select>
        </div>
        <div>
          <select name="" id="" className="">
            <option value="">Sort by Newest</option>
            <option value="">Sort by Oldest</option>
            <option value="">Sort by Smallest</option>
            <option value="">Sort by Largest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
