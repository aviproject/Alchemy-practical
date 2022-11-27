import { ADD_PRODUCT } from "../constant";

export const productItems = (data = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:{
      // console.log(action.productData,"OOOOOOOO")
      return [...data,action.productData]
    }
    default:
      return data;
  }
};
