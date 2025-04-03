import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useHeaderSection } from "../../../context/Header_Section_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { getFilePreview } from "../../../utils/fileUploadUtils";

export default function Header_Section_admin_Logo({
  adminLogo,
  onAdminLogoChange,
}) {
  const [isUploading, setIsUploading] = useState(false);
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { selectedAdminLogo, setSelectedAdminLogo } = useHeaderSection();
  const { mediaItems } = useAllMediaContext();
  const [previewLogo, setPreviewLogo] = useState(adminLogo || "");

  useEffect(() => {
    if (selectedAdminLogo) {
      const selectedMedia = mediaItems.find(
        (item) => item._id === selectedAdminLogo
      );
      if (selectedMedia) {
        setPreviewLogo(selectedMedia.fileUrl);
        if (onAdminLogoChange) onAdminLogoChange(selectedAdminLogo);
      }
    } else {
      setPreviewLogo("");
    }
  }, [selectedAdminLogo, mediaItems]);

  const adminLogoFile = mediaItems.find(
    (item) => item._id === selectedAdminLogo
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewLogo(fileUrl);
      if (onAdminLogoChange) onAdminLogoChange(file);
    }
  };

  const handleRemoveLogo = () => {
    setPreviewLogo("");
    setSelectedAdminLogo(null);
    if (onAdminLogoChange) onAdminLogoChange(null);
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
          {getFilePreview(adminLogoFile)}
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
            id="admin-logo-upload"
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
