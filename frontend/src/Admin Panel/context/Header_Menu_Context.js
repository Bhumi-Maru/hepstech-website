import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const headerMenuContext = createContext();

export const useHeaderContext = () => {
  return useContext(headerMenuContext);
};

export const HeaderProvider = ({ children }) => {
  const [mainCategory, setMainCategory] = useState([]);
  const [headerMenuData, setHeaderMenuData] = useState({
    main_categories: [],
    pages: [],
  });

  useEffect(() => {
    const fetchAllMenuData = async () => {
      try {
        const [mainCategoryRes, headerMenuRes] = await Promise.all([
          axios.get("http://localhost:7000/api/main-category"),
          axios.get("http://localhost:7000/api/header-menu-section/getAll"),
        ]);

        setMainCategory(mainCategoryRes.data.categories);
        setHeaderMenuData({
          main_categories: headerMenuRes.data.main_categories,
          pages: headerMenuRes.data.pages,
        });

        console.log("Header menu pages:", headerMenuRes.data.pages);
      } catch (error) {
        console.error("Error fetching header menu data:", error);
      }
    };

    fetchAllMenuData();
  }, []);

  const addPageOrLink = async (newItem) => {
    try {
      const response = await axios.post(
        "http://localhost:7000/api/header-menu-section/pages",
        newItem
      );

      setHeaderMenuData((prev) => ({
        ...prev,
        pages: [...prev.pages, response.data],
      }));

      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const deletePageOrLink = async (id) => {
    try {
      await axios.delete(
        `http://localhost:7000/api/header-menu-section/pages/${id}`
      );
      setHeaderMenuData((prev) => ({
        ...prev,
        pages: prev.pages.filter((item) => item._id !== id),
      }));
    } catch (err) {
      throw err;
    }
  };

  return (
    <headerMenuContext.Provider
      value={{
        mainCategory,
        setMainCategory,
        headerMenuData,
        setHeaderMenuData,
        addPageOrLink,
        deletePageOrLink,
      }}
    >
      {children}
    </headerMenuContext.Provider>
  );
};
