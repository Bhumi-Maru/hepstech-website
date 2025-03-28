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

  // ======================
  // VARIANT FUNCTIONS
  // ======================

  // Add a new variant option (e.g., Color, Size)
  const addVariantOption = (optionName) => {
    if (variantOptions.length >= 3) {
      alert("Maximum 3 variant options allowed");
      return;
    }
    if (
      variantOptions.some(
        (opt) => opt.name.toLowerCase() === optionName.toLowerCase()
      )
    ) {
      alert("Option with this name already exists");
      return;
    }
    setVariantOptions([...variantOptions, { name: optionName, values: [] }]);
  };

  // Remove a variant option
  const removeVariantOption = (optionName) => {
    setVariantOptions(variantOptions.filter((opt) => opt.name !== optionName));
    // Clean up variants that use this option
    setProductVariants(
      productVariants.map((variant) => ({
        ...variant,
        variantAttributes: variant.variantAttributes.filter(
          (attr) => attr.name !== optionName
        ),
      }))
    );
  };

  // Add values to an option
  const addOptionValues = (optionName, values) => {
    setVariantOptions(
      variantOptions.map((option) => {
        if (option.name === optionName) {
          return {
            ...option,
            values: [...new Set([...option.values, ...values])],
          };
        }
        return option;
      })
    );
  };

  // Remove a value from an option
  const removeOptionValue = (optionName, valueToRemove) => {
    setVariantOptions(
      variantOptions.map((option) => {
        if (option.name === optionName) {
          return {
            ...option,
            values: option.values.filter((value) => value !== valueToRemove),
          };
        }
        return option;
      })
    );
  };

  // Add a new product variant
  const addProductVariant = () => {
    const newVariant = {
      id: Date.now(), // unique ID
      variantAttributes: variantOptions.map((option) => ({
        name: option.name,
        value: option.values[0] || "",
      })),
      mrpPrice: "",
      sellingPrice: "",
      sku: "",
      quantity: "",
      image: null,
    };
    setProductVariants([...productVariants, newVariant]);
  };

  // Remove a product variant
  const removeProductVariant = (variantId) => {
    setProductVariants(productVariants.filter((v) => v.id !== variantId));
  };

  // Update a variant attribute
  const updateVariantAttribute = (variantId, optionName, newValue) => {
    setProductVariants(
      productVariants.map((variant) => {
        if (variant.id === variantId) {
          return {
            ...variant,
            variantAttributes: variant.variantAttributes.map((attr) =>
              attr.name === optionName ? { ...attr, value: newValue } : attr
            ),
          };
        }
        return variant;
      })
    );
  };

  // Update other variant fields (price, sku, etc.)
  const updateVariantField = (variantId, field, value) => {
    setProductVariants(
      productVariants.map((variant) =>
        variant.id === variantId ? { ...variant, [field]: value } : variant
      )
    );
  };

  // Handle variant image upload
  const handleVariantImageUpload = (variantId, file) => {
    setProductVariants(
      productVariants.map((variant) =>
        variant.id === variantId ? { ...variant, image: file } : variant
      )
    );
  };

  // Generate all possible variant combinations
  const generateAllVariants = () => {
    if (variantOptions.length === 0) {
      alert("Please add variant options first");
      return;
    }

    // Create all combinations of option values
    const combinations = variantOptions.reduce((acc, option) => {
      if (!acc.length) {
        return option.values.map((value) => ({ [option.name]: value }));
      }
      return acc.flatMap((comb) =>
        option.values.map((value) => ({ ...comb, [option.name]: value }))
      );
    }, []);

    // Create variants from combinations
    const newVariants = combinations.map((comb) => ({
      id: Date.now() + Math.random(),
      variantAttributes: Object.entries(comb).map(([name, value]) => ({
        name,
        value,
      })),
      mrpPrice: "",
      sellingPrice: "",
      sku: "",
      quantity: "",
      image: null,
    }));

    setProductVariants(newVariants);
  };

  console.log("ppppp", productVariants);

  // ======================
  // PRODUCT CRUD FUNCTIONS
  // ======================

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
      if (
        !tax.taxType ||
        tax.value === null ||
        tax.value === undefined ||
        isNaN(tax.value)
      ) {
        alert("Please enter valid tax information");
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
      // Validate variant options and variants
      if (variantOptions.length === 0 || productVariants.length === 0) {
        alert("Please add at least one variant option and variant");
        return;
      }

      // Prepare variant options data
      const optionsData = variantOptions.map((option) => ({
        name: option.name,
        values: option.values,
      }));

      // Prepare variants data
      const variantsData = productVariants.map((variant, index) => ({
        variantAttributes: variant.variantAttributes.map((attr) => ({
          name: attr.name,
          value: attr.value,
        })),
        mrpPrice: Number(variant.mrpPrice) || 0,
        sellingPrice: Number(variant.sellingPrice) || 0,
        sku: variant.sku || "",
        quantity: Number(variant.quantity) || 0,
        // Handle image if present
        // image: variant.image ? "variant_image_" + variant.id : null,
        // Send filename reference if image exists
        // image: variant.image ? variant.image.name : null,
        image: variant.image ? variant.image.name : "", // Store filename reference
        index: index,
      }));

      // Append to formData
      formData.append("variantOptions", JSON.stringify(optionsData));
      formData.append("productVariants", JSON.stringify(variantsData));

      // Append variant images with proper naming convention
      productVariants.forEach((variant, index) => {
        if (variant.image) {
          // Use a consistent naming pattern the backend can parse
          formData.append(
            "variantImages",
            variant.image,
            variant.image.name, // Use the original filename
            console.log("variant", variant.image)
          );
        }
      });
    } else {
      // Append simple product pricing
      formData.append("pricing.mrpPrice", pricing.mrpPrice);
      formData.append("pricing.sellingPrice", pricing.sellingPrice);
      formData.append("pricing.sku", pricing.sku || "");
      formData.append("pricing.quantity", pricing.quantity || "0");
    }

    // Append tax
    formData.append("tax.taxType", tax.taxType);
    formData.append("tax.value", tax.value);

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

      // ✅ Prefill Variant Options
      setVariantOptions(product.variantOptions || []);
      // Set product type and toggle variant section accordingly
      setProductType(product.productType || "simple");
      setIsOpenProduct({
        variant_Product_Section_5: product.productType === "variant",
      });

      // ✅ Prefill Product Variants with Images
      if (product.productVariants?.length > 0) {
        const formattedVariants = product.productVariants.map((variant) => ({
          id: variant.id || "",
          variantAttributes: variant.variantAttributes || [],
          mrpPrice: variant.mrpPrice || 0,
          sellingPrice: variant.sellingPrice || 0,
          sku: variant.sku || "",
          quantity: variant.quantity || 0,
          image: variant.image
            ? `http://localhost:7000/uploads/variants/${variant.image
                .split("/")
                .pop()}`
            : null,
        }));

        setProductVariants(formattedVariants);
        console.log("pres", productVariants);
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
        handleVariantImageUpload,
        generateAllVariants,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
