import { createContext, useContext, useState } from "react";
import axios from "axios";

const SubCategoryContext = createContext();

export const useSubCategoryContext = () => {
  return useContext(SubCategoryContext);
};

export const SubCategoryProvider = ({ children }) => {
  // Fetch subcategory data
  const [subCategoryMediaItems, setSubCategoryMediaItems] = useState([]);
  // Searching in subcategory
  const [searchSubCategory, setSearchSubCategory] = useState("");
  // Pagination in subcategory
  const [currentPage, setCurrentPage] = useState(1);
  // selecte sub category data
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  // Items per page
  const itemsPerPage = 10;
  //////////////////////////////////////////////////////////////////////////////////////
  // Filtering subcategories based on search input
  const subCategorySearchFilter = subCategoryMediaItems.filter((item) =>
    item.sub_category_title
      .toLowerCase()
      .includes(searchSubCategory.toLowerCase())
  );

  //////////////////////////////////////////////////////////////////////////////////////
  // bulk and selected sub category delete
  // bulk delete function
  const bulkDeleteCategories = async () => {
    // Check if 'select all' is selected
    if (selectAll) {
      // User has selected all categories, delete all subcategories
      if (
        !window.confirm("Are you sure you want to delete all subcategories?")
      ) {
        return;
      }

      try {
        const response = await axios.delete(
          "http://localhost:7000/api/sub-category/deleteAll"
        );
        alert(response.data.message);

        // Clear all data in the context
        setSubCategoryMediaItems([]);
        setSelectedSubCategories([]);
        setSelectAll(false);
      } catch (error) {
        alert("Error deleting all subcategories");
        console.error(error);
      }
    } else {
      // User has selected specific subcategories, delete selected ones
      if (selectedSubCategories.length === 0) {
        alert("Please select at least one category to delete.");
        return;
      }
      if (
        !window.confirm("Are you sure you want to delete selected categories?")
      ) {
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:7000/api/sub-category/deleteSelected",
          {
            ids: selectedSubCategories,
          }
        );
        alert(response.data.message);

        // Update the state by removing the deleted subcategories
        setSubCategoryMediaItems((prevItems) =>
          prevItems.filter((item) => !selectedSubCategories.includes(item._id))
        );
        setSelectedSubCategories([]);
        setSelectAll(false);
      } catch (error) {
        alert("Error deleting selected subcategories");
        console.error(error);
      }
    }
  };

  ////////////////////////////////////////////////////////////////////////////////
  // Calculate indexes for pagination
  const indexOfLastCategory = currentPage * itemsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - itemsPerPage;
  const currentCategories = subCategorySearchFilter.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Total pages calculation
  const totalPages =
    Math.ceil(subCategorySearchFilter.length / itemsPerPage) || 1;

  return (
    <SubCategoryContext.Provider
      value={{
        subCategoryMediaItems,
        setSubCategoryMediaItems,
        subCategorySearchFilter,
        searchSubCategory,
        setSearchSubCategory,
        totalPages,
        currentPage,
        handlePageChange,
        indexOfLastCategory,
        indexOfFirstCategory,
        currentCategories, // Provide current filtered categories
        setCurrentPage,
        // bulk and selected sub category delete
        bulkDeleteCategories,
        // select sub category
        selectedSubCategories,
        setSelectedSubCategories,
        selectAll,
        setSelectAll,
      }}
    >
      {children}
    </SubCategoryContext.Provider>
  );
};
