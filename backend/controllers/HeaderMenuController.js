const HeaderMenu = require("../models/HeaderMenuModel");

// Get all header menu items
const getHeaderMenu = async (req, res) => {
  try {
    const headerMenu = await HeaderMenu.findOne().populate("main_categories");
    res.json(headerMenu || { pages: [], main_categories: [] });
  } catch (err) {
    res.status(500).json({
      message: "Server Error: Unable to fetch header menu",
      error: err.message,
    });
  }
};

// Add a main category to the header menu
const addMainCategory = async (req, res) => {
  try {
    const { categoryId } = req.body;
    let headerMenu = await HeaderMenu.findOne();

    if (!headerMenu) {
      headerMenu = new HeaderMenu();
    }

    if (headerMenu.main_categories.includes(categoryId)) {
      return res
        .status(400)
        .json({ message: "Category already exists in header" });
    }

    headerMenu.main_categories.push(categoryId);
    await headerMenu.save();

    res.json(await headerMenu.populate("main_categories"));
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error adding category", error: err.message });
  }
};

// Remove a main category from the header menu
const removeMainCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const headerMenu = await HeaderMenu.findOne();

    if (!headerMenu) {
      return res.status(404).json({ message: "Header menu not found" });
    }

    headerMenu.main_categories = headerMenu.main_categories.filter(
      (id) => id.toString() !== categoryId
    );
    await headerMenu.save();

    res.json({
      message: "Category removed successfully",
      headerMenu: await headerMenu.populate("main_categories"),
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error removing category", error: err.message });
  }
};

// Reorder main   categories in the header menu
const reorderMainCategories = async (req, res) => {
  try {
    const { orderedIds } = req.body;
    const headerMenu = await HeaderMenu.findOne();

    if (!headerMenu) {
      return res.status(404).json({ message: "Header menu not found" });
    }

    const isValid = orderedIds.every((id) =>
      headerMenu.main_categories.includes(id)
    );
    if (!isValid) {
      return res.status(400).json({ message: "Invalid category IDs provided" });
    }

    headerMenu.main_categories = orderedIds;
    await headerMenu.save();

    res.json({
      message: "Categories reordered successfully",
      headerMenu: await headerMenu.populate("main_categories"),
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error reordering categories", error: err.message });
  }
};

// Add a page or custom link to the header menu
const addPageOrLink = async (req, res) => {
  try {
    const { title, url, type } = req.body;
    if (!title || !url || !["page", "link"].includes(type)) {
      return res.status(400).json({ message: "Invalid request parameters" });
    }

    let headerMenu = await HeaderMenu.findOne();
    if (!headerMenu) {
      headerMenu = new HeaderMenu();
    }

    headerMenu.pages.push({ title, url, type });
    await headerMenu.save();

    res.json({ message: "Page/link added successfully", headerMenu });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error adding page/link", error: err.message });
  }
};

// Delete a page or custom link from the header menu
const deletePageOrLink = async (req, res) => {
  try {
    const { id } = req.params;
    const headerMenu = await HeaderMenu.findOne();

    if (!headerMenu) {
      return res.status(404).json({ message: "Header menu not found" });
    }

    const initialLength = headerMenu.pages.length;
    headerMenu.pages = headerMenu.pages.filter(
      (page) => page._id.toString() !== id
    );

    if (headerMenu.pages.length === initialLength) {
      return res.status(404).json({ message: "Page/link not found" });
    }

    await headerMenu.save();
    res.json({ message: "Page/link deleted successfully", headerMenu });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error deleting page/link", error: err.message });
  }
};

module.exports = {
  getHeaderMenu,
  addMainCategory,
  removeMainCategory,
  reorderMainCategories,
  addPageOrLink,
  deletePageOrLink,
};
