import React, { useState, useEffect } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
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
