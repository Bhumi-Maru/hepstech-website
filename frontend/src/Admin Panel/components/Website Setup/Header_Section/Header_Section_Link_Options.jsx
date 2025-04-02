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

    onOfferInfoChange,
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

  ////////////////////////////////////////////////////////////////////

  // State for categories
  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  console.log("main", mainCategories);
  console.log("sub", subCategories);

  // Initialize form data from context
  useEffect(() => {
    if (offersEnabled?.main_category) {
      setSelectedMainCategory(offersEnabled.main_category);
    }
    if (offersEnabled?.sub_category) {
      setSelectedSubCategory(offersEnabled.sub_category);
    }
  }, [offersEnabled?.main_category, offersEnabled?.sub_category]);

  // Fetch main categories
  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/main-category");
        const data = await response.json();
        setMainCategories(data.categories);
        console.log("main", data.categories);
      } catch (error) {
        console.error("Error fetching main categories:", error);
      }
    };

    fetchMainCategories();
  }, []);

  // Fetch sub-categories when main category is selected
  useEffect(() => {
    const fetchSubCategories = async () => {
      // if (selectedMainCategory) {
      try {
        const response = await fetch(
          "http://localhost:7000/api/sub-category/getAll"
        );
        const data = await response.json();
        // Filter sub-categories based on selected main category if needed
        setSubCategories(data);

        console.log(data);
      } catch (error) {
        console.error("Error fetching sub-categories:", error);
      }
    };
    // }

    fetchSubCategories();
  }, [selectedMainCategory]);

  // Updated handlers to properly update form data
  const handleMainCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedMainCategory(value);
    onOfferInfoChange("main_category", value);
    // Reset sub-category when main category changes
    setSelectedSubCategory("");
    onOfferInfoChange("sub_category", "");
  };

  const handleSubCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedSubCategory(value);
    onOfferInfoChange("sub_category", value);
  };

  /////////////////////////////////////////////////////////////////////
  console.log("selected offer image", selectedOfferImage);
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

  console.log("offer image", offerImageFile);

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
              <div
                // className="mt-4"
                id="contactLinkContent"
                style={{ borderTopWidth: "0px", paddingBottom: "20px" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
                  {/* offer Image */}
                  <div>
                    <div className="inline-block p-6 overflow-hidden border border-gray-200 rounded-md">
                      {getFilePreview(offerImageFile)}{" "}
                    </div>
                    <div className="flex items-center space-x-4">
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
                  {/* Main Category */}
                  <div className="mt-6">
                    <label
                      htmlFor="MainCategory"
                      className="text-sm font-medium"
                    >
                      Main Category
                    </label>
                    <div className="mt-1">
                      <select
                        name="mainCategory"
                        id="MainCategory"
                        value={selectedMainCategory}
                        onChange={handleMainCategoryChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
                      >
                        <option value="">Select Main Category</option>
                        {mainCategories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.main_category_title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* Sub Category */}
                  <div className="mt-6">
                    <label
                      htmlFor="SubCategory"
                      className="text-sm font-medium"
                    >
                      Sub Category
                    </label>
                    <div className="mt-1">
                      <select
                        name="subCategory"
                        id="SubCategory"
                        value={selectedSubCategory}
                        onChange={handleSubCategoryChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
                        // disabled={!selectedMainCategory}
                      >
                        <option value="">Select Sub Category</option>
                        {subCategories.map((subCategory) => (
                          <option key={subCategory._id} value={subCategory._id}>
                            {subCategory.sub_category_title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
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
