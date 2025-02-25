import React from "react";

export default function Upload_New() {
  return (
    <>
      {/* UPLOADS NEW  */}

      <div
        className="tab-pane !py-0 show"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="mt-2 text-center text-gray-600">
              <span>Upload Files</span>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              JPG, JPEG or PNG up to 3MB
            </p>
            <button
              type="button"
              className="mt-2 btn btn-primary"
              data-toggle="modal"
              data-target="#selectFilesModal"
            >
              Browse Files
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
