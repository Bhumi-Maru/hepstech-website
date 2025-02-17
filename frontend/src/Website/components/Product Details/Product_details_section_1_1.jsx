import React, { useEffect, useState } from "react";

export default function Product_details_section_1_1() {
  const images = [
    "nature-1.jpg",
    "nature-2.jpg",
    "nature-3.jpg",
    "nature-4.jpg",
    "nature-1.jpg",
    "nature-2.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]); // Set default main image

  useEffect(() => {
    let xzoomScript;

    const loadJQuery = () => {
      const script = document.createElement("script");
      script.src = "https://code.jquery.com/jquery-3.6.0.min.js"; // Use a CDN link for jQuery
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    const loadXZoom = () => {
      xzoomScript = document.createElement("script");
      xzoomScript.src = "../website assets/plugins/xzoom/xzoom.min.js"; // Ensure the correct path
      xzoomScript.async = true;
      document.body.appendChild(xzoomScript);
      return xzoomScript;
    };

    // Load jQuery and then xZoom
    const jqueryScript = loadJQuery();
    jqueryScript.onload = () => {
      const xzoomScript = loadXZoom();
      xzoomScript.onload = () => {
        // Initialize xZoom after both scripts are loaded
        if (window.jQuery) {
          window.$(".xzoom").xzoom({
            zoomWidth: 400,
            title: true,
            tint: false,
            Xoffset: 15,
          });
        }
      };
    };

    return () => {
      // Cleanup scripts on unmount
      if (jqueryScript && jqueryScript.parentNode) {
        document.body.removeChild(jqueryScript);
      }
      if (xzoomScript && xzoomScript.parentNode) {
        document.body.removeChild(xzoomScript);
      }
    };
  }, []);

  useEffect(() => {
    // Reinitialize xZoom when the selected image changes
    if (window.jQuery) {
      setTimeout(() => {
        window.$(".xzoom").xzoom({
          zoomWidth: 400,
          title: true,
          tint: false,
          Xoffset: 15,
        });
      }, 100); // Timeout to ensure the image is loaded
    }
  }, [selectedImage]);

  useEffect(() => {
    // Load Swiper JS script dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/swiper/swiper-bundle.min.js"; // CDN for Swiper JS
    script.async = true;
    script.onload = () => {
      // Initialize Swiper for thumbnail navigation once the script loads
      new window.Swiper(".gallery-thumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next", // Link to the next button
          prevEl: ".swiper-button-prev", // Link to the previous button
        },
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <>
      {/* PRODUCT DETAILS SECTION */}
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
                  src={`../website assets/images/${selectedImage}`}
                  xoriginal={`../website assets/images/${selectedImage}`}
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
                    onClick={() => setSelectedImage(img)} // Set selected image on click
                  >
                    <img
                      src={`../website assets/images/${img}`}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="swiper-button-next swiper-button-custom swiper-button-inside swiper-button-thumbnails"></div>
          </div>
        </div>
      </div>
    </>
  );
}
