import React, { useEffect, useState } from "react";
import { fetchHeaderData } from "../../../../Admin Panel/utils/fileUploadUtils";

export default function Offer_Image({
  setIsOfferImageModalOpen,
  setHasOfferImage,
}) {
  const [formData, setFormData] = useState(null);
  const [offerImagePath, setOfferImagePath] = useState("");

  useEffect(() => {
    fetchHeaderData(setFormData);
  }, []);

  useEffect(() => {
    if (formData) {
      const path = formData?.offersEnabled?.offer_Image?.filePath || "";
      setOfferImagePath(path);
      // Update parent component whether we have an image to show
      setHasOfferImage(!!path);
      // If no image, close the modal
      if (!path) {
        setIsOfferImageModalOpen(false);
      }
    }
  }, [formData, setIsOfferImageModalOpen, setHasOfferImage]);

  // Don't render anything if there's no image path
  if (!offerImagePath) return null;

  return (
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="px-4 py-8 modal-body sm:px-10">
            <img
              src={`http://localhost:7000${offerImagePath}`}
              alt="Offer Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
