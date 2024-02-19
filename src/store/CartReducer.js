
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showCart : false
}
const CartSlices = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        cartHandler : (state)=>{state.showCart = !state.showCart}
    }
})
export const CartSlicesAction = CartSlices.actions;
export default CartSlices.reducer;