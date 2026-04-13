import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 0,
      name: 'Cheetos',
      qty: 12,
      category: 'Foods',
    },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      console.log(payload);
      setTimeout(() => {
        state.products.push(payload);
      }, 1000);
    },
    removeProduct: (state, { payload }) => {
      console.log(payload.id);
      state.products = state.products.filter((product) => product.id !== payload.id);
    },
    updateProduct: (state, { payload }) => {
      const index = state.products.findIndex((product) => product.id == payload.id);
      state.products[index] = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});

export const { addProduct, removeProduct, updateProduct, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
