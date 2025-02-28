const File = require("../models/fileModel");
const path = require("path");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Save file details in the database
    const newFile = new File({
      filename: req.file.originalname,
      filePath: `/uploads/${req.file.filename}`, // Corrected path
      fileType: req.file.mimetype,
      fileSize: req.file.size, // File size in bytes
    });

    await newFile.save();

    res.status(200).json({
      message: "File uploaded successfully",
      file: newFile,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Corrected getFile function
const getFile = async (req, res) => {
  try {
    // Query all files from the database
    const files = await File.find({});

    // Return the list of files in the response
    res.status(200).json({
      message: "Files fetched successfully",
      files: files,
    });
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { uploadFile, getFile };
