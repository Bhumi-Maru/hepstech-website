const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

// Expecting two images with specific field names
const upload = multer({ storage }).fields([
  { name: "filename", maxCount: 10 },
  { name: "main_image", maxCount: 1 },
  { name: "add_banner_image", maxCount: 1 },
  { name: "sub_Image", maxCount: 1 },
]);

module.exports = upload;
