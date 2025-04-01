const express = require("express");
const {
  createHeaderSection,
  getHeaderSection,
  deleteHeaderSection,
} = require("../controllers/HeaderSectionController");
const upload = require("../Middleware/UploadMiddleware");

const HeaderSectionRouter = express.Router();

HeaderSectionRouter.post("/create", upload, createHeaderSection);
HeaderSectionRouter.get("/getAll", getHeaderSection);
HeaderSectionRouter.delete("/delete", deleteHeaderSection);

module.exports = HeaderSectionRouter;
