import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {ALL_CATEGORIES} from '../../service/urls';

export const getAllCategories = createAsyncThunk(
  'categories/getAllCategories',
  async () => {
    const response = await getRequest(ALL_CATEGORIES);
    return response.data;
  },
);
