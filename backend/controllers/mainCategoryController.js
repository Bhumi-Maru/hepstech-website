const File = require("../models/fileModel");
const MainCategoryModel = require("../models/mainCategoryModel");

// ✅ Add a new main category
// ✅ Add a new main category
const addMainCategory = async (req, res) => {
  try {
    const {
      main_category_title,
      main_category_status,
      add_banner_image_status,
    } = req.body;

    // Ensure files were uploaded
    if (!req.files || !req.files.main_image || !req.files.add_banner_image) {
      return res
        .status(400)
        .json({ message: "Both main image and banner image are required." });
    }

    // Save the uploaded files to the File collection
    const mainImageFile = await File.create({
      filename: req.files.main_image[0].originalname,
      filePath: `/uploads/${req.files.main_image[0].filename}`,
      fileType: req.files.main_image[0].mimetype,
      fileSize: req.files.main_image[0].size,
    });

    const bannerImageFile = await File.create({
      filename: req.files.add_banner_image[0].originalname,
      filePath: `/uploads/${req.files.add_banner_image[0].filename}`,
      fileType: req.files.add_banner_image[0].mimetype,
      fileSize: req.files.add_banner_image[0].size,
    });

    // Create new category with file references
    const newCategory = new MainCategoryModel({
      main_category_title,
      main_image: mainImageFile._id, // Store ObjectId reference to the File
      main_category_status,
      add_banner_image: bannerImageFile._id, // Store ObjectId reference to the File
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
    const { id } = req.params; // Get category ID from URL
    const updatedFields = req.body;

    // If new files are provided, save them and update the file references
    if (req.files) {
      if (req.files.main_image) {
        const mainImageFile = await File.create({
          filename: req.files.main_image[0].originalname,
          filePath: `/uploads/${req.files.main_image[0].filename}`,
          fileType: req.files.main_image[0].mimetype,
          fileSize: req.files.main_image[0].size,
        });
        updatedFields.main_image = mainImageFile._id;
      }

      if (req.files.add_banner_image) {
        const bannerImageFile = await File.create({
          filename: req.files.add_banner_image[0].originalname,
          filePath: `/uploads/${req.files.add_banner_image[0].filename}`,
          fileType: req.files.add_banner_image[0].mimetype,
          fileSize: req.files.add_banner_image[0].size,
        });
        updatedFields.add_banner_image = bannerImageFile._id;
      }
    }

    const updatedCategory = await MainCategoryModel.findByIdAndUpdate(
      id,
      updatedFields,
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Main category not found" });
    }

    res.status(200).json({
      message: "Main category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a single main category by ID
const deleteMainCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await MainCategoryModel.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({ message: "Main category not found" });
    }

    res.status(200).json({ message: "Main category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete all main categories
const deleteAllMainCategories = async (req, res) => {
  try {
    await MainCategoryModel.deleteMany({});
    res
      .status(200)
      .json({ message: "All main categories deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all main categories
const getAllMainCategories = async (req, res) => {
  try {
    // Fetch all main categories with populated image data
    const categories = await MainCategoryModel.find()
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
  deleteAllMainCategories,
  getAllMainCategories,
};
