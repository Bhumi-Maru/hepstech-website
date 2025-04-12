import React, { useEffect } from "react";
import "./Testimonials.css";
import { useHomePageContext } from "../../../../Admin Panel/context/HomepageContext";

export default function Testimonials() {
  useEffect(() => {
    const initSwiper = () => {
      if (window.Swiper) {
        const swiper = new window.Swiper(".swiper-testimonials", {
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

        return () => swiper.destroy(true, true);
      }
    };

    setTimeout(initSwiper, 100); // short delay to ensure DOM + Swiper script are ready
  }, []);

  const { homePage } = useHomePageContext();
  console.log("hh", homePage);

  // Filter all banners with layoutNumber === 23
  const testimonials = homePage.filter(
    (item) => item?.home_page_layout_number?.layoutNumber === 23
    // item.home_page_status === "published"
  );

  console.log("tttt", testimonials);

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
            {/* <div className="pb-6 text-center swiper-slide">
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
            </div> */}

            {testimonials.map((testimonials) => {
              return (
                <>
                  <div className="pb-6 text-center swiper-slide">
                    <div className="flow-root px-6 pt-8 bg-white border border-gray-200 rounded-lg">
                      <div className="-mb-6">
                        <blockquote className="text-base">
                          {testimonials.home_page_testimonial}
                        </blockquote>
                        <p className="mt-2 font-medium text-gray-600">
                          {testimonials.home_page_section_title}
                        </p>
                        <div className="w-full mx-auto mt-6">
                          <span className="inline-flex overflow-hidden rounded-full shadow-lg">
                            {/* <img
                              className="inline-block rounded-full h-14 w-14"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=9JeVfFeU2K&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            /> */}
                            {testimonials ? (
                              testimonials.home_page_image?.filePath ? (
                                <img
                                  // className="w-full h-full object-cover"
                                  className="inline-block rounded-full h-14 w-14"
                                  // className="inline-block rounded-full h-14 w-14"
                                  src={`http://localhost:7000${testimonials.home_page_image.filePath}`}
                                  alt={
                                    testimonials.home_page_image.filename ||
                                    "testimonials"
                                  }
                                  loading="lazy"
                                />
                              ) : (
                                <div className="flex items-center justify-center w-full h-full text-gray-500">
                                  <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                              )
                            ) : (
                              <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
                                No Banner
                              </div>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
