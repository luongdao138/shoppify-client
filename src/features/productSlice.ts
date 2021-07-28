import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '../api/axiosClient';
import { Product, ProductRes } from './interface';

interface StateType {
  list: Product[];
  loading: {
    fetch: boolean;
    add: boolean;
  };
  error: string | null;
}

export const getAllProducts = createAsyncThunk('products/fetch', async () => {
  const res = await axiosClient.get('/products');
  const newData: Product[] = res.data.map((p: ProductRes): Product => {
    return {
      _id: p._id,
      name: p.name,
      category: {
        _id: p.category._id,
        name: p.category.name,
      },
    };
  });

  return newData;
});

type AddDataType = {
  note?: string;
  image?: string;
  name: string;
  category: string;
};

export const addProduct = createAsyncThunk(
  'products/add',
  async (data: AddDataType): Promise<Product> => {
    const res = await axiosClient.post('/products', data);
    return {
      _id: res.data.product._id,
      name: res.data.product.name,
      category: {
        name: res.data.product.category.name,
        _id: res.data.product.category._id,
      },
    };
  }
);

export const deleteProduct = createAsyncThunk(
  'products/delete',
  async ({ id }: { id: string }) => {
    const res = await axiosClient.delete(`/products/${id}`);
    console.log(res);
    return id;
  }
);

export const searchProducts = createAsyncThunk(
  'products/search',
  async ({ searchTerm }: { searchTerm: string }) => {
    const res = await axiosClient.get(
      `/products/search?searchTerm=${searchTerm}`
    );
    const newData: Product[] = res.data.map((p: ProductRes): Product => {
      return {
        _id: p._id,
        name: p.name,
        category: {
          _id: p.category._id,
          name: p.category.name,
        },
      };
    });

    return newData;
  }
);

const initialState: StateType = {
  list: [],
  loading: {
    fetch: false,
    add: false,
  },
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  reducers: {},
  extraReducers: {
    [getAllProducts.pending.type]: (state) => {
      state.loading.fetch = true;
    },
    [getAllProducts.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Product[]>
    ) => {
      state.error = null;
      state.list = payload;
      state.loading.fetch = false;
    },
    [getAllProducts.rejected.type]: (state) => {
      state.error = 'Cannot fetch the products';
      state.loading.fetch = false;
    },
    [addProduct.pending.type]: (state) => {
      state.loading.add = true;
    },
    [addProduct.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Product>
    ) => {
      state.loading.add = false;
      state.list.push(payload);
    },
    [addProduct.rejected.type]: (state) => {
      state.loading.add = false;
    },
    [deleteProduct.fulfilled.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.list = state.list.filter((p) => p._id !== payload);
    },
    [searchProducts.pending.type]: (state) => {
      state.loading.fetch = true;
    },
    [searchProducts.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Product[]>
    ) => {
      state.list = payload;
      state.loading.fetch = false;
    },
    [searchProducts.rejected.type]: (state) => {
      state.loading.fetch = false;
    },
  },
  initialState,
});

export default productSlice.reducer;
