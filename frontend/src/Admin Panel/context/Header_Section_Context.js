import axios from "axios";
import { createContext, useState, useContext } from "react";

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
    headerType: "Sticky",
    offersEnabled: false,
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
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedWebLogo, setSelectedWebLogo] = useState(null);

  // Add this function to handle web logo selection
  const handleWebLogoSelect = (file) => {
    if (file) {
      // Update the selected web logo ID for reference
      setSelectedWebLogo(file._id);

      // Update the actual form data with the logo URL
      handleInputChange("headerLogo", file.fileUrl);

      // Return the file URL for preview
      return file.fileUrl;
    }
    return null;
  };

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

      return updatedFormData;
    });
  };

  // Event Handlers
  const onLogoChange = (logo) =>
    handleInputChange("headerLogo", selectedWebLogo);
  const onAdminLogoChange = (logo) => handleInputChange("adminLogo", logo);
  const onFaviconChange = (favicon) =>
    handleInputChange("faviconIcon", favicon);
  const onHeaderTypeChange = (type) => handleInputChange("headerType", type);
  const onOffersChange = (enabled) =>
    handleInputChange("offersEnabled", enabled);
  const onWishlistChange = (enabled) =>
    handleInputChange("wishlistEnabled", enabled);
  const onContactChange = (enabled) =>
    handleInputChange("contactEnabled", enabled);
  const onContactInfoChange = (field, value) =>
    handleInputChange(`contact.${field}`, value);
  const onEnabledChange = (enabled) =>
    handleInputChange("offerBanner.enabled", enabled);
  const onTitleChange = (title) =>
    handleInputChange("offerBanner.title", title);

  // Submit form
  const handleSubmitHeaderSection = async () => {
    try {
      setIsSubmitting(true);
      const formDataToSend = new FormData();

      if (formData.headerLogo)
        formDataToSend.append("headerLogo", formData.headerLogo);
      if (formData.adminLogo)
        formDataToSend.append("adminLogo", formData.adminLogo);
      if (formData.faviconIcon)
        formDataToSend.append("faviconIcon", formData.faviconIcon);

      formDataToSend.append("headerType", formData.headerType);
      formDataToSend.append("offersEnabled", formData.offersEnabled);
      formDataToSend.append("wishlistEnabled", formData.wishlistEnabled);
      formDataToSend.append("contactEnabled", formData.contactEnabled);
      formDataToSend.append("contact", JSON.stringify(formData.contact));
      formDataToSend.append(
        "offerBanner",
        JSON.stringify(formData.offerBanner)
      );

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
        offersEnabled: formData.offersEnabled,
        wishlistEnabled: formData.wishlistEnabled,
        contactEnabled: formData.contactEnabled,
        contact: formData.contact,
        offerBanner: formData.offerBanner,

        onLogoChange,
        onAdminLogoChange, // Renamed to match admin logo
        onFaviconChange,
        onHeaderTypeChange,
        onOffersChange,
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
        handleWebLogoSelect,
      }}
    >
      {children}
    </HeaderSectionContext.Provider>
  );
};
