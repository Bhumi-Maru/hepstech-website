import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";

export default function MainCategories() {
  const { toggleModal } = useAdminGlobalContext();
  const { onUpdateCategory, categories, setCategories } = useAllMediaContext();
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch all main categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/main-category"
        );
        setCategories(response.data.categories); // Adjust based on actual response structure
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCategories();
  }, [categories]);

  // Filter categories based on search term
  const searchMainCategory = categories.filter((item) =>
    item.main_category_title.toLowerCase().includes(search.toLowerCase())
  );

  // Handle individual checkbox change
  const handleCheckboxChange = (id) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((catId) => catId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle "Select All" checkbox click
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCategories([]); // Unselect all
    } else {
      setSelectedCategories(searchMainCategory.map((category) => category._id)); // Select all
    }
    setSelectAll(!selectAll);
  };

  // Delete category function
  const deleteCategory = async (id) => {
    const userConfirmed = window.confirm(
      "This image will also be deleted from all media. Are you sure?"
    );
    if (!userConfirmed) return; // Stop if the user cancels
    try {
      const response = await axios.delete(
        `http://localhost:7000/api/main-category/delete/${id}`
      );
      if (response.data.message === "Main category deleted successfully") {
        alert("Category deleted successfully.");
        setCategories(categories.filter((category) => category._id !== id)); // Update state
      }
    } catch (err) {
      alert("Error deleting category");
      console.error(err);
    }
  };

  // Bulk Delete Categories
  const bulkDeleteCategories = async () => {
    if (selectedCategories.length === 0) {
      alert("Please select at least one category to delete.");
      return;
    }
    if (
      !window.confirm("Are you sure you want to delete selected categories?")
    ) {
      return;
    }
    try {
      // Send selected category IDs for deletion
      const response = await axios.delete(
        "http://localhost:7000/api/main-category/delete-selected",
        {
          data: { ids: selectedCategories },
        }
      );
      alert(response.data.message);
      setCategories(
        categories.filter(
          (category) => !selectedCategories.includes(category._id)
        )
      );
      setSelectedCategories([]); // Clear selected categories
      setSelectAll(false); // Reset select all checkbox
    } catch (err) {
      alert("Error deleting categories");
      console.error(err);
    }
  };

  // Pagination logic
  const indexOfLastCategory = currentPage * itemsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - itemsPerPage;
  const currentCategories = searchMainCategory.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Total pages calculation
  const totalPages = Math.ceil(searchMainCategory.length / itemsPerPage);

  return (
    <>
      {/* START MAIN CATEGORIES */}
      <div className="container">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h1 className="heading-1">Main Categories</h1>
          <div className="hidden mt-4 sm:mt-0 sm:block">
            <a
              title="Add Main Category"
              className="btn btn-primary"
              role="button"
              onClick={() => toggleModal("addMainCategoryPopupModal")}
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add Main Category
            </a>
          </div>
        </div>

        {/* Search Input */}
        <div className="max-w-sm mt-4">
          <label htmlFor="searchMainCategory" className="sr-only">
            Search
          </label>
          <div className="relative rounded-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="searchMainCategory"
              id="searchMainCategory"
              className="!pl-10"
              placeholder="Search category by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table of Categories */}
        <div className="mt-4" id="mainCategoriesView">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 custom-table">
                    <thead>
                      <tr>
                        <th>
                          <input
                            type="checkbox"
                            onChange={handleSelectAll}
                            checked={selectAll}
                          />
                        </th>
                        <th>Image</th>
                        <th>Main Category Title</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCategories.length > 0 ? (
                        currentCategories.map((category) => (
                          <tr key={category._id}>
                            <td>
                              <input
                                type="checkbox"
                                checked={selectedCategories.includes(
                                  category._id
                                )}
                                onChange={() =>
                                  handleCheckboxChange(category._id)
                                }
                              />
                            </td>
                            <td>
                              <div className="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                                {category.main_image ? (
                                  (() => {
                                    const filePath = `http://localhost:7000${category.main_image.filePath}`;
                                    const fileType =
                                      category.main_image.fileType;
                                    if (fileType.startsWith("image")) {
                                      return (
                                        <img
                                          src={filePath}
                                          alt={category.main_category_title}
                                          className="w-full h-full object-cover"
                                        />
                                      );
                                    } else if (fileType.startsWith("video")) {
                                      return (
                                        <video
                                          className="w-full h-full"
                                          controls
                                        >
                                          <source
                                            src={filePath}
                                            type={fileType}
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      );
                                    } else if (fileType === "application/pdf") {
                                      return (
                                        <iframe
                                          src={filePath}
                                          className="w-full h-full"
                                          title={category.main_category_title}
                                          style={{ overflow: "hidden" }}
                                        />
                                      );
                                    } else {
                                      return (
                                        <a
                                          href={filePath}
                                          download
                                          className="text-blue-500 underline"
                                        >
                                          Download File
                                        </a>
                                      );
                                    }
                                  })()
                                ) : (
                                  <span>No File</span>
                                )}
                              </div>
                            </td>
                            <td>{category.main_category_title}</td>
                            <td>
                              <span
                                className={`badge ${
                                  category.main_category_status === "published"
                                    ? "badge-success"
                                    : "badge-danger"
                                }`}
                              >
                                {category.main_category_status}
                              </span>
                            </td>
                            <td>
                              <div className="flex items-center -ml-2 space-x-3">
                                <button
                                  className="btn-circle"
                                  title="Edit"
                                  onClick={() => {
                                    console.log(
                                      "Editing Category ID:",
                                      category._id
                                    ); // Log the category ID
                                    toggleModal(
                                      "editMainCategoryPopupModal",
                                      category._id
                                    );
                                  }}
                                >
                                  <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                  </svg>
                                </button>
                                <a
                                  title="Delete"
                                  onClick={() => deleteCategory(category._id)}
                                  className="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    ></path>
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center align-middle">
                            <div className="flex flex-row items-center justify-center text-sm font-medium text-gray-500">
                              <svg
                                className="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                                ></path>
                              </svg>
                              No Data Found
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center mt-8 sm:mt-4 sm:flex-row sm:justify-between">
          <p className="text-gray-700 showing">
            Showing{" "}
            <span id="page-first-item-number">{indexOfFirstCategory + 1}</span>{" "}
            - <span id="page-last-item-number">{indexOfLastCategory}</span> of{" "}
            <span id="totalMainCategories">{searchMainCategory.length}</span>{" "}
            main categories
          </p>
          <ul className="mt-5 pagination sm:mt-0">
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={index + 1 === currentPage ? "active" : ""}
              >
                <a
                  className="page"
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />
        <button
          type="button"
          className="btn btn-error"
          onClick={bulkDeleteCategories}
        >
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
          Bulk Delete
        </button>
      </div>
      {/* END MAIN CATEGORIES */}
    </>
  );
}
