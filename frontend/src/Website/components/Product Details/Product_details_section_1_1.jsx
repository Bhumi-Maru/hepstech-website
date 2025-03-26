import React, { useEffect, useState } from "react";

export default function Product_details_section_1_1() {
  const images = [
    "nature-1.jpg",
    "nature-2.jpg",
    "nature-3.jpg",
    "nature-4.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [xZoomLoaded, setXZoomLoaded] = useState(false);
  const [jQueryLoaded, setJQueryLoaded] = useState(false);

  // Correct image path handling
  const getImagePath = (imageName) => {
    return `/website_assets/images/${imageName}`;
  };

  useEffect(() => {
    // Load jQuery if not already loaded
    if (!window.jQuery) {
      const jqueryScript = document.createElement("script");
      jqueryScript.src = "https://code.jquery.com/jquery-3.6.1.min.js";
      jqueryScript.async = true;
      jqueryScript.onload = () => setJQueryLoaded(true);
      jqueryScript.onerror = () => console.error("jQuery failed to load");
      document.body.appendChild(jqueryScript);

      return () => {
        if (jqueryScript.parentNode) {
          document.body.removeChild(jqueryScript);
        }
      };
    } else {
      setJQueryLoaded(true);
    }
  }, []);

  useEffect(() => {
    // Load xZoom after jQuery is loaded
    if (jQueryLoaded && !window.$.fn.xzoom) {
      const xzoomScript = document.createElement("script");
      xzoomScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/xzoom/1.0.15/xzoom.min.js";
      xzoomScript.async = true;
      xzoomScript.onload = () => setXZoomLoaded(true);
      xzoomScript.onerror = () => console.error("xZoom failed to load");
      document.body.appendChild(xzoomScript);

      return () => {
        if (xzoomScript.parentNode) {
          document.body.removeChild(xzoomScript);
        }
      };
    }
  }, [jQueryLoaded]);

  useEffect(() => {
    // Initialize xZoom when both libraries are loaded
    if (xZoomLoaded && jQueryLoaded) {
      try {
        window.$(".xzoom").xzoom({
          zoomWidth: 400,
          title: true,
          tint: false,
          Xoffset: 15,
        });
      } catch (error) {
        console.error("Error initializing xZoom:", error);
      }
    }
  }, [xZoomLoaded, jQueryLoaded, selectedImage]);

  useEffect(() => {
    // Initialize Swiper
    const swiperScript = document.createElement("script");
    swiperScript.src =
      "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";
    swiperScript.async = true;
    swiperScript.onload = () => {
      new window.Swiper(".gallery-thumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    };
    document.body.appendChild(swiperScript);

    return () => {
      if (swiperScript.parentNode) {
        document.body.removeChild(swiperScript);
      }
    };
  }, []);

  return (
    <div className="lg:sticky lg:left-0 lg:col-span-2 lg:top-24">
      <div className="product-carousel">
        {/* Main Image Section */}
        <div className="swiper-container gallery-top">
          <div className="status-badge lg sale">Sale</div>
          <div
            className="swiper-wrapper xzoom-container"
            style={{ height: "450px" }}
          >
            <div className="bg-white swiper-slide">
              <img
                className="xzoom"
                src={getImagePath(selectedImage)}
                xoriginal={getImagePath(selectedImage)}
                alt="Main Product"
              />
            </div>
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="relative">
          <div className="swiper-button-prev swiper-button-custom swiper-button-inside swiper-button-thumbnails"></div>
          <div className="swiper-container gallery-thumbs">
            <div className="swiper-wrapper">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="bg-white swiper-slide cursor-pointer"
                  style={{ height: "100px", width: "100px" }}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={getImagePath(img)} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-button-next swiper-button-custom swiper-button-inside swiper-button-thumbnails"></div>
        </div>
      </div>
    </div>
  );
}
