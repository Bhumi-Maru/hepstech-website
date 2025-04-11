import React from "react";
import { useHomePageContext } from "../../../../Admin Panel/context/HomepageContext";

export default function HorizontalBannersLarge2Items() {
  const { homePage } = useHomePageContext();

  // Filter all banners with layoutNumber === 8
  const banners = homePage.filter(
    (item) =>
      item.home_page_layout_number.layoutNumber === 8 &&
      item.home_page_status === "published"
  );

  return (
    <>
      {/* <!-- HORIZONTAL BANNERS - LARGE - 2 ITEMS --> */}
      <section className="section-banner">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[0, 1].map((index) => {
              const banner = banners[index];

              return (
                <div
                  key={index}
                  className="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg aspect-w-16 aspect-h-8"
                >
                  {banner ? (
                    banner.home_page_image?.filePath ? (
                      <img
                        className="w-full h-full object-cover"
                        // className="w-full h-full"
                        src={`http://localhost:7000${banner.home_page_image.filePath}`}
                        alt={banner.home_page_image.filename || "Banner"}
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
