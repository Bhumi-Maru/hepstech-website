const express = require("express");
const {
  getHeaderMenu,
  addMainCategory,
  addPageOrLink,
  deletePageOrLink,
  removeMainCategory,
  reorderMainCategories,
} = require("../controllers/HeaderMenuController");

const headerMenuRouter = express.Router();

headerMenuRouter.get("/getAll", getHeaderMenu);
headerMenuRouter.post("/category", addMainCategory);
headerMenuRouter.delete("/category/:categoryId", removeMainCategory);
headerMenuRouter.put("/categories/reorder", reorderMainCategories);
headerMenuRouter.post("/pages", addPageOrLink);
headerMenuRouter.delete("/pages/:id", deletePageOrLink);

module.exports = headerMenuRouter;
