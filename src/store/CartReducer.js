
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showCart : false,
    notification : null,
}
const CartSlices = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        cartHandler : (state)=>{state.showCart = !state.showCart},
        showNotification :(state, action)=>{
            state.notification= {
                status :action.payload.status,
                message: action.payload.message,
                title: action.payload.title,
            }

        }
    }
})
export const CartSlicesAction = CartSlices.actions;
export default CartSlices.reducer;