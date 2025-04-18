import React, { useEffect, useState } from "react";
import Product_details_section_1_1 from "./Product_details_section_1_1";
import Product_details_section_1_2 from "./Product_details_section_1_2";
import Product_details_section_1_3 from "./Product_details_section_1_3";
import Size_Chart_Modal from "./Size_Chart_Modal";
import { useGlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useProductDetails } from "../../context/ProductDetails_Context";

export default function Product_Details() {
  const { productId } = useParams();
  const [isSizeChartModalOpen, setIsSizeChartModalOpen] = useState(false);
  const { setIsOfferImageModalOpen, offerType } = useGlobalContext();
  const {
    setProductDetails,
    productDetails,
    imagesLoaded,
    setImagesLoaded,
    setLoading,
  } = useProductDetails();

  useEffect(() => {
    if (offerType === "general") {
      setIsOfferImageModalOpen(true);
    }
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/products/${productId}`
        );
        setProductDetails(response.data);

        // Wait for images to load before initializing xZoom
        const waitForImages = () => {
          const images = document.querySelectorAll(".xzoom");
          let loadedCount = 0;

          if (images.length === 0) {
            setImagesLoaded(true);
            return;
          }

          images.forEach((img) => {
            if (img.complete) {
              loadedCount++;
            } else {
              img.addEventListener("load", () => {
                loadedCount++;
                if (loadedCount === images.length) {
                  setImagesLoaded(true);
                }
              });
            }
          });

          if (loadedCount === images.length) {
            setImagesLoaded(true);
          }
        };

        // Small timeout to ensure DOM is updated with new images
        setTimeout(waitForImages, 100);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  // Initialize xZoom after images are loaded
  useEffect(() => {
    if (imagesLoaded && window.$ && window.$.fn.xzoom) {
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
  }, [imagesLoaded, productDetails]);

  return (
    <>
      <div class="relative grid items-start grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-x-12 xl:gap-x-16">
        <Product_details_section_1_1 productDetails={productDetails} />
        <Product_details_section_1_2
          setIsSizeChartModalOpen={setIsSizeChartModalOpen}
          productDetails={productDetails}
        />
      </div>

      <Product_details_section_1_3 productDetails={productDetails} />

      {/* Size Chart Modal */}
      {isSizeChartModalOpen && (
        <>
          <Size_Chart_Modal
            setIsSizeChartModalOpen={setIsSizeChartModalOpen}
            isSizeChartModalOpen={isSizeChartModalOpen}
          />
        </>
      )}
    </>
  );
}
