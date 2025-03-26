import { createContext, useContext, useState } from "react";

// Create context
export const ProductVariantContext = createContext();

// Make a hook that returns the context
export const useProductVariantContext = () => {
  const context = useContext(ProductVariantContext);
  if (!context) {
    throw new Error(
      "useProductVariantContext must be used within a ProductVariantProvider"
    );
  }
  return context;
};

// Create the provider component
export const ProductVariantProvider = ({ children }) => {
  // State for storing added options (max 3)
  const [options, setOptions] = useState([
    { name: "Option 1", values: ["LG", "XL", "XXL"] },
  ]);

  // State for color options
  const [colors, setColors] = useState([
    { name: "Black", hex: "#000000" },
    { name: "Orange", hex: "#F97316" },
  ]);
  const [newColor, setNewColor] = useState({ name: "", hex: "#000000" });

  // State for variants
  const [variants, setVariants] = useState([
    {
      id: 1,
      color: "Black",
      option1: "LG",
      option2: "",
      option3: "",
      mrpPrice: "",
      sellingPrice: "",
      sku: "",
      quantity: "",
      image: null,
    },
  ]);

  // Function to add a new option
  const addOption = () => {
    if (options.length < 3) {
      setOptions([
        ...options,
        { name: `Option ${options.length + 1}`, values: [] },
      ]);
    }
  };

  // Function to remove an option
  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  // Function to add a value to an option
  const addOptionValue = (optionIndex, value) => {
    if (value.trim() === "") return;

    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[optionIndex].values = [
        ...updatedOptions[optionIndex].values,
        value,
      ];
      return updatedOptions;
    });
  };

  // Function to remove a value from an option
  const removeOptionValue = (optionIndex, valueIndex) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[optionIndex].values = updatedOptions[
        optionIndex
      ].values.filter((_, i) => i !== valueIndex);
      return updatedOptions;
    });
  };

  // Function to add a new color
  const addColor = () => {
    if (newColor.name.trim() === "") return;

    setColors((prevColors) => [...prevColors, { ...newColor }]);
    setNewColor({ name: "", hex: "#000000" });
  };

  // Function to remove a color
  const removeColor = (index) => {
    setColors((prevColors) => prevColors.filter((_, i) => i !== index));
  };

  // Function to add a new variant
  const addVariant = () => {
    setVariants((prevVariants) => [
      ...prevVariants,
      {
        id: prevVariants.length + 1,
        color: colors[0]?.name || "",
        option1: options[0]?.values[0] || "",
        option2: options[1]?.values[0] || "",
        option3: options[2]?.values[0] || "",
        mrpPrice: "",
        sellingPrice: "",
        sku: "",
        quantity: "",
        image: null,
      },
    ]);
  };

  // Function to remove a variant
  const removeVariant = (id) => {
    setVariants((prevVariants) => prevVariants.filter((v) => v.id !== id));
  };

  // Function to handle variant field changes
  const handleVariantChange = (id, field, value) => {
    setVariants((prevVariants) =>
      prevVariants.map((variant) =>
        variant.id === id ? { ...variant, [field]: value } : variant
      )
    );
  };

  return (
    <ProductVariantContext.Provider
      value={{
        handleVariantChange,
        removeVariant,
        addVariant,
        variants,
        setNewColor,
        newColor,
        addColor,
        colors,
        removeColor,
        removeOption,
        addOptionValue,
        removeOptionValue,
        options,
        addOption,
      }}
    >
      {children}
    </ProductVariantContext.Provider>
  );
};
