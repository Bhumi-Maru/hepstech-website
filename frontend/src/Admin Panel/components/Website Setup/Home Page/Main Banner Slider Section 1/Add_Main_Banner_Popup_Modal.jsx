import React, { useState, useEffect } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
// import useSelect2AndList from "../../../../hooks/useSelect2AndList";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";

export default function Add_Main_Banner_Popup_Modal() {
  const { setIsOpenPopupModal, isOpenPopupModal } = useAdminGlobalContext();
  const { mainCategory, subCategory, products } = useHeaderContext();

  const { isEditMode, handleInputChange, handleSubmit, formData, setFormData } =
    useHomePageContext();

  console.log("current banner", isEditMode);

  // useSelect2AndList();
  return (
    <>
      {/* START ADD  MAIN BANNER MODAL SECTION 1  */}
      <div
        className={`modal ${isOpenPopupModal.addMainBanner ? "active" : ""}`}
        id="addMainBannerModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-xl">
          <div
            className="modal-content max-w-full overflow-x-hidden"
            role="document"
          >
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-medium truncate">
                Add Main Banner
              </h5>

              {/* <!-- close button --> */}
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpenPopupModal(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* LAYOUT NUMBER */}
                  <div className="hidden">
                    <label>Layout Number</label>
                    <input
                      type="text"
                      name="layoutNumber"
                      value={formData.layoutNumber}
                    />
                  </div>
                  {/* MAIN CATEGORY */}
                  <div>
                    <label for=""> Select Main Category </label>
                    <div className="relative mt-1">
                      <select
                        className=""
                        id="selectMainCategory"
                        name="home_page_main_category"
                        value={formData.home_page_main_category}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Main Category</option>
                        {mainCategory.map((mainCategory) => {
                          return (
                            <option
                              key={mainCategory._id}
                              value={mainCategory._id}
                            >
                              {mainCategory.main_category_title}
                            </option>
                          );
                        })}
                      </select>
import { useHeaderContext } from "../../../../context/Header_Menu_Context";
import axios from "axios";
import { useHomePageContext } from "../../../../context/Homepage_context";
export default function Add_Main_Banner_Popup_Modal() {
  const { setIsOpenPopupModal, isOpenPopupModal } = useAdminGlobalContext();
  const { mainCategory, subCategory, products } = useHeaderContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    home_page_main_category: "",
    home_page_sub_category: "",
    home_page_products: "",
    home_page_status: "published",
    layoutNumber: 1,
  });
  const { currentBanner, isEditMode, onSuccess } = useHomePageContext();

  console.log("current banner", isEditMode);

  useEffect(() => {
    if (isOpenPopupModal.addMainBanner) {
      if (isEditMode && currentBanner) {
        setFormData({
          home_page_main_category:
            currentBanner.home_page_main_category?._id || "",
          home_page_sub_category:
            currentBanner.home_page_sub_category?._id || "",
          home_page_products: currentBanner.home_page_products?._id || "",
          home_page_status: currentBanner.home_page_status || "published",
          layoutNumber:
            currentBanner.home_page_layout_number?.layoutNumber || 1,
        });
        setSelectedFile(currentBanner.home_page_image || null);
      } else {
        // Reset form for new banner
        setFormData({
          home_page_main_category: "",
          home_page_sub_category: "",
          home_page_products: "",
          home_page_status: "published",
          layoutNumber: 1,
        });
        setSelectedFile(null);
      }
    }
  }, [currentBanner, isOpenPopupModal.addMainBanner, isEditMode]);

                  {/* SUB CATEGORY */}
                  <div>
                    <label for=""> Select Sub Category </label>
                    <div className="relative mt-1">
                      <select
                        className=""
                        id="selectSubCategory"
                        name="home_page_sub_category"
                        value={formData.home_page_sub_category}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Sub Category</option>
                        {subCategory.map((subCategory) => {
                          return (
                            <option
                              key={subCategory._id}
                              value={subCategory._id}
                            >
                              {subCategory.sub_category_title}
                            </option>
                          );
                        })}
                      </select>
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData };
      let response;

      if (isEditMode) {
        response = await axios.put(
          `http://localhost:7000/api/homepage/${currentBanner._id}`,
          payload
        );
      } else {
        response = await axios.post(
          "http://localhost:7000/api/homepage",
          payload
        );
      }

                  {/* PRODUCTS */}
                  {/* <div>
                    <label for=""> Select Product </label>
                    <div className="relative mt-1">
                      <select
                        className="select2-hidden-accessible"
                        id="selectProduct_Section_1"
                        name="home_page_products"
                        value={formData.home_page_products}
                        onChange={handleInputChange}
                        data-select2-id="select2-data-selectProduct"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="select2-data-6-6ixp">
                          Select Product
                        </option>
                        {products.map((product) => {
                          return (
                            <option
                              key={product._id}
                              value={product._id}
                              data-select2-id="select2-data-9-ijly"
                            >
                              {product.productTitle}
                            </option>
                          );
                        })}
                      </select>
      // Close the modal
      setIsOpenPopupModal(false);

      // Call onSuccess with the new/updated banner data
      onSuccess(response.data);
    } catch (error) {
      console.error("Error saving banner:", error);
      // You might want to add error handling here (e.g., show a toast message)
    }
  };
  return (
    <div
      className={`modal ${isOpenPopupModal.addMainBanner ? "active" : ""}`}
      id="addMainBannerModal"
    >
      {" "}
      <div className="modal-overlay" tabIndex="-1"></div>{" "}
      <div className="modal-dialog modal-dialog-centered sm:max-w-xl">
        {" "}
        <div className="modal-content" role="document">
          {" "}
          <div className="modal-header">
            {" "}
            <h5 className="mr-12 text-lg font-medium truncate">
              {" "}
              {isEditMode ? "Edit Banner" : "Add Main Banner"}{" "}
            </h5>{" "}
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsOpenPopupModal(false)}
            >
              {" "}
              <span className="sr-only">Close</span>{" "}
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />{" "}
              </svg>{" "}
            </button>{" "}
          </div>{" "}
          <div className="modal-body">
            {" "}
            <form onSubmit={handleSubmit}>
              {" "}
              <div className="space-y-4">
                {" "}
                <div className="hidden">
                  {" "}
                  <label>Layout Number</label>{" "}
                  <input
                    type="text"
                    name="layoutNumber"
                    value={formData.layoutNumber}
                    className="hidden"
                  />
                </div>{" "}
                <div>
                  {" "}
                  <label>Status</label>{" "}
                  <select
                    name="home_page_status"
                    value={formData.home_page_status}
                    onChange={handleInputChange}
                    className="w-full mt-1"
                  >
                    {" "}
                    <option value="published">Published</option>{" "}
                    <option value="unpublished">Unpublished</option>{" "}
                  </select>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label>Main Category</label>{" "}
                  <select
                    name="home_page_main_category"
                    value={formData.home_page_main_category}
                    onChange={handleInputChange}
                    className="w-full mt-1"
                  >
                    {" "}
                    <option value="">Select Main Category</option>{" "}
                    {mainCategory.map((category) => (
                      <option key={category._id} value={category._id}>
                        {" "}
                        {category.main_category_title}{" "}
                      </option>
                    ))}{" "}
                  </select>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label>Sub Category</label>{" "}
                  <select
                    name="home_page_sub_category"
                    value={formData.home_page_sub_category}
                    onChange={handleInputChange}
                    className="w-full mt-1"
                  >
                    {" "}
                    <option value="">Select Sub Category</option>{" "}
                    {subCategory.map((category) => (
                      <option key={category._id} value={category._id}>
                        {" "}
                        {category.sub_category_title}{" "}
                      </option>
                    ))}{" "}
                  </select>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label>Product</label>{" "}
                  <select
                    name="home_page_products"
                    value={formData.home_page_products}
                    onChange={handleInputChange}
                    className="w-full mt-1"
                  >
                    {" "}
                    <option value="">Select Product</option>{" "}
                    {products.map((product) => (
                      <option key={product._id} value={product._id}>
                        {" "}
                        {product.productTitle}{" "}
                      </option>
                    ))}{" "}
                  </select>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label>Image</label>{" "}
                  <div className="mt-1.5">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-white"
                      onClick={() => {
                        setIsOpenPopupModal((prev) => ({
                          ...prev,
                          startSelectFilesAndMedia: true,
                        }));
                      }}
                    >
                      {" "}
                      {selectedFile ? "Change Image" : "Select Image"}{" "}
                    </button>{" "}
                    {selectedFile && (
                      <div className="mt-2">
                        {" "}
                        <img
                          src={`http://localhost:7000${selectedFile.filePath}`}
                          alt={selectedFile.filename}
                          className="w-32 h-auto"
                        />{" "}
                      </div>
                    </div>
                  </div> */}

                  <div>
                    {" "}
                    <label>Product</label>{" "}
                    <select
                      name="home_page_products"
                      value={formData.home_page_products}
                      onChange={handleInputChange}
                      className="w-full mt-1"
                    >
                      {" "}
                      <option value="">Select Product</option>{" "}
                      {products.map((product) => (
                        <option key={product._id} value={product._id}>
                          {" "}
                          {product.productTitle}{" "}
                        </option>
                      ))}{" "}
                    </select>{" "}
                  </div>

                  {/* select image */}
                  <div>
                    <label for="">
                      Select Image
                      <span>
                        (Image ratio should be 16:6. PNG, JPG, or JPEG up to
                        1MB)
                      </span>
                    </label>
                    <div className="mt-1.5">
                      <button
                        type="button"
                        className="btn btn-white"
                        data-toggle="modal"
                        data-target="#selectFilesModal"
                        onClick={() => {
                          setIsOpenPopupModal((prev) => ({
                            ...prev,
                            startSelectFilesAndMedia: true, // Open Select Files Modal
                          }));

                          // Ensure Select Files modal is above Add Main Banner
                          setTimeout(() => {
                            document.getElementById(
                              "selectFilesModal"
                            ).style.zIndex = "1060";
                          }, 100);
                        }}
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
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        Select Files
                      </button>
                    </div>
                  </div>

                  {/* Status Toggle */}
                  <div>
                    <label htmlFor="toggleSwitch">Status</label>
                    <div className="mt-1 toggle-switch">
                      <input
                        type="checkbox"
                        id="toggleSwitch"
                        role="checkbox"
                        tabIndex="0"
                        checked={formData.home_page_status === "published"}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            home_page_status: e.target.checked
                              ? "published"
                              : "unpublished",
                          }))
                        }
                      />
                      <label htmlFor="toggleSwitch"></label>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <div className="flex items-center justify-end space-x-4">
                    <button
                      type="button"
                      className="btn btn-light"
                      data-dismiss="modal"
                      aria-label="Close Modal"
                      onClick={() => setIsOpenPopupModal(false)}
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      {isEditMode ? "Update Banner" : "Add Banner"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
                    )}{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="mt-6">
                {" "}
                <button type="submit" className="btn btn-primary">
                  {" "}
                  {isEditMode ? "Update Banner" : "Add Banner"}{" "}
                </button>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
