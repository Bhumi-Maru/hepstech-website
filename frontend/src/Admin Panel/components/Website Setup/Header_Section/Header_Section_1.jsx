import React, { useState } from "react";
import axios from "axios";
import Header_Section_Logo from "./Header_Section_Logo";
import Header_Section_Setting from "./Header_Section_Setting";
import Header_Section_Link_Options from "./Header_Section_Link_Options";
import Header_Section_Offer_Banner from "./Header_Section_Offer_Banner";
import Header_Section_admin_Logo from "./Header_Section_admin_Logo";
import Header_Section_Favicon_Icon from "./Header_Section_Favicon_Icon";

export default function Header_Section_1() {
  // State to store all form data
  const [formData, setFormData] = useState({
    headerLogo: "",
    adminLogo: "",
    faviconIcon: "",
    headerType: "Sticky",
    offersEnabled: false,
    wishlistEnabled: false,
    contactEnabled: false, // <-- Added for contact link toggle
    contact: {
      enabled: false,
      phoneNumber: "",
      whatsappNumber: "",
      emailAddress: "",
    },
    offerBanner: {
      enabled: false,
      title: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form data dynamically, including nested objects
  const handleInputChange = (name, value) => {
    setFormData((prev) => {
      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        return {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: value,
          },
        };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  // Handle form submission
  const handleSubmitHeaderSection = async () => {
    try {
      setIsSubmitting(true);

      const formDataToSend = new FormData();

      // Append images if they exist
      if (formData.headerLogo)
        formDataToSend.append("headerLogo", formData.headerLogo);
      if (formData.adminLogo)
        formDataToSend.append("adminLogo", formData.adminLogo);
      if (formData.faviconIcon)
        formDataToSend.append("faviconIcon", formData.faviconIcon);

      // Append other fields
      formDataToSend.append("headerType", formData.headerType);
      formDataToSend.append("offersEnabled", formData.offersEnabled);
      formDataToSend.append("wishlistEnabled", formData.wishlistEnabled);
      formDataToSend.append("contactEnabled", formData.contactEnabled); // <-- Added

      // Append contact details as a JSON string
      formDataToSend.append("contact", JSON.stringify(formData.contact));

      // Append offer banner details as a JSON string
      formDataToSend.append(
        "offerBanner",
        JSON.stringify(formData.offerBanner)
      );

      const response = await axios.post(
        "http://localhost:7000/api/header-section/create",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Header section created:", response.data);
      alert("Header section created successfully!");
    } catch (error) {
      console.error("Error creating header section:", error);
      alert(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h1 className="heading-1">Header Section</h1>

      <div className="mt-6 space-y-4">
        {/* Header Logo */}
        <Header_Section_Logo
          logo={formData.headerLogo}
          onLogoChange={(logo) => handleInputChange("headerLogo", logo)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-x-5 gap-y-4">
          <Header_Section_admin_Logo
            logo={formData.adminLogo}
            onLogoChange={(logo) => handleInputChange("adminLogo", logo)}
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
          offersEnabled={formData.offersEnabled}
          wishlistEnabled={formData.wishlistEnabled}
          contactEnabled={formData.contactEnabled} // <-- Corrected
          onOffersChange={(enabled) =>
            handleInputChange("offersEnabled", enabled)
          }
          onWishlistChange={(enabled) =>
            handleInputChange("wishlistEnabled", enabled)
          }
          onContactChange={(enabled) =>
            handleInputChange("contactEnabled", enabled)
          }
          contact={formData.contact}
          onContactInfoChange={(field, value) => {
            handleInputChange(`contact.${field}`, value);
            console.log(`contact.${field}`, value);
          }} // <-- Added
        />

        {/* Offer Banner */}
        <Header_Section_Offer_Banner
          enabled={formData.offerBanner.enabled}
          title={formData.offerBanner.title}
          onEnabledChange={(enabled) =>
            handleInputChange("offerBanner.enabled", enabled)
          }
          onTitleChange={(title) => {
            handleInputChange("offerBanner.title", title);
            console.log("title", title);
          }}
        />
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
