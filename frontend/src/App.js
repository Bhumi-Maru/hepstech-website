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

export default function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar setLoginModalOpen={setLoginModalOpen} />
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
                  <FlashSaleSlider />
                  <HorizontalBanners3Items />
                  <CategorySlider5Items />
                  <PopularProductsSlider01 />
                  <HorizontalBannersLarge2Items />
                  <PopularProductsSlider02_4Items />
                  <HorizontalBanners_2Items />
                  <BestSellingProductsSlider01_6Items />
                  <VeticalBanners_4Items />
                  <HorizontalBanner_Large_1Item />
                  <BestSellingProductsSlider02_6Items />
                  <HorizontalBannerSmall_1Item />
                  <VerticalBanners_4Items />
                  <BestSellingProductsSlider_03_6Items />
                  <HorizontalBannersLarge2Items />
                  <Horizontal_Banner_Large_1_Item />
                  <BestSellingProductsSlider_04_6_Items />
                  <Vertical_Banners_4_Items />
                  <Horizontal_Banner_Small_1_Item />
                  <Testimonials />
                </>
              }
            />
            {/* SHOP */}
            <Route path="/shop" element={<ShopLayout />}>
              {/* SHOP SECTION 1 */}
              <Route index element={<Shop_Section_1 />} />
              {/* SHOP SECTION 2 */}
              <Route index path="section-2" element={<Shop_Section_2 />} />
              {/* <Route path="section-3" element={<Shop_Section_3 />} /> */}
            </Route>

            {/* LOGIN */}
            {/* <Route path="/login" element={<Login />} /> */}

            {/* WISHLIST */}
            <Route
              path="/wishlist"
              element={
                <section className="py-10 bg-white">
                  <div className="container">
                    <WishList />
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
                    <MyOrders />
                  </div>
                </section>
              }
            />
            <Route path="/order-details/:id" element={<OrderDetails />} />

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

            {/* PRIVACY POLICY */}
            <Route path="/privacy-policy" element={<Privacy_Policy />} />

            {/* 404 ERROR  PAGE */}
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Information />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
