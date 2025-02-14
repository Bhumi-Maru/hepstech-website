import React from "react";

export default function HorizontalBannersLarge2Items() {
  return (
    <>
      {/* <!-- HORIZONTAL BANNERS - LARGE - 2 ITEMS --> */}
      <section className="section-banner">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg aspect-w-16 aspect-h-8">
              <img
                className="object-cover w-full h-full"
                src=""
                alt=""
                loading="lazy"
              />
            </div>

            <div className="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg aspect-w-16 aspect-h-8">
              <img
                className="object-cover w-full h-full"
                src=""
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
