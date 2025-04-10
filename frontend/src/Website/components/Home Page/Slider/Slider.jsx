import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useHomePageContext } from "../../../../Admin Panel/context/HomepageContext";

export default function Slider() {
  const { homePage } = useHomePageContext();

  return (
    <section className="pt-5">
      <div className="container">
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="swiper-main-banner"
          >
            {homePage.map((banner, index) => (
              <SwiperSlide key={banner._id || index}>
                <div className="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg aspect-w-16 aspect-h-6">
                  {banner.home_page_image?.filePath ? (
                    <img
                      className="object-cover w-full h-full"
                      src={`http://localhost:7000${banner.home_page_image.filePath}`}
                      alt={
                        banner.home_page_image.filename || `Banner ${index + 1}`
                      }
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
        </div>
      </div>
    </section>
  );
}
