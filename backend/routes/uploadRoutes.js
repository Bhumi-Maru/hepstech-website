const express = require("express");
const upload = require("../Middleware/UploadMiddleware");
const {
  uploadFile,
  getFile,
  deleteAllFiles,
} = require("../controllers/uploadController");

const uploadRouter = express.Router();
// Upload Route
uploadRouter.post("/upload", upload, uploadFile);

// Get Files Route
uploadRouter.get("/files", getFile);

//Delete All Files Routes
uploadRouter.delete("/files", deleteAllFiles);

module.exports = uploadRouter;
