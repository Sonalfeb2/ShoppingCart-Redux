import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import CartItemReducer from "./CartItemReducer";
const store = configureStore({
    reducer:{cart:CartReducer,cartItem: CartItemReducer}
})
export default store;