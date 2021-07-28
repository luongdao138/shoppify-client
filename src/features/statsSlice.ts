import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '../api/axiosClient';
import { ShoppingListDetail } from './interface';

interface StateType {
  list: ShoppingListDetail[];
  loading: boolean;
}

const initialState: StateType = {
  list: [],
  loading: true,
};

export const getShoppingWithDetails = createAsyncThunk(
  'stats/fetch',
  async ({ user_id }: { user_id: string }): Promise<ShoppingListDetail[]> => {
    const res = await axiosClient.get(`/shopping/getAll/${user_id}`);
    return res.data;
  }
);

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: {
    [getShoppingWithDetails.pending.type]: (state) => {
      state.loading = true;
    },
    [getShoppingWithDetails.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ShoppingListDetail[]>
    ) => {
      state.list = payload;
      state.loading = false;
    },
    [getShoppingWithDetails.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export default statsSlice.reducer;
