import React from "react";

export default function Application_Setting_1() {
  return (
    <>
      <div className="sm:flex sm:items-center sm:space-x-3">
        <nav aria-label="Back">
          <a
            href="store-settings.html"
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
            <span className="block sm:hidden">Back</span>
          </a>
        </nav>

        {/* <!-- PAGE TITLE --> */}
        <h1 className="mt-3 heading-1 sm:mt-0">Application Settings</h1>
      </div>
    </>
  );
}
