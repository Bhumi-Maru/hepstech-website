import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // PRODUCT QUANTITY
  const [quantity, setQuantity] = useState(1);

  // offer image modal
  const [isOfferImageModalOpen, setIsOfferImageModalOpen] = useState(false);
  const [hasOfferImage, setHasOfferImage] = useState(false);
  const [shopOfferType, setShopOfferType] = useState("");

  useEffect(() => {
    setIsOfferImageModalOpen(true);
  }, []);

  // Increment function
  const increment = () => setQuantity((prev) => prev + 1);

  // Decrement function (Prevent going below 0)
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <GlobalContext.Provider
      value={{
        quantity,
        increment,
        decrement,
        isOfferImageModalOpen,
        setIsOfferImageModalOpen,
        hasOfferImage,
        setHasOfferImage,
        shopOfferType, // ✅ Provide it to context
        setShopOfferType, // ✅ Add setter
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
