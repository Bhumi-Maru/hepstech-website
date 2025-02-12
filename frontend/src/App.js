import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import Information from "./components/Testimonials/Information";
import Slider from "./components/Slider/Slider";
import CategorySlider from "./components/category slider - 8 Items/CategorySlider";
import HorizontalBanner1 from "./components/Horizontal Banner/HorizontalBanner1";
import FlashSaleSlider from "./components/Flash Sale Slider/FlashSaleSlider";
import HorizontalBanners3Items from "./components/Horizontal Banners - 3 Items/HorizontalBanners3Items";
import CategorySlider5Items from "./components/Category Slider - 5 Items/CategorySlider5Items";
import PopularProductsSlider01 from "./components/Popular Products Slider 01/PopularProductsSlider01";
import HorizontalBannersLarge2Items from "./components/Horizontal Banners - Large - 2 Items/HorizontalBannersLarge2Items";
import PopularProductsSlider02_4Items from "./components/Popular Products Slider 02 - 4 Items/PopularProductsSlider02_4Items";
import HorizontalBanners_2Items from "./components/Horizontal Banners - 2 Items/HorizontalBanners_2Items";
import BestSellingProductsSlider01_6Items from "./components/Best Selling Products Slider 01 - 6 Items/BestSellingProductsSlider01_6Items";
import VeticalBanners_4Items from "./components/Vetical Banners - 4 Items/VeticalBanners_4Items";
import HorizontalBanner_Large_1Item from "./components/Horizontal Banner - Large - 1 Item/HorizontalBanner_Large_1Item";
import BestSellingProductsSlider02_6Items from "./components/Best Selling Products Slider 02 - 6 Items/BestSellingProductsSlider02_6Items";
import HorizontalBannerSmall_1Item from "./components/Horizontal Banner - Small - 1 Item/HorizontalBannerSmall_1Item";
import VerticalBanners_4Items from "./components/Vertical Banners - 4 Items/VerticalBanners_4Items";
import BestSellingProductsSlider_03_6Items from "./components/Best Selling Products Slider 03 - 6 Items/BestSellingProductsSlider_03_6Items";
import Horizontal_Banner_Large_1_Item from "./components/Horizontal_Banner_Large_1_Item/Horizontal_Banner_Large_1_Item";
import BestSellingProductsSlider_04_6_Items from "./components/Best Selling Products Slider 04 - 6 Items/BestSellingProductsSlider_04_6_Items";
import Vertical_Banners_4_Items from "./components/Vertical_Banners_4_Items/Vertical_Banners_4_Items";
import Horizontal_Banner_Small_1_Item from "./components/Horizontal_Banner_Small_1_Item/Horizontal_Banner_Small_1_Item";
import Shop_Section_1 from "./components/shop/Shop_Section_1";
import ShopLayout from "./components/shop/ShopLayout";
import Shop_Section_2 from "./components/shop/Shop_Section_2";
import Login from "./components/Profile/Authentication/Login";
import WishList from "./components/Profile/WishList/WishList";
import MyAddresses from "./components/Profile/My Addresses/MyAddresses";
import MyOrders from "./components/Profile/My Orders/MyOrders";
import OrderDetails from "./components/Profile/My Orders/OrderDetails";
import MyAccount from "./components/Profile/My Account/MyAccount";
import ShoppingCart from "./components/Shopping Cart/ShoppingCart";
import Checkout from "./components/Shopping Cart/CheckOut/Checkout";
import Privacy_Policy from "./components/Privacy Policy/Privacy_Policy";
import Error from "./components/Error/Error";
import EmptyShoppingCart from "./components/Empty Shopping Cart/EmptyShoppingCart";
import Thank_You from "./components/Thank You/Thank_You";
import Cancel_Order_Modal from "./components/Profile/My Orders/Cancel_Order_Modal";
import Product_Details from "./components/Product Details/Product_Details";
import Customer_Reviews from "./components/Product Details/Customer_Reviews/Customer_Reviews";
import Mobile_Navigation_Modal from "./components/Navbar/Mobile_Navigation_Modal";
import AddToCart_Quick_View_Modal from "./components/AddToCart_Quick_View_Modal";

