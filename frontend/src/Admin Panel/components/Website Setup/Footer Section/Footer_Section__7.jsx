import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { useFooterSection } from "../../../context/Footer_Section_Context";

export default function Footer_Section__7({
  paymentImage,
  onPaymentImageChange,
}) {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { mediaItems } = useAllMediaContext();
  const { selectedPaymentImage, setSelectedPaymentImage } = useFooterSection();
  const [previewImages, setPreviewImages] = useState([]);

  console.log("preview", previewImages);

  useEffect(() => {
    if (selectedPaymentImage && selectedPaymentImage.length > 0) {
      const selectedMedia = mediaItems.filter((item) =>
        selectedPaymentImage.includes(item._id)
      );

      console.log("selected preview", selectedMedia);

      // Create preview objects with both ID and full filePath
      const previews = selectedMedia.map((item) => ({
        id: item._id,
        url: item.fileUrl, // Construct full URL
      }));
      console.log("previews", previews);

      setPreviewImages(previews);
      if (onPaymentImageChange) onPaymentImageChange(selectedPaymentImage);
    } else {
      setPreviewImages([]);
    }
  }, [selectedPaymentImage, mediaItems]);

  const handleRemoveImage = (index) => {
    const newImages = [...selectedPaymentImage];
    newImages.splice(index, 1);
    setSelectedPaymentImage(newImages);
    if (onPaymentImageChange) onPaymentImageChange(newImages);
  };

  const handleSelectFromMedia = () => {
    setIsOpenPopupModal((prev) => ({
      ...prev,
      startSelectFilesAndMedia: true,
      Footer_Section_payment_image: true,
    }));
  };

  return (
    <div className="px-4 pb-5 sm:px-5">
      <div className="flex flex-wrap gap-4">
        {previewImages.map((image, index) => (
          <div
            key={image.id}
            className="relative p-2 border border-gray-200 rounded-md"
          >
            <img
              src={image.url}
              alt={`Payment option ${index + 1}`}
              className="w-auto h-8"
              loading="lazy"
            />
            <button
              type="button"
              className="absolute top-0 right-0 p-1 text-xs text-white bg-red-500 rounded-full"
              onClick={() => handleRemoveImage(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-3 space-x-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSelectFromMedia}
        >
          Select Files
        </button>

        {previewImages.length > 0 && (
          <button
            type="button"
            className="btn btn-error-light"
            onClick={() => {
              setSelectedPaymentImage([]);
              if (onPaymentImageChange) onPaymentImageChange([]);
            }}
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
}
