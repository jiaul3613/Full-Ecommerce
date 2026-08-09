import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: [],
    Cart: [],
  },
  reducers: {
    productReducer: (state, action) => {
      state.value = action.payload;
    }, 
    // RTK uses Immer under the hood, so you can push directly:
    CartReducer: (state, action) => {
      state.Cart.push(action.payload);
    },   
  }
});

export const { productReducer, CartReducer } = productSlice.actions;
export default productSlice.reducer;