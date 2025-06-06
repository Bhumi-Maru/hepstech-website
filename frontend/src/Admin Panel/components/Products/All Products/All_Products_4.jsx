import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../../context/Product_Create_Context";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import axios from "axios";

export default function All_Products_4({
  products,
  itemsPerPage,
  fetchProducts,
  selectedProducts,
  setSelectedProducts,
}) {
  const { handleEdit } = useProductContext();
  const { isActive, handleActive } = useAdminGlobalContext();

  console.log(products);
  // current page in pagination
  const [currentPage, setCurrentPage] = useState(1);

  // selected product for checkbox
  // const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Handle header checkbox change
  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);

    if (isChecked) {
      // Select all products on current page
      const currentPageProductIds = displayedProducts.map((p) => p._id);
      setSelectedProducts(currentPageProductIds);
    } else {
      // Deselect all
      setSelectedProducts([]);
    }
  };

  // Handle individual product checkbox change
  // const handleProductSelect = (productId, isChecked) => {
  //   if (isChecked) {
  //     setSelectedProducts([...selectedProducts, productId]);
  //   } else {
  //     setSelectedProducts(selectedProducts.filter((id) => id !== productId));
  //   }

  //   // Update selectAll status based on current selections
  //   const allSelected = displayedProducts.every((p) =>
  //     selectedProducts.includes(p._id)
  //   );
  //   setSelectAll(allSelected);
  // };

  useEffect(() => {
    setSelectedProducts([]);
    setSelectAll(false);
  }, [currentPage]);

  /////////////////////////////////////

  useEffect(() => {
    const allSelected = displayedProducts.every((p) =>
      selectedProducts.includes(p._id)
    );
    setSelectAll(allSelected);
  }, [selectedProducts]);

  // Delete single product
  const handleDeleteProduct = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(
          `http://localhost:7000/api/products/delete/${productId}`
        );
        fetchProducts(); // Refresh the product list
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete product");
      }
    }
  };

  //////////////////////////////////////

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get current page products
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getSellingPrice = (product) => {
    if (product.productType === "simple") {
      return product.pricing?.sellingPrice ?? "N/A";
    } else {
      return product.productVariants?.[0]?.sellingPrice ?? "N/A";
    }
  };

  return (
    <>
      {/* ALL PRODUCTS SECTION 4 [TABLE FOR PRODUCT] */}
      <div class="mt-4" id="productsView">
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 rounded-lg shadow">
                <table class="min-w-full divide-y divide-gray-200 custom-table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          // checked={selectAll}
                          onChange={handleSelectAllChange}
                        />
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Inventory</th>
                      <th scope="col">Type</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 list">
                    {displayedProducts.length > 0 ? (
                      displayedProducts.map((product) => (
                        <tr key={product.id}>
                          {" "}
                          {/* Ensure a unique key */}
                          <td>
                            <input
                              type="checkbox"
                              checked={selectedProducts.includes(product._id)}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                if (checked) {
                                  setSelectedProducts((prev) => [
                                    ...prev,
                                    product._id,
                                  ]);
                                } else {
                                  setSelectedProducts((prev) =>
                                    prev.filter((id) => id !== product._id)
                                  );
                                }
                              }}
                            />
                          </td>
                          <td className="nowrap">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center justify-center flex-none w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                                <img
                                  src={`http://localhost:7000/uploads/${product.productMainImage
                                    .split("/")
                                    .pop()}`}
                                  alt={product.productTitle}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="font-medium product-name">
                                {product.productTitle}
                              </span>
                            </div>
                          </td>
                          <td>₹ {getSellingPrice(product)}</td>
                          <td className="nowrap">
                            <span className="!px-2 badge badge-info">
                              {product.productPurchaseMaxQuantity}
                            </span>
                            <span className="ml-1 text-gray-600">in stock</span>
                          </td>
                          <td>{product.productType || "simple"}</td>
                          <td>
                            <span
                              className={`badge ${
                                product.productStatus === "Draft"
                                  ? "badge-danger"
                                  : "badge-success"
                              }`}
                            >
                              {product.productStatus}
                            </span>
                          </td>
                          <td>
                            <div className="flex items-center -ml-2 space-x-3">
                              <Link
                                to="/products/create-product"
                                className={`btn-circle ${
                                  isActive === "Create Products" ? "active" : ""
                                }`}
                                aria-label="Edit"
                                onClick={() => {
                                  handleEdit(product._id);
                                  handleActive("Create Products");
                                }}
                              >
                                <svg
                                  className="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  />
                                </svg>
                              </Link>
                              <a
                                href="#"
                                className="btn-circle"
                                aria-label="Delete"
                                onClick={() => handleDeleteProduct(product._id)}
                              >
                                <svg
                                  className="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colspan="7"
                          className="px-4 py-3 text-center bg-white rounded-b-lg"
                        >
                          <div class="flex items-center justify-center text-sm font-medium text-gray-500">
                            <svg
                              className="w-6 h-6 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              ></path>
                            </svg>
                            No Data Found
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>

                  <tfoot class="hidden not-found">
                    <tr>
                      <td
                        colspan="7"
                        class="px-4 py-3 text-center bg-white rounded-b-lg"
                      >
                        <div class="flex items-center justify-center text-sm font-medium text-gray-500">
                          <svg
                            class="w-6 h-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                          No Data Found
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 sm:mt-4 sm:flex-row sm:justify-between">
          <p className="text-gray-700 showing">
            Showing <span id="page-first-item-number">{startIndex + 1}</span> -{" "}
            <span id="page-last-item-number">
              {" "}
              {Math.min(startIndex + itemsPerPage, products.length)}
            </span>{" "}
            of <span id="totalProducts">{products.length}</span> products
          </p>

          <ul className="mt-5 pagination sm:mt-0">
            {Array.from({ length: totalPages }, (_, i) => (
              <li className={i + 1 === currentPage ? "active" : ""} key={i}>
                <a
                  // className="page"
                  href="#"
                  data-i="1"
                  data-page="10"
                  className={`page ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-300"
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
