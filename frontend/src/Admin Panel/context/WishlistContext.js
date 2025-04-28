import React, { createContext, useState, useContext, useEffect } from "react";
import { useProductDetails } from "../../Website/context/ProductDetails_Context";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { productDetails } = useProductDetails();
  const [wishlist, setWishlist] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      // Check if product already exists in wishlist
      const exists = prev.some(
        (item) =>
          item.id === product.id &&
          (!product.variant ||
            item.variant?.variantId === product.variant?.variantId)
      );
      if (exists) {
        return prev;
      }
      const newWishlist = [...prev, product];
      return newWishlist;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const getCurrentPricing = () => {
    if (selectedVariant) {
      return {
        mrpPrice: selectedVariant.mrpPrice,
        sellingPrice: selectedVariant.sellingPrice,
      };
    }
    return { mrpPrice: 0, sellingPrice: 0 };
  };

  const { mrpPrice, sellingPrice } = getCurrentPricing();

  const handleAddToWishlist = () => {
    if (!productDetails) return;

    // Function to properly format image URLs for frontend
    const formatImageUrl = (imagePath) => {
      if (!imagePath) return "";
      // If it's already a URL, return as is
      if (imagePath.startsWith("http")) return imagePath;
      // Extract just the filename
      const filename = imagePath.split(/[\\/]/).pop();
      // Construct proper URL (adjust based on your backend)
      return `/uploads/${filename}`;
      // Or if using absolute URLs:
      // return `${process.env.REACT_APP_API_URL}/uploads/${filename}`;
    };

    const variantDetails = selectedVariant
      ? {
          variantId: selectedVariant._id,
          attributes: selectedVariant.variantAttributes.reduce((acc, attr) => {
            acc[attr.name.toLowerCase()] = attr.value;
            return acc;
          }, {}),
          sku: selectedVariant.sku,
        }
      : null;

    const productToAdd = {
      id: productDetails._id,
      title: productDetails.productTitle,
      price: sellingPrice,
      oldPrice: mrpPrice,
      imageUrl: formatImageUrl(productDetails.productMainImage),
      rating: 4,
      variant: variantDetails,
      color: selectedColor,
      size: selectedSize,
      productType: productDetails.productType,
      stock: selectedVariant?.quantity || 0,
    };

    console.log("Adding product to wishlist:", productToAdd);
    addToWishlist(productToAdd);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        handleAddToWishlist,
        selectedVariant,
        setSelectedVariant,
        selectedColor,
        setSelectedColor,
        getCurrentPricing,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
