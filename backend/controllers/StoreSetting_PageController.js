const File = require("../models/fileModel");
const StoreSettingPages = require("../models/StoreSettingPageModel");

// Create a new page
const createPage = async (req, res) => {
  try {
    const {
      pageTitle,
      pages_add_banner_image,
      pages_add_banner_image_status,
      pageContent,
      page_status,
      privacy_policy,
      terms_conditions,
    } = req.body;

    // Check if the banner image exists in the File collection (if provided)
    let bannerImageFile = null;
    if (pages_add_banner_image) {
      bannerImageFile = await File.findById(pages_add_banner_image);
      if (!bannerImageFile) {
        return res.status(404).json({ message: "Banner image not found." });
      }
    }

    const newPage = new StoreSettingPages({
      pageTitle,
      pages_add_banner_image: bannerImageFile,
      pages_add_banner_image_status,
      pageContent,
      page_status,
      privacy_policy,
      terms_conditions,
    });

    await newPage.save();
    res
      .status(201)
      .json({ message: "Page created successfully", page: newPage });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating page", error: error.message });
  }
};

// Get all pages
const getAllPages = async (req, res) => {
  try {
    const pages = await StoreSettingPages.find().populate(
      "pages_add_banner_image"
    );
    res.status(200).json(pages);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching pages", error: error.message });
  }
};

// Get a single page by ID
const getPageById = async (req, res) => {
  try {
    const page = await StoreSettingPages.findById(req.params.id).populate(
      "pages_add_banner_image"
    );
    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }
    res.status(200).json(page);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching page", error: error.message });
  }
};

module.exports = { createPage, getAllPages, getPageById };
