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
import PopularProductsSlider02_4Items from "./components/Popular Products Slider 02 - 4 Items/PopularProductsSlider02_4Items";
import HorizontalBanners_2Items from "./components/Horizontal Banners - 2 Items/HorizontalBanners_2Items";
import BestSellingProductsSlider01_6Items from "./components/Best Selling Products Slider 01 - 6 Items/BestSellingProductsSlider01_6Items";
import VeticalBanners_4Items from "./components/Vetical Banners - 4 Items/VeticalBanners_4Items";
import HorizontalBanner_Large_1Item from "./components/Horizontal Banner - Large - 1 Item/HorizontalBanner_Large_1Item";
import BestSellingProductsSlider02_6Items from "./components/Best Selling Products Slider 02 - 6 Items/BestSellingProductsSlider02_6Items";
import HorizontalBannerSmall_1Item from "./components/Horizontal Banner - Small - 1 Item/HorizontalBannerSmall_1Item";
import VerticalBanners_4Items from "./components/Vertical Banners - 4 Items/VerticalBanners_4Items";
import BestSellingProductsSlider_03_6Items from "./components/Best Selling Products Slider 03 - 6 Items/BestSellingProductsSlider_03_6Items";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main class="flex-1">
          {/* slider */}
          <Slider />
          {/* CATEGORY SLIDER - 8 ITEMS */}
          <CategorySlider />
          {/* HORIZONTAL BANNER - SMALL - 1 ITEM */}
          <HorizontalBanner1 />
          {/*  FLASH SALE SLIDER  */}
          <FlashSaleSlider />
          {/* HORIZONTAL BANNERS - 3 ITEMS */}
          <HorizontalBanners3Items />
          {/* CATEGORY SLIDER - 5 ITEMS */}
          <CategorySlider5Items />
          {/* POPULAR PRODUCTS SLIDER 01 - 4 ITEMS */}
          <PopularProductsSlider01 />
          {/* HORIZONTAL BANNERS - LARGE - 2 ITEMS */}
          <HorizontalBannersLarge2Items />
          {/* POPULAR PRODUCTS SLIDER 02 - 4 ITEMS */}
          <PopularProductsSlider02_4Items />
          {/* HORIZONTAL BANNERS - 2 ITEMS */}
          <HorizontalBanners_2Items />
          {/* BEST SELLING PRODUCTS SLIDER 01 - 6 ITEMS */}
          <BestSellingProductsSlider01_6Items />
          {/* VERTICAL BANNERS - 4 ITEMS */}
          <VeticalBanners_4Items />
          {/* HORIZONTAL BANNER - LARGE - 1 ITEM */}
          <HorizontalBanner_Large_1Item />
          {/* BEST SELLING PRODUCTS SLIDER 02 - 6 ITEMS */}
          <BestSellingProductsSlider02_6Items />
          {/* HORIZONTAL BANNER - SMALL - 1 ITEM */}
          <HorizontalBannerSmall_1Item />
          {/* VERTICAL BANNERS - 4 ITEMS */}
          <VerticalBanners_4Items />
          {/* BEST SELLING PRODUCTS SLIDER 03 - 6 ITEMS */}
          <BestSellingProductsSlider_03_6Items />
          <Testimonials />
          <Information />
        </main>

        <Footer />
      </div>
    </>
  );
}
