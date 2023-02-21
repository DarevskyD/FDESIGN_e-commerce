import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import toggleReducer from '../slices/toggleSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    toggle: toggleReducer,
  },
});
