const express = require("express");
const {
  addMainCategory,
  updateMainCategory,
  // deleteMainCategory,
  deleteMainCategories,
  deleteAllMainCategories,
  getAllMainCategories,
} = require("../controllers/mainCategoryController");
const upload = require("../Middleware/UploadMiddleware");

const mainCategoryRouter = express.Router();

// ✅ Add a new category (with file upload)
mainCategoryRouter.post("/add", upload, addMainCategory);

// ✅ Update a category by ID
mainCategoryRouter.put("/update/:id", updateMainCategory);

// ✅ Delete a category by ID
// mainCategoryRouter.delete("/delete/:id", deleteMainCategory);

// ✅ Bulk Delete categories
mainCategoryRouter.delete("/delete-selected", deleteMainCategories);

// ✅ Delete all categories
mainCategoryRouter.delete("/delete-all", deleteAllMainCategories);

// ✅ Get all main categories
mainCategoryRouter.get("/", getAllMainCategories);

module.exports = mainCategoryRouter;
