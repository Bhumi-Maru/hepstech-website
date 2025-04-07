import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const PageContext = createContext();

export const usePageContext = () => {
  return useContext(PageContext);
};

export const PageProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState();
  const [currentPage, setCurrentPage] = useState(null); // Track the page being edited
  //   const [isEditingId, setIsEditingId] = useState(null);

  useEffect(() => {
    fetchPageContent();
  }, []);

  const fetchPageContent = async () => {
    try {
      const data = await axios.get(
        "http://localhost:7000/api/store-setting/page/getAll"
      );
      setData(data.data);
    } catch (error) {
      console.error("Failed to fetch page content:", error);
    }
  };

  const createPage = async (pageData) => {
    try {
      const res = await axios.post(
        "http://localhost:7000/api/store-setting/page/create",
        pageData
      );
      setFormData(res.data);
      fetchPageContent(); // Refresh the list
    } catch (error) {
      console.error("Error creating page:", error);
    }
  };

  const updatePage = async (id, pageData) => {
    try {
      await axios.put(
        `http://localhost:7000/api/store-setting/page/update/${id}`,
        pageData
      );
      fetchPageContent(); // Refresh the list
    } catch (error) {
      console.error("Error updating page:", error);
      throw error;
    }
  };

  const deletePage = async (id) => {
    try {
      await axios.delete(
        `http://localhost:7000/api/store-setting/page/delete/${id}`
      );
      fetchPageContent(); // Refresh the list
    } catch (error) {
      console.error("Error deleting page:", error);
      throw error;
    }
  };

  return (
    <PageContext.Provider
      value={{
        data,
        currentPage,
        setCurrentPage,
        setData,
        createPage,
        updatePage,
        deletePage,
        fetchPageContent,
        // isEditingId,
        // setIsEditingId,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
