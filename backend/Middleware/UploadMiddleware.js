// Function to create directories if they don't exist
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Function to create directories if they don't exist
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadDir = path.join(__dirname, "../uploads");

    if (file.fieldname === "galleryImages") {
      uploadDir = path.join(uploadDir, "gallery"); // Store gallery images in /uploads/gallery/
    }

    ensureDirectoryExists(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`;
    cb(null, uniqueName);
  },
});

// Expecting two images with specific field names
const upload = multer({ storage }).fields([
  { name: "filename", maxCount: 10 },
  { name: "main_image", maxCount: 1 },
  { name: "add_banner_image", maxCount: 1 },
  { name: "sub_image", maxCount: 1 },
  { name: "productMainImage", maxCount: 1 },
  { name: "galleryImages", maxCount: 10 },
]);

module.exports = upload;
