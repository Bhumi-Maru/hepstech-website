import { createContext, useContext, useEffect, useState } from "react";
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

  const [productType, setProductType] = useState("simple");

  // Reset Descriptions
  const handleResetDescriptionSections = () => {
    setDescriptionSections([
      { id: 1, title: "Untitled Section 01", description: "" },
    ]);
  };

  console.log("product id", productId);

  // In your Product_Create_Context.jsx

  // VARIANT MANAGEMENT
  const [variantOptions, setVariantOptions] = useState([]);
  const [productVariants, setProductVariants] = useState([]);

  useEffect(() => {
    if (productId) {
      fetchProductForEdit(productId);
    }
  }, [productId]);

  console.log("ppppp", productVariants);

  // ======================
  // PRODUCT CRUD FUNCTIONS
  // ======================

  // Update other variant fields (price, sku, etc.)
  const updateVariantField = (variantId, field, value) => {
    setProductVariants(
      productVariants.map((variant) =>
        variant.id === variantId ? { ...variant, [field]: value } : variant
      )
    );
  };

  // Update the handleCreateProduct function
  const handleCreateProduct = async (
    variantData = { options: [], variants: [] }
  ) => {
    // Validate required fields
    if (!productTitle || !productMainCategory || !productSubCategory) {
      alert("Please fill in all required fields");
      return;
    }

    // Validate pricing
    if (productType === "simple") {
      if (!pricing.mrpPrice || !pricing.sellingPrice) {
        alert("Pricing details are required.");
        return;
      }
      // Validate tax
      // Validate tax value
      if (isNaN(tax.value) || tax.value === null || tax.value === undefined) {
        alert("Please enter a valid tax value");
        return;
      }
    }

    const formData = new FormData();

    // Append basic product info
    formData.append("productTitle", productTitle);
    formData.append("productMainCategory", productMainCategory);
    formData.append("productSubCategory", productSubCategory);
    formData.append("productPurchaseMinQuantity", productMinQuantity || "1");
    formData.append("productPurchaseMaxQuantity", productMaxQuantity || "10");
    formData.append("productStatus", productStatus || "Active");
    formData.append(
      "productStockVisibility",
      productStockVisibility || "show stock quantity"
    );
    formData.append("productLabel", productLabel || "");
    formData.append("productType", productType || "simple");

    // Append variant data if product type is variant
    if (productType === "variant") {
      if (variantOptions.length === 0 || productVariants.length === 0) {
        alert("Please add at least one variant option and variant");
        return;
      }

      formData.append("variantOptions", JSON.stringify(variantOptions));
      formData.append("productVariants", JSON.stringify(productVariants));

      productVariants.forEach((variant) => {
        if (variant.image instanceof File) {
          formData.append("variantImages", variant.image, variant.image.name);
        }
      });
    } else {
      // Append simple product pricing
      formData.append("pricing.mrpPrice", Number(pricing.mrpPrice) || 0);
      formData.append(
        "pricing.sellingPrice",
        Number(pricing.sellingPrice) || 0
      );
      formData.append("pricing.sku", pricing.sku || "");
      formData.append("pricing.quantity", Number(pricing.quantity) || 0);
      // formData.append("pricing.quantity", pricing.quantity || "0");
    }

    // Append tax
    formData.append("tax.taxType", tax.taxType);
    formData.append("tax.value", Number(tax.value) || 0);

    // Append SEO
    formData.append("seoTitle", seoTitle || "");
    formData.append("seoDescription", seoDescription || "");
    formData.append("seoUrl", seoUrl || "");

    // Append descriptions
    formData.append("descriptionSections", JSON.stringify(descriptionSections));

    // Append main image
    if (productMainImage) {
      formData.append("productMainImage", productMainImage);
    }

    // Append gallery images
    galleryImages.forEach((image) => {
      formData.append("galleryImages", image);
    });

    try {
      let response;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      if (productId) {
        // UPDATE PRODUCT
        response = await axios.put(
          `http://localhost:7000/api/products/update/${productId}`,
          formData,
          config
        );
      } else {
        // CREATE PRODUCT
        response = await axios.post(
          "http://localhost:7000/api/products/create",
          formData,
          config
        );
      }

      if (response.status === 200 || response.status === 201) {
        resetProductForm();
        return true;
      }
    } catch (error) {
      console.error("Error saving product:", error.response?.data || error);
      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Failed to save product."
      );
      return false;
    }
  };

  const fetchProductForEdit = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/products/${id}`
      );
      const product = response.data;

      // Set product ID and basic details
      setProductId(product._id);
      setProductTitle(product.productTitle || "");
      setProductMainCategory(product.productMainCategory?._id || "");
      setProductSubCategory(product.productSubCategory?._id || "");

      setProductMinQuantity(product.productPurchaseMinQuantity || null);
      setProductMaxQuantity(product.productPurchaseMaxQuantity || null);

      // Pricing
      if (productType === "simple") {
        setPricing({
          mrpPrice: product.pricing?.mrpPrice || "",
          sellingPrice: product.pricing?.sellingPrice || "",
          sku: product.pricing?.sku || "",
          quantity: product.pricing?.quantity || "",
        });
      }

      // Tax
      setTax({
        taxType: product.tax?.taxType || "flat",
        value: product.tax?.value || null,
      });

      // Status and visibility
      setProductStatus(product.productStatus || "");
      setProductStockVisibility(product.productStockVisibility || "");
      setProductLabel(product.productLabel || "");

      // Descriptions (Now correctly extracting from `product.description.descriptionSections`)
      if (product.description?.descriptionSections?.length > 0) {
        setDescriptionSections(
          product.description.descriptionSections.map((section, index) => ({
            id: index + 1,
            title: section.sectionTitle || `Untitled Section ${index + 1}`,
            description: section.description || "",
          }))
        );
      } else {
        setDescriptionSections([
          { id: 1, title: "Untitled Section 01", description: "" },
        ]);
      }

      // SEO (Now correctly extracting from `product.seo`)
      setSeoTitle(product.seo?.title || "");
      setSeoDescription(product.seo?.description || "");
      setSeoUrl(product.seo?.url || "");

      // Main Image Preview
      if (product.productMainImage) {
        setMainImagePreview(
          `http://localhost:7000/uploads/${product.productMainImage
            .split("/")
            .pop()}`
        );
      }

      // Gallery Images (Now correctly extracting from `product.gallery.galleryImages`)
      if (product.gallery?.galleryImages?.length > 0) {
        const galleryPreviews = product.gallery.galleryImages.map((img) => ({
          file: null, // No File object for existing images
          previewURL: `http://localhost:7000/uploads/gallery/${img
            .split("/")
            .pop()}`,
          existingPath: img, // Store the server path
          isNew: false, // Mark as existing image
        }));

        setSelectedImages(galleryPreviews);
        // Store both the paths (for existing) and will add new files later
        setGalleryImages([...product.gallery.galleryImages]);
      } else {
        setSelectedImages([]);
        setGalleryImages([]);
      }

      // Handle variant options and variants
      setVariantOptions(product.variantOptions || []);
      setProductType(product.productType || "simple");
      setIsOpenProduct({
        variant_Product_Section_5: product.productType === "variant",
      });

      // Prefill Product Variants with Images
      if (product.productVariants?.length > 0) {
        const formattedVariants = await Promise.all(
          product.productVariants.map(async (variant) => {
            let imageData = null;
            let imagePreview = null;

            // Handle existing variant images
            if (variant.image) {
              if (typeof variant.image === "string") {
                // This is an existing image path
                imageData = variant.image; // Store the path
                imagePreview = `http://localhost:7000/uploads/variants/${variant.image
                  .split("/")
                  .pop()}`;
              } else if (variant.image instanceof File) {
                // This is a newly uploaded file
                imageData = variant.image;
                imagePreview = URL.createObjectURL(variant.image);
              }
            }

            return {
              id: variant._id || Date.now(),
              variantAttributes: variant.variantAttributes || [],
              mrpPrice: variant.mrpPrice || 0,
              sellingPrice: variant.sellingPrice || 0,
              sku: variant.sku || "",
              quantity: variant.quantity || 0,
              image: imageData,
              imagePreview: imagePreview,
              _id: variant._id, // Keep the original ID if exists
            };
          })
        );

        setProductVariants(formattedVariants);
      } else {
        setProductVariants([]);
      }

      return true; // Indicate success
    } catch (error) {
      console.error("Error fetching product:", error);
      // alert("Failed to load product for editing.");
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

    setProductType("simple");
    setProductVariants([]);
    setVariantOptions([]);
    setIsOpenProduct({
      variant_Product_Section_5: false,
    });
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
        handleCreateProduct: (variantData) => handleCreateProduct(variantData),

        handleEdit,
        // resetProductForm,

        // variant

        variantOptions,
        setVariantOptions,
        productVariants,
        setProductVariants,
        // addOption,
        // setNewColor,
        // newColor,
        // addColor,
        // colors,
        // removeColor,

        productType,
        setProductType,

        // variant managment
        updateVariantField,
        // handleVariantImageUpload,
        // generateAllVariants,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
