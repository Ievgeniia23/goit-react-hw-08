import { createSlice } from '@reduxjs/toolkit';
import {
  apiRegisterUser,
  apiLoginUser,
  apiLogoutUser,
  apiRefreshUser,
} from './operations';

const INITIAL_STATE = {
  user: { name: null, email: null },
  isLoading: false,
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder =>
    builder
      // Реєстрація
      .addCase(apiRegisterUser.pending, state => {
        state.isLoading = true;
        state.error = null; // Обнуляємо помилки
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiRegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Вхід
      .addCase(apiLoginUser.pending, state => {
        state.isLoading = true;
        state.error = null; // Обнуляємо помилки
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;

        console.log('Token set in Redux:', state.token);
      })
      .addCase(apiLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Вихід
      .addCase(apiLogoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Обнуляємо помилки
      })
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE; // Очищуємо всі стани
      })
      .addCase(apiLogoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Оновлення
      .addCase(apiRefreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = null; // Обнуляємо помилки
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(apiRefreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
