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
      uploadDir = path.join(uploadDir, "gallery");
    } else if (file.fieldname === "variantImages") {
      uploadDir = path.join(uploadDir, "variants");
    }

    ensureDirectoryExists(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`; // ✅ Keeps original filename with extension
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
  { name: "variantImages", maxCount: 10 },
  // header section
  // { name: "headerLogo", maxCount: 1 },
  // { name: "adminLogo", maxCount: 1 },
  // { name: "faviconIcon", maxCount: 1 },
  //offer banner in header section
  // { name: "offer_Image", maxCount: 1 },
  // footer section
  // { name: "footerLogo", maxCount: 1 },
  // { name: "PaymentOptionsPhoto", maxCount: 10 },
]);

module.exports = upload;
