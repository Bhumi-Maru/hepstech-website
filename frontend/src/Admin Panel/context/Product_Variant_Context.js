// Product_Variant_Context.jsx
import { createContext, useContext, useState } from "react";

export const ProductVariantContext = createContext();

export const useProductVariantContext = () => {
  return useContext(ProductVariantContext);
};

export const ProductVariantProvider = ({ children }) => {
  const [colors, setColors] = useState([]);
  const [options, setOptions] = useState([]);
  const [variants, setVariants] = useState([]);
  const [nextVariantId, setNextVariantId] = useState(1);
  const [newColor, setNewColor] = useState({ name: "", hex: "#000000" }); // Add this line

  // Add a new color
  const addColor = () => {
    if (!newColor.name.trim()) {
      alert("Please enter a color name");
      return;
    }
    // Check if color already exists
    if (
      colors.some(
        (color) => color.name.toLowerCase() === newColor.name.toLowerCase()
      )
    ) {
      alert("Color with this name already exists");
      return;
    }
    setColors([...colors, newColor]);
    setNewColor({ name: "", hex: "#000000" });
  };

  const removeColor = (index) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  // Add a new option
  const addOption = () => {
    if (options.length >= 3) {
      alert("You can only add up to 3 options");
      return;
    }
    setOptions([
      ...options,
      { name: `Option ${options.length + 1}`, values: [] },
    ]);
  };

  // Remove an option
  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  // Add a value to an option
  const addOptionValue = (optionIndex, value) => {
    if (!value.trim()) return;

    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      if (!updatedOptions[optionIndex].values.includes(value)) {
        updatedOptions[optionIndex].values = [
          ...updatedOptions[optionIndex].values,
          value,
        ];
      }
      return updatedOptions;
    });
  };

  // Remove a value from an option
  const removeOptionValue = (optionIndex, valueIndex) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[optionIndex].values = updatedOptions[
        optionIndex
      ].values.filter((_, i) => i !== valueIndex);
      return updatedOptions;
    });
  };

  // Add a new variant
  const addVariant = () => {
    const newVariant = {
      id: nextVariantId,
      color: colors[0]?.name || "",
      option1: options[0]?.values[0] || "",
      option2: options[1]?.values[0] || "",
      option3: options[2]?.values[0] || "",
      mrpPrice: "",
      sellingPrice: "",
      sku: "",
      quantity: "",
      image: null,
    };
    setVariants([...variants, newVariant]);
    setNextVariantId(nextVariantId + 1);
  };

  // Remove a variant
  const removeVariant = (id) => {
    setVariants(variants.filter((v) => v.id !== id));
  };

  // Handle variant field changes
  const handleVariantChange = (id, field, value) => {
    setVariants((prevVariants) =>
      prevVariants.map((variant) =>
        variant.id === id ? { ...variant, [field]: value } : variant
      )
    );
  };

  // Update option name
  const updateOptionName = (index, name) => {
    const oldName = options[index].name;
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index].name = name;
      return updatedOptions;
    });

    // Update variant attributes if option name changed
    if (oldName && oldName !== name) {
      setVariants((prevVariants) =>
        prevVariants.map((variant) => {
          const updatedVariant = { ...variant };
          if (updatedVariant.option1 === oldName) updatedVariant.option1 = name;
          if (updatedVariant.option2 === oldName) updatedVariant.option2 = name;
          if (updatedVariant.option3 === oldName) updatedVariant.option3 = name;
          return updatedVariant;
        })
      );
    }
  };

  return (
    <ProductVariantContext.Provider
      value={{
        colors,
        setColors,
        addColor,
        removeColor,
        options,
        setOptions,
        addOption,
        removeOption,
        addOptionValue,
        removeOptionValue,
        updateOptionName,
        variants,
        setVariants,
        addVariant,
        removeVariant,
        handleVariantChange,
        newColor, // Add this
        setNewColor, // Add this
      }}
    >
      {children}
    </ProductVariantContext.Provider>
  );
};
