import { createContext, useContext, useState } from "react";
import axios from "axios";

//create Context
export const ProductContext = createContext();

//make a hook
export const useProductContext = () => {
  return useContext(ProductContext);
};

// Context Provider Component
export const ProductPovider = ({ children }) => {
  const [productTitle, setProductTitle] = useState("");
  const [productMainCategory, setProductMainCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productMainImage, setProductMainImage] = useState(null);
  const [productMaxQuantity, setProductMaxQuantity] = useState(0);
  const [productMinQuantity, setProductMinQuantity] = useState(0);

  //   product main image
  const [mainImagePreview, setMainImagePreview] = useState(null);

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
  const [selectedImages, setSelectedImages] = useState([]);
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
        setMainImagePreview(null);

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
        setDescriptionSections([]); // ✅ Clears all description sections

        setGalleryImages([]); // Reset array
        // ✅ Reset gallery preview images in the Create_Products_4 component
        setSelectedImages([]); // 🔥 Reset selectedImages state
        setSeoTitle("");
        setSeoDescription("");
        setSeoUrl("");

        // ✅ Clear file input manually
        setProductMainImage(null);
        setMainImagePreview(null); // 🔥 Reset the preview
      }
    } catch (error) {
      console.error("Error creating product:", error.response?.data || error);
      alert("Failed to create product.");
    }
  };
  return (
    <ProductContext.Provider
      value={{
        productTitle,
        setProductTitle,
        productMainCategory,
        setProductMainCategory,
        productSubCategory,
        setProductSubCategory,
        productMinQuantity,
        setProductMinQuantity,
        productMaxQuantity,
        setProductMaxQuantity,

        // product mainImage [Create_Product_3]
        setProductMainImage,
        mainImagePreview,
        setMainImagePreview,
        // product gallery image [Create_Product_4]
        setGalleryImages,
        galleryImages,
        selectedImages,
        setSelectedImages,

        // picing and tax  SECTION 5 [Pricing Details]
        setPricing,
        setTax,
        tax,
        pricing,

        // Desscription SECTION 6 [Descriptions]
        setDescriptionSections,
        handleResetDescriptionSections,
        descriptionSections,

        // SECTION 8 [SEO Tags]
        seoTitle,
        setSeoTitle,
        seoDescription,
        setSeoDescription,
        seoUrl,
        setSeoUrl,

        //  SECTION 9 [Product Status]
        setProductStatus,

        // SECTION 12 [Stock Visibility State]
        setProductStockVisibility,
        productStockVisibility,

        // SECTION 13 [Display Product Label]
        setProductLabel,
        productLabel,

        // create product
        handleCreateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
