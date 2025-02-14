import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/GlobalContext";

export default function WishList_2({ setIsAddToCartModal }) {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      title: "Sassie Basic 31 LTR",
      price: 12899,
      oldPrice: 12899,
      imageUrl: "",
      rating: 4,
    },
    {
      id: 2,
      title: "Sassie Basic 31 LTR Navy Backpack Waterproof School Bag",
      price: 12899,
      oldPrice: 12899,
      imageUrl: "",
      rating: 4,
    },
  ]);

  return (
    <>
      <div class="md:col-span-3">
        <div class="sm:flex sm:items-center sm:justify-between">
          <h1 class="text-2xl font-bold text-gray-900">Wishlist</h1>

          <button type="button" class="mt-4 btn btn-sm btn-error-light sm:mt-0">
            <svg
              class="w-5 h-5 mr-2 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Clear Wishlist
          </button>
        </div>

        <div class="mt-5">
          <div class="grid-cols-2 products products-grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 wishlist-products">
            {wishlist.map((product) => (
              <div key={product.id} className="product-card">
                <button type="button" className="btn-wishlist-top">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <a href="#" title="" className="block">
                  <div className="product-image">
                    <img
                      className="object-cover w-full h-full"
                      src={product.imageUrl}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </a>

                <div className="product-details">
                  <div className="flex flex-col flex-1">
                    <div className="flex-1 w-full max-w-sm">
                      <p className="product-title">
                        <a
                          href="#"
                          title=""
                          className="hover:text-skin-primary"
                        >
                          {product.title}
                        </a>
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center flex-1 space-x-2">
                          <span className="product-price">
                            ₹{product.price}/-
                          </span>
                          <s className="product-price-old">
                            ₹{product.oldPrice}/-
                          </s>
                        </div>
                      </div>

                      <div className="product-ratings">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className={`w-5 h-5 ${
                              index < product.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <div className="product-buttons">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary btn-cart"
                        onClick={() => setIsAddToCartModal(true)}
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        Add to Cart
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-white !py-1.5 btn-delete"
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
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button type="button" className="btn-wishlist">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="mt-5">
          <div class="h-full border-2 border-gray-200 border-dashed rounded-lg">
            <div class="grid h-full max-w-lg mx-auto text-center place-items-center">
              <div class="px-8 py-10">
                <svg
                  class="w-32 h-32 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>

                <h1 class="mt-5 text-2xl font-bold text-gray-900">
                  No products added to the wishlist
                </h1>
                <p class="mt-2 text-gray-600">
                  Donec fringilla, ante nec consectetur placerat, velit libero
                  cursus risus, sit amet hendrerit velit enim non leo.
                </p>

                <Link
                  to="/shop"
                  title="Return to Shop"
                  class="mt-5 btn btn-primary"
                  role="button"
                >
                  <svg
                    class="w-5 h-5 mr-3 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  Return to Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
