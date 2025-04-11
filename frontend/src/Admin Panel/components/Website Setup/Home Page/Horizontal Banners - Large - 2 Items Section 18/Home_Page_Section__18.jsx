import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";

export default function Home_Page_Section__18() {
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
    handleEdit,
  } = useHomePageContext();

  // Filter banners for layoutNumber 18
  const sectionBanners = homePage.filter(
    (banner) => banner.home_page_layout_number?.layoutNumber === 18
  );

  const handleAddNew = () => {
    setCurrentBanner(null);
    setIsEditMode(false);
    setFormData((prev) => ({
      ...prev,
      layoutNumber: 18, // ✅ This should be 18 for section 18
      home_page_main_category: "",
      home_page_sub_category: "",
      home_page_products: "",
      home_page_status: "unpublished",
      home_page_image: null,
    }));
    setIsOpenPopupModal((prev) => ({
      ...prev,
      horizontal_Banners_Large_2_Items_Section_18: true,
    }));
  };

  return (
    <>
      {/* [HOME PAGE SECTION 18] Horizontal Banners - Large - 2 Items  */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between space-x-8">
          <label
            htmlFor="horizontalBanners07Status"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Horizontal Banners - Large - 2 Items &nbsp;
            <span className="badge-success">(Layout 18)</span>
          </label>
          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="horizontalBanners07Status"
              role="checkbox"
              tabIndex="0"
              checked={toggleStates.horizontal_Banners_Large_2_Items_Section_18}
              onChange={() =>
                handleToggle("horizontal_Banners_Large_2_Items_Section_18")
              }
            />
            <label htmlFor="horizontalBanners07Status"></label>
          </div>
        </div>

        {toggleStates.horizontal_Banners_Large_2_Items_Section_18 && (
          <>
            <div className="mt-4" id="horizontalBanners07Content">
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table className="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {sectionBanners.map((banner, index) => (
                            <tr key={banner._id}>
                              <td>{index + 1}</td>
                              <td>
                                <div className="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                  {banner.home_page_image?.filePath ? (
                                    <img
                                      className="object-cover w-full h-full"
                                      src={`http://localhost:7000${banner.home_page_image.filePath}`}
                                      alt={banner.home_page_image.filename}
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
                              <td>
                                {banner.home_page_main_category
                                  ?.main_category_title || "-"}
                              </td>
                              <td>
                                {banner.home_page_sub_category
                                  ?.sub_category_title || "-"}
                              </td>
                              <td>
                                {banner.home_page_products?.productTitle || "-"}
                              </td>
                              <td>
                                <div className="w-36">
                                  <span
                                    className={`badge ${
                                      banner.home_page_status === "published"
                                        ? "badge-success"
                                        : "badge-danger"
                                    }`}
                                  >
                                    {banner.home_page_status}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="flex items-center -ml-2 space-x-3">
                                  <a
                                    title="Edit"
                                    className="btn-circle"
                                    onClick={() => handleEdit(banner)}
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
                                    title="Delete"
                                    className="btn-circle"
                                    onClick={() => handleDelete(banner._id)}
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
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  className="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add Banner
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
