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

productRouter.post("/create", createProduct);
productRouter.put("/update/:id", updateProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.delete("/delete/:id", deleteProductById);
productRouter.delete("/delete-selected", deleteSelectedProducts);
productRouter.delete("/delete-all", deleteAllProducts);

module.exports = productRouter;
