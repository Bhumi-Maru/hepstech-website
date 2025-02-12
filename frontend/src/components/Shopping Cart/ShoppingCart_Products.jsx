import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ShoppingCart_Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sassie Basic 31 LTR Navy Backpack Waterproof School Bag",
      color: "Black",
      size: "XL",
      price: 1000,
      quantity: 1,
      total: 1000,
      image: "", // Add the image URL here
      variant: "value",
    },
    {
      id: 2,
      name: "Sassie Basic 31 LTR Navy Backpack Waterproof School Bag",
      color: "Black",
      size: "XL",
      price: 1000,
      quantity: 1,
      total: 1000,
      image: "", // Add the image URL here
      variant: "value",
    },
  ]);

  const handleQuantityChange = (id, operation) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const newQuantity =
          operation === "increment"
            ? product.quantity + 1
            : Math.max(1, product.quantity - 1);
        return {
          ...product,
          quantity: newQuantity,
          total: newQuantity * product.price,
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleApplyPromoCode = () => {
    // Logic for applying a promo code
    console.log("Promo code applied!");
  };

  const handleClearCart = () => {
    setProducts([]);
  };

  const handleGoToWishlist = () => {
    console.log("Redirecting to wishlist...");
  };

  return (
    <>
      <div className="lg:col-span-4">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left divide-y-2 divide-gray-200 custom-table">
                  <thead>
                    <tr>
                      <th scope="col" className="nowrap !pl-0">
                        Products ({products.length})
                      </th>
                      <th scope="col" className="nowrap">
                        Price
                      </th>
                      <th scope="col" className="nowrap">
                        Qty.
                      </th>
                      <th scope="col" className="nowrap">
                        Total
                      </th>
                      <th scope="col" className="!pr-0"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="!pl-0">
                          <div className="flex items-start space-x-4">
                            <div className="flex items-center justify-center flex-none w-16 h-16 overflow-hidden bg-gray-200 rounded-md">
                              <img
                                className="object-cover w-full h-full"
                                src={product.image}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <div>
                              <span className="block font-medium w-[150px] sm:w-[200px] md:w-full">
                                {product.name}
                              </span>
                              <ul className="mt-2 space-y-1 text-gray-600">
                                <li className="flex items-center space-x-2">
                                  <span>Color: </span>
                                  <span className="w-3.5 h-3.5 bg-black rounded-full"></span>
                                  <span>{product.color}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                  <span>Size: </span>
                                  <span>{product.size}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                  <span> Variant: </span>
                                  <span> {product.variant} </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td className="nowrap">₹{product.price}</td>
                        <td className="nowrap">
                          <div className="relative w-24 overflow-hidden border border-gray-300 rounded-md focus-within:border-skin-primary focus-within:ring-1 focus-within:ring-skin-primary">
                            <button
                              type="button"
                              className="absolute top-0 right-0 px-1 py-[2.5px] border-l border-gray-300 rounded-none focus:outline-none addQty hover:bg-gray-100"
                              onClick={() =>
                                handleQuantityChange(product.id, "increment")
                              }
                            >
                              <svg
                                className="w-3.5 h-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 15l7-7 7 7"
                                ></path>
                              </svg>
                            </button>
                            <input
                              type="text"
                              value={product.quantity}
                              className="!w-24 py-2 sm:py-2.5 !border-none font-semibold rounded-none"
                              readOnly
                            />
                            <button
                              type="button"
                              className="absolute bottom-0 right-0 px-1 py-[2.5px] border-t border-l border-gray-300 rounded-none focus:outline-none subQty hover:bg-gray-100"
                              onClick={() =>
                                handleQuantityChange(product.id, "decrement")
                              }
                            >
                              <svg
                                className="w-3.5 h-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="nowrap">₹{product.total}</td>
                        <td className="nowrap !pr-0">
                          <button
                            type="button"
                            className="text-red-600 hover:text-red-600 btn-circle"
                            onClick={() => handleRemoveProduct(product.id)}
                          >
                            <svg
                              className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-6 border-gray-200 sm:mt-2" />
        <div className="lg:flex lg:items-center lg:justify-between">
          <form action="#">
            <div className="flex items-center justify-center space-x-4">
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter promocode"
                  className=""
                />
              </div>
              <button
                type="button"
                className="btn btn-white"
                onClick={handleApplyPromoCode}
              >
                Apply
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center mt-8 space-x-6 xl:space-x-8 lg:justify-end lg:mt-0">
            <button type="button" className="inline-flex items-center btn-link">
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Clear Cart
            </button>

            <Link
              type="button"
              className="inline-flex items-center btn-link"
              to="/wishlist"
            >
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Go to Wishlist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
