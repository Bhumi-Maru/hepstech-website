const Product = require("../models/CreateProductModel");
const ProductDescription = require("../models/ProductDescription");
const ProductGalleryImage = require("../models/ProductGalleryImageModel");
const SeoTag = require("../models/ProductSEO");
const ProductVariant = require("../models/ProductVariantModel");
const MainCategory = require("../models/mainCategoryModel");
const SubCategory = require("../models/subCategoryModel");

// ✅ CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    const {
      productTitle,
      productMainCategory,
      productSubCategory,
      productPurchaseMinQuantity,
      productPurchaseMaxQuantity,
      productStatus,
      productStockVisibility,
      productLabel,
      productType,
      seoTitle,
      seoDescription,
      seoUrl,
    } = req.body;

    console.log(req.body); // Debugging incoming data

    // Handle File Uploads
    const productMainImage =
      req.files["productMainImage"]?.[0]?.path.replace(/\\/g, "/") || null;
    const galleryImages =
      req.files["galleryImages"]?.map((file) =>
        file.path.replace(/\\/g, "/")
      ) || [];

    // Handle Variant Images Mapping
    const variantImagesMap = {};
    if (req.files["variantImages"]) {
      req.files["variantImages"].forEach((file) => {
        const match = file.originalname.match(/variant-(\d+)-image/); // Extract variant index
        if (match) {
          variantImagesMap[match[1]] = file.path.replace(/\\/g, "/");
        }
      });
    }

    console.log("Received files:", {
      main: req.files["productMainImage"]?.[0]?.originalname,
      gallery: req.files["galleryImages"]?.map((f) => f.originalname),
      variants: req.files["variantImages"]?.map((f) => f.originalname),
    });

    // Validate Main & Subcategory
    const mainCategory = await MainCategory.findById(productMainCategory);
    const subCategory = await SubCategory.findById(productSubCategory);
    if (!mainCategory || !subCategory) {
      return res
        .status(400)
        .json({ message: "Invalid Main or Subcategory ID" });
    }

    // Parse Pricing & Tax
    const pricing =
      productType === "simple"
        ? {
            mrpPrice: Number(req.body["pricing.mrpPrice"]),
            sellingPrice: Number(req.body["pricing.sellingPrice"]),
            sku: req.body["pricing.sku"],
            quantity: Number(req.body["pricing.quantity"]),
          }
        : undefined;

    const tax = {
      taxType: req.body["tax.taxType"],
      value: Number(req.body["tax.value"]),
    };

    // Helper function to parse JSON fields safely
    const parseJSON = (field) => {
      try {
        return req.body[field] ? JSON.parse(req.body[field]) : [];
      } catch (error) {
        return res.status(400).json({ message: `Invalid ${field} format` });
      }
    };

    const variantOptions = parseJSON("variantOptions");
    let productVariants = parseJSON("productVariants");

    const descriptionSections = parseJSON("descriptionSections").map(
      (section) => ({
        sectionTitle: section.title,
        description: section.description,
      })
    );

    // Create Product
    const newProduct = new Product({
      productTitle,
      productMainCategory,
      productSubCategory,
      productMainImage,
      productPurchaseMinQuantity,
      productPurchaseMaxQuantity,
      pricing,
      productType,
      variantOptions: productType === "variant" ? variantOptions : [],
      productVariants: [],
      tax,
      productStatus,
      productStockVisibility,
      productLabel,
    });

    await newProduct.save();

    // Create Product Description
    await new ProductDescription({
      productId: newProduct._id,
      descriptionSections,
    }).save();

    // Create Gallery Images
    await new ProductGalleryImage({
      productId: newProduct._id,
      galleryImages,
    }).save();

    // Create SEO Tags
    await new SeoTag({
      productId: newProduct._id,
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
    }).save();

    // Create Variants if applicable
    if (productType === "variant") {
      let createdVariants = [];

      for (let i = 0; i < productVariants.length; i++) {
        let variant = productVariants[i];

        const newVariant = new ProductVariant({
          productId: newProduct._id,
          variantAttributes: variant.variantAttributes,
          mrpPrice: variant.mrpPrice,
          sellingPrice: variant.sellingPrice,
          sku: variant.sku,
          quantity: variant.quantity,
          image: variantImagesMap[i] || null, // Assign uploaded image if available
        });

        await newVariant.save();
        createdVariants.push(newVariant._id);
      }

      newProduct.productVariants = createdVariants;
      await newProduct.save();
    }

    res.status(201).json({
      message: "Product created successfully!",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Step 1: Check if Product Exists
    const productExists = await Product.findById(id);
    if (!productExists) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Step 2: Extract Data from FormData
    const {
      productTitle,
      productMainCategory,
      productSubCategory,
      productPurchaseMinQuantity,
      productPurchaseMaxQuantity,
      productStatus,
      productStockVisibility,
      productLabel,
      seoTitle,
      seoDescription,
      seoUrl,
    } = req.body;

    // Step 3: Handle Main Image
    const productMainImage = req.files?.productMainImage
      ? req.files.productMainImage[0].path.replace(/\\/g, "/")
      : productExists.productMainImage;

    // Step 4: Handle Gallery Images - Initialize with existing images
    let galleryImages = [...(productExists.galleryImages || [])];

    // If new gallery images are uploaded
    if (req.files?.galleryImages) {
      const newGalleryImages = req.files.galleryImages.map((file) =>
        file.path.replace(/\\/g, "/")
      );

      // Add new images to the existing array
      galleryImages = [...galleryImages, ...newGalleryImages];

      // Update ProductGalleryImage collection (append new images)
      await ProductGalleryImage.findOneAndUpdate(
        { productId: id },
        {
          $setOnInsert: { productId: id }, // Ensure productId is set if creating new
          $push: { galleryImages: { $each: newGalleryImages } },
        },
        {
          upsert: true, // Create if doesn't exist
          new: true,
        }
      );
    }

    // Step 5: Handle Pricing
    let pricing = productExists.pricing;
    if (
      req.body["pricing.mrpPrice"] ||
      req.body["pricing.sellingPrice"] ||
      req.body["pricing.sku"] ||
      req.body["pricing.quantity"]
    ) {
      pricing = {
        mrpPrice: req.body["pricing.mrpPrice"]
          ? Number(req.body["pricing.mrpPrice"])
          : pricing.mrpPrice,
        sellingPrice: req.body["pricing.sellingPrice"]
          ? Number(req.body["pricing.sellingPrice"])
          : pricing.sellingPrice,
        sku: req.body["pricing.sku"] || pricing.sku,
        quantity: req.body["pricing.quantity"]
          ? Number(req.body["pricing.quantity"])
          : pricing.quantity,
      };
    }

    // Step 6: Handle Tax
    let tax = productExists.tax;
    if (req.body["tax.taxType"] || req.body["tax.value"]) {
      tax = {
        taxType: req.body["tax.taxType"] || tax.taxType,
        value: req.body["tax.value"]
          ? Number(req.body["tax.value"])
          : tax.value,
      };
    }

    // Step 7: Handle Description Sections
    if (req.body.descriptionSections) {
      try {
        const parsedSections = JSON.parse(req.body.descriptionSections);
        const descriptionSections = parsedSections.map((section) => ({
          sectionTitle: section.title,
          description: section.description,
        }));

        await ProductDescription.findOneAndUpdate(
          { productId: id },
          { descriptionSections },
          { new: true, upsert: true }
        );
      } catch (error) {
        return res
          .status(400)
          .json({ message: "Invalid descriptionSections format" });
      }
    }

    // Step 8: Update SEO Data
    await SeoTag.findOneAndUpdate(
      { productId: id },
      {
        title: seoTitle || productExists.seo?.title,
        description: seoDescription || productExists.seo?.description,
        url: seoUrl || productExists.seo?.url,
      },
      { new: true, upsert: true }
    );

    // Step 9: Update Product Model
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        productTitle: productTitle || productExists.productTitle,
        productMainCategory:
          productMainCategory || productExists.productMainCategory,
        productSubCategory:
          productSubCategory || productExists.productSubCategory,
        productPurchaseMinQuantity:
          productPurchaseMinQuantity ||
          productExists.productPurchaseMinQuantity,
        productPurchaseMaxQuantity:
          productPurchaseMaxQuantity ||
          productExists.productPurchaseMaxQuantity,
        productStatus: productStatus || productExists.productStatus,
        productStockVisibility:
          productStockVisibility || productExists.productStockVisibility,
        productLabel: productLabel || productExists.productLabel,
        productMainImage,
        pricing,
        tax,
        galleryImages, // Update with combined gallery images
      },
      { new: true }
    );

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Failed to update product", error });
  }
};

