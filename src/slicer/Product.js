import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'cart',
  initialState: {
    ProductDtl: null,
    Cart: localStorage.getItem('cart') 
      ? JSON.parse(localStorage.getItem('cart')) 
      : [],
  },
  reducers: {
    setProductDtl: (state, action) => {
      state.ProductDtl = action.payload;
    }, 
    addToCart: (state, action) => {
      state.Cart.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.Cart));
    },   
  }
});

// 🔑 Option A: Export `addToCart` AND alias it as `CartReducer` so both work:
export const { 
  setProductDtl, 
  addToCart, 
  addToCart: CartReducer 
} = productSlice.actions;

export default productSlice.reducer;