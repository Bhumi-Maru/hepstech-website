import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { useFooterSection } from "../../../context/Footer_Section_Context";
import { getFilePreview } from "../../../utils/fileUploadUtils";

export default function Footer_Section_2({ footerLogo, onFooterLogoChange }) {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { mediaItems } = useAllMediaContext();
  const { selectedFooterLogo, setSelectedFooterLogo } = useFooterSection();
  const [previewLogo, setPreviewLogo] = useState(footerLogo || "");

  useEffect(() => {
    if (selectedFooterLogo) {
      const selectedMedia = mediaItems.find(
        (item) => item._id === selectedFooterLogo
      );
      if (selectedMedia) {
        setPreviewLogo(selectedMedia.fileUrl);
        if (onFooterLogoChange) onFooterLogoChange(selectedFooterLogo);
      }
    } else {
      setPreviewLogo("");
    }
  }, [selectedFooterLogo, mediaItems]);

  // Find the selected footer logo object
  const footerLogoFile = mediaItems.find(
    (item) => item._id === selectedFooterLogo
  );

  const handleRemoveLogo = () => {
    setPreviewLogo("");
    setSelectedFooterLogo(null);
    if (onFooterLogoChange) onFooterLogoChange(null);
  };

  const handleSelectFromMedia = () => {
    setIsOpenPopupModal((prev) => ({
      ...prev,
      startSelectFilesAndMedia: true,
      Footer_Section_footer_logo: true,
    }));
  };

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
            {getFilePreview(footerLogoFile)}
          </div>

          <div className="flex items-center mt-3 space-x-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSelectFromMedia}
            >
              Select Files
            </button>

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
    </>
  );
}
