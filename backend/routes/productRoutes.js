const express = require("express");
const productRouter = express.Router();
const {
  createProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  deleteSelectedProducts,
  deleteAllProducts,
} = require("../controllers/productController");
const upload = require("../Middleware/UploadMiddleware");

productRouter.post("/create", upload, createProduct);
productRouter.put("/update/:id", upload, updateProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.delete("/delete/:id", deleteProductById);
productRouter.delete("/delete-selected", deleteSelectedProducts);
productRouter.delete("/delete-all", deleteAllProducts);

module.exports = productRouter;
