import { ADD_TO_CART } from "./constant";

export const cartItems = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      // console.log("reducer called", action.data);
      return [...data, action.data];
    }
    default:
      return data;
  }
};
