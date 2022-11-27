import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "./constant";

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    productData: data,
  };
};

export const deleteProduct = (product_id) => {
  return {
    type: DELETE_PRODUCT,
    productId: product_id,
  };
};

export const editProduct = (data) => {
  return {
    type: EDIT_PRODUCT,
    editProduct: data,
  };
};
