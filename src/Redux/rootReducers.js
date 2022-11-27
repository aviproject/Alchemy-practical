
import {combineReducers} from 'redux'
import { productItems } from './product/product.reducer'
import {cartItems} from './reducers' 

export default combineReducers({
    cartData : cartItems,
    productItems : productItems
})