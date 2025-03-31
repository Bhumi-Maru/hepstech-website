const express = require("express");
const {
  createHeaderSection,
  getHeaderSection,
} = require("../controllers/HeaderSectionController");
const upload = require("../Middleware/UploadMiddleware");

const HeaderSectionRouter = express.Router();

HeaderSectionRouter.post("/create", upload, createHeaderSection);
HeaderSectionRouter.get("/getAll", getHeaderSection);

module.exports = HeaderSectionRouter;
