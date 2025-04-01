import React, { useEffect, useState } from "react";
import { useHeaderSection } from "../../../context/Header_Section_Context";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { getFilePreview } from "../../../utils/fileUploadUtils";

export default function Header_Section_Link_Options({
  offerImage,
  onOfferImageChange,
}) {
  const {
    formData,
    offersEnabled,
    wishlistEnabled,
    contactEnabled,
    onOffersChange,
    onWishlistChange,
    onContactChange,
    contact,
    onContactInfoChange,
    selectedOfferImage,
    setSelectedOfferImage,
  } = useHeaderSection();

  const [isUploading, setIsUploading] = useState(false);
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { mediaItems } = useAllMediaContext();

  // Store preview image URL
  const [previewLogo, setPreviewLogo] = useState(offerImage || "");

  // Debugging logs
  useEffect(() => {
    console.log("Current contact state:", contact);
  }, [contact]);

  console.log("offersEnabled", offersEnabled);
  // console.log("contactEnabled", contactEnabled);
  console.log("contact", contact); // Debugging
  console.log("phoneNumber:", contact?.phoneNumber); // Debugging
  console.log("whatsappNumber:", contact?.whatsappNumber); // Debugging
  console.log("emailAddress:", contact?.emailAddress); // Debugging

  useEffect(() => {
    if (selectedOfferImage) {
      const selectedMedia = mediaItems.find(
        (item) => item._id === selectedOfferImage
      );
      if (selectedMedia) {
        setPreviewLogo(selectedMedia.fileUrl);
        if (onOfferImageChange) onOfferImageChange(selectedOfferImage);
      }
    } else {
      setPreviewLogo("");
    }
  }, [selectedOfferImage, mediaItems]); // No onAdminLogoChange in dependencies

  // Find the selected header logo object
  const offerImageFile = mediaItems.find(
    (item) => item._id === selectedOfferImage
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewLogo(fileUrl);
      if (onOfferImageChange) onOfferImageChange(file); // Send actual file for upload
    }
  };

  const handleRemoveLogo = () => {
    setPreviewLogo("");
    setSelectedOfferImage(null); // Reset selected logo
    if (onOfferImageChange) onOfferImageChange(null);
  };

  const handleSelectFromMedia = () => {
    // alert("firstly , select admi logo....");
    setIsOpenPopupModal((prev) => ({
      ...prev,
      startSelectFilesAndMedia: true,
      Header_Link_section_offer_image: true,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Link Options</h3>
      </div>

      <div className="px-4 pb-5 sm:px-5">
        <div className="flow-root mt-2">
          <ul className="-my-4 divide-y divide-gray-200">
            {/* Offers */}
            <li className="flex items-center justify-between py-4">
              <label htmlFor="offersLink" className="text-sm font-medium">
                Offers
              </label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="offersLink"
                  checked={offersEnabled?.enabled}
                  onChange={(e) => onOffersChange(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <label htmlFor="offersLink"></label>
              </div>
            </li>

            {offersEnabled?.enabled && (
              <>
                <div className="mt-4" style={{ borderTopWidth: "0px" }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
                    {getFilePreview(offerImageFile)}
                  </div>
                </div>
                <div
                  className="flex items-center mt-3 space-x-4"
                  style={{ borderTopWidth: "0px", paddingBottom: "20px" }}
                >
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
              </>
            )}

            {/* Wishlist */}
            <li className="flex items-center justify-between py-4">
              <label htmlFor="wishlistLink" className="text-sm font-medium">
                Wishlist
              </label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="wishlistLink"
                  checked={wishlistEnabled}
                  onChange={(e) => onWishlistChange(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <label htmlFor="wishlistLink"></label>
              </div>
            </li>

            {/* Contact */}
            <li className="flex items-center justify-between py-4">
              <label htmlFor="contactLink" className="text-sm font-medium">
                Contact
              </label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="contactLink"
                  name={contact?.enabled}
                  checked={contact?.enabled}
                  onChange={(e) => onContactChange(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <label htmlFor="contactLink"></label>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Section - Conditionally Rendered */}
        {contact?.enabled && (
          <div className="mt-4" id="contactLinkContent">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="text-sm font-medium">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={contact?.phoneNumber}
                    onChange={(e) =>
                      onContactInfoChange("phoneNumber", e.target.value)
                    }
                    placeholder="Enter phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div>
                <label htmlFor="whatsappNumber" className="text-sm font-medium">
                  WhatsApp Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={contact?.whatsappNumber}
                    onChange={(e) =>
                      onContactInfoChange("whatsappNumber", e.target.value)
                    }
                    placeholder="Enter WhatsApp number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="emailAddress" className="text-sm font-medium">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={contact?.emailAddress}
                    onChange={(e) =>
                      onContactInfoChange("emailAddress", e.target.value)
                    }
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
