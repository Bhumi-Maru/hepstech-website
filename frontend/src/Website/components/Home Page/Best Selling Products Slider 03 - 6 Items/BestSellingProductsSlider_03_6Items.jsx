import React, { useState, useEffect } from "react";
import { useHomepageHelpers } from "../../../../Admin Panel/utils/product";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BestSellingProductsSlider_03_6Items({
  setIsAddToCartModal,
}) {
  const { getDisplayPrice } = useHomepageHelpers();
  // const { section7Products, setSection7Products } = useHomePageContext();
  const [section17Products, setSection17Products] = useState([]);

  const sectionTitle = localStorage.getItem("sectionTitle-17");

  const [layoutData, setLayoutData] = useState(null);

  // Fetch layout data and products
  const fetchLayoutDataAndProducts = async () => {
    try {
      // Step 1: Fetch layout data
      const layoutResponse = await axios.get(
        "http://localhost:7000/api/homepage/layout/17"
      );
      setLayoutData(layoutResponse.data);

      // Step 2: Fetch products for each main category and subcategory
      const productsPromises = layoutResponse.data.map(async (item) => {
        const mainCategoryId = item.home_page_main_category._id;
        const subCategoryId = item.home_page_sub_category._id;

        // Fetch products for the specific main category and subcategory
        return axios.get(
          `http://localhost:7000/api/homepage/products/main-category/${mainCategoryId}/sub-category/${subCategoryId}`
        );
      });

      const productsResponses = await Promise.all(productsPromises);
      const allProducts = productsResponses.flatMap(
        (response) => response.data.products
      );

      console.log("all products", allProducts);
      setSection17Products(allProducts);
    } catch (error) {
      console.error("Error fetching layout data or products:", error);
    }
  };

  useEffect(() => {
    fetchLayoutDataAndProducts();
  }, []);

  // Only render the slider if we have products for section 7
  if (!section17Products || section17Products.length === 0) {
    return null;
  }
  return (
    <>
      {/* <!-- BEST SELLING PRODUCTS SLIDER 03 - 6 ITEMS --> */}
      <section class="section-slider">
        <div class="container">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold">{sectionTitle}</h2>

            <a href="#" title="" class="btn-link" role="button">
              View All
              <svg
                class="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div class="relative mt-3">
            <div
              class="swiper-button-prev swiper-button-custom swiper-button-inside swiper-button-best-selling-six-03"
              style={{ display: "none" }}
            ></div>

            <div class="swiper-container swiper-best-selling-six-03">
              <div class="swiper-wrapper products gap-4">
                {section17Products.map((product, index) => {
                  const prices = getDisplayPrice(product);
                  const imageUrl = product.productMainImage
                    ? `http://localhost:7000/uploads/${product.productMainImage
                        .split("/")
                        .pop()}`
                    : null;
                  return (
                    <>
                      <div
                        class="product-card swiper-slide"
                        style={{ width: "190px" }}
                        key={index}
                      >
                        <button type="button" class="btn-wishlist-top">
                          <svg
                            class="w-5 h-5"
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
                        </button>

                        <Link
                          to={`/product-details/${product._id}`}
                          title={product.productTitle}
                          className="block"
                        >
                          <div class="product-image">
                            {imageUrl ? (
                              <img
                                className="object-cover w-full h-full"
                                src={imageUrl}
                                alt={product.productTitle}
                                loading="lazy"
                              />
                            ) : (
                              <div className="flex items-center justify-center w-full h-full text-gray-500">
                                <svg
                                  className="w-6 h-6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                        </Link>

                        <div class="product-details">
                          <div class="flex flex-col flex-1">
                            <div class="flex-1 w-full max-w-sm">
                              <p class="product-title">
                                <a
                                  href="#"
                                  title=""
                                  class="hover:text-skin-primary"
                                >
                                  {product.productTitle}
                                </a>
                              </p>

                              <div class="flex items-center justify-between mt-2">
                                <div class="flex items-center flex-1 space-x-2">
                                  <span class="product-price">
                                    {" "}
                                    ₹{prices.sellingPrice || "0"} /-{" "}
                                  </span>
                                  {prices.mrpPrice &&
                                    prices.mrpPrice !== prices.sellingPrice && (
                                      <s className="product-price-old">
                                        ₹{prices.mrpPrice} /-
                                      </s>
                                    )}
                                </div>
                              </div>

                              <div class="product-ratings">
                                <svg
                                  class="w-5 h-5 text-yellow-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                  class="w-5 h-5 text-yellow-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                  class="w-5 h-5 text-yellow-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                  class="w-5 h-5 text-yellow-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                  class="w-5 h-5 text-gray-300"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                            </div>

                            <div class="product-buttons">
                              <button
                                type="button"
                                class="btn btn-sm btn-primary btn-cart"
                                data-toggle="modal"
                                data-target="#quickViewModal"
                                onClick={() => setIsAddToCartModal(true)}
                              >
                                <svg
                                  class="w-4 h-4 mr-2"
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
                                class="btn btn-sm btn-white !py-1.5 btn-delete"
                              >
                                <svg
                                  class="w-5 h-5"
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
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>

                          <button type="button" class="btn-wishlist">
                            <svg
                              class="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Add to Wishlist
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div
              class="swiper-button-next swiper-button-custom swiper-button-inside swiper-button-best-selling-six-03"
              style={{ display: "none" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
