import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import categorySlice from '../features/categorySlice';
import productDetail from '../features/productDetail';
import productSlice from '../features/productSlice';
import shoppingDetail from '../features/shoppingDetail';
import shoppingHistorySlice from '../features/shoppingHistorySlice';
import statsSlice from '../features/statsSlice';
import userSlice from '../features/userSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    productDetail,
    category: categorySlice,
    user: userSlice,
    cart: cartSlice,
    shopping_history: shoppingHistorySlice,
    shopping_detail: shoppingDetail,
    stats: statsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
