import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { useFooterSection } from "../../../context/Footer_Section_Context";
import { getFilePreview } from "../../../utils/fileUploadUtils";

export default function Footer_Section__7({
  paymentImage,
  onPaymentImageChange,
}) {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { mediaItems } = useAllMediaContext();
  const { selectedPaymentImage, setSelectedPaymentImage } = useFooterSection();
  const [previewLogo, setPreviewLogo] = useState(paymentImage || "");

  useEffect(() => {
    if (selectedPaymentImage) {
      const selectedMedia = mediaItems.find(
        (item) => item._id === selectedPaymentImage
      );
      if (selectedMedia) {
        setPreviewLogo(selectedMedia.fileUrl);
        if (onPaymentImageChange) onPaymentImageChange(selectedPaymentImage);
      }
    } else {
      setPreviewLogo("");
    }
  }, [selectedPaymentImage, mediaItems]);

  // Find the selected footer logo object
  const paymentImageFile = mediaItems.find(
    (item) => item._id === selectedPaymentImage
  );

  const handleRemoveLogo = () => {
    setPreviewLogo("");
    setSelectedPaymentImage(null);
    if (onPaymentImageChange) onPaymentImageChange(null);
  };

  const handleSelectFromMedia = () => {
    setIsOpenPopupModal((prev) => ({
      ...prev,
      startSelectFilesAndMedia: true,
      Footer_Section_payment_image: true,
    }));
  };
  return (
    <>
      {/* FOOTER SECTION 7 [PAYMENT OPTIONS PHOTO] */}
      <div className="px-4 pb-5 sm:px-5">
        <div className="inline-block p-6 overflow-hidden border border-gray-200 rounded-md">
          {/* <img
            className="w-auto h-8"
            src="../../admin_assets/images/payment-options.png"
            alt=""
            loading="lazy"
          /> */}
          {getFilePreview(paymentImageFile)}
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
    </>
  );
}
