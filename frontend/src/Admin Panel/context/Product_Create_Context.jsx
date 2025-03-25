import { createContext, useContext, useState } from "react";
import axios from "axios";

//create Context
export const ProductContext = createContext();

//make a hook
export const useProductContext = () => {
  return useContext(ProductContext);
};

// Context Provider Component
export const ProductProvider = ({ children }) => {
  // PRICING DETAILS SECTION 5 [VARIANT PRODUCT]
  const [isOpenProduct, setIsOpenProduct] = useState({
    variant_Product_Section_5: false,
    Enable_Color_Option: false,
  });

  const [productId, setProductId] = useState(null); // Store product ID if updating

  const [productTitle, setProductTitle] = useState("");
  const [productMainCategory, setProductMainCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productMainImage, setProductMainImage] = useState(null);
  const [productMaxQuantity, setProductMaxQuantity] = useState(null);
  const [productMinQuantity, setProductMinQuantity] = useState(null);

  //   product main image
  const [mainImagePreview, setMainImagePreview] = useState(null);

  const [pricing, setPricing] = useState({
    mrpPrice: "",
    sellingPrice: "",
    sku: "",
    quantity: "",
  });

  const [tax, setTax] = useState({
    taxType: "flat", // or "flat"
    value: null,
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

  // handle open product variant
  // const handleProductVariant = () => {
  //   setIsOpenProduct({
  //     variant_Product_Section_5: value === "2", // Open when 'Variant Product' is selected
  //   });
  // };

  // const handleCreateProduct = async () => {
  //   if (!pricing.mrpPrice || !pricing.sellingPrice) {
  //     alert("Pricing details are required.");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("productTitle", productTitle);
  //   formData.append("productMainCategory", productMainCategory);
  //   formData.append("productSubCategory", productSubCategory);
  //   formData.append("productMainImage", productMainImage);
  //   formData.append("productPurchaseMinQuantity", productMinQuantity);
  //   formData.append("productPurchaseMaxQuantity", productMaxQuantity);
  //   formData.append("pricing.mrpPrice", pricing.mrpPrice);
  //   formData.append("pricing.sellingPrice", pricing.sellingPrice);
  //   formData.append("pricing.sku", pricing.sku);
  //   formData.append("pricing.quantity", pricing.quantity);
  //   formData.append("tax.taxType", tax.taxType);
  //   formData.append("tax.value", tax.value);
  //   formData.append("productStatus", productStatus);
  //   formData.append("productStockVisibility", productStockVisibility);
  //   formData.append("productLabel", productLabel);
  //   formData.append("descriptionSections", JSON.stringify(descriptionSections));
  //   formData.append("seoTitle", seoTitle);
  //   formData.append("seoDescription", seoDescription);
  //   formData.append("seoUrl", seoUrl);

  //   galleryImages.forEach((image) => {
  //     formData.append("galleryImages", image);
  //   });

  //   try {
  //     let response;
  //     if (productId) {
  //       // UPDATE PRODUCT
  //       response = await axios.put(
  //         `http://localhost:7000/api/products/update/${productId}`,
  //         formData,
  //         { headers: { "Content-Type": "multipart/form-data" } }
  //       );
  //     } else {
  //       // CREATE PRODUCT
  //       response = await axios.post(
  //         "http://localhost:7000/api/products/create",
  //         formData,
  //         { headers: { "Content-Type": "multipart/form-data" } }
  //       );
  //     }

  //     if (response.status === 200 || response.status === 201) {
  //       alert(
  //         productId
  //           ? "Product updated successfully!"
  //           : "Product created successfully!"
  //       );

  //       // Reset fields after success
  //       setProductId(null); // Reset product ID after update
  //       setProductTitle("");
  //       setProductMainCategory("");
  //       setProductSubCategory("");
  //       setProductMainImage(null);
  //       setMainImagePreview(null);
  //       setProductMinQuantity(null);
  //       setProductMaxQuantity(null);
  //       setPricing({ mrpPrice: "", sellingPrice: "", sku: "", quantity: "" });
  //       setTax({ taxType: "flat", value: null });
  //       setProductStatus("");
  //       setProductStockVisibility("");
  //       setProductLabel("");
  //       setDescriptionSections([]);
  //       setGalleryImages([]);
  //       setSelectedImages([]);
  //       setSeoTitle("");
  //       setSeoDescription("");
  //       setSeoUrl("");
  //     }
  //   } catch (error) {
  //     console.error("Error saving product:", error.response?.data || error);
  //     alert("Failed to save product.");
  //   }
  // };

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
      let response;
      if (productId) {
        // UPDATE PRODUCT
        response = await axios.put(
          `http://localhost:7000/api/products/update/${productId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        // CREATE PRODUCT
        response = await axios.post(
          "http://localhost:7000/api/products/create",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }

      if (response.status === 200 || response.status === 201) {
        alert(
          productId
            ? "Product updated successfully!"
            : "Product created successfully!"
        );
        resetProductForm(); // Reset form after successful save
      }
    } catch (error) {
      console.error("Error saving product:", error.response?.data || error);
      alert("Failed to save product.");
    }
  };

  const fetchProductForEdit = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/products/${id}`
      );
      const product = response.data;

      // Set all the form fields with the product data
      setProductId(product._id);
      setProductTitle(product.productTitle || "");
      setProductMainCategory(
        product.productMainCategory?._id || product.productMainCategory || ""
      );
      setProductSubCategory(
        product.productSubCategory?._id || product.productSubCategory || ""
      );

      setProductMinQuantity(product.productPurchaseMinQuantity || null);
      setProductMaxQuantity(product.productPurchaseMaxQuantity || null);

      // Pricing
      setPricing({
        mrpPrice: product.pricing?.mrpPrice || "",
        sellingPrice: product.pricing?.sellingPrice || "",
        sku: product.pricing?.sku || "",
        quantity: product.pricing?.quantity || "",
      });

      // Tax
      setTax({
        taxType: product.tax?.taxType || "flat",
        value: product.tax?.value || null,
      });

      // Status and visibility
      setProductStatus(product.productStatus || "");
      setProductStockVisibility(product.productStockVisibility || "");
      setProductLabel(product.productLabel || "");

      // Descriptions
      if (
        product.descriptionSections &&
        product.descriptionSections.length > 0
      ) {
        setDescriptionSections(product.descriptionSections);
      } else {
        setDescriptionSections([
          { id: 1, title: "Untitled Section 01", description: "" },
        ]);
      }

      // SEO
      setSeoTitle(product.seoTitle || "");
      setSeoDescription(product.seoDescription || "");
      setSeoUrl(product.seoUrl || "");

      // Main Image Preview
      if (product.productMainImage) {
        setMainImagePreview(
          `http://localhost:7000/uploads/${product.productMainImage
            .split("/")
            .pop()}`
        );
      }

      // Gallery Images (assuming product.galleryImages contains URLs)
      // Note: This handles display only - actual file uploads would need separate handling
      if (product.galleryImages && product.galleryImages.length > 0) {
        setSelectedImages(
          product.galleryImages.map((img) => ({
            url: `http://localhost:7000/uploads/${img.split("/").pop()}`,
            name: img.split("/").pop(),
          }))
        );
      }

      return true; // Indicate success
    } catch (error) {
      console.error("Error fetching product:", error);
      alert("Failed to load product for editing.");
      return false; // Indicate failure
    }
  };

  const handleEdit = async (id) => {
    return await fetchProductForEdit(id);
  };

  // Reset form after saving
  const resetProductForm = () => {
    setProductId(null);
    setProductTitle("");
    setProductMainCategory("");
    setProductSubCategory("");
    setProductMainImage(null);
    setMainImagePreview(null);
    setProductMinQuantity(null);
    setProductMaxQuantity(null);
    setPricing({ mrpPrice: "", sellingPrice: "", sku: "", quantity: "" });
    setTax({ taxType: "flat", value: null });
    setProductStatus("");
    setProductStockVisibility("");
    setProductLabel("");
    setDescriptionSections([]);
    setGalleryImages([]);
    setSeoTitle("");
    setSeoDescription("");
    setSeoUrl("");
  };

  return (
    <ProductContext.Provider
      value={{
        // PRICING DETAILS SECTION 5 [VARIANT PRODUCT]
        isOpenProduct,
        setIsOpenProduct,
        // handleProductVariant,

        //
        productId, // Store product ID if updating

        // product information
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
        productStatus,

        // SECTION 12 [Stock Visibility State]
        setProductStockVisibility,
        productStockVisibility,

        // SECTION 13 [Display Product Label]
        setProductLabel,
        productLabel,

        // create product
        handleCreateProduct,

        handleEdit,
        // resetProductForm,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
