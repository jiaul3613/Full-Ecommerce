import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cart: localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : [],
    fav: localStorage.getItem('Fav') ? JSON.parse(localStorage.getItem('Fav')) : [],
  },

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    }, 
    addToCart: (state, action) => {
      const exists = state.cart.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.cart.push(action.payload);
        localStorage.setItem('Cart', JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('Cart', JSON.stringify(state.cart));
    },
    addToFav: (state, action) => {
      const exists = state.fav.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.fav.push(action.payload);
        localStorage.setItem('Fav', JSON.stringify(state.fav));
      }
    },
  } 
});

export const { setProducts, addToCart, removeFromCart, addToFav } = productSlice.actions;

export default productSlice.reducer;