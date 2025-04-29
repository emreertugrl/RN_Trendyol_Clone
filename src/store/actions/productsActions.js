import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {ALL_PRODUCTS, CATEGORY} from '../../service/urls';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async params => {
    let url = params.category ? `${CATEGORY}/${params.category}` : ALL_PRODUCTS;
    const response = await getRequest(url, params);
    return response.data;
  },
);

export const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  async params => {
    let url = `${ALL_PRODUCTS}/${params}`;
    const response = await getRequest(url);
    return response.data;
  },
);
