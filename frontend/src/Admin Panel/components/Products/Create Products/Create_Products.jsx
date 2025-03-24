import React, { useState } from "react";
import Create_Products_1 from "./Create_Products_1";
import Create_Products_2 from "./Create_Products_2";
import Create_Products_3 from "./Create_Products_3";
import Create_Products_4 from "./Create_Products_4";
import Create_Products_5 from "./Create_Products_5";
import Create_Products_6 from "./Create_Products_6";
import Create_Products_7 from "./Create_Products_7";
import Create_Products_8 from "./Create_Products_8";
import Create_Products_9 from "./Create_Products_9";
// import Create_Products_10 from "./Create_Products_10";
// import Create_Products_11 from "./Create_Products_11";
import Create_Products_12 from "./Create_Products_12";
import Create_Products_13 from "./Create_Products_13";
// import Create_Products_14 from "./Create_Products_14";
import axios from "axios";

export default function Create_Products() {
  const [productTitle, setProductTitle] = useState("");
  const [productMainCategory, setProductMainCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productMainImage, setProductMainImage] = useState(null);
  const [productMaxQuantity, setProductMaxQuantity] = useState(1);
  const [productMinQuantity, setProductMinQuantity] = useState(1);

  const [pricing, setPricing] = useState({
    mrpPrice: "",
    sellingPrice: "",
    sku: "",
    quantity: "",
  });
  const [tax, setTax] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const [productStockVisibility, setProductStockVisibility] = useState("");
  const [productLabel, setProductLabel] = useState("");
  const [descriptionSections, setDescriptionSections] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoUrl, setSeoUrl] = useState("");

  const handleCreateProduct = async () => {
    const formData = new FormData();
    formData.append("productTitle", productTitle);
    formData.append("productMainCategory", productMainCategory);
    formData.append("productSubCategory", productSubCategory);
    formData.append("productMainImage", productMainImage);
    formData.append("productPurchaseMinQuantity", productMinQuantity);
    formData.append("productPurchaseMaxQuantity", productMaxQuantity);
    formData.append("pricing", JSON.stringify(pricing));
    formData.append("tax", tax);
    formData.append("productStatus", productStatus);
    formData.append("productStockVisibility", productStockVisibility);
    formData.append("productLabel", productLabel);
    formData.append("descriptionSections", JSON.stringify(descriptionSections));

    galleryImages.forEach((image) => {
      formData.append("galleryImages", image); // Ensure field name matches backend
    });

    formData.append("seoTitle", seoTitle);
    formData.append("seoDescription", seoDescription);
    formData.append("seoUrl", seoUrl);

    try {
      const response = await axios.post(
        "http://localhost:7000/api/products/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        alert("Product created successfully!");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product.");
    }
  };

  return (
    <>
      {/* Create Products */}
      <div className="container">
        {/* Create Products [Heading] */}
        <Create_Products_1 />
        <div className="grid grid-cols-1 gap-5 mt-4 md:grid-cols-12">
          <div className="space-y-5 md:col-span-8">
            {/* CREATE PRODUCTS SECTION 2 [Product Information] */}
            <Create_Products_2
              setProductTitle={setProductTitle}
              setProductMainCategory={setProductMainCategory}
              setProductSubCategory={setProductSubCategory}
              setProductMaxQuantity={setProductMaxQuantity}
              setProductMinQuantity={setProductMinQuantity}
            />
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
              {/* CREATE PRODUCTS SECTION 3 [Product Main Image] */}
              <Create_Products_3 setProductMainImage={setProductMainImage} />
              {/* CREATE PRODUCTS SECTION 4 [Product Gallery Images] */}
              <Create_Products_4 setGalleryImages={setGalleryImages} />
            </div>

            {/* CREATE PRODUCTS SECTION 5 [Pricing Details] */}
            {/* <Create_Products_5 /> */}
            {/* CREATE PRODUCTS SECTION 6 [Descriptions] */}
            <Create_Products_6
              setDescriptionSections={setDescriptionSections}
            />
            {/* CREATE PRODUCTS SECTION 7 [Purchase Selected Location] */}
            {/* <Create_Products_7 /> */}
            {/* CREATE PRODUCTS SECTION 8 [SEO Tags] */}
            <Create_Products_8
              setSeoTitle={setSeoTitle}
              setSeoDescription={setSeoDescription}
              setSeoUrl={setSeoUrl}
            />
          </div>

          <div class="space-y-5 md:col-span-4">
            {/* CREATE PRODUCTS SECTION 9 [Product Status] */}
            <Create_Products_9 setProductStatus={setProductStatus} />
            {/* CREATE PRODUCTS SECTION 10 [Shipping Configuration] */}
            {/* <Create_Products_10 /> */}
            {/* CREATE PRODUCTS SECTION 11 [Size Chart] */}
            {/* <Create_Products_11 /> */}
            {/* CREATE PRODUCTS SECTION 12 [Stock Visibility State] */}
            <Create_Products_12
              setProductStockVisibility={setProductStockVisibility}
            />
            {/* CREATE PRODUCTS SECTION 13 [Display Product Label] */}
            <Create_Products_13 setProductLabel={setProductLabel} />
            {/* CREATE PRODUCTS SECTION 14 [Payment Details] */}
            {/* <Create_Products_14 /> */}
          </div>
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />

        <div className="flex items-center justify-end space-x-4">
          <button type="button" className="btn btn-dark-light">
            Discard
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleCreateProduct}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}
