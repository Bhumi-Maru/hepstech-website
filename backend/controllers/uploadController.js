const File = require("../models/fileModel");
const path = require("path");
const fs = require("fs");

const uploadFile = async (req, res) => {
  try {
    // Check if the required fields are available
    if (!req.files) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const uploadedFiles = [];

    // Loop through all the uploaded files and save their information
    for (const field in req.files) {
      const file = req.files[field][0]; // Multer stores each field's files in an array

      const newFile = new File({
        filename: file.originalname,
        filePath: `/uploads/${file.filename}`,
        fileType: file.mimetype,
        fileSize: file.size, // File size in bytes
      });

      // Save the file details in the database
      await newFile.save();
      uploadedFiles.push(newFile);
    }

    res.status(200).json({
      message: "Files uploaded successfully",
      files: uploadedFiles, // Return the details of the uploaded files
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

// Bulk delete all media files
const deleteAllFiles = async (req, res) => {
  try {
    // Find all files in the database
    const files = await File.find({});

    if (files.length === 0) {
      return res.status(404).json({ message: "No files to delete" });
    }

    // Delete files from the server
    files.forEach((file) => {
      const filePath = path.join(__dirname, "..", file.filePath);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Failed to delete file: ${filePath}`, err);
        }
      });
    });

    // Delete all files from the database
    await File.deleteMany({});

    res.status(200).json({ message: "All files deleted successfully" });
  } catch (error) {
    console.error("Error deleting files:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { uploadFile, getFile, deleteAllFiles };
