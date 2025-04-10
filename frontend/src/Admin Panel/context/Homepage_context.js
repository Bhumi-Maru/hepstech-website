import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const HomePageContext = createContext();

export const useHomePageContext = () => {
  return useContext(HomePageContext);
};

export const HomePageProvider = ({ children }) => {
  const [homePage, setHomePage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentBanner, setCurrentBanner] = useState(null);
  console.log("current home page", currentBanner);
  const [isEditMode, setIsEditMode] = useState(false);
  console.log("edit mode", isEditMode);

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

  return (
    <HomePageContext.Provider
      value={{
        homePage,
        loading,
        error,
        fetchHomePage,
        // handleAddNew,
        handleDelete,
        setCurrentBanner,
        currentBanner,
        isEditMode,
        setIsEditMode,
        onSuccess: fetchHomePage,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};
