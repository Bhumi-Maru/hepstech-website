// useHomepageHelpers.js
import { useHomePageContext } from "../context/HomepageContext";
import axios from "axios";

// Custom hook
export const useHomepageHelpers = () => {
  const { setError, setLoading, setProductByMain, setProducts } =
    useHomePageContext();

  const fetchProductsByMainCategory = async (mainCategoryId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:7000/api/homepage/products/main-category/${mainCategoryId}`
      );
      setProducts(response.data.products);
      setProductByMain(response.data.products);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getDisplayPrice = (product) => {
    if (
      product.productType === "variant" &&
      Array.isArray(product.productVariants) &&
      product.productVariants.length > 0
    ) {
      const variant = product.productVariants[0];
      return {
        sellingPrice: variant.sellingPrice,
        mrpPrice: variant.mrpPrice,
      };
    } else {
      return {
        sellingPrice: product.pricing?.sellingPrice || 0,
        mrpPrice: product.pricing?.mrpPrice || 0,
      };
    }
  };

  return { fetchProductsByMainCategory, getDisplayPrice };
};
