import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {ALL_PRODUCTS} from '../../service/urls';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const response = await getRequest(ALL_PRODUCTS);
    return response.data;
  },
);
