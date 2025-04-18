import React, { useEffect, useState } from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHomepageHelpers } from "../../../../Admin Panel/utils/product";

export default function FlashSaleSlider({ setIsAddToCartModal }) {
  const { getDisplayPrice } = useHomepageHelpers();
  // WISHLIST ICON
  const [isActive, setIsActive] = useState(false);

  // Toggle the active state when the button is clicked
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to update the timer
  const updateTimer = () => {
    const endDate = new Date("2025-04-19T23:59:59"); // Set your sale end date here
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    updateTimer();
    const interval = setInterval(updateTimer, 1000); // Update the timer every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    new Swiper(".swiper-flash-sale", {
      slidesPerView: "auto",
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  const [layoutData, setLayoutData] = useState(null);
  const [section4Products, setSection4Products] = useState([]);

  const sectionTitle = localStorage.getItem("sectionTitle-4");

  // Fetch layout data and products
  const fetchLayoutDataAndProducts = async () => {
    try {
      // Step 1: Fetch layout data
      const layoutResponse = await axios.get(
        "http://localhost:7000/api/homepage/layout/4"
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
      setSection4Products(allProducts);
    } catch (error) {
      console.error("Error fetching layout data or products:", error);
    }
  };

  useEffect(() => {
    fetchLayoutDataAndProducts();
  }, []);

  // Only render the slider if we have products for section 4
  if (!section4Products || section4Products.length === 0) {
    return null;
  }

  return (
    <>
      {/* <!-- FLASH SALE SLIDER --> */}
      <section className="section-slider">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <h2 className="order-1 text-lg font-semibold">{sectionTitle}</h2>

            <a
              href="#"
              title=""
              className="order-2 btn-link sm:order-3 sm:ml-auto"
              role="button"
            >
              View All
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <div className="order-3 w-full mt-2 overflow-hidden rounded-md sm:mt-0 sm:w-auto sm:order-2 sm:ml-3 bg-skin-primary-light">
              <div className="p-1.5">
                <div className="flex items-center justify-center sm:justify-start">
                  <svg
                    className="w-5 h-5 text-skin-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <div className="flex items-center ml-2 space-x-3" id="timer">
                    <div
                      className="text-xs font-medium sm:text-sm text-skin-primary"
                      id="days"
                    >
                      {timeLeft.days}d
                    </div>
                    <div
                      className="text-xs font-medium sm:text-sm text-skin-primary"
                      id="hours"
                    >
                      {timeLeft.hours}h
                    </div>
                    <div
                      className="text-xs font-medium sm:text-sm text-skin-primary"
                      id="minutes"
                    >
                      {timeLeft.minutes}m
                    </div>
                    <div
                      className="text-xs font-medium sm:text-sm text-skin-primary"
                      id="seconds"
                    >
                      {timeLeft.seconds}s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-4">
            <div
              className="swiper-button-prev swiper-button-custom swiper-button-inside swiper-button-flash-sale"
              style={{ display: "none" }}
            ></div>

            <div className="swiper-container swiper-flash-sale">
              <div
                className="swiper-wrapper products"
                style={{ width: "226px", gap: "10px", height: "350px" }}
              >
                {section4Products.map((product, index) => {
                  const prices = getDisplayPrice(product);
                  const imageUrl = product.productMainImage
                    ? `http://localhost:7000/uploads/${product.productMainImage
                        .split("/")
                        .pop()}`
                    : null;
                  return (
                    <>
                      <div className="product-card swiper-slide" key={index}>
                        <button
                          type="button"
                          className={`btn-wishlist-top ${
                            isActive ? "bg-red-500" : ""
                          }`}
                          onClick={handleClick}
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
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                          </svg>
                        </button>
                        <Link
                          to={`/product-details/${product._id}`}
                          title={product.productTitle}
                          className="block"
                          // onClick={(e) => {
                          //   e.preventDefault();
                          //   navigate(`/product/${product._id}`);
                          // }}
                        >
                          <div className="product-image">
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
                        <div className="product-details">
                          <div className="flex flex-col flex-1">
                            <p className="product-title">
                              <a
                                href="#"
                                title=""
                                className="hover:text-skin-primary"
                              >
                                {product.productTitle}
                              </a>
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center flex-1 space-x-2">
                                <span className="product-price">
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
                            <div className="product-ratings">
                              {/* Rating logic here */}
                              {Array.from({ length: 5 }, (_, index) => (
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
                            <div className="product-buttons">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary btn-cart"
                                data-toggle="modal"
                                data-target="#quickViewModal"
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div
              className="swiper-button-next swiper-button-custom swiper-button-inside swiper-button-flash-sale"
              style={{ display: "none" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
