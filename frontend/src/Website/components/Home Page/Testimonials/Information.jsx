import React from "react";
import { useHomePageContext } from "../../../../Admin Panel/context/HomepageContext";

export default function Information() {
  const { homePage } = useHomePageContext();

  // Filter all items with layoutNumber === 24
  const infoBlocks = homePage.filter(
    (item) => item?.home_page_layout_number?.layoutNumber === 24
  );

  return (
    <section className="py-8 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {infoBlocks.map((info, index) => (
            <div className="flex items-start" key={index}>
              {info?.home_page_image?.filePath ? (
                <img
                  className="inline-block rounded-full h-14 w-14 object-cover"
                  src={`http://localhost:7000${info.home_page_image.filePath}`}
                  alt={info.home_page_image.filename || "information"}
                  loading="lazy"
                />
              ) : (
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-200 text-gray-500">
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
              <div className="ml-4">
                <p className="font-medium">
                  {info?.home_page_section_title || "No Title"}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {info?.home_page_testimonial || "No description available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
