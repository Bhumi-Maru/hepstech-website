const mongoose = require("mongoose");
const HeaderSectionModel = require("../models/HeaderSectionModel");

const createHeaderSection = async (req, res) => {
  try {
    let {
      headerLogo,
      adminLogo,
      faviconIcon,
      headerType = "sticky",
      offersEnabled = "{}",
      wishlistEnabled = false,
      contact = "{}",
      offerBanner = "{}",
    } = req.body;

    console.log("Received Data:", req.body);

    // Parse JSON fields if they are strings
    // Parse offersEnabled if it's a string
    if (typeof offersEnabled === "string") {
      offersEnabled = JSON.parse(offersEnabled);
    }
    contact = typeof contact === "string" ? JSON.parse(contact) : contact;
    offerBanner =
      typeof offerBanner === "string" ? JSON.parse(offerBanner) : offerBanner;

    // Convert empty strings to null for ObjectId fields
    const parseObjectId = (value) =>
      mongoose.Types.ObjectId.isValid(value) ? value : null;

    const validatedHeaderLogo = parseObjectId(headerLogo);
    const validatedAdminLogo = parseObjectId(adminLogo);
    const validatedFaviconIcon = parseObjectId(faviconIcon);

    // Create new header section
    const newHeaderSection = new HeaderSectionModel({
      headerLogo: validatedHeaderLogo,
      adminLogo: validatedAdminLogo,
      faviconIcon: validatedFaviconIcon,
      headerType,
      offersEnabled: {
        enabled: offersEnabled.enabled || false,
        offer_Image: offersEnabled.offer_Image || null,
        main_category: offersEnabled.main_category || null,
        sub_category: offersEnabled.sub_category || null,
        offerType: offersEnabled.offerType || null,
      },
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

    // Populate file details properly
    const populatedSection = await HeaderSectionModel.findById(
      newHeaderSection._id
    )
      .populate("headerLogo")
      .populate("adminLogo")
      .populate("faviconIcon")
      .populate("offersEnabled.offer_Image")
      .populate("offersEnabled.main_category") // Fixed population syntax
      .populate("offersEnabled.sub_category"); // Fixed population syntax

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
    // Fetch all header section entries
    const headerSections = await HeaderSectionModel.find()
      .sort({ createdAt: -1 }) // Get most recent entries first
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
      })
      .populate({
        path: "offersEnabled.offer_Image",
        select:
          "fileId filename filePath fileType fileSize createdAt updatedAt",
      })
      .populate({
        path: "offersEnabled.main_category",
        select: "_id main_category_title",
      })
      .populate({
        path: "offersEnabled.sub_category",
        select: "_id sub_category_title",
      });

    if (!headerSections.length) {
      return res.status(404).json({
        success: false,
        message: "No header sections found",
      });
    }

    res.status(200).json({
      success: true,
      data: headerSections, // Return all header sections
    });
  } catch (error) {
    console.error("Error fetching header sections:", error);
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
