import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import axiosClient from '../api/axiosClient';
import { User } from './interface';

interface StateType {
  detail: User | null;
  token: string | null;
  error: null | string;
  loading: boolean;
}

const initialState: StateType = {
  detail: null,
  token: localStorage.getItem('token'),
  error: null,
  loading: true,
};

type LoginType = {
  username: string;
  password: string;
};

export const userLogin = createAsyncThunk(
  'user/login',
  async (data: LoginType) => {
    try {
      const res = await axiosClient.post('/users/login', data);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.data);
      }
      return Promise.reject(error);
    }
  }
);

export const userSignup = createAsyncThunk(
  'user/login',
  async (data: LoginType) => {
    try {
      const res = await axiosClient.post('/users/signup', data);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.data);
      }
      return Promise.reject(error);
    }
  }
);

export const getUserByToken = createAsyncThunk(
  'user/auth',
  async (data: { token: string }) => {
    try {
      const res = await axiosClient.post('/users/getUser', data);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.data);
      }
      return Promise.reject(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.token = null;
      state.detail = null;
    },
  },
  extraReducers: {
    [userLogin.pending.type]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ user: User; token: string }>
    ) => {
      localStorage.setItem('token', payload.token);
      state.loading = false;
      state.detail = payload.user;
      state.error = null;
    },
    [userLogin.rejected.type]: (state) => {
      state.loading = false;
      state.detail = null;
      state.error = 'Login failed!';
    },
    [getUserByToken.pending.type]: (state) => {
      state.loading = true;
    },
    [getUserByToken.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.token = payload.token;
      state.loading = false;
      state.detail = payload.user;
      state.error = null;
    },
    [getUserByToken.rejected.type]: (state) => {
      state.loading = false;
      state.detail = null;
      state.error = 'Login failed!';
    },
    [userSignup.pending.type]: (state) => {
      state.loading = true;
    },
    [userSignup.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ user: User; token: string }>
    ) => {
      localStorage.setItem('token', payload.token);
      state.loading = false;
      state.detail = payload.user;
      state.error = null;
    },
    [userSignup.rejected.type]: (state) => {
      state.loading = false;
      state.detail = null;
      state.error = 'Signup failed!';
    },
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
