const express = require("express");
const {
  createFooterSection,
  getFooterSectionData,
  deleteFooterSection,
} = require("../controllers/FooterSectionController");

const footerSectionRouter = express.Router();

footerSectionRouter.post("/create", createFooterSection);
footerSectionRouter.get("/getAll", getFooterSectionData);
footerSectionRouter.delete("/delete", deleteFooterSection);

module.exports = footerSectionRouter;
