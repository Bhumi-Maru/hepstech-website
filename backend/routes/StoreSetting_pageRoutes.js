const express = require("express");
const {
  createPage,
  getAllPages,
  getPageById,
  deleteAllPages,
  deleteById,
  editById,
} = require("../controllers/StoreSetting_PageController");

const pageRouter = express.Router();

pageRouter.post("/create", createPage); // Create a new page
pageRouter.get("/getAll", getAllPages); // Get all pages
pageRouter.get("/:id", getPageById); // Get a single page by ID
pageRouter.delete("/deleteAll", deleteAllPages); //delete all pages
pageRouter.delete("/delete/:id", deleteById); /// delete by id
pageRouter.put("/update/:id", editById);

module.exports = pageRouter;
