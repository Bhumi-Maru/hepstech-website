import React, { useEffect } from "react";
import axios from "axios";
import { useSubCategoryContext } from "../../../context/SubCategory_Context";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function SubCategoryTable() {
  const { toggleModal } = useAdminGlobalContext();

  const {
    setSubCategoryMediaItems,
    subCategoryMediaItems,
    currentCategories,
    selectedSubCategories,
    setSelectedSubCategories,
    selectAll,
    setSelectAll,
  } = useSubCategoryContext();

  useEffect(() => {
    const fetchSubCategory = async () => {
      try {
        const subCategoryData = await axios.get(
          "http://localhost:7000/api/sub-category/getAll"
        );
        // console.log("sub category", subCategoryData.data);
        setSubCategoryMediaItems(subCategoryData.data);
      } catch (error) {
        console.log("sub category fetch error", error);
      }
    };
    fetchSubCategory();
  }, [subCategoryMediaItems]);

  //   delete single sub category
  const deleteSubCategory = async (id) => {
    console.log("id is", id);
    try {
      const response = await axios.delete(
        `http://localhost:7000/api/sub-category/delete/${id}`
      );

      if (response.data.message === "SubCategory deleted successfully") {
        setSubCategoryMediaItems((prevItems) =>
          prevItems.filter((subCategory) => subCategory._id !== id)
        );
      }
    } catch (error) {
      alert("Error deleting sub category");
      console.error(error);
    }
  };

  // Handle individual checkbox change
  const handleCheckboxChange = (id) => {
    setSelectedSubCategories((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((catId) => catId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle "Select All" checkbox click
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedSubCategories([]); // Deselect all
    } else {
      setSelectedSubCategories(currentCategories.map((item) => item._id)); // Select all in current page
    }
    setSelectAll(!selectAll);
  };
  return (
    <>
      {/* SUB CATEGORY TABLE WITH FETCH ALL DETAILS AND DISPLAY IT IN SUB CATEGORY TABLE */}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200 custom-table">
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        type="checkbox"
                        id=""
                        name=""
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th scope="col">Image</th>
                    <th scope="col" className="nowrap">
                      Sub Category Title
                    </th>
                    <th scope="col" className="nowrap">
                      Main Category Title
                    </th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 list">
                  {currentCategories.length > 0 ? (
                    currentCategories.map((subCategory, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              type="checkbox"
                              id=""
                              name=""
                              checked={selectedSubCategories.includes(
                                subCategory._id
                              )}
                              onChange={() =>
                                handleCheckboxChange(subCategory._id)
                              }
                            />
                          </td>
                          <td>
                            <div className="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                              {subCategory.sub_image ? (
                                (() => {
                                  const filePath = `http://localhost:7000${subCategory.sub_image.filePath}`;
                                  const fileType =
                                    subCategory.sub_image.fileType;
                                  if (fileType.startsWith("image")) {
                                    return (
                                      <img
                                        src={filePath}
                                        alt={subCategory.sub_category_title}
                                        className="w-full h-full object-cover"
                                      />
                                    );
                                  } else if (fileType.startsWith("video")) {
                                    return (
                                      <video className="w-full h-full" controls>
                                        <source
                                          src={filePath}
                                          type={fileType}
                                        />
                                        Your browser does not support the video
                                        tag.
                                      </video>
                                    );
                                  } else if (fileType === "application/pdf") {
                                    return (
                                      <iframe
                                        src={filePath}
                                        className="w-full h-full"
                                        title={subCategory.sub_category_title}
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
                          <td className="sub-category nowrap">
                            {subCategory.sub_category_title}
                          </td>
                          <td className="main-category nowrap">
                            {subCategory.main_category_id &&
                            subCategory.main_category_id.main_category_title
                              ? subCategory.main_category_id.main_category_title
                              : "No Main Category"}
                          </td>

                          <td>
                            <span
                              className={`badge ${
                                subCategory.sub_category_status === "published"
                                  ? "badge-success"
                                  : "badge-danger"
                              }`}
                            >
                              {subCategory.sub_category_status}
                            </span>
                          </td>
                          <td>
                            <div className="flex items-center -ml-2 space-x-3">
                              <a
                                href="#"
                                title=""
                                className="btn-circle"
                                aria-label="Edit"
                                data-microtip-position="top"
                                role="tooltip"
                                data-toggle="modal"
                                data-target="#editSubCategoryModal"
                                onClick={() => {
                                  console.log(
                                    "sub id1222222222",
                                    subCategory._id
                                  );
                                  toggleModal(
                                    "editSubCategoryPopupModal",
                                    subCategory._id
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
                              </a>

                              <a
                                href="#"
                                title=""
                                className="btn-circle"
                                aria-label="Delete"
                                data-microtip-position="top"
                                role="tooltip"
                                onClick={() =>
                                  deleteSubCategory(subCategory._id)
                                }
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
                      );
                    })
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
    </>
  );
}
