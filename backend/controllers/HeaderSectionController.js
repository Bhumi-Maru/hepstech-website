const HeaderSectionModel = require("../models/HeaderSectionModel");

const CreateHeaderSectionController = async (req, res) => {
  try {
    // Extract uploaded file paths
    const headerLogo = req.files?.headerLogo?.[0]?.path || null;
    const adminLogo = req.files?.adminLogo?.[0]?.path || null;
    const faviconIcon = req.files?.faviconIcon?.[0]?.path || null;

    // Extract and parse other fields
    const headerType = req.body.headerType || "Sticky";
    const offersEnabled = req.body.offersEnabled === "true"; // Convert string to boolean
    const wishlistEnabled = req.body.wishlistEnabled === "true";

    // Parse JSON string fields
    const parsedContact = req.body.contact ? JSON.parse(req.body.contact) : {};
    const parsedOfferBanner = req.body.offerBanner
      ? JSON.parse(req.body.offerBanner)
      : {};

    // Determine if contact should be enabled
    const isContactEnabled =
      !!parsedContact.phoneNumber ||
      !!parsedContact.whatsappNumber ||
      !!parsedContact.emailAddress;

    // Create a new header section document
    const newHeaderSection = await HeaderSectionModel.create({
      headerLogo,
      adminLogo,
      faviconIcon,
      headerType,
      offersEnabled,
      wishlistEnabled,
      contact: {
        enabled: isContactEnabled, // Set enabled dynamically
        phoneNumber: parsedContact.phoneNumber || "",
        whatsappNumber: parsedContact.whatsappNumber || "",
        emailAddress: parsedContact.emailAddress || "",
      },
      offerBanner: {
        enabled: parsedOfferBanner.enabled || false,
        title: parsedOfferBanner.title || "",
      },
    });

    return res.status(201).json({
      success: true,
      message: "Header section created successfully",
      data: newHeaderSection,
    });
  } catch (error) {
    console.error("Error creating header section:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get all header sections
const getAllHeaderSection = async (req, res) => {
  try {
    const headerSections = await HeaderSectionModel.find();
    return res.status(200).json({
      success: true,
      data: headerSections,
    });
  } catch (error) {
    console.error("Error fetching header sections:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { CreateHeaderSectionController, getAllHeaderSection };
