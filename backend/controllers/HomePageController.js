const HomePage = require("../models/HomePageModel");
const Layout = require("../models/LayoutOfHomePageModel");

// ✅ Create Home Page Section
const createHomePage = async (req, res) => {
  try {
    const newHomePage = new HomePage(req.body);
    const savedHomePage = await newHomePage.save();
    res.status(201).json({
      message: "Home Page Created Successfully....!",
      newHomePage,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating home page", error: err.message });
  }
};

// ✏️ Update Home Page by ID
const updateHomePageById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedHomePage = await HomePage.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedHomePage) {
      return res.status(404).json({ message: "Home page not found" });
    }

    res.status(200).json(updatedHomePage);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating home page", error: err.message });
  }
};

// ❌ Delete Home Page by ID
const deleteHomePageById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HomePage.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Home page not found" });
    }

    res.status(200).json({ message: "Home page deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting home page", error: err.message });
  }
};

// 📄 Get All Home Pages
const getAllHomePages = async (req, res) => {
  try {
    const pages = await HomePage.find()
      .populate({
        path: "home_page_image",
        select:
          "_id fileId filename filePath fileType fileSize createdAt updatedAt",
      })
      .populate({
        path: "home_page_main_category",
        select:
          "_id main_category_title main_image main_category_status add_banner_image add_banner_image_status main_category_id createdAt updatedAt",
      })
      .populate({
        path: "home_page_sub_category",
        select:
          "_id sub_category_title main_category_id sub_image sub_category_status sub_category_id createdAt updatedAt",
      })
      .populate({
        path: "home_page_products",
        select: "_id productTitle productType productStatus",
      })
      .populate({
        path: "home_page_layout_number",
        select:
          "_id layoutName layoutNumber layoutTitle layoutStatus createdAt updatedAt",
      });

    res.status(200).json(pages);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching home pages", error: err.message });
  }
};

// 🔍 Get Home Page by ID
const getHomePageById = async (req, res) => {
  try {
    const { id } = req.params;
    const page = await HomePage.findById(id)
      .populate(
        "home_page_layout_number",
        "layoutName layoutNumber layoutTitle layoutStatus"
      )
      .populate("home_page_main_category", "name")
      .populate("home_page_sub_category", "name")
      .populate("home_page_products", "productName");

    if (!page) {
      return res.status(404).json({ message: "Home page not found" });
    }

    res.status(200).json(page);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching home page", error: err.message });
  }
};

////////////////////////////////////////////// LAYOUT ///////////////////////////////////////////////////////

// Create a new layout
const createLayout = async (req, res) => {
  try {
    const { layoutName, layoutTitle, layoutNumber, layoutStatus } = req.body;

    // Check for duplicate layoutNumber
    const exists = await Layout.findOne({ layoutNumber });
    if (exists) {
      return res.status(400).json({ message: "Layout number already exists" });
    }

    const newLayout = new Layout({
      layoutName,
      layoutTitle,
      layoutNumber,
      layoutStatus,
    });

    const savedLayout = await newLayout.save();
    res.status(201).json(savedLayout);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating layout", error: err.message });
  }
};

//get a layout data
// Get all layout data
const getAllLayouts = async (req, res) => {
  try {
    const layouts = await Layout.find({});
    res.status(200).json({
      message: "Layout data fetched successfully!",
      layouts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching layout data",
      error: error.message,
    });
  }
};

module.exports = {
  createHomePage,
  updateHomePageById,
  deleteHomePageById,
  getAllHomePages,
  getHomePageById,
  createLayout,
  getAllLayouts,
};