// ✅ GET ALL PRODUCTS (With Main & Subcategories Populated)
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate({
        path: "productMainCategory",
        select: "main_category_id main_category_title",
      })
      .populate({
        path: "productSubCategory",
        select: "sub_category_id sub_category_title",
      });

    const populatedProducts = await Promise.all(
      products.map(async (product) => {
        const description = await ProductDescription.findOne({
          productId: product._id,
        });
        const gallery = await ProductGalleryImage.findOne({
          productId: product._id,
        });
        const seo = await SeoTag.findOne({ productId: product._id });

        return {
          ...product.toObject(),
          productPurchaseMinQuantity: product.productPurchaseMinQuantity,
          productPurchaseMaxQuantity: product.productPurchaseMaxQuantity,
          description: description || {},
          gallery: gallery || {},
          seo: seo || {},
        };
      })
    );

    res.status(200).json(populatedProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET PRODUCT BY ID (With Main & Subcategories Populated)
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id)
      .populate({
        path: "productMainCategory",
        select: "main_category_id main_category_title",
      })
      .populate({
        path: "productSubCategory",
        select: "sub_category_id sub_category_title",
      });

    if (!product) return res.status(404).json({ message: "Product not found" });

    // Fetch related data separately
    const description = await ProductDescription.findOne({
      productId: product._id,
    });
    const gallery = await ProductGalleryImage.findOne({
      productId: product._id,
    });
    const seo = await SeoTag.findOne({ productId: product._id });

    res.status(200).json({
      ...product.toObject(),
      description: description || {},
      gallery: gallery || {},
      seo: seo || {},
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ DELETE PRODUCT BY ID (And Related Data)
const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await ProductDescription.deleteOne({ productId: id });
    await ProductGalleryImage.deleteOne({ productId: id });
    await SeoTag.deleteOne({ productId: id });

    res
      .status(200)
      .json({ message: "Product and related data deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ DELETE SELECTED PRODUCTS (Bulk Delete)
const deleteSelectedProducts = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || ids.length === 0)
      return res.status(400).json({ message: "No IDs provided" });

    await Product.deleteMany({ _id: { $in: ids } });
    await ProductDescription.deleteMany({ productId: { $in: ids } });
    await ProductGalleryImage.deleteMany({ productId: { $in: ids } });
    await SeoTag.deleteMany({ productId: { $in: ids } });

    res
      .status(200)
      .json({ message: "Selected products deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ DELETE ALL PRODUCTS
const deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    await ProductDescription.deleteMany({});
    await ProductGalleryImage.deleteMany({});
    await SeoTag.deleteMany({});

    res.status(200).json({ message: "All products deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  deleteSelectedProducts,
  deleteAllProducts,
};
