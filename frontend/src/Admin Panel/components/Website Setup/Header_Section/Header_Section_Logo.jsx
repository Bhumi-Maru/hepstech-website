import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useHeaderSection } from "../../../context/Header_Section_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { getFilePreview } from "../../../utils/fileUploadUtils";

export default function Header_Section_Logo({ headerLogo, onLogoChange }) {
  const [isUploading, setIsUploading] = useState(false);
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { selectedWebLogo, setSelectedWebLogo, handleInputChange } =
    useHeaderSection();
  const { mediaItems } = useAllMediaContext();

  // Store preview image URL - initialize with prop value
  const [previewLogo, setPreviewLogo] = useState("");

  // Find the selected header logo object
  const headerLogoFile = mediaItems.find(
    (item) => item._id === selectedWebLogo
  );

  // Fixed useEffect - properly handles initial prop and updates
  // Similar update for header logo
  useEffect(() => {
    if (selectedWebLogo) {
      const selectedMedia = mediaItems.find(
        (item) => item._id === selectedWebLogo
      );
      if (selectedMedia) {
        setPreviewLogo(selectedMedia.fileUrl);
        if (onLogoChange) onLogoChange(selectedWebLogo);
      }
    } else {
      setPreviewLogo("");
    }
  }, [selectedWebLogo, mediaItems]); // No onLogoChange in dependencies

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewLogo(fileUrl);
      if (onLogoChange) onLogoChange(file);
    }
  };

  const handleRemoveLogo = () => {
    setPreviewLogo("");
    setSelectedWebLogo(null);
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
          {getFilePreview(headerLogoFile)}
        </div>
        <div className="flex items-center mt-3 space-x-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSelectFromMedia}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Select File"}
          </button>
          <input
            type="file"
            id="header-logo-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
            disabled={isUploading}
          />
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
