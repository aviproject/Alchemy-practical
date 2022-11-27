import { ADD_PRODUCT } from './constant'

export const addProduct = (data) =>{
    // console.log(data,"%%%%%%%%%%")
    return {
        type:ADD_PRODUCT,
        productData : data
    }
}