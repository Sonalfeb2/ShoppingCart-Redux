import { createSlice } from "@reduxjs/toolkit";
const CartItemSlice = createSlice({
  name: "cartItem",
  initialState: {
    items: [],
    totalQuantity: 0,
    isChanged: false,
  },
  reducers: {
    replaceCartData: (state,action)=>{
        state.items = action.payload.items;
        state.totalQuantity = action.payload.totalQuantity
    },
    addNewItem: (state, action) => {
        state.isChanged = true;
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.totalQuantity = state.items.length
    },
    removeItem: (state, action) => {
        state.isChanged = true;
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalQuantity = state.items.length
    }
  }
});
export const CartItemAction = CartItemSlice.actions;
export default CartItemSlice.reducer;
