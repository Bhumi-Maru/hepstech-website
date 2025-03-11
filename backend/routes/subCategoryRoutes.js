const express = require("express");
const subCategoryRouter = express.Router();
const {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
  deleteAllSubCategories,
  deleteSelectedSubCategories,
} = require("../controllers/subCategoryController");

subCategoryRouter.post("/add", createSubCategory);
subCategoryRouter.get("/getAll", getAllSubCategories);
subCategoryRouter.get("/getById/:id", getSubCategoryById);
subCategoryRouter.put("/update/:id", updateSubCategory);
subCategoryRouter.delete("/delete/:id", deleteSubCategory);
subCategoryRouter.delete("/deleteAll", deleteAllSubCategories);
subCategoryRouter.post("/deleteSelected", deleteSelectedSubCategories);

module.exports = subCategoryRouter;
