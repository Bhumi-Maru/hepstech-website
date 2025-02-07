import React, { useEffect } from "react";

export default function CategorySlider5Items() {
  useEffect(() => {
    // Wait for Swiper to be available globally after the script is loaded
    const swiper = new window.Swiper(".swiper-testimonials", {
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 2500, // Time in milliseconds between each slide change
        disableOnInteraction: false, // Ensure autoplay doesn't stop when interacting with the slider
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next.swiper-button-testimonial",
        prevEl: ".swiper-button-prev.swiper-button-testimonial",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });

    // Clean up the swiper instance when the component is unmounted
    return () => {
      if (swiper) {
        swiper.destroy(true, true);
      }
    };
  }, []);
  return (
    <>
      {/* <!-- CATEGORY SLIDER - 5 ITEMS --> */}
      <section className="section-slider">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Shop by Category</h2>

            <div className="relative flex items-center space-x-4">
              <div className="swiper-button-prev swiper-button-custom swiper-button-category-five"></div>
              <div className="swiper-button-next swiper-button-custom swiper-button-category-five"></div>
            </div>
          </div>

          <div className="mt-3 swiper-container swiper-category-five">
            <div
              className="swiper-wrapper"
              style={{ width: "223px", gap: "25px" }}
            >
              <div className="swiper-slide">
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

              <div className="swiper-slide">
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

              <div className="swiper-slide">
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

              <div className="swiper-slide">
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

              <div className="swiper-slide">
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

              <div className="swiper-slide">
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

              <div className="swiper-slide">
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

              <div className="swiper-slide">
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

              <div className="swiper-slide">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
