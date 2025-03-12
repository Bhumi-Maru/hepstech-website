const File = require("../models/fileModel");
const MainCategory = require("../models/mainCategoryModel");
const SubCategory = require("../models/subCategoryModel");

const createSubCategory = async (req, res) => {
  try {
    const {
      sub_category_title,
      main_category_id,
      sub_image,
      sub_category_status,
    } = req.body;

    // Check if main category exists
    // const mainCategoryExists = await MainCategory.findById(main_category_id);
    // if (!mainCategoryExists) {
    //   return res.status(404).json({ message: "Main category not found." });
    // }

    // Check if sub image exists
    const subImageExists = await File.findById(sub_image);
    if (!subImageExists) {
      return res.status(404).json({ message: "Sub image not found." });
    }

    // Create new subcategory
    const newSubCategory = new SubCategory({
      sub_category_title,
      main_category_id,
      sub_image,
      sub_category_status,
    });

    await newSubCategory.save();

    res.status(201).json({
      message: "SubCategory created successfully",
      newSubCategory,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate(
      "main_category_id sub_image"
    );
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id).populate(
      "main_category_id sub_image"
    );
    if (!subCategory)
      return res.status(404).json({ message: "SubCategory not found" });
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!subCategory)
      return res.status(404).json({ message: "SubCategory not found" });
    res
      .status(200)
      .json({ message: "SubCategory updated successfully", subCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!subCategory)
      return res.status(404).json({ message: "SubCategory not found" });
    res.status(200).json({ message: "SubCategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAllSubCategories = async (req, res) => {
  try {
    await SubCategory.deleteMany();
    res.status(200).json({ message: "All SubCategories deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSelectedSubCategories = async (req, res) => {
  try {
    const { ids } = req.body;
    await SubCategory.deleteMany({ _id: { $in: ids } });
    res
      .status(200)
      .json({ message: "Selected SubCategories deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
  deleteAllSubCategories,
  deleteSelectedSubCategories,
};
