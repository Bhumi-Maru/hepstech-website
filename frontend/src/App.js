import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import Information from "./components/Testimonials/Information";
import Slider from "./components/Slider/Slider";
import CategorySlider from "./components/category slider/CategorySlider";
import HorizontalBanner1 from "./components/Horizontal Banner/HorizontalBanner1";
import FlashSaleSlider from "./components/Flash Sale Slider/FlashSaleSlider";
import HorizontalBanners3Items from "./components/Horizontal Banners - 3 Items/HorizontalBanners3Items";
import CategorySlider5Items from "./components/Category Slider - 5 Items/CategorySlider5Items";
import PopularProductsSlider01 from "./components/Popular Products Slider 01/PopularProductsSlider01";
import HorizontalBannersLarge2Items from "./components/Horizontal Banners - Large - 2 Items/HorizontalBannersLarge2Items";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main class="flex-1">
          <Slider />
          <CategorySlider />
          <HorizontalBanner1 />
          <FlashSaleSlider />
          <HorizontalBanners3Items />
          <CategorySlider5Items />
          <PopularProductsSlider01 />
          <HorizontalBannersLarge2Items />
          <Testimonials />
          <Information />
        </main>

        <Footer />
      </div>
    </>
  );
}
