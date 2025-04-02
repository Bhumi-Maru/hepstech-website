import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const HeaderSectionContext = createContext();

// Custom hook to use context
export const useHeaderSection = () => {
  return useContext(HeaderSectionContext);
};

// Provider Component
export const HeaderSectionProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    headerLogo: "",
    adminLogo: "",
    faviconIcon: "",
    headerType: "sticky",
    offersEnabled: {
      enabled: false,
      offer_Image: "",
      main_category: "",
      sub_category: "",
    },
    wishlistEnabled: false,
    contactEnabled: false,
    contact: {
      enabled: false,
      phoneNumber: "",
      whatsappNumber: "",
      emailAddress: "",
    },
    offerBanner: {
      enabled: false,
      title: "",
    }, // Link Option
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // WEB LOGO
  const [selectedWebLogo, setSelectedWebLogo] = useState(null);
  // ADMIN LOG
  const [selectedAdminLogo, setSelectedAdminLogo] = useState(null);
  // Favicon Icon
  const [selectedFaviconIcon, setSelectedFaviconIcon] = useState(null);
  //offer image
  const [selectedOfferImage, setSelectedOfferImage] = useState(null);

  // Update form data dynamically
  const handleInputChange = (name, value) => {
    setFormData((prev) => {
      let updatedFormData = { ...prev };

      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        updatedFormData[parent] = {
          ...prev[parent],
          [child]: value,
        };
      } else {
        updatedFormData[name] = value;
      }

      // If headerLogo is updated, also update selectedWebLogo
      if (name === "headerLogo") {
        setSelectedWebLogo(value);
      }

      // If adminLogo is updated, also update selectedAdminLogo
      if (name === "adminLogo") {
        setSelectedAdminLogo(value);
      }

      if (name === "faviconIcon") {
        setSelectedFaviconIcon(value);
      }

      if (name === "offer_Image") {
        setSelectedOfferImage(value);
      }

      return updatedFormData;
    });
  };

  // Event Handlers

  const onHeaderTypeChange = (type) => handleInputChange("headerType", type);
  const onOffersChange = (enabled) =>
    handleInputChange("offersEnabled.enabled", enabled);
  const onWishlistChange = (enabled) =>
    handleInputChange("wishlistEnabled", enabled);
  const onContactChange = (enabled) => {
    handleInputChange("contact.enabled", enabled); // ✅ Updates contact.enabled instead of contactEnabled
  };

  const onOfferInfoChange = (field, value) => {
    handleInputChange(`offersEnabled.${field}`, value);
  };

  const onContactInfoChange = (field, value) => {
    handleInputChange(`contact.${field}`, value);
  };

  const onEnabledChange = (enabled) =>
    handleInputChange("offerBanner.enabled", enabled);
  const onTitleChange = (title) =>
    handleInputChange("offerBanner.title", title);

  // Submit form
  const handleSubmitHeaderSection = async () => {
    try {
      setIsSubmitting(true);
      const formDataToSend = new FormData();

      // Append all fields
      if (formData.headerLogo)
        formDataToSend.append("headerLogo", formData.headerLogo);
      if (formData.adminLogo)
        formDataToSend.append("adminLogo", formData.adminLogo);
      if (formData.faviconIcon)
        formDataToSend.append("faviconIcon", formData.faviconIcon);

      formDataToSend.append("headerType", formData.headerType);

      // Properly structure offersEnabled data with consistent bracket notation
      formDataToSend.append(
        "offersEnabled[enabled]",
        formData.offersEnabled.enabled
      );

      if (formData?.offersEnabled.offer_Image) {
        formDataToSend.append(
          "offersEnabled[offer_Image]",
          formData?.offersEnabled.offer_Image
        );
      }

      // Always send these fields, even if empty
      formDataToSend.append(
        "offersEnabled[main_category]",
        formData.offersEnabled.main_category || ""
      );
      formDataToSend.append(
        "offersEnabled[sub_category]",
        formData.offersEnabled.sub_category || ""
      );

      formDataToSend.append("wishlistEnabled", formData.wishlistEnabled);

      // Contact info
      formDataToSend.append("contact[enabled]", formData.contact.enabled);
      formDataToSend.append(
        "contact[phoneNumber]",
        formData.contact.phoneNumber || ""
      );
      formDataToSend.append(
        "contact[whatsappNumber]",
        formData.contact.whatsappNumber || ""
      );
      formDataToSend.append(
        "contact[emailAddress]",
        formData.contact.emailAddress || ""
      );

      // Offer banner
      formDataToSend.append(
        "offerBanner[enabled]",
        formData.offerBanner.enabled
      );
      formDataToSend.append(
        "offerBanner[title]",
        formData.offerBanner.title || ""
      );

      // Debug: Log what's being sent
      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }

      const response = await axios.post(
        "http://localhost:7000/api/header-section/create",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
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
    <HeaderSectionContext.Provider
      value={{
        formData,
        logo: formData.headerLogo,
        adminLogo: formData.adminLogo, // ✅ Separate 'adminLogo'
        favicon: formData.faviconIcon,
        headerType: formData.headerType,
        offersEnabled: formData.offersEnabled, // Link option
        wishlistEnabled: formData.wishlistEnabled,
        // contactEnabled: formData.contactEnabled,
        contact: formData.contact,
        offerBanner: formData.offerBanner,

        // onLogoChange,
        // onAdminLogoChange, // Renamed to match admin logo
        // onFaviconChange,
        onHeaderTypeChange,
        onOffersChange,
        onOfferInfoChange,
        onWishlistChange,
        onContactChange,
        onContactInfoChange,
        onEnabledChange,
        onTitleChange,

        isSubmitting,
        handleSubmitHeaderSection,
        handleInputChange, // ✅ Provide handleInputChange

        // web logo
        setSelectedWebLogo,
        selectedWebLogo,
        // handleWebLogoSelect,

        // admin logo
        selectedAdminLogo,
        setSelectedAdminLogo,

        // favicon icon
        selectedFaviconIcon,
        setSelectedFaviconIcon,

        // offer image
        selectedOfferImage,
        setSelectedOfferImage,
      }}
    >
      {children}
    </HeaderSectionContext.Provider>
  );
};
