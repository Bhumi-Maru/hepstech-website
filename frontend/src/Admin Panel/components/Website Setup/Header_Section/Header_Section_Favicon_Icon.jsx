import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useHeaderSection } from "../../../context/Header_Section_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { getFilePreview } from "../../../utils/fileUploadUtils";

export default function Header_Section_Favicon_Icon({
  favicon,
  onFaviconChange,
}) {
  const [isUploading, setIsUploading] = useState(false);
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { selectedFaviconIcon, setSelectedFaviconIcon } = useHeaderSection();
  const { mediaItems } = useAllMediaContext();

  // Store preview image URL
  const [previewLogo, setPreviewLogo] = useState(favicon || "");

  // Ensure proper effect dependencies
  useEffect(() => {
    if (selectedFaviconIcon) {
      const selectedMedia = mediaItems.find(
        (item) => item._id === selectedFaviconIcon
      );
      if (selectedMedia) {
        setPreviewLogo(selectedMedia.fileUrl);
        if (onFaviconChange) onFaviconChange(selectedFaviconIcon);
      }
    } else {
      setPreviewLogo("");
    }
  }, [selectedFaviconIcon, mediaItems]); // No onAdminLogoChange in dependencies

  // Find the selected header logo object
  const faviconFile = mediaItems.find(
    (item) => item._id === selectedFaviconIcon
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewLogo(fileUrl);
      if (onFaviconChange) onFaviconChange(file); // Send actual file for upload
    }
  };

  const handleRemoveLogo = () => {
    setPreviewLogo("");
    setSelectedFaviconIcon(null); // Reset selected logo
    if (onFaviconChange) onFaviconChange(null);
  };

  const handleSelectFromMedia = () => {
    // alert("firstly , select admi logo....");
    setIsOpenPopupModal((prev) => ({
      ...prev,
      startSelectFilesAndMedia: true,
      Header_Section_Favicon_Icon: true,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Favicon Icon</h3>
      </div>
      <div className="px-4 pb-5 sm:px-5">
        <div className="inline-block p-6 overflow-hidden border border-gray-200 rounded-md">
          {/* {previewFavicon ? (
            <img
              className="w-auto h-16"
              src={previewFavicon}
              alt="Favicon Icon"
              loading="lazy"
            />
          ) : (
            <div className="w-auto h-16 flex items-center justify-center text-gray-400">
              No favicon selected
            </div>
          )} */}
          {getFilePreview(faviconFile)}
        </div>

        <div className="flex items-center mt-3 space-x-4">
          {/* Upload Button */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSelectFromMedia}
          >
            Select File
          </button>

          {/* Hidden File Input */}
          <input
            type="file"
            id="favicon-icon-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {/* Remove Button */}
          <button
            type="button"
            className="btn btn-error-light"
            onClick={handleRemoveLogo}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
