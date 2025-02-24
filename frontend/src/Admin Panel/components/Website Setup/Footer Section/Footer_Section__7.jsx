import React from "react";

export default function Footer_Section__7() {
  return (
    <>
      {/* FOOTER SECTION 7 [PAYMENT OPTIONS PHOTO] */}
      <div className="px-4 pb-5 sm:px-5">
        <div className="inline-block p-6 overflow-hidden border border-gray-200 rounded-md">
          <img
            className="w-auto h-8"
            src="../../admin_assets/images/payment-options.png"
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
    </>
  );
}
