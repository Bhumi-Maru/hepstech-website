import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  const [homePage, setHomePage] = useState([]);

  useEffect(() => {
    fetchHomePage();
  }, []); // ✅ Add dependency array to avoid multiple calls

  const fetchHomePage = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/homepage");
      console.log("home page", response.data);
      setHomePage(response.data);
    } catch (error) {
      console.error("Error fetching homepage data:", error);
    }
  };

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
