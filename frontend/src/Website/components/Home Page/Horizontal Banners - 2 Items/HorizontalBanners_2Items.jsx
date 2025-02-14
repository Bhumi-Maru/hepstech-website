import React from "react";

export default function HorizontalBanners_2Items() {
  return (
    <>
      {/* <!-- HORIZONTAL BANNERS - 2 ITEMS --> */}
      <section class="section-banner">
        <div class="container">
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg aspect-w-16 aspect-h-5">
              <img
                class="object-cover w-full h-full"
                src=""
                alt=""
                loading="lazy"
              />
            </div>

            <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-lg aspect-w-16 aspect-h-5">
              <img
                class="object-cover w-full h-full"
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
