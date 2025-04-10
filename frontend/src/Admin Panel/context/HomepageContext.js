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
          // home_page_image: currentBanner.home_page_image?._id || "", // Make sure to set this
        });
        // Set the selected image if it exists
        if (currentBanner.home_page_image) {
          setSelectedMainBanner1(currentBanner.home_page_image._id);
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
        home_page_image: selectedMainBanner1, // This should be the _id
      };

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
        selectedMainBanner1,
        setSelectedMainBanner1,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};
