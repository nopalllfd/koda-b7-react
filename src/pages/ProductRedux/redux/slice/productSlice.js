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
      state.products.push(payload);
    },
    removeProduct: (state, { payload }) => {
      console.log(payload.id);
      state.products = state.products.filter((product) => product.id !== payload.id);
    },
    updateProduct: (state, { payload }) => {
      const oldData = state.products.filter((product) => product.id == payload.id);
      console.log(oldData);
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});

export const { addProduct, removeProduct, updateProduct, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
