import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useProductVariantContext } from "./Product_Variant_Context";

//create Context
export const ProductContext = createContext();

//make a hook
export const useProductContext = () => {
  return useContext(ProductContext);
};

// Context Provider Component
export const ProductProvider = ({ children }) => {
  const { colors, setColors } = useProductVariantContext();
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

  const handleCreateProduct = async (
    variantData = { options: [], variants: [] }
  ) => {
    if (!productTitle || !productMainCategory || !productSubCategory) {
      alert("Please fill in all required fields");
      return;
    }

    if (productType === "simple") {
      if (!pricing.mrpPrice || !pricing.sellingPrice) {
        alert("Pricing details are required.");
        return;
      }
      if (isNaN(tax.value) || tax.value === null || tax.value === undefined) {
        alert("Please enter a valid tax value");
        return;
      }
    }

    const formData = new FormData();
    formData.append("productTitle", productTitle);
    formData.append("productMainCategory", productMainCategory);
    formData.append("productSubCategory", productSubCategory);

    // Prepare color options for backend
    const colorOptionsForBackend = colors.map((color) => ({
      _id: color._id || undefined,
      name: color.name,
      hex: color.hex,
    }));
    formData.append("colorOptions", JSON.stringify(colorOptionsForBackend));
    formData.append("enableColorOptions", colors.length > 0 ? "true" : "false");

    formData.append("productPurchaseMinQuantity", productMinQuantity || "1");
    formData.append("productPurchaseMaxQuantity", productMaxQuantity || "10");
    formData.append("productStatus", productStatus || "Active");
    formData.append(
      "productStockVisibility",
      productStockVisibility || "show stock quantity"
    );
    formData.append("productLabel", productLabel || "");
    formData.append("productType", productType || "simple");

    if (productType === "variant") {
      if (variantOptions.length === 0 || productVariants.length === 0) {
        alert("Please add at least one variant option and variant");
        return;
      }
      formData.append("variantOptions", JSON.stringify(variantOptions));
      formData.append(
        "productVariants",
        JSON.stringify(
          productVariants.map((variant) => ({
            ...variant,
            variantAttributes: variant.variantAttributes.map((attr) => ({
              name: attr.name,
              value: attr.value,
              hex: attr.hex,
            })),
          }))
        )
      );
    } else {
      formData.append("pricing.mrpPrice", Number(pricing.mrpPrice) || 0);
      formData.append(
        "pricing.sellingPrice",
        Number(pricing.sellingPrice) || 0
      );
      formData.append("pricing.sku", pricing.sku || "");
      formData.append("pricing.quantity", Number(pricing.quantity) || 0);
    }

    formData.append("tax.taxType", tax.taxType);
    formData.append("tax.value", Number(tax.value) || 0);
    formData.append("seoTitle", seoTitle || "");
    formData.append("seoDescription", seoDescription || "");
    formData.append("seoUrl", seoUrl || "");
    formData.append("descriptionSections", JSON.stringify(descriptionSections));

    if (productMainImage) {
      formData.append("productMainImage", productMainImage);
    }

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
        response = await axios.put(
          `http://localhost:7000/api/products/update/${productId}`,
          formData,
          config
        );

        // Update local state with response data
        if (response.data.product) {
          const updatedProduct = response.data.product;
          setColors(
            updatedProduct.colorOptions?.map((color) => ({
              _id: color._id,
              name: color.name,
              hex: color.hex,
            })) || []
          );
        }
      } else {
        response = await axios.post(
          "http://localhost:7000/api/products/create",
          formData,
          config
        );

        if (response.data.product) {
          setProductId(response.data.product._id);
        }
      }

      if (response.status === 200 || response.status === 201) {
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

      setProductId(product._id);
      setProductTitle(product.productTitle || "");
      setProductMainCategory(product.productMainCategory?._id || "");
      setProductSubCategory(product.productSubCategory?._id || "");

      // Set color options properly
      if (product.colorOptions && product.colorOptions.length > 0) {
        setColors(
          product.colorOptions.map((color) => ({
            _id: color._id,
            name: color.name,
            hex: color.hex,
          }))
        );
      } else {
        setColors([]);
      }

      setProductMinQuantity(product.productPurchaseMinQuantity || null);
      setProductMaxQuantity(product.productPurchaseMaxQuantity || null);

      if (productType === "simple") {
        setPricing({
          mrpPrice: product.pricing?.mrpPrice || "",
          sellingPrice: product.pricing?.sellingPrice || "",
          sku: product.pricing?.sku || "",
          quantity: product.pricing?.quantity || "",
        });
      }

      setTax({
        taxType: product.tax?.taxType || "flat",
        value: product.tax?.value || null,
      });

      setProductStatus(product.productStatus || "");
      setProductStockVisibility(product.productStockVisibility || "");
      setProductLabel(product.productLabel || "");

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

      setSeoTitle(product.seo?.title || "");
      setSeoDescription(product.seo?.description || "");
      setSeoUrl(product.seo?.url || "");

      if (product.productMainImage) {
        setMainImagePreview(
          `http://localhost:7000/uploads/${product.productMainImage
            .split("/")
            .pop()}`
        );
      }

      if (product.gallery?.galleryImages?.length > 0) {
        const galleryPreviews = product.gallery.galleryImages.map((img) => ({
          file: null,
          previewURL: `http://localhost:7000/uploads/gallery/${img
            .split("/")
            .pop()}`,
          existingPath: img,
          isNew: false,
        }));
        setSelectedImages(galleryPreviews);
        setGalleryImages([...product.gallery.galleryImages]);
      } else {
        setSelectedImages([]);
        setGalleryImages([]);
      }

      setVariantOptions(product.variantOptions || []);
      setProductType(product.productType || "simple");
      setIsOpenProduct({
        variant_Product_Section_5: product.productType === "variant",
      });

      if (product.productVariants?.length > 0) {
        const formattedVariants = await Promise.all(
          product.productVariants.map(async (variant) => {
            let imageData = null;
            let imagePreview = null;

            if (variant.image) {
              if (typeof variant.image === "string") {
                imageData = variant.image;
                imagePreview = `http://localhost:7000/uploads/variants/${variant.image
                  .split("/")
                  .pop()}`;
              } else if (variant.image instanceof File) {
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
              _id: variant._id,
            };
          })
        );
        setProductVariants(formattedVariants);
      } else {
        setProductVariants([]);
      }

      return true;
    } catch (error) {
      console.error("Error fetching product:", error);
      return false;
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
