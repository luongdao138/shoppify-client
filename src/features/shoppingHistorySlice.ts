import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '../api/axiosClient';
import { ShoppingList } from './interface';

interface StateType {
  list: ShoppingList[];
  loading: boolean;
  error: null | string;
}

const initialState: StateType = {
  list: [],
  error: null,
  loading: true,
};

export const getUserShoppingHistory = createAsyncThunk(
  'shopping_history/fetch',
  async ({ user_id }: { user_id: string }): Promise<ShoppingList[]> => {
    const res = await axiosClient.post('/shopping/history', { user_id });
    const newData: ShoppingList[] = res.data.map((s: any): ShoppingList => {
      return {
        _id: s._id,
        name: s.name,
        createdAt: s.createdAt,
        status: s.status,
      };
    });

    return newData;
  }
);

const shoppingHistorySlice = createSlice({
  name: 'shopping_history',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserShoppingHistory.pending.type]: (state) => {
      state.loading = true;
    },
    [getUserShoppingHistory.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ShoppingList[]>
    ) => {
      state.loading = false;
      state.list = payload;
      state.error = null;
    },
    [getUserShoppingHistory.rejected.type]: (state) => {
      state.loading = false;
      state.list = [];
      state.error = 'Cannot fetch';
    },
  },
});

export default shoppingHistorySlice.reducer;
