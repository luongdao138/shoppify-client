import { CartItem } from './interface';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '../api/axiosClient';

interface ShoppingListInfo {
  name: string;
  createdAt: Date;
  _id: string;
}

interface StateType {
  list: CartItem[];
  loading: boolean;
  error: string | null;
  shopping_list_info: ShoppingListInfo;
}

const initialState: StateType = {
  error: null,
  list: [],
  loading: true,
  shopping_list_info: {} as ShoppingListInfo,
};

export const getShoppingDetail = createAsyncThunk(
  'shopping_detail/fetch',
  async ({
    id,
  }: {
    id: string;
  }): Promise<{ items: CartItem[]; list_info: ShoppingListInfo }> => {
    const res = await axiosClient.get(`/shopping/detail/${id}`);
    console.log(res);
    return {
      items: res.data.items,
      list_info: res.data.list_info,
    };
  }
);

const shoppingDetailSlice = createSlice({
  name: 'shopping_detail',
  initialState,
  reducers: {},
  extraReducers: {
    [getShoppingDetail.fulfilled.type]: (
      state,
      {
        payload,
      }: PayloadAction<{ items: CartItem[]; list_info: ShoppingListInfo }>
    ) => {
      state.loading = false;
      state.list = payload.items;
      state.shopping_list_info = payload.list_info;
      state.error = null;
    },
    [getShoppingDetail.pending.type]: (state) => {
      state.loading = true;
    },
    [getShoppingDetail.rejected.type]: (state) => {
      state.loading = false;
      state.error = 'Cannot fetch';
    },
  },
});

export default shoppingDetailSlice.reducer;
