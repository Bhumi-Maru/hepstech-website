import React from "react";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function All_Media_1() {
  const { toggleModal } = useAdminGlobalContext();

  return (
    <div className="sm:flex sm:items-baseline sm:justify-between sm:space-x-8">
      <h1 className="heading-1">All Media</h1>
      <div className="flex" style={{ gap: "14px" }}>
        {/* upload a folder with multiple images , video , gif and document */}
        {/* upload a single file */}
        <div className="hidden mt-4 sm:mt-0 sm:block">
          <label
            //   htmlFor="fileUpload"
            className="btn btn-primary flex items-center cursor-pointer"
            onClick={() => toggleModal("uploadFiles")} // Open the modal when clicked
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Upload Files
          </label>
        </div>
      </div>
    </div>
  );
}
