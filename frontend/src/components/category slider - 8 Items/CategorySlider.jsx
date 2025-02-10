import React, { useEffect, useState } from "react";

export default function CategorySlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (window.Swiper) {
      const swiper = new window.Swiper(".swiper-category-eight", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true, // Enables infinite scrolling
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        breakpoints: {
          480: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        },
      });

      setSwiperInstance(swiper);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  return (
    <section className="section-slider">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Shop by Category</h2>
          <div className="relative flex items-center space-x-4">
            <div
              className="swiper-button-prev swiper-button-custom swiper-button-category-eight"
              tabIndex="0"
              role="button"
              aria-label="Previous slide"
            ></div>
            <div
              className="swiper-button-next swiper-button-custom swiper-button-category-eight"
              tabIndex="0"
              role="button"
              aria-label="Next slide"
            ></div>
          </div>
        </div>

        <div className="mt-3 swiper-container swiper-category-eight">
          <div className="swiper-wrapper">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="swiper-slide category-slide"
                role="group"
                aria-label={`${index + 1} / 9`}
              >
                <a href="#" title="" className="block">
                  <div className="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg aspect-w-1 aspect-h-1">
                    <img
                      className="object-cover w-full h-full"
                      src=""
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </a>
                <p className="mt-3 text-sm font-medium text-center">
                  <a href="#" title="" className="hover:text-skin-primary">
                    Category
                  </a>
                </p>
              </div>
            ))}
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>

      {/* CSS for consistent slide width */}
      <style jsx>{`
        .category-slide {
          width: 130px !important;
          margin-right: 20px;
        }
      `}</style>
    </section>
  );
}
