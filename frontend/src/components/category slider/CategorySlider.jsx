import React, { useEffect } from "react";

export default function CategorySlider() {
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
      <section className="section-slider">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Shop by Category</h2>
            <div className="relative flex items-center space-x-4">
              <div
                className="swiper-button-prev swiper-button-custom swiper-button-category-eight swiper-button-disabled"
                tabIndex="-1"
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-971032fb83a7d10fc10"
                aria-disabled="true"
              ></div>
              <div
                className="swiper-button-next swiper-button-custom swiper-button-category-eight"
                tabIndex="0"
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-971032fb83a7d10fc10"
                aria-disabled="false"
              ></div>
            </div>
          </div>
          <div className="mt-3 swiper-container swiper-category-eight swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-971032fb83a7d10fc10"
              aria-live="polite"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              {/* Repeated Category Slide */}
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="swiper-slide"
                  role="group"
                  aria-label={`${index + 1} / 9`}
                  style={{ width: "131px", marginRight: "24px" }}
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
      </section>
    </>
  );
}
