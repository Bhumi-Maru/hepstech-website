import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function MainCategories() {
  const { toggleModal } = useAdminGlobalContext();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

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

  // Delete category function
  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/api/main-category/delete/${id}`
      );
      if (response.data.message === "Main category deleted successfully") {
        setCategories(categories.filter((category) => category._id !== id)); // Update state to remove deleted category
        // alert("Main category deleted successfully");
      }
    } catch (err) {
      alert("Error deleting category");
      console.error(err);
    }
  };

  return (
    <>
      {/* START MAIN CATEGORIES */}
      <div className="container">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          {/* <!-- PAGE TITLE --> */}
          <h1 className="heading-1">Main Categories</h1>

          <div className="hidden mt-4 sm:mt-0 sm:block">
            <a
              title="Add Main Category"
              className="btn btn-primary"
              role="button"
              data-toggle="modal"
              data-target="#createMainCategoryModal"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add Main Category
            </a>
          </div>
        </div>

        <div className="max-w-sm mt-4">
          <label for="searchMainCategory" className="sr-only">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
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
            />
          </div>
        </div>

        <div className="mt-4" id="mainCategoriesView">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 custom-table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <input type="checkbox" id="" name="" />
                        </th>
                        <th scope="col">Image</th>
                        <th scope="col" className="nowrap">
                          Main Category Title
                        </th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 list">
                      {categories.map((category) => (
                        <tr key={category._id}>
                          <td>
                            <input type="checkbox" id={category._id} name="" />
                          </td>
                          <td>
                            <div className="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                              <img
                                src={`http://localhost:7000${category.main_image.filePath}`}
                                alt={category.main_category_title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </td>
                          <td className="category-name nowrap">
                            {category.main_category_title}
                          </td>
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
                              <a
                                href="#"
                                title="Edit"
                                className="btn-circle"
                                aria-label="Edit"
                                data-microtip-position="top"
                                role="tooltip"
                                data-toggle="modal"
                                data-target="#editMainCategoryModal"
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
                              </a>

                              <a
                                href="#"
                                onClick={() => deleteCategory(category._id)}
                                title="Delete"
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
                                  />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                    <tfoot className="hidden not-found">
                      <tr>
                        <td
                          colspan="7"
                          className="px-4 py-3 text-center bg-white rounded-b-lg"
                        >
                          <div className="flex items-center justify-center text-sm font-medium text-gray-500">
                            <svg
                              className="w-6 h-6 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                            No Data Found
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 sm:mt-4 sm:flex-row sm:justify-between">
            <p className="text-gray-700 showing">
              Showing <span id="page-first-item-number">1</span> -
              <span id="page-last-item-number">5</span> of
              <span id="totalMainCategories">40</span> main categories
            </p>

            <ul className="mt-5 pagination sm:mt-0"></ul>
          </div>
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />

        <button type="button" className="btn btn-error">
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Bulk Delete
        </button>
      </div>
      {/* END MAIN CATEGORIES */}
    </>
  );
}
