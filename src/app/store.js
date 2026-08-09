import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counterSlice';
import CartReducer from '../slicer/Product';

const store = configureStore({
  reducer: {
    cart: CartReducer, 
    
  }
});


export default store;


