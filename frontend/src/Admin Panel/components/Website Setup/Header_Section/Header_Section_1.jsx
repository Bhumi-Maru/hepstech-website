import React, { useState } from "react";
import Header_Section_Logo from "./Header_Section_Logo";
import Header_Section_Setting from "./Header_Section_Setting";
import Header_Section_Link_Options from "./Header_Section_Link_Options";
import Header_Section_Offer_Banner from "./Header_Section_Offer_Banner";
import Header_Section_admin_Logo from "./Header_Section_admin_Logo";
import Header_Section_Favicon_Icon from "./Header_Section_Favicon_Icon";
import { useHeaderSection } from "../../../context/Header_Section_Context";

export default function Header_Section_1() {
  const {
    formData,
    isSubmitting,
    handleSubmitHeaderSection,
    handleInputChange,
    setSelectedWebLogo,
    selectedWebLogo,
    // admin logo
    selectedAdminLogo,
    setSelectedAdminLogo,
  } = useHeaderSection();
  return (
    <div className="container">
      <h1 className="heading-1">Header Section</h1>

      <div className="mt-6 space-y-4">
        {/* Header Logo */}
        <Header_Section_Logo
          headerLogo={formData.headerLogo}
          onLogoChange={(logo) => handleInputChange("headerLogo", logo)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-x-5 gap-y-4">
          <Header_Section_admin_Logo
            adminLogo={formData.adminLogo}
            onAdminLogoChange={(logo) => handleInputChange("adminLogo", logo)}
          />
          <Header_Section_Favicon_Icon
            favicon={formData.faviconIcon}
            onFaviconChange={(favicon) =>
              handleInputChange("faviconIcon", favicon)
            }
          />
        </div>

        {/* Header Settings */}
        <Header_Section_Setting
          headerType={formData.headerType}
          onHeaderTypeChange={(type) => handleInputChange("headerType", type)}
        />

        {/* Link Options */}
        <Header_Section_Link_Options
          offerImage={formData?.offersEnabled?.offer_Image}
          onOfferImageChange={(offerImage) =>
            handleInputChange("offersEnabled.offer_Image", offerImage)
          }
        />

        {/* Offer Banner */}
        <Header_Section_Offer_Banner />
      </div>

      {/* Buttons */}
      <hr className="mt-6 mb-5 border-gray-200" />
      <div className="flex items-center justify-end space-x-4">
        <button type="button" className="btn btn-dark-light">
          Discard
        </button>

        <button
          type="button"
          className={`btn btn-primary ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : ""
          }`}
          onClick={handleSubmitHeaderSection}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create"}
        </button>
      </div>
    </div>
  );
}
