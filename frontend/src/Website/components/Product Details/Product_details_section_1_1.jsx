import React, { useEffect, useState } from "react";

export default function Product_details_section_1_1({ productDetails }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [xZoomLoaded, setXZoomLoaded] = useState(false);
  const [jQueryLoaded, setJQueryLoaded] = useState(false);

  // Extract main image and gallery images
  const mainImage = productDetails?.productMainImage;
  const galleryImages = productDetails?.gallery?.galleryImages || [];

  // Set default image to main image on component mount
  useEffect(() => {
    if (mainImage) {
      setSelectedImage(mainImage);
    }
  }, [mainImage]);

  // Helper function to extract filename from path
  const extractFileName = (fullPath) => {
    if (!fullPath) return "";
    return fullPath.split("/").pop();
  };

  // Get complete image URL
  const getImageUrl = (imagePath, isGallery = false) => {
    if (!imagePath) return "";
    const basePath = isGallery
      ? "http://localhost:7000/uploads/gallery/"
      : "http://localhost:7000/uploads/";
    return basePath + extractFileName(imagePath);
  };

  // Load jQuery
  useEffect(() => {
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

  // Load xZoom after jQuery
  useEffect(() => {
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

  // Initialize xZoom when both libraries are loaded
  useEffect(() => {
    if (xZoomLoaded && jQueryLoaded && selectedImage) {
      try {
        // Destroy previous xZoom instance if exists
        if (window.$(".xzoom").data("xzoom")) {
          window.$(".xzoom").xzoom().destroy();
        }

        // Initialize new xZoom
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

  // Initialize Swiper for thumbnails
  useEffect(() => {
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

  // Handle image click from gallery
  const handleGalleryImageClick = (image) => {
    setSelectedImage(image);
  };

  // Reset to main image
  const resetToMainImage = () => {
    setSelectedImage(mainImage);
  };

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
              {selectedImage && (
                <img
                  className="xzoom"
                  src={getImageUrl(selectedImage, selectedImage !== mainImage)}
                  xoriginal={getImageUrl(
                    selectedImage,
                    selectedImage !== mainImage
                  )}
                  alt={productDetails?.productTitle || "Product"}
                />
              )}
            </div>
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="relative">
          <div className="swiper-button-prev swiper-button-custom swiper-button-inside swiper-button-thumbnails"></div>
          <div className="swiper-container gallery-thumbs">
            <div className="swiper-wrapper">
              {/* Main image thumbnail */}
              {mainImage && (
                <div
                  className="bg-white swiper-slide cursor-pointer"
                  style={{ height: "100px", width: "100px" }}
                  onClick={resetToMainImage}
                >
                  <img
                    src={getImageUrl(mainImage)}
                    alt="Main Product"
                    className={`object-cover w-full h-full ${
                      selectedImage === mainImage ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </div>
              )}

              {/* Gallery images thumbnails */}
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="bg-white swiper-slide cursor-pointer"
                  style={{ height: "100px", width: "100px" }}
                  onClick={() => handleGalleryImageClick(img)}
                >
                  <img
                    src={getImageUrl(img, true)}
                    alt={`Gallery ${index + 1}`}
                    className={`object-cover w-full h-full ${
                      selectedImage === img ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
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
