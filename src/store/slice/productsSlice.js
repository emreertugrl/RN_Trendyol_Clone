import {createSlice} from '@reduxjs/toolkit';
import {getAllProducts} from '../actions/productsActions';

const initialState = {
  products: [],
  pending: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.pending = true;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.products = action.payload;
      });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
