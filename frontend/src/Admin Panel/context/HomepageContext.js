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

  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    home_page_main_category: "",
    home_page_sub_category: "",
    home_page_products: "",
    home_page_status: "unpublished",
    layoutNumber: 1,
  });
  const [addMainBannerStatus, setAddMainBannerStatus] = useState(true); // default 'published'

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
        });
        setSelectedFile(currentBanner.home_page_image || null);
        setAddMainBannerStatus(
          currentBanner.home_page_status === "unpublished"
        );
      } else {
        // Reset form for new banner
        setFormData({
          home_page_main_category: "",
          home_page_sub_category: "",
          home_page_products: "",
          home_page_status: "unpublished",
          layoutNumber: 1,
        });
        setSelectedFile(null);
      }
    }
  }, [currentBanner, isOpenPopupModal.addMainBanner, isEditMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
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

      // Close the modal
      setIsOpenPopupModal(false);

      // Call onSuccess with the new/updated banner data
      fetchHomePage();
      //   onSuccess(response.data);
    } catch (error) {
      console.error("Error saving banner:", error);
      // You might want to add error handling here (e.g., show a toast message)
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

  const handleAddNew = () => {
    setCurrentBanner(null);
    setIsEditMode(false);
    setIsOpenPopupModal((prev) => ({ ...prev, addMainBanner: true }));
  };

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
        handleAddNew,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};
