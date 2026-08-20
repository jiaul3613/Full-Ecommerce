import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slicer/Product';

const store = configureStore({
  reducer: {
    shop: productReducer, // Access via state.shop.products, state.shop.cart, state.shop.fav
  }
});

export default store;