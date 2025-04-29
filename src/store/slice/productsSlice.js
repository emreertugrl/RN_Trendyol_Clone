import {createSlice} from '@reduxjs/toolkit';
import {getAllProducts, getProductDetail} from '../actions/productsActions';

const initialState = {
  products: [],
  bestSellerProducts: [],
  forYouProducts: [],
  product: {},
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
        if (action.meta.arg.category === "men's clothing") {
          state.bestSellerProducts = action.payload;
        }
        if (action.meta.arg.category === "women's clothing") {
          state.forYouProducts = action.payload;
        }
      })
      .addCase(getProductDetail.pending, state => {
        state.pending = true;
        state.product = {};
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.pending = false;
        state.product = action.payload;
      });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
