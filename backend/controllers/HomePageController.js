const Product = require("../models/CreateProductModel");
const File = require("../models/fileModel");
const HomePage = require("../models/HomePageModel");
const Layout = require("../models/LayoutOfHomePageModel");

// ✅ Create Home Page Section
// ✅ Create Home Page Section with automatic layout number assignment
const createHomePage = async (req, res) => {
  try {
    // If layoutNumber is not provided, find the next available layout number
    if (!req.body.layoutNumber) {
      // Find all layouts and sort by layoutNumber in descending order
      const lastLayout = await Layout.findOne()
        .sort({ layoutNumber: -1 })
        .limit(1);

      // Calculate the next layout number
      const nextLayoutNumber = lastLayout ? lastLayout.layoutNumber + 1 : 1;

      // ✅ Allow up to layoutNumber 24
      if (nextLayoutNumber > 24) {
        return res.status(400).json({
          message: "Maximum number of layouts (24) reached",
        });
      }

      // Create a new layout with the next available number
      const newLayout = new Layout({
        layoutName: `Layout ${nextLayoutNumber}`,
        layoutTitle: `Layout ${nextLayoutNumber}`,
        layoutNumber: nextLayoutNumber,
        layoutStatus: "active",
      });

      const savedLayout = await newLayout.save();
      req.body.home_page_layout_number = savedLayout._id;
    }
    // If layoutNumber is provided, find the existing layout
    else {
      const layout = await Layout.findOne({
        layoutNumber: req.body.layoutNumber,
      });
      if (layout) {
        req.body.home_page_layout_number = layout._id;
      } else {
        return res.status(404).json({
          message: "Layout with provided number not found",
        });
      }
    }

    // ✅ Validate home_page_image if provided
    if (req.body.home_page_image) {
      const bannerImage = await File.findById(req.body.home_page_image);
      if (!bannerImage) {
        return res
          .status(404)
          .json({ message: "Main banner image not found." });
      }
    }

    const newHomePage = new HomePage(req.body);
    const savedHomePage = await newHomePage.save();

    res.status(201).json({
      message: "Home Page Created Successfully....!",
      newHomePage: savedHomePage,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error creating home page",
      error: err.message,
    });
  }
};

// ✏️ Update Home Page by ID
// ✏️ Update Home Page by ID
const updateHomePageById = async (req, res) => {
  try {
    const { id } = req.params;

    // If layoutNumber is provided in the request, find the corresponding layout
    if (req.body.layoutNumber) {
      const layout = await Layout.findOne({
        layoutNumber: req.body.layoutNumber,
      });
      if (layout) {
        req.body.home_page_layout_number = layout._id;
      } else {
        return res.status(404).json({
          message: "Layout with provided number not found",
        });
      }
    }

    // ✅ Validate new image if being updated
    if (req.body.home_page_image) {
      const bannerImage = await File.findById(req.body.home_page_image);
      if (!bannerImage) {
        return res
          .status(404)
          .json({ message: "Main banner image not found." });
      }
    }

    const updatedHomePage = await HomePage.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    }).populate([
      "home_page_main_category",
      "home_page_sub_category",
      "home_page_products",
      "home_page_image",
      "home_page_layout_number",
    ]);

    if (!updatedHomePage) {
      return res.status(404).json({ message: "Home page not found" });
    }

    res.status(200).json({
      message: "Home Page Updated Successfully!",
      updatedHomePage,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating home page",
      error: err.message,
    });
  }
};

// ❌ Delete Home Page by ID
const deleteHomePageById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HomePage.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Home page not found" });
    }

    res.status(200).json({ message: "Home page deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting home page", error: err.message });
  }
};

