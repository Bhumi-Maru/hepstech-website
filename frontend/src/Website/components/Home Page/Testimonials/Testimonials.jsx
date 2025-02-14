import React, { useEffect } from "react";
import "./Testimonials.css";

export default function Testimonials() {
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
    <section className="section-slider">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Latest Reviews</h2>

          <div className="relative flex items-center space-x-4">
            <div className="swiper-button-prev swiper-button-testimonial swiper-button-custom"></div>
            <div className="swiper-button-next swiper-button-testimonial swiper-button-custom"></div>
          </div>
        </div>

        <div className="mt-3 swiper-container swiper-testimonials">
          <div className="swiper-wrapper">
            {/* Testimonial 1 */}
            <div className="pb-6 text-center swiper-slide">
              <div className="flow-root px-6 pt-8 bg-white border border-gray-200 rounded-lg">
                <div className="-mb-6">
                  <blockquote className="text-base">
                    “This is a super space for your customers' quote. Don’t
                    worry, it works smoothly. You will get all you need by
                    writing text here.“
                  </blockquote>
                  <p className="mt-2 font-medium text-gray-600">
                    Name and Surname
                  </p>
                  <div className="w-full mx-auto mt-6">
                    <span className="inline-flex overflow-hidden rounded-full shadow-lg">
                      <img
                        className="inline-block rounded-full h-14 w-14"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=9JeVfFeU2K&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="pb-6 text-center swiper-slide">
              <div className="flow-root px-6 pt-8 bg-white border border-gray-200 rounded-lg">
                <div className="-mb-6">
                  <blockquote className="text-base">
                    “This is a super space for your customers' quote. Don’t
                    worry, it works smoothly. You will get all you need by
                    writing text here.“
                  </blockquote>
                  <p className="mt-2 font-medium text-gray-600">
                    Name and Surname
                  </p>
                  <div className="w-full mx-auto mt-6">
                    <span className="inline-flex overflow-hidden rounded-full shadow-lg">
                      <img
                        className="inline-block rounded-full h-14 w-14"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=9JeVfFeU2K&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="pb-6 text-center swiper-slide">
              <div className="flow-root px-6 pt-8 bg-white border border-gray-200 rounded-lg">
                <div className="-mb-6">
                  <blockquote className="text-base">
                    “This is a super space for your customers' quote. Don’t
                    worry, it works smoothly. You will get all you need by
                    writing text here.“
                  </blockquote>
                  <p className="mt-2 font-medium text-gray-600">
                    Name and Surname
                  </p>
                  <div className="w-full mx-auto mt-6">
                    <span className="inline-flex overflow-hidden rounded-full shadow-lg">
                      <img
                        className="inline-block rounded-full h-14 w-14"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=9JeVfFeU2K&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
