import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";

export default function Home_Page_Section__2() {
  const { toggleStates, handleToggle, setIsOpenPopupModal } =
    useAdminGlobalContext();

  const {
    homePage,
    fetchHomePage,
    handleDelete,
    setCurrentBanner,
    isEditMode,
    setIsEditMode,
    setFormData,
    // handleEdit,
    formData,
    handleInputChange,
    saveSectionTitle,
    setSelectedMainBanner1,
  } = useHomePageContext();

  // Filter banners for layoutNumber 2
  const sectionBanners = homePage.filter((banner) => {
    return banner.home_page_layout_number?.layoutNumber === 2;
  });

  const handleAddNew = () => {
    setCurrentBanner(null);
    setIsEditMode(false);
    setFormData((prev) => ({
      ...prev,
      layoutNumber: 2, // ✅ This should be 2 for section 2
      home_page_section_title: "",
      home_page_main_category: "",
      home_page_sub_category: "",
      // home_page_status: "unpublished",
      home_page_image: null,
    }));
    setIsOpenPopupModal((prev) => ({
      ...prev,
      categorySlider8Items: true,
    }));
  };

  const handleEdit = (banner) => {
    setCurrentBanner(banner);
    setFormData({
      ...banner,
      layoutNumber: banner.home_page_layout_number?.layoutNumber || 2,
      home_page_image: banner.home_page_image?._id || null,
      home_page_main_category: banner.home_page_main_category?._id || "",
      home_page_sub_category: banner.home_page_sub_category?._id || "",
    });
    setIsEditMode(true);
    if (banner.home_page_image) {
      setSelectedMainBanner1(banner.home_page_image._id);
    }
    setIsOpenPopupModal((prev) => ({
      ...prev,
      categorySlider8Items: true,
    }));
  };

  const handleSave = async () => {
    try {
      if (!formData.sectionTitle) {
        alert("Please enter a section title");
        return;
      }

      await saveSectionTitle(formData.sectionTitle, 2);
      alert("Section title saved successfully!");
    } catch (error) {
      console.error("Failed to save section title:", error);
      alert("Failed to save section title");
    }
  };

  return (
    <>
      {/* <!-- HOME PAGE SECTION 2  CATEGORY SLIDER - 8 ITEMS --> */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between">
          {/* LAYOUT NUMBER */}
          <div className="hidden">
            <label>Layout Number</label>
            <input
              type="text"
              name="layoutNumber"
              value={formData.layoutNumber === 2}
            />
          </div>
          <label
            for="categorySection01Status"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Category Section 01 (Layout 2)
          </label>

          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="categorySection01Status"
              role="checkbox"
              tabindex="0"
              checked={toggleStates.categorySlider8Items}
              onChange={() => handleToggle("categorySlider8Items")}
            />
            <label for="categorySection01Status"></label>
          </div>
        </div>

        {toggleStates.categorySlider8Items && (
          <>
            <div className="mt-4" id="categorySection01Content">
              <div className="max-w-xs">
                <label for="" className="sr-only">
                  Enter Category Title
                </label>
                <div className="mt-1 form-input">
                  <input
                    type="text"
                    name="sectionTitle"
                    value={formData.sectionTitle || ""}
                    onChange={handleInputChange}
                    placeholder="Enter section title"
                  />
                </div>
                <div></div>
              </div>

              <div className="flex flex-col mt-5">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table className="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th>Title</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 list">
                          {sectionBanners.map((category, index) => {
                            return (
                              <>
                                <tr key={category._id || index}>
                                  <td>{index + 1}</td>
                                  <td>
                                    <div className="w-16 h-16 overflow-hidden bg-gray-200 border border-gray-200 rounded-md">
                                      {category?.home_page_image?.filePath ? (
                                        <img
                                          className="object-cover w-full h-full"
                                          src={`http://localhost:7000${category.home_page_image.filePath}`}
                                          alt={
                                            category.home_page_image.filename
                                          }
                                          loading="lazy"
                                        />
                                      ) : (
                                        <div className="flex items-center justify-center w-full h-full text-sm text-gray-500">
                                          <svg
                                            className="w-6 h-6 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            ></path>
                                          </svg>
                                        </div>
                                      )}
                                    </div>
                                  </td>
                                  <td>{category.home_page_section_title}</td>
                                  <td>
                                    {
                                      category?.home_page_main_category
                                        ?.main_category_title
                                    }
                                  </td>
                                  <td>
                                    {" "}
                                    {
                                      category?.home_page_sub_category
                                        .sub_category_title
                                    }
                                  </td>
                                  <td>
                                    {/* <div className="w-36">
                                      <span
                                        className={`badge ${
                                          category.home_page_status ===
                                          "published"
                                            ? "badge-success"
                                            : "badge-danger"
                                        }`}
                                      >
                                        {category.home_page_status}
                                      </span>
                                    </div> */}
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
                                        onClick={() => handleEdit(category)}
                                      >
                                        <svg
                                          className="w-5 h-5"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                          ></path>
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
                                          handleDelete(category._id)
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  className="w-full btn btn-white sm:w-auto"
                  // data-toggle="modal"
                  // data-target="#addCategoryModal"
                  onClick={handleAddNew}
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
                    ></path>
                  </svg>
                  Add Category
                </button>

                <div className="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button
                    className="btn btn-dark-light"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, sectionTitle: "" }))
                    }
                  >
                    Discard
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
