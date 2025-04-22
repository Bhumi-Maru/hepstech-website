import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import { useHomePageContext } from "../../../../Admin Panel/context/HomepageContext";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);
  const { homePage } = useHomePageContext();

  // Initialize Swiper after homePage data is available
  useEffect(() => {
    if (window.Swiper && homePage.length > 0 && !swiperRef.current) {
      swiperRef.current = new Swiper(".swiper-testimonials", {
        slidesPerView: 1,
        spaceBetween: 16,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
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
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3 },
        },
      });
      setIsSwiperReady(true); // Indicate that Swiper is ready
    }

    // Cleanup swiper instance when component unmounts or homePage changes
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
        setIsSwiperReady(false); // Reset the Swiper state
      }
    };
  }, [homePage]); // Depend on homePage to re-run if the data changes

  const testimonials = homePage.filter(
    (item) => item?.home_page_layout_number?.layoutNumber === 23
  );

  return (
    <section className="section-slider">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Latest Reviews</h2>

          <div class="relative flex items-center space-x-4">
            <div
              class="swiper-button-prev swiper-button-testimonial swiper-button-custom"
              tabindex="0"
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-7b6285f0f955c418"
            ></div>
            <div
              class="swiper-button-next swiper-button-testimonial swiper-button-custom"
              tabindex="0"
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-7b6285f0f955c418"
            ></div>
          </div>
        </div>

        <div className="mt-3 swiper-container swiper-testimonials">
          <div className="swiper-wrapper gap-[10px]">
            {testimonials.map((testimonial, index) => (
              <div className="pb-6 text-center swiper-slide" key={index}>
                <div className="flow-root px-6 pt-8 bg-white border border-gray-200 rounded-lg">
                  <div className="-mb-6">
                    <blockquote className="text-base">
                      {testimonial.home_page_testimonial}
                    </blockquote>
                    <p className="mt-2 font-medium text-gray-600">
                      {testimonial.home_page_section_title}
                    </p>
                    <div className="w-full mx-auto mt-6">
                      <span className="inline-flex overflow-hidden rounded-full shadow-lg">
                        {testimonial?.home_page_image?.filePath ? (
                          <img
                            className="inline-block rounded-full h-14 w-14 object-cover"
                            src={`http://localhost:7000${testimonial.home_page_image.filePath}`}
                            alt={
                              testimonial.home_page_image.filename ||
                              "testimonial"
                            }
                            loading="lazy"
                          />
                        ) : (
                          <img
                            src="https://via.placeholder.com/56x56?text=User"
                            alt="No User"
                            className="inline-block rounded-full h-14 w-14 object-cover"
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination mt-4"></div>
        </div>
      </div>
    </section>
  );
}