// 📄 Get All Home Pages
const getAllHomePages = async (req, res) => {
  try {
    const pages = await HomePage.find()
      .populate({
        path: "home_page_image",
        select:
          "_id fileId filename filePath fileType fileSize createdAt updatedAt",
      })
      .populate({
        path: "home_page_main_category",
        select:
          "_id main_category_title main_image main_category_status add_banner_image add_banner_image_status main_category_id createdAt updatedAt",
      })
      .populate({
        path: "home_page_sub_category",
        select:
          "_id sub_category_title main_category_id sub_image sub_category_status sub_category_id createdAt updatedAt",
      })
      .populate({
        path: "home_page_products",
        select: "_id productTitle productType productStatus",
      })
      .populate({
        path: "home_page_layout_number",
        select:
          "_id layoutName layoutNumber layoutTitle layoutStatus createdAt updatedAt",
      });

    res.status(200).json(pages);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching home pages", error: err.message });
  }
};

// 🔍 Get Home Page by ID
const getHomePageById = async (req, res) => {
  try {
    const { id } = req.params;
    const page = await HomePage.findById(id)
      .populate(
        "home_page_layout_number",
        "layoutName layoutNumber layoutTitle layoutStatus"
      )
      .populate("home_page_main_category", "name")
      .populate("home_page_sub_category", "name")
      .populate("home_page_products", "productName");

    if (!page) {
      return res.status(404).json({ message: "Home page not found" });
    }

    res.status(200).json(page);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching home page", error: err.message });
  }
};

const deleteAll = async (req, res) => {
  try {
    const homePage = await HomePage.deleteMany({});
    res.status(200).json({
      message: "delete All successfully",
      homePage,
    });
  } catch (error) {
    console.log("deletet all data", error);
  }
};

/////////////////get homepage data by layout number//////////////////////

