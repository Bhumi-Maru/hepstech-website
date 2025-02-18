import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // PRODUCT QUANTITY
  const [quantity, setQuantity] = useState(1);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
