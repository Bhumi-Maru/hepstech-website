import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";

export default function Best_Selling_Products_Slider_02_Section_14_Popup_Modal() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();

  // Sample products array
  const productsModal = [
    {
      id: 1,
      name: "Sassie Basic 31L TR Navy Backpack Waterproof School Bag",
      price: 12899,
      oldPrice: 10000,
      imageUrl: "", // Placeholder image URL
    },
    {
      id: 2,
      name: "Sassie Basic 31L TR Blue Backpack Waterproof School Bag",
      price: 12999,
      oldPrice: 10000,
      imageUrl: "", // Placeholder image URL
    },
    // Add more products here
  ];
  return (
    <>
      {/* [HOME PAGE SECTION 14] Best Selling Products Slider 02 IN SECTION 14  */}

      <div
        className={`modal ${
          isOpenPopupModal.best_Selling_Products_Slider_02_Section_14
            ? "active"
            : ""
        }`}
        id="selectProductsModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div class="modal-overlay" tabindex="-1"></div>
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered sm:max-w-6xl">
          <div class="modal-content" role="document">
            <div class="modal-header">
              <h5 class="mr-12 text-lg font-medium truncate">
                Select Products
              </h5>

              {/* <!-- close button --> */}
              <button
                type="button"
                class="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpenPopupModal(false)}
              >
                <span class="sr-only">Close</span>
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="modal-body">
              <div class="flex-1">
                <label for="searchProducts" class="sr-only">
                  {" "}
                  Search{" "}
                </label>
                <div class="relative rounded-md">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="searchProducts"
                    id="searchProducts"
                    class="!pl-10"
                    placeholder="Search by product name..."
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 products">
                {productsModal.map((product) => {
                  return (
                    <>
                      <div key={product.id} class="product-card">
                        <div class="absolute top-5 left-5 z-5">
                          <label for="" class="sr-only">
                            {" "}
                            Checkbox{" "}
                          </label>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            class="w-6 h-6"
                          />
                        </div>

                        <div class="product-image">
                          <img
                            class="object-cover w-full h-full"
                            src={product.imageUrl}
                            alt=""
                            loading="lazy"
                          />
                        </div>

                        <div class="product-details">
                          <div class="flex flex-col flex-1">
                            <div class="flex-1 w-full max-w-sm">
                              <p class="product-title">
                                <a
                                  href="#"
                                  title={product.name}
                                  class="hover:text-skin-primary"
                                >
                                  {product.name}
                                </a>
                              </p>

                              <div class="flex items-center justify-between mt-2">
                                <div class="flex items-center flex-1 space-x-2">
                                  <span class="product-price">
                                    {" "}
                                    ₹{product.price}/-
                                  </span>
                                  <s class="product-price-old">
                                    ₹{product.oldPrice}/-
                                  </s>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div class="modal-footer">
              <div class="sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <div class="flex items-center space-x-3">
                  <p class="mr-3 font-medium">3 products selected</p>

                  <a
                    href="#"
                    title=""
                    class="text-sm font-semibold text-skin-primary hover:underline"
                  >
                    Clear Selection
                  </a>
                </div>

                <div class="flex items-center justify-end mt-5 space-x-4">
                  <button
                    type="button"
                    class="btn btn-light"
                    data-dismiss="modal"
                    aria-label="Close Modal"
                    onClick={() => setIsOpenPopupModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="button" class="btn btn-primary">
                    Add products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
