import {createSlice} from '@reduxjs/toolkit';
import {getAllCategories} from '../actions/categoriesActions';

const initialState = {
  categories: [],
  selectedCategory: '',
  pending: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.pending = false;
        state.categories = action.payload;
      });
  },
});

export const {setCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;
