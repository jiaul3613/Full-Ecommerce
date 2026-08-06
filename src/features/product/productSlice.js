import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  selectedProduct: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Action to set the products array (e.g., after fetching from an API)
    setProducts: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    },
    // Action to select a specific product details view
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    // Action to update state when a request starts
    setLoading: (state) => {
      state.status = 'loading';
    },
    // Action to clear selection
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }
  },
});


export const { setProducts, setSelectedProduct, setLoading, clearSelectedProduct } = productSlice.actions;


export default productSlice.reducer;