export default function App() {
  // LOGIN MODAL
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  // CANCEL ORDER MODAL
  const [isCancelOrderModalOpen, setIsCancelOrderModalOpen] = useState(false);
  // MOBILE NAVIGATION MENU MODAL
  const [isMobileNavigationModal, setIsMobileNavigationModal] = useState(false);
  // ADD TO CART QUICK VIEW MODAL
  const [isAddToCartModal, setIsAddToCartModal] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar
          setLoginModalOpen={setLoginModalOpen}
          setIsMobileNavigationModal={setIsMobileNavigationModal}
        />
        {/* login popup modal */}
        {isLoginModalOpen && (
          <>
            <Login setLoginModalOpen={setLoginModalOpen} />
          </>
        )}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Components outside Routes */}
                  <Slider />
                  <CategorySlider />
                  <HorizontalBanner1 />
                  <FlashSaleSlider setIsAddToCartModal={setIsAddToCartModal} />
                  <HorizontalBanners3Items />
                  <CategorySlider5Items />
                  <PopularProductsSlider01
                    setIsAddToCartModal={setIsAddToCartModal}
                  />
                  <HorizontalBannersLarge2Items />
                  <PopularProductsSlider02_4Items
                    setIsAddToCartModal={setIsAddToCartModal}
                  />
                  <HorizontalBanners_2Items />
                  <BestSellingProductsSlider01_6Items
                    setIsAddToCartModal={setIsAddToCartModal}
                  />
                  <VeticalBanners_4Items />
                  <HorizontalBanner_Large_1Item />
                  <BestSellingProductsSlider02_6Items
                    setIsAddToCartModal={setIsAddToCartModal}
                  />
                  <HorizontalBannerSmall_1Item />
                  <VerticalBanners_4Items />
                  <BestSellingProductsSlider_03_6Items
                    setIsAddToCartModal={setIsAddToCartModal}
                  />
                  <HorizontalBannersLarge2Items />
                  <Horizontal_Banner_Large_1_Item />
                  <BestSellingProductsSlider_04_6_Items
                    setIsAddToCartModal={setIsAddToCartModal}
                  />
                  <Vertical_Banners_4_Items />
                  <Horizontal_Banner_Small_1_Item />
                  <Testimonials />
                </>
              }
            />
            {/* SHOP */}
            <Route
              path="/shop"
              element={<ShopLayout setIsAddToCartModal={setIsAddToCartModal} />}
            />

            {/* LOGIN */}
            {/* <Route path="/login" element={<Login />} /> */}

            {/* WISHLIST */}
            <Route
              path="/wishlist"
              element={
                <section className="py-10 bg-white">
                  <div className="container">
                    <WishList setIsAddToCartModal={setIsAddToCartModal} />
                  </div>
                </section>
              }
            />

            {/* CART */}
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* MY-ADDRESSES */}
            <Route
              path="/my-addresses"
              element={
                <section className="py-10 bg-white">
                  <div className="container">
                    <MyAddresses />
                  </div>
                </section>
              }
            />
            {/* MY-ORDERS */}
            <Route
              path="/my-orders"
              element={
                <section className="py-10 bg-white">
                  <div className="container">
                    <MyOrders isCancelOrderModalOpen={isCancelOrderModalOpen} />
                  </div>
                </section>
              }
            />
            {/* ORDER DETAILS */}
            <Route
              path="/order-details"
              element={
                <OrderDetails
                  setIsCancelOrderModalOpen={setIsCancelOrderModalOpen}
                />
              }
            />

            {/* MY ACCOUNT */}
            <Route
              path="/my-account"
              element={
                <section className="py-10 bg-white">
                  <div className="container">
                    <MyAccount />
                  </div>
                </section>
              }
            />

            {/* PRODUCT DETAILS */}
            <Route
              path="/product-details"
              element={
                <>
                  <section className="pt-10 pb-20 bg-white">
                    <div className="container">
                      <Product_Details />
                    </div>
                  </section>

                  {/* CUSTOMER REVIEWS */}
                  <section class="py-16 border-t border-gray-200">
                    <div class="container">
                      <Customer_Reviews />
                    </div>
                  </section>
                </>
              }
            />

            {/* PRIVACY POLICY */}
            <Route path="/privacy-policy" element={<Privacy_Policy />} />

            {/* 404 ERROR  PAGE */}
            <Route path="*" element={<Error />} />

            {/*EMPTY SHOPPING CART  */}
            <Route
              path="/empty-shopping-cart"
              element={<EmptyShoppingCart />}
            />

            {/* THANK YOU */}
            <Route path="/thank-you" element={<Thank_You />} />
          </Routes>
          {/* Global Cancel Order Modal */}
          {isCancelOrderModalOpen && (
            <Cancel_Order_Modal
              setIsCancelOrderModalOpen={setIsCancelOrderModalOpen}
            />
          )}
        </main>
        {/* MOBILE NAVIGATION MODAL [SMALL SCREEN MENU BTN] */}
        {isMobileNavigationModal && (
          <>
            <Mobile_Navigation_Modal
              setIsMobileNavigationModal={setIsMobileNavigationModal}
            />
          </>
        )}

        {isAddToCartModal && (
          <>
            <AddToCart_Quick_View_Modal
              isAddToCartModal={isAddToCartModal}
              setIsAddToCartModal={setIsAddToCartModal}
            />
          </>
        )}
        <Information />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
