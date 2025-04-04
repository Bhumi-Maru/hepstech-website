const express = require("express");
const {
  createPage,
  getAllPages,
  getPageById,
} = require("../controllers/StoreSetting_PageController");

const pageRouter = express.Router();

pageRouter.post("/create", createPage); // Create a new page
pageRouter.get("/all", getAllPages); // Get all pages
pageRouter.get("/:id", getPageById); // Get a single page by ID

module.exports = pageRouter;
