import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const headerMenuContext = createContext();

export const useHeaderContext = () => {
  return useContext(headerMenuContext);
};

export const HeaderMenuProvider = ({ children }) => {
  const [mainCategory, setMainCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [headerMenuData, setHeaderMenuData] = useState({
    main_categories: [],
    pages: [],
  });

  useEffect(() => {
    const fetchAllMenuData = async () => {
      try {
        const [mainCategoryRes, subCategoryRes, productsRes, headerMenuRes] =
          await Promise.all([
            axios.get("http://localhost:7000/api/main-category"),
            axios.get("http://localhost:7000/api/sub-category/getAll"),
            axios.get("http://localhost:7000/api/products"),
            axios.get("http://localhost:7000/api/header-menu-section/getAll"),
          ]);

        setMainCategory(mainCategoryRes.data.categories);
        setSubCategory(subCategoryRes.data);
        setProducts(productsRes.data);
        setHeaderMenuData({
          main_categories: headerMenuRes.data.main_categories,
          pages: headerMenuRes.data.pages,
        });

        // console.log("Header menu pages:", headerMenuRes.data.pages);
      } catch (error) {
        console.error("Error fetching header menu data:", error);
      }
    };

    fetchAllMenuData();
  }, [headerMenuData, mainCategory]);

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

  const deleteMainCategory = async (id) => {
    try {
      await axios.delete(
        `http://localhost:7000/api/header-menu-section/category/${id}`
      );
      setHeaderMenuData((prev) => ({
        ...prev,
        main_categories: prev.main_categories.filter((cat) => cat._id !== id),
      }));
    } catch (err) {
      console.error("Error deleting main category:", err);
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
        subCategory,
        setSubCategory,
        products,
        setProducts,
        headerMenuData,
        setHeaderMenuData,
        addPageOrLink,
        deletePageOrLink,
        deleteMainCategory,
      }}
    >
      {children}
    </headerMenuContext.Provider>
  );
};
