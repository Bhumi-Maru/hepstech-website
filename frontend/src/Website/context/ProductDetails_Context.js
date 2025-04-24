import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetailsContext = createContext();

// custom hook
export const useProductDetails = () => {
  return useContext(ProductDetailsContext);
};

export const ProductDetailProvider = ({ children }) => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  ////////////////////////////START CUSTOMER REVIEWS //////////////////////////

  ////////////////////////////END CUSTOMER REVIEWS ////////////////////////////

  return (
    <ProductDetailsContext.Provider
      value={{
        setProductDetails,
        productDetails,
        imagesLoaded,
        setImagesLoaded,
        setLoading,

        ////////START CUSTOMER REVIEWS //////////////
        loading,
        /////////////END CUSTOMER REVIEWS ///////////
      }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
};
