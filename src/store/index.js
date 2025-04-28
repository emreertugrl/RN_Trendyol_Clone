import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './slice/productsSlice';
import categoriesReducer from './slice/categoriesSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});
