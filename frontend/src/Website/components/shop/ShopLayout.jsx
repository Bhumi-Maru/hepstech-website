import React from "react";
import Shop_Section_1 from "./Shop_Section_1";
import Shop_Section_2 from "./Shop_Section_2";
import { useGlobalContext } from "../../context/GlobalContext";
import Offer_Image from "../Home Page/Offer Image/Offer_Image";

export default function ShopLayout({ setIsAddToCartModal }) {
  const {
    isOfferImageModalOpen,
    setIsOfferImageModalOpen,
    setHasOfferImage,
    hasOfferImage,
    shopOfferType, // ✅ Get offerType from Global Context
  } = useGlobalContext();

  return (
    <>
      {/* Display Offer Image Modal */}
      {isOfferImageModalOpen && hasOfferImage && (
        <Offer_Image
          isOfferImageModalOpen={isOfferImageModalOpen}
          setIsOfferImageModalOpen={setIsOfferImageModalOpen}
          setHasOfferImage={setHasOfferImage}
        />
      )}

      {/* Display Offer Image in Shop Page if offerType is "general" */}
      {shopOfferType === "general" && hasOfferImage && <Offer_Image />}

      <Shop_Section_1 />
      <Shop_Section_2 setIsAddToCartModal={setIsAddToCartModal} />
    </>
  );
}
