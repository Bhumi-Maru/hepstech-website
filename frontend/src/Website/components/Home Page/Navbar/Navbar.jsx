import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Navbar({
  setLoginModalOpen,
  setIsMobileNavigationModal,
}) {
  // const { formData } = useHeaderSection();
  const [formData, setFormData] = useState({});
  // Fetch latest data on initial load
  useEffect(() => {
    fetchHeaderData();
  }, []);

  console.log("gggg", formData);

  const fetchHeaderData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/header-section/getAll"
      );

      if (response.data.success && response.data.data.length > 0) {
        // Sort by createdAt to get the most recent entry
        const sortedData = [...response.data.data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const latestData = sortedData[0];

        setFormData(latestData);
        console.log("Most Recent Data:", latestData);
      }
    } catch (error) {
      console.error("Error fetching header data:", error);
    }
  };

  const [isScrollingUp, setIsScrollingUp] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  ////admin data

  // Safely destructure offerBanner with default values
  // const { enabled, title } = formData.offerBanner || {
  //   enabled: false,
  //   title: "",
  // };

  // useEffect(() => {
  //   console.log("Offer Banner State:", enabled, title);
  // }, [enabled, title]);

  ///////////////////////////////////////////////////////
  const [hoveredMenu, setHoveredMenu] = useState(null);
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState({
    contact: false,
    profile: false,
  });

  // Function to toggle the dropdown menu
  const toggleDropdown = (dropdown) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  // Function to handle mouse enter this is for profile
  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  // Function to handle mouse leave this is for profile
  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <>
      {/* <!-- START OFFER ANNOUNCEMENT --> */}
      {formData?.offerBanner?.enabled && (
        <div className="relative py-2.5 bg-skin-primary">
          <div className="container">
            <div className="text-center sm:px-16">
              <p className="text-sm font-medium text-white">
                <span>
                  {/* Super Saver Sale! Enjoy Up To 55% OFF! Use Code
                  <span className="font-bold">“SUPER20”</span> To Get Extra 20%
                  OFF. */}
                  {formData?.offerBanner.title}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {/* <!-- END OFFER ANNOUNCEMENT --> */}
      {/* <!-- START HEADER --> */}
      <header
        className={`z-20 text-gray-900 bg-white shadow nav-${
          formData.headerType
        } ${
          formData.headerType === "smart-sticky"
            ? "nav-sticky nav-smart-sticky"
            : ""
        } ${
          isScrollingUp && formData.headerType === "smart-sticky"
            ? "scroll-up"
            : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <button
              type="button"
              className="p-1 xl:hidden"
              data-toggle="drawer"
              data-target="#mobileNavigation"
              onClick={() => setIsMobileNavigationModal(true)}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <a
              href="/"
              title="logo"
              className="flex flex-shrink-0 ml-5 mr-auto xl:ml-0 sm:mr-0"
            >
              <img
                className="w-auto h-10"
                src="../admin assets/images/logo.png"
                alt=""
              />
            </a>

            <form
              action="#"
              className="hidden ml-8 mr-auto lg:ml-6 xl:ml-12 sm:flex sm:flex-1"
            >
              <div className="w-full max-w-sm xl:max-w-md">
                <label for="" className="sr-only">
                  {" "}
                  Search products{" "}
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search for products, brand and more..."
                    className="!pl-10 !py-2"
                  />
                </div>
              </div>
            </form>

            <div className="flex items-center space-x-10">
              {/* OFFERS */}
              <a
                href="#"
                title="Offers"
                className="flex-col items-center hidden transition-all duration-200 lg:flex hover:text-skin-primary"
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
                    stroke-width="1.5"
                    d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                  />
                </svg>
                <span className="mt-1 text-xs font-semibold"> Offers </span>
              </a>

              {/* CONTACT */}
              <div className="hidden lg:flex">
                <div className="dropdown">
                  <button
                    title="Contact"
                    type="button"
                    className="flex flex-col items-center transition-all duration-200 focus:outline-none hover:text-skin-primary dropdown-toggle"
                    onClick={() => toggleDropdown("contact")} // Toggle the dropdown on click
                    aria-haspopup="true"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
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
                        strokeWidth="1.5"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                    <span className="mt-1 text-xs font-semibold">
                      {" "}
                      Contact{" "}
                    </span>
                  </button>

                  {/* Dropdown Menu */}
                  {formData?.contact && (
                    <>
                      <div
                        className={`dropdown-menu ${
                          isOpen.contact ? "block" : "hidden"
                        }`} // Show or hide based on isOpen state
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="divide-y divide-gray-100">
                          <div className="px-4 py-5" role="none">
                            <div className="flex items-center justify-between">
                              <p className="font-medium" role="none">
                                Call Us
                              </p>
                              <a
                                href="#"
                                title="Call Us"
                                className="inline-flex font-medium hover:text-skin-primary"
                              >
                                {/* (885) 242-9095 */}
                                {formData?.contact.phoneNumber}
                              </a>
                            </div>

                            <hr className="my-5 border-gray-200" />

                            <p
                              className="text-base font-medium text-gray-600 truncate"
                              role="none"
                            >
                              Need more help?
                            </p>
                            <p
                              className="text-sm text-gray-600 truncate"
                              role="none"
                            >
                              Connect with our team and they will sort it out
                              for you
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-3 text-center">
                              <div>
                                <a
                                  href="#"
                                  title=""
                                  className="flex flex-col items-center p-3 transition-all duration-200 rounded-md hover:text-skin-primary hover:bg-gray-50"
                                >
                                  <svg
                                    className="w-6 h-6 mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 256 256"
                                  >
                                    <path
                                      d="M45.429,176.99811A95.95978,95.95978,0,1,1,79.00277,210.5717l.00023-.001L45.84643,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <path
                                      d="M152.11369,183.99992a80,80,0,0,1-80.11361-80.11361A27.97622,27.97622,0,0,1,100,76h0a6.89265,6.89265,0,0,1,5.98451,3.47295l11.69105,20.45931a8,8,0,0,1-.086,8.08508l-9.38907,15.64844h0a48.18239,48.18239,0,0,0,24.13373,24.13373l0,0,15.64841-9.389a8,8,0,0,1,8.08508-.086l20.45931,11.691A6.89265,6.89265,0,0,1,180,156v0A28.081,28.081,0,0,1,152.11369,183.99992Z"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                  </svg>
                                  <span className="block mt-1">
                                    {" "}
                                    WhatsApp Us{" "}
                                  </span>
                                </a>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  title=""
                                  className="flex flex-col items-center p-3 transition-all duration-200 rounded-md hover:text-skin-primary hover:bg-gray-50"
                                >
                                  <svg
                                    className="w-6 h-6 mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                  </svg>
                                  <span className="block mt-1"> Email Us </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* WISHLIST */}
              {formData?.wishlistEnabled && (
                <>
                  <Link
                    to="/wishlist"
                    title="Wishlist"
                    className="flex-col items-center hidden transition-all duration-200 md:flex hover:text-skin-primary"
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
                        stroke-width="1.5"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="mt-1 text-xs font-semibold">
                      {" "}
                      Wishlist{" "}
                    </span>
                  </Link>
                </>
              )}

              {/* CART */}
              <Link
                to="/shopping-cart"
                title="Shopping Cart"
                className="flex flex-col items-center transition-all duration-200 hover:text-skin-primary"
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
                    stroke-width="1.5"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="mt-1 text-xs font-semibold"> Cart </span>
              </Link>

              {/* PROFILE */}
              <div className="dropdown">
                <button
                  title="Profile"
                  type="button"
                  onClick={() => toggleDropdown("profile")}
                  className="flex flex-col items-center transition-all duration-200 focus:outline-none hover:text-skin-primary dropdown-toggle"
                  data-toggle="dropdown"
                  id="dropdownMenuButton"
                  aria-haspopup="true"
                  aria-expanded={isOpen.profile ? "true" : "false"}
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
                      stroke-width="1.5"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="mt-1 text-xs font-semibold"> Profile </span>
                </button>

                <div
                  className={`dropdown-menu ${isOpen.profile ? "active" : ""}`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="divide-y divide-gray-100">
                    <div className="px-4 py-3" role="none">
                      <p className="font-medium text" role="none">
                        Welcome
                      </p>
                      <p className="text-sm text-gray-600 truncate" role="none">
                        To access account and manage orders
                      </p>
                      <button
                        className="w-full mt-3 mb-1 btn btn-primary"
                        role="button"
                        id="loginBtn"
                        onClick={() => setLoginModalOpen(true)}
                      >
                        Login to continue
                      </button>
                    </div>
                    <div className="py-1" role="none">
                      <Link
                        to="/my-account"
                        title="My Account"
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        My Account
                      </Link>
                      <Link
                        to="/my-orders"
                        title="My Orders"
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                          />
                        </svg>
                        My Orders
                      </Link>
                      <Link
                        to="/wishlist"
                        title="Wishlist"
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
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
                        Wishlist
                      </Link>
                    </div>
                    <div className="py-1" role="none">
                      <form method="POST" action="#" role="none">
                        <button
                          type="submit"
                          className="w-full dropdown-item"
                          role="menuitem"
                          tabindex="-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Sign out
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- END HEADER --> */}

      {/* <!-- START CATEGORY NAVIGATION --> */}
      <nav className="hidden bg-white border-b border-gray-200 xl:block">
        <div className="container">
          <div className="mega-menu">
            <ul>
              <li>
                <Link to="/shop" title="" className="parent-category-title">
                  Shop
                </Link>
              </li>

              <li
                onMouseEnter={() => handleMouseEnter("furniture")}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" title="" className="parent-category-title">
                  Furniture
                </a>
                <div
                  className={`menu-content ${
                    hoveredMenu === "furniture" ? "visible" : ""
                  }`}
                >
                  <div className="grid grid-flow-col divide-x divide-gray-200 auto-cols-fr">
                    <div className="menu-column">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="main-category-title">Sofas</p>
                      </div>
                      <div className="flow-root px-4 py-4 full-menu">
                        <ul className="-my-1.5 space-y-1.5">
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sectional Sofas
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Cum Beds
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Recliners
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Futons
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Spa
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="menu-column">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="main-category-title">Sofas</p>
                      </div>
                      <div className="flow-root px-4 py-4 full-menu">
                        <ul className="-my-1.5 space-y-1.5">
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sectional Sofas
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Cum Beds
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Recliners
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Futons
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Spa
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="menu-column">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="main-category-title">Sofas</p>
                      </div>
                      <div className="flow-root px-4 py-4 full-menu">
                        <ul className="-my-1.5 space-y-1.5">
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sectional Sofas
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Cum Beds
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Recliners
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Futons
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Spa
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="menu-column">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="main-category-title">Sofas</p>
                      </div>
                      <div className="flow-root px-4 py-4 full-menu">
                        <ul className="-my-1.5 space-y-1.5">
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sectional Sofas
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Cum Beds
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Recliners
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Futons
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Spa
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="menu-column">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="main-category-title">Sofas</p>
                      </div>
                      <div className="flow-root px-4 py-4 full-menu">
                        <ul className="-my-1.5 space-y-1.5">
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sectional Sofas
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Cum Beds
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Recliners
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Futons
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Spa
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="menu-column">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="main-category-title">Sofas</p>
                      </div>
                      <div className="flow-root px-4 py-4 full-menu">
                        <ul className="-my-1.5 space-y-1.5">
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sectional Sofas
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Cum Beds
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Recliners
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Futons
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Spa
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="menu-column">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="main-category-title">Sofas</p>
                      </div>
                      <div className="flow-root px-4 py-4 full-menu">
                        <ul className="-my-1.5 space-y-1.5">
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sectional Sofas
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Cum Beds
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Recliners
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Futons
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Spa
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                onMouseEnter={() => handleMouseEnter("living")}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" title="" className="parent-category-title">
                  {" "}
                  Living{" "}
                </a>

                <div
                  className={`menu-content ${
                    hoveredMenu === "living" ? "visible" : ""
                  }`}
                  style={{
                    position: "absolute",
                    left: "165px",
                    width: "170px",
                  }}
                >
                  <div className="flow-root px-4 py-4">
                    <ul className="-my-1.5 space-y-1.5 sub-menu">
                      <li>
                        <a href="#" title="" className="sub-category-title">
                          Today
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" className="sub-category-title">
                          Calendar
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" className="sub-category-title">
                          Sport
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li
                onMouseEnter={() => handleMouseEnter("bedroom")}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" title="" className="parent-category-title">
                  {" "}
                  Bedroom{" "}
                </a>
                <div
                  className={`menu-content ${
                    hoveredMenu === "bedroom" ? "visible" : ""
                  }`}
                >
                  <div className="grid grid-flow-col divide-x divide-gray-200 auto-cols-fr">
                    <div className="menu-column">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="main-category-title">Sofas</p>
                      </div>
                      <div className="flow-root px-4 py-4 full-menu">
                        <ul className="-my-1.5 space-y-1.5">
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sectional Sofas
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Cum Beds
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Recliners
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Futons
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Spa
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="menu-column">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="main-category-title">Sofas</p>
                      </div>
                      <div className="flow-root px-4 py-4 full-menu">
                        <ul className="-my-1.5 space-y-1.5">
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sectional Sofas
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Cum Beds
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Recliners
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Futons
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Spa
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="menu-column">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="main-category-title">Sofas</p>
                      </div>
                      <div className="flow-root px-4 py-4 full-menu">
                        <ul className="-my-1.5 space-y-1.5">
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Sets
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sectional Sofas
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Cum Beds
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Recliners
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Futons
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="sub-category-title">
                              Sofa Spa
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#" title="" className="parent-category-title">
                  {" "}
                  #WFH{" "}
                </a>
              </li>

              <li>
                <a href="#" title="" className="parent-category-title">
                  Kids Room
                </a>
              </li>

              <li>
                <a href="#" title="" className="parent-category-title">
                  Mattresses
                </a>
              </li>

              <li>
                <a href="#" title="" className="parent-category-title">
                  Furnishings
                </a>
              </li>

              <li>
                <a href="#" title="" className="parent-category-title">
                  {" "}
                  Decor{" "}
                </a>
              </li>

              <li>
                <a href="#" title="" className="parent-category-title">
                  Lighting
                </a>
              </li>

              <li>
                <a href="#" title="" className="parent-category-title">
                  Modular Furniture
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal component */}
      {/* <Login isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  );
}
