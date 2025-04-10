import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useHomePageContext } from "../../../../Admin Panel/context/HomepageContext";

export default function Slider() {
  const { homePage } = useHomePageContext();

  // Get all banners with layoutNumber === 1
  const banners = homePage.filter(
    (item) => item.home_page_layout_number?.layoutNumber === 1
  );

  return (
    <section className="pt-5">
      <div className="container">
        <div className="relative">
          {banners.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop={true}
              className="swiper-main-banner"
            >
              {banners.map((banner) => (
                <SwiperSlide key={banner._id}>
                  <div className="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg aspect-w-16 aspect-h-6">
                    {banner.home_page_image?.filePath ? (
                      <img
                        className="object-cover w-full h-full"
                        src={`http://localhost:7000${banner.home_page_image.filePath}`}
                        alt={banner.home_page_image.filename || "Banner"}
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-sm text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-10 text-gray-500 text-sm">
              No banners with layout number 1 found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
