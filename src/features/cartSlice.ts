import { RootState } from './../app/store';
import { Cart, CartItem } from './interface';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '../api/axiosClient';

type Mode = 'editting' | 'completing';

interface CartType {
  detail: Cart | null;
  loading: {
    fetch: boolean;
    save: boolean;
  };
  mode: Mode;
}

const initialState: CartType = {
  detail: null,
  loading: {
    fetch: false,
    save: false,
  },
  mode: 'editting',
};

export const getUserDraftList = createAsyncThunk(
  'cart/get_draft',
  async (params, thunkAPI): Promise<{ cart: Cart; mode: Mode }> => {
    const current_user = (thunkAPI.getState() as RootState).user.detail?._id;

    const res = await axiosClient.get(
      `shopping/getDraft?user_id=${current_user}`
    );

    if (res.data !== null) {
      return {
        cart: { ...res.data, selectedItems: [] } as Cart,
        mode: 'completing',
      };
    } else console.log('abc');

    return {
      cart: {
        name: '',
        items: [] as CartItem[],
        selectedItems: [] as CartItem[],
      },
      mode: 'editting',
    };
  }
);

export const saveDraftList = createAsyncThunk(
  'cart/save_draft',
  async (data: any) => {
    const res = await axiosClient.post('/shopping', data);

    return { _id: res.data._id, name: res.data.name };
  }
);

export const updateDraftList = createAsyncThunk(
  'cart/update_draft',
  async (data: any) => {
    await axiosClient.patch(`/shopping/${data._id}`, data.updateData);
    return data.updateData.name;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<CartItem>) => {
      state.detail?.items.push(payload);
    },
    change: (
      state,
      { payload }: PayloadAction<{ id: string; amount: number }>
    ) => {
      let item = state.detail?.items.find((x) => x._id === payload.id);
      if (item) {
        item.number += payload.amount;
      }
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      let index = state.detail?.items.findIndex((x) => x._id === payload.id);
      if (index !== undefined) {
        state.detail?.items.splice(index, 1);
      }
    },
    changeMode: (state) => {
      state.mode = 'editting';
      if (state.detail) {
        state.detail.selectedItems = [];
      }
    },
    reset: (state) => {
      state.mode = 'editting';
      if (state.detail) {
        state.detail.name = '';
        state.detail.items = [];
        state.detail._id = null;
        state.detail.selectedItems = [];
      }
    },
    add_selected: (state, { payload }: PayloadAction<{ item: CartItem }>) => {
      state.detail?.selectedItems.push(payload.item);
    },
    remove_selected: (state, { payload }: PayloadAction<{ _id: string }>) => {
      const index = state.detail?.selectedItems.findIndex(
        (x) => x._id === payload._id
      );
      if (index !== undefined) state.detail?.selectedItems.splice(index, 1);
    },
  },
  extraReducers: {
    [getUserDraftList.pending.type]: (state) => {
      state.loading.fetch = true;
    },
    [getUserDraftList.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ cart: Cart; mode: Mode }>
    ) => {
      state.loading.fetch = false;
      state.detail = payload.cart;
      state.mode = payload.mode;
    },
    [getUserDraftList.rejected.type]: (state) => {
      state.loading.fetch = false;
    },
    [saveDraftList.pending.type]: (state) => {
      state.loading.save = true;
    },
    [saveDraftList.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ _id: string; name: string }>
    ) => {
      state.loading.save = false;
      state.mode = 'completing';

      if (state.detail) {
        state.detail._id = payload._id;
        state.detail.name = payload.name;
      }
    },
    [saveDraftList.rejected.type]: (state) => {
      state.loading.save = false;
    },
    [updateDraftList.pending.type]: (state) => {
      state.loading.save = true;
    },
    [updateDraftList.fulfilled.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.loading.save = false;
      state.mode = 'completing';
      if (state.detail) {
        state.detail.name = payload;
      }
    },
    [updateDraftList.rejected.type]: (state) => {
      state.loading.save = false;
    },
  },
});
export const {
  add,
  change,
  remove,
  changeMode,
  reset,
  add_selected,
  remove_selected,
} = cartSlice.actions;
export default cartSlice.reducer;
