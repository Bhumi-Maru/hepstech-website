const File = require("../models/fileModel");
const MainCategory = require("../models/mainCategoryModel");
const fs = require("fs");
const path = require("path");

// ✅ Add a new main category
const addMainCategory = async (req, res) => {
  try {
    const {
      main_category_title,
      main_category_status,
      add_banner_image_status,
      main_image, // Expecting the ID of the main image
      add_banner_image, // Expecting the ID of the banner image
    } = req.body;

    // Validate required fields
    if (!main_category_title || !main_category_status || !main_image) {
      return res.status(400).json({ message: "Required fields are missing." });
    }

    // Check if the main image exists in the File collection
    const mainImageFile = await File.findById(main_image);
    if (!mainImageFile) {
      return res.status(404).json({ message: "Main image not found." });
    }

    // Check if the banner image exists in the File collection (if provided)
    let bannerImageFile = null;
    if (add_banner_image) {
      bannerImageFile = await File.findById(add_banner_image);
      if (!bannerImageFile) {
        return res.status(404).json({ message: "Banner image not found." });
      }
    }

    // Create new category with file references
    const newCategory = new MainCategory({
      main_category_title,
      main_image: main_image, // Store the ID of the main image
      main_category_status,
      add_banner_image: add_banner_image || null, // Store the ID of the banner image (if provided)
      add_banner_image_status,
    });

    await newCategory.save();

    res.status(201).json({
      message: "Main category added successfully",
      category: newCategory,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update an existing main category
const updateMainCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      main_category_title,
      main_category_status,
      add_banner_image_status,
      main_image,
      add_banner_image,
    } = req.body;

    // Fetch the existing category
    const existingCategory = await MainCategory.findById(id).populate(
      "main_image add_banner_image"
    );

    if (!existingCategory) {
      return res.status(404).json({ message: "Main category not found" });
    }

    // Validate required fields
    if (!main_category_title || !main_category_status) {
      return res.status(400).json({ message: "Required fields are missing." });
    }

    // Check if new main image exists in the File collection (if provided)
    if (main_image) {
      const mainImageFile = await File.findById(main_image);
      if (!mainImageFile) {
        return res.status(404).json({ message: "Main image not found." });
      }
    }

    // Check if new banner image exists in the File collection (if provided)
    if (add_banner_image) {
      const bannerImageFile = await File.findById(add_banner_image);
      if (!bannerImageFile) {
        return res.status(404).json({ message: "Banner image not found." });
      }
    }

    // Prepare updated fields
    const updatedFields = {
      main_category_title,
      main_category_status,
      add_banner_image_status,
      main_image: main_image || existingCategory.main_image, // Preserve existing image if not updated
      add_banner_image: add_banner_image || existingCategory.add_banner_image, // Preserve existing banner image if not updated
    };

    // Update the category
    const updatedCategory = await MainCategory.findByIdAndUpdate(
      id,
      updatedFields,
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Main category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a single main category by ID, including file from uploads folder
const deleteMainCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the category to get the image file paths before deletion
    const category = await MainCategory.findById(id).populate(
      "main_image add_banner_image"
    );

    if (!category) {
      return res.status(404).json({ message: "Main category not found" });
    }

    // Delete associated images from file system
    const deleteFile = (file) => {
      if (file && file.filePath) {
        const filePath = path.join(__dirname, `../public${file.filePath}`);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath); // Delete the file
        }
      }
    };

    deleteFile(category.main_image);
    deleteFile(category.add_banner_image);

    // Delete associated image documents from the File collection
    if (category.main_image) {
      await File.findByIdAndDelete(category.main_image._id);
    }
    if (category.add_banner_image) {
      await File.findByIdAndDelete(category.add_banner_image._id);
    }

    // Delete the main category
    await MainCategory.findByIdAndDelete(id);

    res.status(200).json({
      message: "Main category and associated files deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get a main category by ID
const getMainCategoryById = async (req, res) => {
  try {
    const { id } = req.params; // Get category ID from URL

    // Fetch the category by its ID and populate its file references
    const category = await MainCategory.findById(id)
      .populate("main_image") // Populate the main_image field
      .populate("add_banner_image"); // Populate the add_banner_image field

    if (!category) {
      return res.status(404).json({ message: "Main category not found" });
    }

    res.status(200).json({
      message: "Main category fetched successfully",
      category: category,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete all main categories
const deleteAllMainCategories = async (req, res) => {
  try {
    await MainCategory.deleteMany({});
    res
      .status(200)
      .json({ message: "All main categories deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete selected main categories (bulk delete)
const deleteMainCategories = async (req, res) => {
  try {
    const { ids } = req.body; // Get the array of category IDs from the request body

    if (!Array.isArray(ids) || ids.length === 0) {
      return res
        .status(400)
        .json({ message: "No categories selected for deletion" });
    }

    // Fetch categories to get the file paths for deletion
    const categoriesToDelete = await MainCategory.find({
      _id: { $in: ids },
    }).populate("main_image add_banner_image");

    if (!categoriesToDelete || categoriesToDelete.length === 0) {
      return res.status(404).json({ message: "No categories found to delete" });
    }

    // Delete categories and their corresponding files
    const deletedCategories = await MainCategory.deleteMany({
      _id: { $in: ids },
    });

    if (deletedCategories.deletedCount === 0) {
      return res.status(404).json({ message: "No categories found to delete" });
    }

    // Delete files from the uploads folder
    categoriesToDelete.forEach((category) => {
      // Delete main image file
      if (category.main_image && category.main_image.filePath) {
        const mainImagePath = path.join(
          __dirname,
          `../public${category.main_image.filePath}`
        );
        if (fs.existsSync(mainImagePath)) {
          fs.unlinkSync(mainImagePath); // Delete the file
        }
      }

      // Delete banner image file
      if (category.add_banner_image && category.add_banner_image.filePath) {
        const bannerImagePath = path.join(
          __dirname,
          `../public${category.add_banner_image.filePath}`
        );
        if (fs.existsSync(bannerImagePath)) {
          fs.unlinkSync(bannerImagePath); // Delete the file
        }
      }
    });

    res.status(200).json({
      message: `${deletedCategories.deletedCount} category(s) and their associated files deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all main categories
const getAllMainCategories = async (req, res) => {
  try {
    // Fetch all main categories with populated image data
    const categories = await MainCategory.find()
      .populate("main_image") // Populate the main_image field
      .populate("add_banner_image"); // Populate the add_banner_image field

    res.status(200).json({
      message: "Main categories fetched successfully",
      categories: categories,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addMainCategory,
  updateMainCategory,
  deleteMainCategory,
  getMainCategoryById,
  deleteAllMainCategories,
  getAllMainCategories,
  deleteMainCategories,
};
