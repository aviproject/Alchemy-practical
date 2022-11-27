import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from './constant'


export const addProduct = (data) =>{
    // console.log(data,"%%%%%%%%%%")
    return {
        type:ADD_PRODUCT,
        productData : data
    }
}

export const deleteProduct = (product_id) =>{
    console.log(product_id,"in delete action")
    return {
        type:DELETE_PRODUCT,
        productId:product_id
    }
}

export const editProduct = (data) =>{
    console.log("in edit action","%%%%%%%%%%")
    return {
        type:EDIT_PRODUCT,
        editProduct : data
    }
}