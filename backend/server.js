const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");
const path = require("path");
const uploadRouter = require("./routes/uploadRoutes");
const mainCategoryRouter = require("./routes/mainCategoryRoutes");
const subCategoryRouter = require("./routes/subCategoryRoutes");
const productRouter = require("./routes/productRoutes");
const HeaderSectionRouter = require("./routes/HeaderSectionRoutes");
const footerSectionRouter = require("./routes/FooterSectionRoutes");
const headerMenuRouter = require("./routes/headerMenuRoutes");
const pageRouter = require("./routes/StoreSetting_pageRoutes");
const HomePageRouter = require("./routes/HomePageRoutes");
const customerReviewRouter = require("./routes/CustomerReviewRoutes");

dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use API routes
app.use("/api", uploadRouter);

//main category routes
app.use("/api/main-category", mainCategoryRouter);

//sub category routes
app.use("/api/sub-category", subCategoryRouter);

//products routes
app.use("/api/products", productRouter);

// HEADER SECTION ROUTES
app.use("/api/header-section", HeaderSectionRouter);

//FOOTER SECTION ROUTES
app.use("/api/footer-section", footerSectionRouter);

// HEADER MENU SECTION ROUTES
app.use("/api/header-menu-section", headerMenuRouter);

// HOME PAGE SECTION ROUTES
app.use("/api/homepage", HomePageRouter);

// store settings [page]
app.use("/api/store-setting/page", pageRouter);

//products customer reviewss
app.use("/api/customer", customerReviewRouter);

// Home route
app.get("/", (req, res) => {
  return res.send("Hello, server is running!");
});

// Start Server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
