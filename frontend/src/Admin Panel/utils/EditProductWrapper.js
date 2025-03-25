import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/Product_Create_Context";

const EditProductWrapper = ({ children }) => {
  const { id } = useParams();
  const { productId, setProductId, fetchProductData, resetProductForm } =
    useProductContext();

  useEffect(() => {
    if (id) {
      setProductId(id);
      fetchProductData(id);
    } else {
      resetProductForm();
    }
  }, [id, setProductId, fetchProductData, resetProductForm]);

  return children;
};

export default EditProductWrapper;
