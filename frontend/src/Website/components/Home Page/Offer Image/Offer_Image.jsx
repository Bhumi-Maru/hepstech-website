import React, { useEffect, useState } from "react";
import { fetchHeaderData } from "../../../../Admin Panel/utils/fileUploadUtils";

export default function Offer_Image({
  isOfferImageModalOpen,
  setIsOfferImageModalOpen,
}) {
  const [formData, setFormData] = useState(null); // Initialize as null to handle loading state

  // Fetch latest data on component mount
  useEffect(() => {
    fetchHeaderData(setFormData);
  }, []);

  console.log("formData", formData);

  // Safely extract the file path with optional chaining
  const offerImagePath = formData?.offersEnabled?.offer_Image?.filePath || "";
  console.log(offerImagePath);

  return (
    <>
      {isOfferImageModalOpen && (
        <div
          className="modal active"
          id="loginModal"
          role="dialog"
          aria-hidden="false"
        >
          <div
            className="modal-overlay"
            onClick={() => setIsOfferImageModalOpen(false)}
          ></div>
          <div className="modal-dialog sm:max-w-lg">
            <div className="modal-content" role="document">
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOfferImageModalOpen(false)}
              >
                <span className="sr-only"> Close </span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <div className="px-4 py-8 modal-body sm:px-10">
                {offerImagePath ? (
                  <img
                    src={`http://localhost:7000${offerImagePath}`}
                    alt="Offer Image"
                  />
                ) : (
                  <p className="text-center text-gray-500">
                    No Offer Image Available
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
