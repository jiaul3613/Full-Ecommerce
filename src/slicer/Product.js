import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    value: [],
    Cart: localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : []
  },

  reducers: {
    productReducer: (state, action) => {
      state.value = action.payload;
    }, 
    cardReducer: (state, action) => {
      let exist = state.Cart.find((item)=>item.id== action.payload.id)
      if (!exist){
        state.Cart= [...state.Cart, action.payload]
        localStorage.setItem('Cart', JSON.stringify(state.Cart))
      }
    },
    } 

});

// 🔑 Option A: Export `addToCart` AND alias it as `CartReducer` so both work:
export const { productReducer , cardReducer } = productSlice.actions;

export default productSlice.reducer;