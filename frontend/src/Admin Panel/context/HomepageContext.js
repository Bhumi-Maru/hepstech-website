import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAdminGlobalContext } from "./Admin_Global_Context";

export const HomePageContext = createContext();

export const useHomePageContext = () => {
  return useContext(HomePageContext);
};

export const HomePageProvider = ({ children }) => {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  const [homePage, setHomePage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentBanner, setCurrentBanner] = useState(null);
  console.log("current home page", currentBanner);
  const [isEditMode, setIsEditMode] = useState(false);
  console.log("edit mode", isEditMode);

  const [addMainBannerStatus, setAddMainBannerStatus] = useState(true); // default 'published'
  const [selectedMainBanner1, setSelectedMainBanner1] = useState(null);

  const [formData, setFormData] = useState({
    // home_page_layout_number: "",
    home_page_main_category: "",
    home_page_sub_category: "",
    home_page_products: "",
    home_page_status: "unpublished",
    home_page_image: null,
    home_page_section_title: "",
    home_page_layout_type: "",
    home_page_flash_sale: "",
    home_page_testimonial: "",
    // layoutNumber: 1,
  });

  // Add this useEffect to keep formData in sync
  // useEffect(() => {
  //   if (selectedMainBanner1) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       home_page_image: selectedMainBanner1,
  //     }));
  //   }
  // }, [selectedMainBanner1]);

  // Update the edit mode initialization
  // useEffect(() => {
  //   if (isOpenPopupModal.addMainBanner) {
  //     if (isEditMode && currentBanner) {
  //       setFormData({
  //         // ... other fields ...
  //         home_page_image: currentBanner.home_page_image?._id || "",
  //       });
  //       if (currentBanner.home_page_image) {
  //         setSelectedMainBanner1(currentBanner.home_page_image._id);
  //       }
  //     } else {
  //       // Reset for new banner
  //       setFormData((prev) => ({
  //         ...prev,
  //         home_page_image: "",
  //       }));
  //       setSelectedMainBanner1(null);
  //     }
  //   }
  // }, [currentBanner, isOpenPopupModal.addMainBanner, isEditMode]);

  const handleMainBannerSlider1Change = (imageId) => {
    setSelectedMainBanner1(imageId);
    setFormData((prev) => ({
      ...prev,
      home_page_image: imageId,
    }));
  };

  // Update the useEffect for edit mode
  useEffect(() => {
    if (isOpenPopupModal.addMainBanner) {
      if (isEditMode && currentBanner) {
        setFormData({
          home_page_main_category:
            currentBanner.home_page_main_category?._id || "",
          home_page_sub_category:
            currentBanner.home_page_sub_category?._id || "",
          home_page_products: currentBanner.home_page_products?._id || "",
          home_page_status: currentBanner?.home_page_status || "unpublished",
          layoutNumber:
            currentBanner.home_page_layout_number?.layoutNumber || 1,
          home_page_section_title: currentBanner?.home_page_section_title || "",
          home_page_testimonial: currentBanner?.home_page_testimonial || "",
        });
        // Set the selected image if it exists
        if (currentBanner.home_page_image) {
          setSelectedMainBanner1(currentBanner.home_page_image._id);
          setFormData((prev) => ({
            ...prev,
            home_page_image: currentBanner.home_page_image._id,
          }));
        }
        setAddMainBannerStatus(
          currentBanner.home_page_status === "unpublished"
        );
      } else {
        // Reset form for new banner
        setFormData({
          home_page_main_category: "",
          home_page_sub_category: "",
          home_page_products: "",
          home_page_image: "",
          home_page_status: "unpublished",
          layoutNumber: 1,
        });
        setSelectedMainBanner1(null);
      }
    }
  }, [currentBanner, isOpenPopupModal.addMainBanner, isEditMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        home_page_image: selectedMainBanner1,
      };

      // Clean up empty strings for ObjectId fields
      if (!payload.home_page_main_category)
        delete payload.home_page_main_category;
      if (!payload.home_page_sub_category)
        delete payload.home_page_sub_category;
      if (!payload.home_page_products) delete payload.home_page_products;

      let response;
      if (isEditMode) {
        response = await axios.put(
          `http://localhost:7000/api/homepage/${currentBanner._id}`,
          payload
        );
      } else {
        response = await axios.post(
          "http://localhost:7000/api/homepage",
          payload
        );
      }

      setFormData({
        home_page_main_category: "",
        home_page_sub_category: "",
        home_page_products: "",
        home_page_image: null,
        home_page_status: "unpublished",
        layoutNumber: 1,
      });
      setSelectedMainBanner1(null);
      setIsOpenPopupModal(false);
      fetchHomePage();
    } catch (error) {
      console.error("Error saving banner:", error);
    }
  };

  // Add this function

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this banner?")) {
        await axios.delete(`http://localhost:7000/api/homepage/${id}`);
        fetchHomePage();
      }
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  };

  const fetchHomePage = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:7000/api/homepage");
      setHomePage(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch homepage data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomePage();
  }, []);

  const handleEdit = (banner) => {
    setCurrentBanner(banner);
    console.log(" i am edit", banner._id);

    setIsEditMode(true);
    setIsOpenPopupModal((prev) => ({ ...prev, addMainBanner: true }));
  };

  // const handleAddNew = () => {
  //   setCurrentBanner(null);
  //   setIsEditMode(false);
  //   setIsOpenPopupModal((prev) => ({ ...prev, addMainBanner: true }));
  // };

  return (
    <HomePageContext.Provider
      value={{
        homePage,
        loading,
        error,
        fetchHomePage,
        handleDelete,
        setCurrentBanner,
        currentBanner,
        isEditMode,
        setIsEditMode,
        handleInputChange,
        handleSubmit,
        formData,
        setFormData,
        handleEdit,
        // handleAddNew,
        handleMainBannerSlider1Change,
        selectedMainBanner1,
        setSelectedMainBanner1,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};
