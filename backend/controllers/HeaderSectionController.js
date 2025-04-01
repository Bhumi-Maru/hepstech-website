const mongoose = require("mongoose");
const HeaderSectionModel = require("../models/HeaderSectionModel");
const File = require("../models/fileModel"); // Assuming you have a File model

const createHeaderSection = async (req, res) => {
  try {
    const {
      headerLogo,
      adminLogo,
      faviconIcon,
      headerType = "Sticky",
      offersEnabled = false,
      wishlistEnabled = false,
      contact = "{}",
      offerBanner = "{}",
    } = req.body;

    console.log("request", req.body);

    console.log("Raw contact data:", contact); // Debugging
    console.log("Raw offerBanner data:", offerBanner); // Debugging
    // Validate and fetch file references
    const validateFileReference = async (fileId) => {
      if (!fileId) return null;
      if (!mongoose.Types.ObjectId.isValid(fileId)) {
        throw new Error(`Invalid ObjectId: ${fileId}`);
      }
      const file = await File.findById(fileId);
      if (!file) {
        throw new Error(`File not found with ID: ${fileId}`);
      }
      return file._id;
    };

    const validatedHeaderLogo = await validateFileReference(headerLogo);
    const validatedAdminLogo = await validateFileReference(adminLogo);
    const validatedFaviconIcon = await validateFileReference(faviconIcon);

    // Create a new header section
    const newHeaderSection = new HeaderSectionModel({
      headerLogo: validatedHeaderLogo,
      adminLogo: validatedAdminLogo,
      faviconIcon: validatedFaviconIcon,
      headerType,
      offersEnabled,
      wishlistEnabled,
      contact: {
        enabled: contact.enabled || false,
        phoneNumber: contact.phoneNumber || "",
        whatsappNumber: contact.whatsappNumber || "",
        emailAddress: contact.emailAddress || "",
      },
      offerBanner: {
        enabled: offerBanner.enabled || false,
        title: offerBanner.title || "",
      },
    });

    await newHeaderSection.save();

    // Populate the response with full file details
    const populatedSection = await HeaderSectionModel.findById(
      newHeaderSection._id
    )
      .populate("headerLogo")
      .populate("adminLogo")
      .populate("faviconIcon");

    res.status(201).json({
      success: true,
      message: "Header section created successfully",
      data: populatedSection,
    });
  } catch (error) {
    console.error("Error creating header section:", error);
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create header section",
    });
  }
};

const getHeaderSection = async (req, res) => {
  try {
    const headerSection = await HeaderSectionModel.find()
      .populate({
        path: "headerLogo",
        select:
          "fileId filename filePath fileType fileSize createdAt updatedAt",
      })
      .populate({
        path: "adminLogo",
        select:
          "fileId filename filePath fileType fileSize createdAt updatedAt",
      })
      .populate({
        path: "faviconIcon",
        select:
          "fileId filename filePath fileType fileSize createdAt updatedAt",
      });

    if (!headerSection) {
      return res.status(404).json({
        success: false,
        message: "Header section not found",
      });
    }

    res.status(200).json({
      success: true,
      data: headerSection,
    });
  } catch (error) {
    console.error("Error fetching header section:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteHeaderSection = async (req, res) => {
  try {
    const data = await HeaderSectionModel.deleteMany();
    res.status(200).json({
      success: true,
      data: data,
      message: "data deleted successfully",
    });
  } catch (error) {
    console.error("Error Deleting header section:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { createHeaderSection, getHeaderSection, deleteHeaderSection };
