import { ADD_PRODUCT } from "../constant";

export const productItems = (data = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:{
      return [...data,action.productData]
    }
    default:
      return data;
  }
};
