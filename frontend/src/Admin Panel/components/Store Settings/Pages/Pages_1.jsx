import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { Link } from "react-router-dom";

export default function Pages_1() {
  const { toggleModal } = useAdminGlobalContext();
  return (
    <>
      {/* PAGES SECTION 1 [HEADING] */}

      <div className="sm:flex sm:items-center sm:space-x-4">
        <nav aria-label="Back">
          <Link
            to="/store-settings"
            title="Back to Store Settings"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <svg
              className="flex-shrink-0 w-6 h-6 mr-1 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
            <span className="block sm:hidden"> Back </span>
          </Link>
        </nav>

        <div className="flex items-center justify-between flex-1 mt-3 sm:mt-0">
          {/* <!-- PAGE TITLE --> */}
          <h1 className="heading-1">Pages</h1>

          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#createPageModal"
            onClick={() => toggleModal("createNewPage")}
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add Page
          </button>
        </div>
      </div>
    </>
  );
}
