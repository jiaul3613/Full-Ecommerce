import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slicer/Product'; // Default export is the slice reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // State will be available as state.cart
  }
});

export default store;
