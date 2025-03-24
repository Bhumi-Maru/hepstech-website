const Product = require("../models/CreateProductModel");
const ProductDescription = require("../models/ProductDescription");
const ProductGalleryImage = require("../models/ProductGalleryImageModel");
const SeoTag = require("../models/ProductSEO");
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
      pricing,
      tax,
      productStatus,
      productStockVisibility,
      productLabel,
      descriptionSections,
      seoTitle,
      seoDescription,
      seoUrl,
    } = req.body;

    // Handle Uploaded Files
    const productMainImage = req.files["productMainImage"]
      ? req.files["productMainImage"][0].path.replace(/\\/g, "/")
      : null;

    const galleryImages = req.files["galleryImages"]
      ? req.files["galleryImages"].map((file) => file.path.replace(/\\/g, "/"))
      : [];

    // 🔹 Check if Main & Subcategories exist
    const mainCategory = await MainCategory.findById(productMainCategory);
    const subCategory = await SubCategory.findById(productSubCategory);

    console.log("hello", req.body);

    if (!mainCategory || !subCategory) {
      return res
        .status(400)
        .json({ message: "Invalid Main or Subcategory ID" });
    }

    // 🔹 Step 1: Create Product
    const newProduct = new Product({
      productTitle,
      productMainCategory,
      productSubCategory,
      productMainImage, // Store file path in DB
      productPurchaseMinQuantity,
      productPurchaseMaxQuantity,
      pricing,
      tax,
      productStatus,
      productStockVisibility,
      productLabel,
    });

    await newProduct.save();

    // 🔹 Step 2: Create Product Description
    const newDescription = new ProductDescription({
      productId: newProduct._id,
      descriptionSections,
    });

    await newDescription.save();

    // 🔹 Step 3: Create Gallery Images
    const newGallery = new ProductGalleryImage({
      productId: newProduct._id,
      galleryImages, // Store file paths in DB
    });

    await newGallery.save();

    // 🔹 Step 4: Create SEO Tags
    const newSeoTag = new SeoTag({
      productId: newProduct._id,
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
    });

    await newSeoTag.save();

    res.status(201).json({
      message: "Product created successfully!",
      product: newProduct,
      description: newDescription,
      gallery: newGallery,
      seo: newSeoTag,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      productTitle,
      productMainCategory,
      productSubCategory,
      productMainImage,
      productPurchaseMinQuantity,
      productPurchaseMaxQuantity,
      pricing,
      tax,
      productStatus,
      productStockVisibility,
      productLabel,
      descriptionSections,
      galleryImages,
      seoTitle,
      seoDescription,
      seoUrl,
    } = req.body;

    // 🔹 Step 1: Check if Product Exists
    const productExists = await Product.findById(id);
    if (!productExists) {
      return res.status(404).json({ message: "Product not found" });
    }

    // 🔹 Step 2: Validate MainCategory & SubCategory (Only If Provided)
    if (productMainCategory) {
      const mainCategoryExists = await MainCategory.findById(
        productMainCategory
      );
      if (!mainCategoryExists) {
        return res.status(400).json({ message: "Invalid Main Category ID" });
      }
    }

    if (productSubCategory) {
      const subCategoryExists = await SubCategory.findById(productSubCategory);
      if (!subCategoryExists) {
        return res.status(400).json({ message: "Invalid Subcategory ID" });
      }
    }

    // 🔹 Step 3: Update Product (Using `$set` to Avoid Overwriting Fields)
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: {
          ...(typeof productTitle !== "undefined" && { productTitle }),
          ...(typeof productMainCategory !== "undefined" && {
            productMainCategory,
          }),
          ...(typeof productSubCategory !== "undefined" && {
            productSubCategory,
          }),
          ...(typeof productMainImage !== "undefined" && { productMainImage }),
          ...(productPurchaseMinQuantity !== undefined && {
            productPurchaseMinQuantity,
          }),
          ...(productPurchaseMaxQuantity !== undefined && {
            productPurchaseMaxQuantity,
          }),
          ...(typeof pricing !== "undefined" && { pricing }),
          ...(typeof tax !== "undefined" && { tax }),
          ...(typeof productStatus !== "undefined" && { productStatus }),
          ...(typeof productStockVisibility !== "undefined" && {
            productStockVisibility,
          }),
          ...(typeof productLabel !== "undefined" && { productLabel }),
        },
      },
      { new: true }
    );

    // 🔹 Step 4: Update Other Related Data (Only If Provided)
    if (typeof descriptionSections !== "undefined") {
      await ProductDescription.findOneAndUpdate(
        { productId: id },
        { descriptionSections },
        { new: true }
      );
    }

    if (typeof galleryImages !== "undefined") {
      await ProductGalleryImage.findOneAndUpdate(
        { productId: id },
        { galleryImages },
        { new: true }
      );
    }

    if (seoTitle || seoDescription || seoUrl) {
      await SeoTag.findOneAndUpdate(
        { productId: id },
        {
          ...(typeof seoTitle !== "undefined" && { title: seoTitle }),
          ...(typeof seoDescription !== "undefined" && {
            description: seoDescription,
          }),
          ...(typeof seoUrl !== "undefined" && { url: seoUrl }),
        },
        { new: true }
      );
    }

    res.status(200).json({
      message: "Product updated successfully!",
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
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
