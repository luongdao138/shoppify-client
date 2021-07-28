import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '../api/axiosClient';

interface ProductDetail {
  name: string;
  _id: string;
  note?: string;
  image?: string;
  __v: number;
  category: {
    name: string;
    _id: string;
  };
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

interface StateType {
  detail: ProductDetail;
  loading: boolean;
  error: null | string;
  canShow: boolean;
}

const initialState: StateType = {
  detail: {} as ProductDetail,
  loading: true,
  error: null,
  canShow: false,
};

export const getProductDetail = createAsyncThunk(
  'product_detail/fetch',
  async ({ product_id }: { product_id: string }) => {
    const res = await axiosClient.get(`/products/${product_id}`);
    return res.data;
  }
);

const productDetailSlice = createSlice({
  name: 'product_detail',
  initialState,
  reducers: {
    show: (state) => {
      state.canShow = true;
    },
    disappear: (state) => {
      state.canShow = false;
    },
  },
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      state.loading = true;
    },
    [getProductDetail.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ProductDetail>
    ) => {
      state.loading = false;
      state.detail = payload;
      state.error = null;
    },
    [getProductDetail.rejected.type]: (state) => {
      state.loading = false;
      state.error = 'Can not fetch product detail';
    },
  },
});

export const { show, disappear } = productDetailSlice.actions;
export default productDetailSlice.reducer;
