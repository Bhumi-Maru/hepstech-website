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
  const [productMaxQuantity, setProductMaxQuantity] = useState(0);
  const [productMinQuantity, setProductMinQuantity] = useState(0);

  const [pricing, setPricing] = useState({
    mrpPrice: "",
    sellingPrice: "",
    sku: "",
    quantity: "",
  });

  const [tax, setTax] = useState({
    taxType: "percentage", // or "flat"
    value: 0,
  });
  const [productStatus, setProductStatus] = useState("");
  const [productStockVisibility, setProductStockVisibility] = useState("");
  const [productLabel, setProductLabel] = useState("");
  const [descriptionSections, setDescriptionSections] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoUrl, setSeoUrl] = useState("");

  // Reset Descriptions
  const handleResetDescriptionSections = () => {
    setDescriptionSections([
      { id: 1, title: "Untitled Section 01", description: "" },
    ]);
  };

  const handleCreateProduct = async () => {
    if (!pricing.mrpPrice || !pricing.sellingPrice) {
      alert("Pricing details are required.");
      return;
    }

    const formData = new FormData();
    formData.append("productTitle", productTitle);
    formData.append("productMainCategory", productMainCategory);
    formData.append("productSubCategory", productSubCategory);
    formData.append("productMainImage", productMainImage);
    formData.append("productPurchaseMinQuantity", productMinQuantity);
    formData.append("productPurchaseMaxQuantity", productMaxQuantity);

    formData.append("pricing.mrpPrice", pricing.mrpPrice);
    formData.append("pricing.sellingPrice", pricing.sellingPrice);
    formData.append("pricing.sku", pricing.sku);
    formData.append("pricing.quantity", pricing.quantity);

    formData.append("tax.taxType", tax.taxType);
    formData.append("tax.value", tax.value);

    formData.append("productStatus", productStatus);
    formData.append("productStockVisibility", productStockVisibility);
    formData.append("productLabel", productLabel);
    formData.append("descriptionSections", JSON.stringify(descriptionSections));
    formData.append("seoTitle", seoTitle);
    formData.append("seoDescription", seoDescription);
    formData.append("seoUrl", seoUrl);

    galleryImages.forEach((image) => {
      formData.append("galleryImages", image);
    });

    try {
      const response = await axios.post(
        "http://localhost:7000/api/products/create",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 201) {
        alert("Product created successfully!");

        // ✅ Reset all fields properly
        setProductTitle("");
        setProductMainCategory("");
        setProductSubCategory("");
        setProductMainImage(null); // File input reset
        setProductMinQuantity(0);
        setProductMaxQuantity(0);

        setPricing({
          mrpPrice: "",
          sellingPrice: "",
          sku: "",
          quantity: "",
        });

        setTax({
          taxType: "percentage",
          value: 0,
        });

        setProductStatus("");
        setProductStockVisibility("");
        setProductLabel("");
        setDescriptionSections([]); // Reset array
        setGalleryImages([]); // Reset array
        setSeoTitle("");
        setSeoDescription("");
        setSeoUrl("");

        // ✅ Clear file input manually
        // ✅ Clear file input manually
        const mainImageInput = document.getElementById("productMainImage");
        if (mainImageInput) mainImageInput.value = "";

        const galleryImagesInput = document.getElementById(
          "productGalleryImages"
        );
        if (galleryImagesInput) galleryImagesInput.value = "";
      }
    } catch (error) {
      console.error("Error creating product:", error.response?.data || error);
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
              productTitle={productTitle} // ✅ Pass value to control input
              setProductTitle={setProductTitle}
              productMainCategory={productMainCategory}
              setProductMainCategory={setProductMainCategory}
              productSubCategory={productSubCategory}
              setProductSubCategory={setProductSubCategory}
              productMinQuantity={productMinQuantity}
              setProductMinQuantity={setProductMinQuantity}
              productMaxQuantity={productMaxQuantity}
              setProductMaxQuantity={setProductMaxQuantity}
            />
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
              {/* CREATE PRODUCTS SECTION 3 [Product Main Image] */}
              <Create_Products_3 setProductMainImage={setProductMainImage} />
              {/* CREATE PRODUCTS SECTION 4 [Product Gallery Images] */}
              <Create_Products_4 setGalleryImages={setGalleryImages} />
            </div>

            {/* CREATE PRODUCTS SECTION 5 [Pricing Details] */}
            <Create_Products_5
              setPricing={setPricing}
              setTax={setTax}
              tax={tax}
              pricing={pricing}
            />
            {/* CREATE PRODUCTS SECTION 6 [Descriptions] */}
            <Create_Products_6
              setDescriptionSections={setDescriptionSections}
              resetDescriptionSections={handleResetDescriptionSections} // ✅ Pass the reset function
            />
            {/* CREATE PRODUCTS SECTION 7 [Purchase Selected Location] */}
            {/* <Create_Products_7 /> */}
            {/* CREATE PRODUCTS SECTION 8 [SEO Tags] */}
            <Create_Products_8
              seoTitle={seoTitle}
              setSeoTitle={setSeoTitle}
              seoDescription={seoDescription}
              setSeoDescription={setSeoDescription}
              seoUrl={seoUrl}
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
