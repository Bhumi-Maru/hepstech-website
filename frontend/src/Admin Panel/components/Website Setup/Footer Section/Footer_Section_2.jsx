import React from "react";

export default function Footer_Section_2() {
  return (
    <>
      {/* FOOTER SECTION 2 [LOGO] */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Footer Logo</h3>
          <p className="mt-1 text-sm text-gray-600">
            (If your footer has a dark background, try to upload a logo which
            looks proper on dark backgrounds.)
          </p>
        </div>

        <div className="px-4 pb-5 sm:px-5">
          <div className="inline-block p-6 overflow-hidden border border-gray-200 rounded-md">
            <img
              className="w-auto h-16"
              src="../../admin_assets/images/logo.png"
              alt=""
              loading="lazy"
            />
          </div>

          <div className="flex items-center mt-3 space-x-4">
            <button type="button" className="btn btn-primary">
              Select Files
            </button>

            <button type="button" className="btn btn-error-light">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
