const FooterSection = require("../models/FooterSectionModel");

const createFooterSection = async (req, res) => {
  try {
    const {
      footerLogo,
      contactDetails,
      columnsData,
      socialMediaLinks,
      PaymentOptionsPhoto,
    } = req.body;

    // Ensure that columnsData has exactly 3 columns
    // if (!columnsData || (columnsData.length >= 1 && columnsData.length <= 3)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "columnsData must contain exactly three columns.",
    //   });
    // }

    // Create a new Footer Section
    const newFooterSection = new FooterSection({
      footerLogo,
      contactDetails,
      columnsData,
      socialMediaLinks,
      PaymentOptionsPhoto,
    });

    // Save to the database
    await newFooterSection.save();

    res.status(201).json({
      success: true,
      message: "Footer section created successfully.",
      data: newFooterSection,
    });
  } catch (error) {
    console.error("Error creating footer section:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the footer section.",
      error: error.message,
    });
  }
};

const getFooterSectionData = async (req, res) => {
  try {
    const data = await FooterSection.find()
      .populate({
        path: "footerLogo",
        select:
          "fileId filename filePath fileType fileSize createdAt updatedAt",
      })
      .populate({
        path: "PaymentOptionsPhoto",
        select:
          "fileId filename filePath fileType fileSize createdAt updatedAt",
      });

    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No footer section data found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Footer section data retrieved successfully.",
      data,
    });
  } catch (error) {
    console.error("Error fetching footer section data:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the footer section data.",
      error: error.message,
    });
  }
};

const deleteFooterSection = async (req, res) => {
  try {
    const footerSection = await FooterSection.deleteMany({});

    return res.status(200).json({
      success: true,
      message: "Footer Section Delete Successfully",
      data: footerSection,
    });
  } catch (error) {}
};

module.exports = {
  createFooterSection,
  getFooterSectionData,
  deleteFooterSection,
};
