const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Import UUID v4

const fileSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const File = mongoose.model("File", fileSchema);

module.exports = File;
