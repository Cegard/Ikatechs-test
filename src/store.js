import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart/cartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer
  },
})