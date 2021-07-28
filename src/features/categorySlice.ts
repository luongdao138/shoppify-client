import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '../api/axiosClient';
import { Category } from './interface';

interface StateType {
  list: Category[];
  loading: boolean;
  error: null | string;
}

const initialState: StateType = {
  list: [],
  loading: false,
  error: null,
};

export const getAllCategories = createAsyncThunk('category/fetch', async () => {
  const res = await axiosClient.get('/categories');
  return res.data;
});

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCategories.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllCategories.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Category[]>
    ) => {
      state.loading = false;
      state.list = payload;
      state.error = null;
    },
    [getAllCategories.rejected.type]: (state) => {
      state.loading = false;
      state.error = 'Cannot fetch the categories!';
    },
  },
});

export default categorySlice.reducer;
