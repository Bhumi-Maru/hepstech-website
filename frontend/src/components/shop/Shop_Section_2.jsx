import React, { useState } from "react";

export default function Shop_Section_2() {
  const [isDropDownOpen, setIsDropDownOpen] = useState({
    size: false,
    priceRange: false,
    discount: false,
    color: false,
    rating: false,
    availability: false,
  });

  const handleDropDown = (dropdown) => {
    setIsDropDownOpen((prevState) => {
      // Close the other dropdown while keeping the one clicked open
      return {
        size: dropdown === "size" ? !prevState.size : false,
        priceRange: dropdown === "priceRange" ? !prevState.priceRange : false,
        discount: dropdown === "discount" ? !prevState.discount : false,
        color: dropdown === "color" ? !prevState.color : false,
        rating: dropdown === "rating" ? !prevState.rating : false,
        availability:
          dropdown === "availability" ? !prevState.availability : false,
      };
    });
  };

  return (
    <>
      {/* SHOP SECTION 2 */}
      <section className="pb-12 bg-white">
        <div className="container">
          <div className="relative grid items-start grid-cols-1 lg:grid-cols-12 gap-x-10 xl:gap-x-12 2xl:gap-x-14">
            <div className="hidden pt-1 pl-1 lg:block lg:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-900">Filters</p>

                <button type="button" className="btn btn-xs btn-white">
                  <svg
                    className="w-4 h-4 mr-1.5"
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
                  Clear
                </button>
              </div>

              <hr className="my-5 border-gray-200" />

              <div className="flow-root pb-8">
                <div className="-my-5 divide-y divide-gray-200">
                  <div className="py-5">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full text-base font-medium text-gray-900 focus:outline-none hover:text-skin-primary"
                    >
                      Categories
                    </button>

                    <div className="mt-3">
                      <div className="space-y-4">
                        <div>
                          <p className="main-category-title active">
                            <a href="#" title="">
                              Mobile Phone Mounts & Stands
                            </a>
                          </p>

                          <div className="sub-category-list">
                            <div className="space-y-3">
                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 1
                                  </label>
                                </div>
                              </div>

                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 2
                                  </label>
                                </div>
                              </div>

                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 3
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="main-category-title">
                            <a href="#" title="">
                              Touch Screen Tablet Stands
                            </a>
                          </p>

                          <div className="sub-category-list">
                            <div className="space-y-3">
                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 1
                                  </label>
                                </div>
                              </div>

                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 2
                                  </label>
                                </div>
                              </div>

                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 3
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="main-category-title">
                            <a href="#" title="">
                              Mobile Automobile Cradles
                            </a>
                          </p>

                          <div className="sub-category-list">
                            <div className="space-y-3">
                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 1
                                  </label>
                                </div>
                              </div>

                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 2
                                  </label>
                                </div>
                              </div>

                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 2
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="main-category-title">
                            <a href="#" title="">
                              Mobile Photo & Video Accessories
                            </a>
                          </p>

                          <div className="sub-category-list">
                            <div className="space-y-3">
                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 1
                                  </label>
                                </div>
                              </div>

                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 2
                                  </label>
                                </div>
                              </div>

                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 2
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="main-category-title">
                            <a href="#" title="">
                              {" "}
                              Complete Tripod Units{" "}
                            </a>
                          </p>

                          <div className="sub-category-list">
                            <div className="space-y-3">
                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 1
                                  </label>
                                </div>
                              </div>

                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 2
                                  </label>
                                </div>
                              </div>

                              <div className="relative flex items-center">
                                <div className="flex items-center h-5">
                                  <input type="checkbox" id="" name="" />
                                </div>
                                <div className="ml-3">
                                  <label for="" className="cursor-pointer">
                                    Sub Category 2
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-5">
                    <button
                      type="button"
                      onClick={() => handleDropDown("size")}
                      className="flex items-center justify-between w-full text-base font-medium text-gray-900 focus:outline-none hover:text-skin-primary"
                      data-toggle="collapse"
                      data-target="#sizeFilter"
                    >
                      Size
                      <svg
                        className="w-5 h-5 ml-2 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>

                    {isDropDownOpen.size && (
                      <div className="mt-3">
                        <div className="space-y-3">
                          {["XS", "SM", "MD", "LG", "XL"].map((size) => (
                            <div
                              key={size}
                              className="relative flex items-center"
                            >
                              <div className="flex items-center h-5">
                                <input
                                  type="checkbox"
                                  id={`${size}Size`}
                                  name={`${size}Size`}
                                />
                              </div>
                              <div className="ml-3">
                                <label
                                  htmlFor={`${size}Size`}
                                  className="cursor-pointer"
                                >
                                  {size}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price Range Filter */}
                  <div className="py-5">
                    <button
                      type="button"
                      onClick={() => handleDropDown("priceRange")}
                      className="flex items-center justify-between w-full text-base font-medium text-gray-900 focus:outline-none hover:text-skin-primary"
                    >
                      Price Range
                      <svg
                        className="w-5 h-5 ml-2 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {isDropDownOpen.priceRange && (
                      <div className="mt-3">
                        <input type="text" id="priceRangeSlider" value="" />
                      </div>
                    )}
                  </div>

                  {/* Discount Filter */}
                  <div className="py-5">
                    <button
                      type="button"
                      onClick={() => handleDropDown("discount")}
                      className="flex items-center justify-between w-full text-base font-medium text-gray-900 focus:outline-none hover:text-skin-primary"
                    >
                      Discount
                      <svg
                        className="w-5 h-5 ml-2 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {isDropDownOpen.discount && (
                      <div className="mt-3">
                        <div className="space-y-3">
                          {["10%", "20%", "30%"].map((discount) => (
                            <div
                              key={discount}
                              className="relative flex items-center"
                            >
                              <div className="flex items-center h-5">
                                <input
                                  type="checkbox"
                                  id={`${discount}Discount`}
                                  name={`${discount}Discount`}
                                />
                              </div>
                              <div className="ml-3">
                                <label
                                  htmlFor={`${discount}Discount`}
                                  className="cursor-pointer"
                                >
                                  {discount} and above
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="py-5">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full text-base font-medium text-gray-900 focus:outline-none hover:text-skin-primary"
                      data-toggle="collapse"
                      data-target="#colorsFilter"
                    >
                      Color
                      <svg
                        className="w-5 h-5 ml-2 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>

                    <div className="hidden mt-3 collapse" id="colorsFilter">
                      <div className="inline-grid grid-cols-5 gap-x-3 gap-y-1.5">
                        <div>
                          <label className="form-colorinput">
                            <input
                              type="checkbox"
                              name="color"
                              id=""
                              value=""
                              className="form-colorinput-input"
                            />
                            <span className="bg-blue-600 form-colorinput-color"></span>
                          </label>
                        </div>

                        <div>
                          <label className="form-colorinput">
                            <input
                              type="checkbox"
                              name="color"
                              id=""
                              value=""
                              className="form-colorinput-input"
                            />
                            <span className="bg-red-600 form-colorinput-color"></span>
                          </label>
                        </div>

                        <div>
                          <label className="form-colorinput">
                            <input
                              type="checkbox"
                              name="color"
                              id=""
                              value=""
                              className="form-colorinput-input"
                            />
                            <span className="bg-purple-500 form-colorinput-color"></span>
                          </label>
                        </div>

                        <div>
                          <label className="form-colorinput">
                            <input
                              type="checkbox"
                              name="color"
                              id=""
                              value=""
                              className="form-colorinput-input"
                            />
                            <span className="bg-indigo-600 form-colorinput-color"></span>
                          </label>
                        </div>

                        <div>
                          <label className="form-colorinput">
                            <input
                              type="checkbox"
                              name="color"
                              id=""
                              value=""
                              className="form-colorinput-input"
                            />
                            <span className="bg-yellow-500 form-colorinput-color"></span>
                          </label>
                        </div>

                        <div>
                          <label className="form-colorinput">
                            <input
                              type="checkbox"
                              name="color"
                              id=""
                              value=""
                              className="form-colorinput-input"
                            />
                            <span className="bg-teal-500 form-colorinput-color"></span>
                          </label>
                        </div>

                        <div>
                          <label className="form-colorinput">
                            <input
                              type="checkbox"
                              name="color"
                              id=""
                              value=""
                              className="form-colorinput-input"
                            />
                            <span className="bg-orange-600 form-colorinput-color"></span>
                          </label>
                        </div>

                        <div>
                          <label className="form-colorinput">
                            <input
                              type="checkbox"
                              name="color"
                              id=""
                              value=""
                              className="form-colorinput-input"
                            />
                            <span className="bg-lime-500 form-colorinput-color"></span>
                          </label>
                        </div>

                        <div>
                          <label className="form-colorinput">
                            <input
                              type="checkbox"
                              name="color"
                              id=""
                              value=""
                              className="form-colorinput-input"
                            />
                            <span className="bg-purple-600 form-colorinput-color"></span>
                          </label>
                        </div>

                        <div>
                          <label className="form-colorinput">
                            <input
                              type="checkbox"
                              name="color"
                              id=""
                              value=""
                              className="form-colorinput-input"
                            />
                            <span className="bg-cyan-500 form-colorinput-color"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-5">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full text-base font-medium text-gray-900 focus:outline-none hover:text-skin-primary"
                      data-toggle="collapse"
                      data-target="#ratingsFilter"
                    >
                      Ratings
                      <svg
                        className="w-5 h-5 ml-2 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>

                    <div className="hidden mt-3 collapse" id="ratingsFilter">
                      <div className="space-y-3">
                        <div className="relative flex items-center">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              id="fiveStars"
                              name="fiveStars"
                              className=""
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              for="fiveStars"
                              className="flex items-center cursor-pointer"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center">
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                                <span className="inline-flex pt-1 text-sm font-medium leading-none text-gray-500">
                                  (1)
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="relative flex items-center">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              id="fourStars"
                              name="fourStars"
                              className=""
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              for="fourStars"
                              className="flex items-center cursor-pointer"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center">
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                                <span className="inline-flex pt-1 text-sm font-medium leading-none text-gray-500">
                                  (1)
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="relative flex items-center">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              id="threeStars"
                              name="threeStars"
                              className=""
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              for="threeStars"
                              className="flex items-center cursor-pointer"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center">
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                                <span className="inline-flex pt-1 text-sm font-medium leading-none text-gray-500">
                                  (1)
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="relative flex items-center">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              id="twoStars"
                              name="twoStars"
                              className=""
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              for="twoStars"
                              className="flex items-center cursor-pointer"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center">
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                                <span className="inline-flex pt-1 text-sm font-medium leading-none text-gray-500">
                                  (1)
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="relative flex items-center">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              id="oneStar"
                              name="oneStar"
                              className=""
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              for="oneStar"
                              className="flex items-center cursor-pointer"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center">
                                  <svg
                                    className="w-5 h-5 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg
                                    className="w-5 h-5 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                                <span className="inline-flex pt-1 text-sm font-medium leading-none text-gray-500">
                                  (1)
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Availability Filter */}
                  <div className="py-5">
                    <button
                      type="button"
                      onClick={() => handleDropDown("availability")}
                      className="flex items-center justify-between w-full text-base font-medium text-gray-900 focus:outline-none hover:text-skin-primary"
                    >
                      Availability
                      <svg
                        className="w-5 h-5 ml-2 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {isDropDownOpen.availability && (
                      <div className="mt-3">
                        <div className="space-y-3">
                          {/* In Stock Checkbox */}
                          <div className="relative flex items-center">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                id="inStock"
                                name="inStock"
                              />
                            </div>
                            <div className="ml-3">
                              <label
                                htmlFor="inStock"
                                className="cursor-pointer"
                              >
                                In Stock
                              </label>
                            </div>
                          </div>

                          {/* Out of Stock Checkbox */}
                          <div className="relative flex items-center">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                id="outOfStock"
                                name="outOfStock"
                              />
                            </div>
                            <div className="ml-3">
                              <label
                                htmlFor="outOfStock"
                                className="cursor-pointer"
                              >
                                Out of Stock
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-9">
              <div className="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg shadow-sm aspect-w-16 aspect-h-3">
                <img
                  className="object-cover w-full h-full"
                  src=""
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="mt-8 sm:flex sm:items-center sm:justify-between">
                <button
                  type="button"
                  className="w-full btn btn-sm btn-primary lg:hidden"
                  data-toggle="drawer"
                  data-target="#mobileFilters"
                >
                  <svg
                    className="w-5 h-5 mr-2 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Filters
                </button>

                <p className="mt-3 font-medium text-gray-900 lg:mt-0">
                  Showing 1–12 of 19 results
                </p>

                <div className="flex items-center mt-4 ml-auto space-x-3 sm:mt-0">
                  <span className="text-sm font-medium"> Sort By: </span>
                  <div>
                    <select name="" id="">
                      <option value="">Popularity</option>
                      <option value="">Average Rating</option>
                      <option value="">Latest</option>
                      <option value="">Price: Low to High</option>
                      <option value="">Price: High to Low</option>
                    </select>
                  </div>
                </div>

                <div className="flex-none hidden ml-4 sm:block">
                  <span className="relative z-0 flex flex-shrink-0 rounded-md shadow-sm radio-group">
                    <div
                      className="relative flex-1 custom-radio sm:flex-none"
                      aria-label="3 Column Grid View"
                      data-microtip-position="top"
                      data-target="tooltip"
                    >
                      <label for="" className="sr-only">
                        {" "}
                        3 Column Grid{" "}
                      </label>
                      <div className="toggle-radio">
                        <input
                          type="radio"
                          id="threeGridViewButton"
                          role="radio"
                          tabindex="0"
                          name="layoutType"
                          checked
                        />
                        <label
                          for="threeGridViewButton"
                          className="!rounded-r-none"
                        >
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M7 7H11V11H7zM7 13H11V17H7zM13 7H17V11H13zM13 13H17V17H13z"></path>
                          </svg>
                        </label>
                      </div>
                    </div>

                    <div
                      className="relative flex-1 custom-radio sm:flex-none"
                      aria-label="4 Column Grid View"
                      data-microtip-position="top"
                      data-target="tooltip"
                    >
                      <label for="" className="sr-only">
                        {" "}
                        4 Column Grid{" "}
                      </label>
                      <div className="toggle-radio">
                        <input
                          type="radio"
                          id="fourGridViewButton"
                          role="radio"
                          tabindex="0"
                          name="layoutType"
                        />
                        <label
                          for="fourGridViewButton"
                          className="!rounded-none"
                        >
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M10 7H14V11H10zM16 7H20V11H16zM4 7H8V11H4zM10 13H14V17H10zM16 13H20V17H16zM4 13H8V17H4z"></path>
                          </svg>
                        </label>
                      </div>
                    </div>

                    <div
                      className="relative flex-1 custom-radio sm:flex-none"
                      aria-label="List View"
                      data-microtip-position="top"
                      data-target="tooltip"
                    >
                      <label for="" className="sr-only">
                        {" "}
                        List{" "}
                      </label>
                      <div className="toggle-radio">
                        <input
                          type="radio"
                          id="listViewButton"
                          role="radio"
                          tabindex="0"
                          name="layoutType"
                        />
                        <label
                          for="listViewButton"
                          className="!rounded-l-none !-ml-px"
                        >
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4 6H6V8H4zM4 11H6V13H4zM4 16H6V18H4zM20 8L20 6 18.8 6 9.2 6 8.023 6 8.023 8 9.2 8 18.8 8zM8 11H20V13H8zM8 16H20V18H8z"></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                  </span>
                </div>
              </div>

              <div className="mt-5 products products-list three-columns four-columns">
                <div className="product-card">
                  <button type="button" className="btn-wishlist-top">
                    <svg
                      className="w-5 h-5"
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

                  <a href="#" title="" className="block">
                    <div className="product-image">
                      <img
                        className="object-cover w-full h-full"
                        src=""
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
                            Sassie Basic 31 LTR Navy Backpack Waterproof School
                            Bag
                          </a>
                        </p>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center flex-1 space-x-2">
                            <span className="product-price"> ₹12,899/- </span>
                            <s className="product-price-old"> ₹12,899/- </s>
                          </div>
                        </div>

                        <div className="product-ratings">
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>

                      <div className="product-buttons">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary btn-cart"
                          data-toggle="modal"
                          data-target="#quickViewModal"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
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
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Add to Wishlist
                    </button>
                  </div>
                </div>

                <div className="product-card">
                  <button type="button" className="btn-wishlist-top">
                    <svg
                      className="w-5 h-5"
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

                  <a href="#" title="" className="block">
                    <div className="product-image">
                      <img
                        className="object-cover w-full h-full"
                        src=""
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
                            Sassie Basic 31
                          </a>
                        </p>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center flex-1 space-x-2">
                            <span className="product-price"> ₹12,899/- </span>
                            <s className="product-price-old"> ₹12,899/- </s>
                          </div>
                        </div>

                        <div className="product-ratings">
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>

                      <div className="product-buttons">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary btn-cart"
                          data-toggle="modal"
                          data-target="#quickViewModal"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
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
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  title=""
                  className="btn btn-sm btn-white"
                  role="button"
                >
                  <svg
                    className="w-4 h-4 mr-1.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Previous
                </a>

                <a
                  href="#"
                  title=""
                  className="btn btn-sm btn-white"
                  role="button"
                >
                  Next
                  <svg
                    className="w-4 h-4 ml-1.5"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
