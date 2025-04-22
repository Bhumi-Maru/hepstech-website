import React, { useEffect, useState } from "react";
import { useHomePageContext } from "../../../../Admin Panel/context/HomepageContext";

export default function CategorySlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const { homePage } = useHomePageContext();

  useEffect(() => {
    if (window.Swiper) {
      const swiper = new window.Swiper(".swiper-category-eight", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-nex.swiper-button-category-eight",
          prevEl: ".swiper-button-prev.swiper-button-category-eight",
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

  // Filter layout 2
  const banners = homePage.filter(
    (item) => item.home_page_layout_number?.layoutNumber === 2
  );

  return (
    <section className="section-slider">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Shop by Category</h2>
          <div class="relative flex items-center space-x-4">
            <div
              class="swiper-button-prev swiper-button-custom swiper-button-category-eight swiper-button-disabled"
              tabindex="-1"
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-edf5cdbbca178d20"
              aria-disabled="true"
            ></div>
            <div
              class="swiper-button-next swiper-button-custom swiper-button-category-eight"
              tabindex="0"
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-edf5cdbbca178d20"
              aria-disabled="false"
            ></div>
          </div>
        </div>

        <div className="mt-3 swiper-container swiper-category-eight">
          <div className="swiper-wrapper">
            {banners.map((item, index) => {
              console.log("iiiii", item);
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

      <style jsx>{`
        .category-slide {
          width: 130px !important;
          margin-right: 20px;
        }
      `}</style>
    </section>
  );
}
