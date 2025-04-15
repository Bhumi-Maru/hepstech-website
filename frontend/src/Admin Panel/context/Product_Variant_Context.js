import { createContext, useContext, useState } from "react";

export const ProductVariantContext = createContext();

export const useProductVariantContext = () => {
  return useContext(ProductVariantContext);
};

export const ProductVariantProvider = ({ children }) => {
  const [colors, setColors] = useState([]);
  const [options, setOptions] = useState([]);
  const [variants, setVariants] = useState([]);
  const [isEditingColor, setIsEditingColor] = useState(false);
  const [nextVariantId, setNextVariantId] = useState(1);
  const [newColor, setNewColor] = useState({
    name: "",
    hex: "#000000",
    _id: null,
  });

  const addColor = () => {
    if (!newColor.name.trim()) {
      alert("Please enter a color name");
      return;
    }

    const nameExists = colors.some(
      (color) =>
        color.name.toLowerCase() === newColor.name.toLowerCase() &&
        (!isEditingColor || color._id !== newColor._id)
    );

    if (nameExists) {
      alert("Color with this name already exists");
      return;
    }

    if (isEditingColor) {
      setColors(
        colors.map((color) => (color._id === newColor._id ? newColor : color))
      );
    } else {
      setColors([
        ...colors,
        {
          ...newColor,
          _id: newColor._id || Date.now().toString(),
        },
      ]);
    }

    setNewColor({ name: "", hex: "#000000", _id: null });
    setIsEditingColor(false);
  };

  const editColor = (color) => {
    setNewColor(color);
    setIsEditingColor(true);
  };

  const cancelEditColor = () => {
    setNewColor({ name: "", hex: "#000000", _id: null });
    setIsEditingColor(false);
  };

  const removeColor = (colorId) => {
    setColors(colors.filter((color) => color._id !== colorId));
  };

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

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

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

  const removeOptionValue = (optionIndex, valueIndex) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[optionIndex].values = updatedOptions[
        optionIndex
      ].values.filter((_, i) => i !== valueIndex);
      return updatedOptions;
    });
  };

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

  const removeVariant = (id) => {
    setVariants(variants.filter((v) => v.id !== id));
  };

  const handleVariantChange = (id, field, value) => {
    setVariants((prevVariants) =>
      prevVariants.map((variant) =>
        variant.id === id ? { ...variant, [field]: value } : variant
      )
    );
  };

  const updateOptionName = (index, name) => {
    const oldName = options[index].name;
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index].name = name;
      return updatedOptions;
    });

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
        options,
        setOptions,
        variants,
        setVariants,
        isEditingColor,
        setIsEditingColor,
        nextVariantId,
        setNextVariantId,
        newColor,
        setNewColor,
        addColor,
        editColor,
        cancelEditColor,
        removeColor,
        addOption,
        removeOption,
        addOptionValue,
        removeOptionValue,
        addVariant,
        removeVariant,
        handleVariantChange,
        updateOptionName,
      }}
    >
      {children}
    </ProductVariantContext.Provider>
  );
};
