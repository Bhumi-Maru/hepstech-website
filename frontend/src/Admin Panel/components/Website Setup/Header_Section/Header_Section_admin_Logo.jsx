import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useHeaderSection } from "../../../context/Header_Section_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { getFilePreview } from "../../../utils/fileUploadUtils";

export default function Header_Section_admin_Logo({ logo, onLogoChange }) {
  const [isUploading, setIsUploading] = useState(false);
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { selectedAdminLogo, setSelectedAdminLogo } = useHeaderSection();
  const { mediaItems } = useAllMediaContext();

  // Store preview image URL
  const [previewLogo, setPreviewLogo] = useState(logo || "");

  useEffect(() => {
    if (selectedAdminLogo) {
      const selectedMedia = mediaItems.find(
        (item) => item._id === selectedAdminLogo
      );
      if (selectedMedia) {
        setPreviewLogo(selectedMedia.fileUrl); // Update preview with fileUrl
        if (onLogoChange) onLogoChange(selectedAdminLogo); // Send _id instead of file object
      }
    }
  }, [selectedAdminLogo, mediaItems, onLogoChange]);

  // Find the selected header logo object
  const adminLogo = mediaItems.find((item) => item._id === selectedAdminLogo);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewLogo(fileUrl);
      if (onLogoChange) onLogoChange(file); // Send actual file for upload
    }
  };

  const handleRemoveLogo = () => {
    setPreviewLogo("");
    setSelectedAdminLogo(null); // Reset selected logo
    if (onLogoChange) onLogoChange(null);
  };

  const handleSelectFromMedia = () => {
    setIsOpenPopupModal((prev) => ({
      ...prev,
      startSelectFilesAndMedia: true,
      Header_Section_Admin_Logo: true,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Admin Logo</h3>
      </div>
      <div className="px-4 pb-5 sm:px-5">
        <div className="inline-block p-6 overflow-hidden border border-gray-200 rounded-md">
          {/* {previewLogo ? (
            <img
              className="w-auto h-16"
              src={previewLogo}
              alt="Admin Logo"
              loading="lazy"
            />
          ) : (
            <div className="w-auto h-16 flex items-center justify-center text-gray-400">
              No logo selected
            </div>
          )} */}
          {getFilePreview(adminLogo)}
        </div>

        <div className="flex items-center mt-3 space-x-4">
          {/* Upload Button */}
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
            id="admin-logo-upload"
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
