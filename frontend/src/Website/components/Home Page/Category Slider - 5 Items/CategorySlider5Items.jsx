import React, { useEffect } from "react";
import { useHomePageContext } from "../../../../Admin Panel/context/HomepageContext";

export default function CategorySlider5Items() {
  const { homePage } = useHomePageContext();

  useEffect(() => {
    // Wait for Swiper to be available globally after the script is loaded
    const swiper = new window.Swiper(".swiper-category-five", {
      slidesPerView: 5, // Display 5 items at once
      spaceBetween: 16,
      autoplay: {
        delay: 2500, // Time in milliseconds between each slide change
        disableOnInteraction: false, // Ensure autoplay doesn't stop when interacting with the slider
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next.swiper-button-category-five",
        prevEl: ".swiper-button-prev.swiper-button-category-five",
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
        1024: {
          slidesPerView: 5,
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

  // Filter layout 6 (Category Slider with 5 items)
  const banners = homePage.filter(
    (item) => item.home_page_layout_number?.layoutNumber === 6
  );

  return (
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
          <div className="swiper-wrapper">
            {banners.map((item, index) => {
              const category = item.main_category;
              const imageUrl = item.home_page_image?.filePath
                ? `http://localhost:7000${item.home_page_image.filePath}`
                : null;
              const altText =
                item.home_page_image?.filename ||
                item?.home_page_section_title ||
                "Category";
              const categoryName = item?.home_page_section_title || "Category";
              const categoryLink = item?.slug ? `/category/${item.slug}` : "#";

              return (
                <div
                  key={item._id || index}
                  className="swiper-slide category-slide"
                  role="group"
                  aria-label={`${index + 1} / ${banners.length}`}
                >
                  <a href={categoryLink} title={categoryName} className="block">
                    <div className="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg aspect-w-1 aspect-h-1">
                      {imageUrl ? (
                        <img
                          className="object-cover w-full h-full"
                          src={imageUrl}
                          alt={altText}
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
                      )}
                    </div>
                  </a>
                  <p className="mt-3 text-sm font-medium text-center">
                    <a href={categoryLink} className="hover:text-skin-primary">
                      {categoryName}
                    </a>
                  </p>
                </div>
              );
            })}
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
    </section>
  );
}
