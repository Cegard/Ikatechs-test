import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    nextId: 1
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = action.payload;
      cartItem.id = state.nextId;

      state.items.push(action.payload);
      state.nextId += 1;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(({id}) => id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;