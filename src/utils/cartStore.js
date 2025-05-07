import { createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({
  name: "cart",
  initialState: {
    items: [],
    addItems: false,
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    showAddItems: (state) => {
      state.addItems = !state.addItems;
    },
  },
});

export const { addItems, removeItems, clearCart, showAddItems } =
  cartStore.actions;

export default cartStore.reducer;
