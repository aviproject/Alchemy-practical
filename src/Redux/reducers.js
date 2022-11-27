import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "./constant";

const initialState = {
  productList: []
}
export const cartItems = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_PRODUCT:{ 
      const  productList= state.productList.concat(action.productData);
      return {...state,productList}
    }

    case EDIT_PRODUCT:{
      const  editIndex= state.productList.findIndex((f) => f?.product_id === action?.editProduct?.product_id);
      state?.productList.splice(editIndex,1,action?.editProduct)
      return {
        ...state,
        productList:state?.productList
      }
    }
    case DELETE_PRODUCT : {
      const updatedData = state?.productList?.filter((i) => i?.product_id !== action?.productId)
        return {...state,productList:updatedData}
    }
    default:
      return state;
  }
};
