const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Import UUID v4

const fileSchema = new mongoose.Schema(
  {
    fileId: {
      type: String,
      default: uuidv4, // Automatically generate a unique ID using uuidv4
      unique: true, // Ensure it's unique across the database
    },
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
