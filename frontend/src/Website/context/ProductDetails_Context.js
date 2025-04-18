import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductDetailsContext = createContext();

// custom hook
export const useProductDetails = () => {
  return useContext(ProductDetailsContext);
};

export const ProductDetailProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  return (
    <ProductDetailsContext.Provider
      value={{
        setProductDetails,
        productDetails,
        imagesLoaded,
        setImagesLoaded,
        setLoading,
      }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
};
