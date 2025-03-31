import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useHeaderSection } from "../../../context/Header_Section_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { getFilePreview } from "../../../utils/fileUploadUtils";

export default function Header_Section_Logo({ logo, onLogoChange }) {
  const [isUploading, setIsUploading] = useState(false);
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { selectedWebLogo, handleWebLogoSelect } = useHeaderSection();
  const { mediaItems } = useAllMediaContext();

  // Set the preview logo either from the prop or selected web logo
  const [previewLogo, setPreviewLogo] = useState(logo || "");

  useEffect(() => {
    if (selectedWebLogo?.filePath) {
      setPreviewLogo(
        `${process.env.REACT_APP_BASE_URL}${selectedWebLogo.filePath}`
      );
      if (onLogoChange) onLogoChange(selectedWebLogo);
    }
  }, [selectedWebLogo, onLogoChange]);

  // / Find the file URL for the selected main image and banner image
  const headerLogo = mediaItems.find((item) => {
    // console.log("main image ffgkjj id", item._id);
    // console.log("main selkected image id", selectedMainImage);
    return item._id === selectedWebLogo;
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewLogo(fileUrl);
      if (onLogoChange) onLogoChange(file); // Pass file for upload processing
    }
  };

  const handleRemoveLogo = () => {
    setPreviewLogo("");
    if (onLogoChange) onLogoChange(null);
  };

  const handleSelectFromMedia = () => {
    setIsOpenPopupModal((prev) => ({
      ...prev,
      startSelectFilesAndMedia: true,
      Header_Section_web_Logo: true,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Header Logo</h3>
        <p className="mt-1 text-sm text-gray-600">
          (If your header has a dark background, try to upload a logo that looks
          good on dark backgrounds.)
        </p>
      </div>
      <div className="px-4 pb-5 sm:px-5">
        <div className="inline-block p-6 overflow-hidden border border-gray-200 rounded-md w-100">
          {/* {previewLogo ? (
            <img
              className="w-auto h-16"
              src={previewLogo}
              alt="Website Logo"
              loading="lazy"
            />
          ) : (
            <div className="w-auto h-16 flex items-center justify-center text-gray-400">
              No logo selected
            </div>
          )} */}
          {getFilePreview(headerLogo)}
        </div>
        <div className="flex items-center mt-3 space-x-4">
          {/* Select from media */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSelectFromMedia}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Select File"}
          </button>

          {/* Hidden File Input */}
          <input
            type="file"
            id="header-logo-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
            disabled={isUploading}
          />

          {/* Remove Button */}
          <button
            type="button"
            className="btn btn-error-light"
            onClick={handleRemoveLogo}
            disabled={isUploading}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
