import {ADD_PRODUCT, ADD_TO_CART} from './constant'

export const addtoCart = (data) =>{
    // console.log("actions called",data)
    return{
        type:ADD_TO_CART,
        data
    }
}

export const addProduct = (data) =>{
    // console.log(data,"%%%%%%%%%%")
    return {
        type:ADD_PRODUCT,
        productData : data
    }
}