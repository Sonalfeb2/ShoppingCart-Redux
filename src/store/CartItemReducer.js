import { createSlice } from "@reduxjs/toolkit";
const CartItemSlice = createSlice({
    name: 'cartItem',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addNewItem : (state,action)=>{
            const newItem = action.payload;
           const existingItem = state.items.find((item)=>item.id===newItem.id);
           if(!existingItem){
            state.items.push({
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                title: newItem.title
            })
           }
           else{
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.totalPrice + newItem.price
           }
        },
        removeItem: (state,action)=>{
              const id = action.payload;
              const existingItem = state.items.find((item)=>item.id===id);
              if(existingItem.quantity===1){
                state.items = state.items.filter((item)=>item.id!==id);
              }
              else{
                existingItem.quantity--;
              }
        }
    }
})

export const CartItemAction = CartItemSlice.actions;
export default CartItemSlice.reducer;
