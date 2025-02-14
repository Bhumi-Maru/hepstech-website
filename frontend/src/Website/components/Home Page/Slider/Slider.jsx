import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <>
      {/* MAIN BANNER SLIDER */}
      <section className="pt-5">
        <div className="container">
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              loop={true}
              className="swiper-main-banner"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg aspect-w-16 aspect-h-6">
                  <img
                    className="object-cover w-full h-full"
                    src=""
                    alt="Slide 1"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="overflow-hidden bg-red-200 border border-gray-200 rounded-lg aspect-w-16 aspect-h-6">
                  <img
                    className="object-cover w-full h-full"
                    src=""
                    alt="Slide 2"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="overflow-hidden bg-blue-200 border border-gray-200 rounded-lg aspect-w-16 aspect-h-6">
                  <img
                    className="object-cover w-full h-full"
                    src=""
                    alt="Slide 3"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