const getHomePageDataByLayoutNumber = async (req, res) => {
  try {
    const { layoutNumber } = req.params;

    // Step 1: Find the layout by layoutNumber
    const layout = await Layout.findOne({ layoutNumber });

    if (!layout) {
      return res.status(404).json({ message: "Layout not found" });
    }

    // Step 2: Find HomePage data that references this layout's _id
    const data = await HomePage.find({ home_page_layout_number: layout._id })
      .populate("home_page_layout_number")
      .populate("home_page_main_category")
      .populate("home_page_sub_category")
      .populate("home_page_products"); // if needed

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching homepage data by layout number:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

///////////////////////////GET PRODUCT FROM MAIN CATEGORY///////////////////////////////////////

const getProductsByMainCategoryAndSubCategory = async (req, res) => {
  try {
    const { mainCategoryId, subCategoryId } = req.params;

    // Find products that match both the main category and subcategory
    const products = await Product.find({
      productMainCategory: mainCategoryId,
      productSubCategory: subCategoryId, // Ensure this field exists in your Product schema
    })
      .populate(
        "productMainCategory",
        "_id main_category_title main_image main_category_status add_banner_image add_banner_image_status main_category_id"
      )
      .populate(
        "productSubCategory",
        "_id sub_category_title main_category_id sub_image sub_category_status sub_category_id"
      )
      .populate(
        "productVariants",
        "_id productId variantAttributes mrpPrice sellingPrice sku quantity image"
      )
      .select(
        "_id productTitle productMainImage pricing productPurchaseMinQuantity productPurchaseMaxQuantity productType enableColorOptions colorOptions variantOptions productVariants tax productStatus productStockVisibility productLabel createdAt updatedAt description gallery seo"
      );

    if (products.length === 0) {
      return res.status(404).json({
        message: "No products found for this main category and subcategory",
      });
    }

    res
      .status(200)
      .json({ message: "Products fetched successfully", products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
};

////////////////////////////////////////////// LAYOUT ///////////////////////////////////////////////////////

// Create a new layout
const createLayout = async (req, res) => {
  try {
    const { layoutName, layoutTitle, layoutNumber, layoutStatus } = req.body;

    // Check for duplicate layoutNumber
    const exists = await Layout.findOne({ layoutNumber });
    if (exists) {
      return res.status(400).json({ message: "Layout number already exists" });
    }

    const newLayout = new Layout({
      layoutName,
      layoutTitle,
      layoutNumber,
      layoutStatus,
    });

    const savedLayout = await newLayout.save();
    res.status(201).json(savedLayout);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating layout", error: err.message });
  }
};

//get a layout data
// Get all layout data
const getAllLayouts = async (req, res) => {
  try {
    const layouts = await Layout.find({});
    res.status(200).json({
      message: "Layout data fetched successfully!",
      layouts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching layout data",
      error: error.message,
    });
  }
};

// delete all layouts
const deleteAllLayout = async (req, res) => {
  try {
    const layout = await Layout.deleteMany({});
    res.status(200).json({
      message: "delete All successfully",
      layout,
    });
  } catch (error) {
    console.log("deletet all data", error);
  }
};

// Update layout by ID
const updateLayoutById = async (req, res) => {
  try {
    const { id } = req.params;
    const { layoutName, layoutTitle, layoutNumber, layoutStatus } = req.body;

    // Check if another layout already has the same number (excluding current one)
    const exists = await Layout.findOne({
      layoutNumber,
      _id: { $ne: id },
    });

    if (exists) {
      return res.status(400).json({ message: "Layout number already exists" });
    }

    const updatedLayout = await Layout.findByIdAndUpdate(
      id,
      { layoutName, layoutTitle, layoutNumber, layoutStatus },
      { new: true, runValidators: true }
    );

    if (!updatedLayout) {
      return res.status(404).json({ message: "Layout not found" });
    }

    res.status(200).json({
      message: "Layout updated successfully!",
      updatedLayout,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating layout",
      error: err.message,
    });
  }
};

// Delete layout by ID
const deleteLayoutById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLayout = await Layout.findByIdAndDelete(id);

    if (!deletedLayout) {
      return res.status(404).json({ message: "Layout not found" });
    }

    res.status(200).json({
      message: "Layout deleted successfully!",
      deletedLayout,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting layout",
      error: err.message,
    });
  }
};

// Add this new method to your controller
// Update layout by number
const updateLayoutByNumber = async (req, res) => {
  try {
    const { layoutNumber } = req.params;
    const updatedLayout = await Layout.findOneAndUpdate(
      { layoutNumber: Number(layoutNumber) },
      req.body,
      { new: true }
    );

    if (!updatedLayout) {
      return res.status(404).json({ message: "Layout not found" });
    }

    res.status(200).json(updatedLayout);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating layout", error: err.message });
  }
};

// Specifically update section title for a layout
const updateLayoutSectionTitle = async (req, res) => {
  try {
    const { layoutNumber } = req.params;
    const { sectionTitle } = req.body;

    const updatedLayout = await Layout.findOneAndUpdate(
      { layoutNumber: Number(layoutNumber) },
      { sectionTitle },
      { new: true }
    );

    if (!updatedLayout) {
      return res.status(404).json({ message: "Layout not found" });
    }

    res.status(200).json(updatedLayout);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating section title", error: err.message });
  }
};

//

const getLayoutByNumber = async (req, res) => {
  try {
    const { layoutNumber } = req.params;

    const layout = await Layout.findOne({ layoutNumber: Number(layoutNumber) });

    if (!layout) {
      return res.status(404).json({ message: "Layout not found" });
    }

    return res.status(200).json({
      message: "Layout fetched successfully by number",
      layout,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching layout by number",
      error: error.message,
    });
  }
};

module.exports = {
  createHomePage,
  updateHomePageById,
  deleteHomePageById,
  getAllHomePages,
  getHomePageById,
  createLayout,
  getAllLayouts,
  deleteAll,
  deleteAllLayout,
  updateLayoutById,
  deleteLayoutById,
  updateLayoutByNumber,
  updateLayoutSectionTitle,
  getProductsByMainCategoryAndSubCategory,
  getLayoutByNumber,
  getHomePageDataByLayoutNumber,
};
