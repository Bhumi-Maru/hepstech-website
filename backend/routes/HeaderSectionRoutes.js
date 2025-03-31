const express = require("express");
const {
  CreateHeaderSectionController,
  getAllHeaderSection,
} = require("../controllers/HeaderSectionController");
const upload = require("../Middleware/UploadMiddleware");

const HeaderSectionRouter = express.Router();

HeaderSectionRouter.post("/create", upload, CreateHeaderSectionController);
HeaderSectionRouter.get("/", getAllHeaderSection);

module.exports = HeaderSectionRouter;
