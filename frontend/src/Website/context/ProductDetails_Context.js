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
  const [reviews, setReviews] = useState([]);
  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/customer/products/${productId}/reviews`
      );
      setReviews(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
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
        fetchReviews,
        reviews,
        loading,
        /////////////END CUSTOMER REVIEWS ///////////
      }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
};
