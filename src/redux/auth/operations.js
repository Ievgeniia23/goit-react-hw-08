import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Ініціалізація axios екземпляру
export const authInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

// Встановлення токена в заголовки
export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Очищення токена
export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

// Реєстрація користувача
export const apiRegisterUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/signup', formData);
      setToken(data.token); // Встановлення токена після успішної реєстрації
      return data; // Повертаємо дані користувача
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Вхід користувача
export const apiLoginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/login', formData);
      setToken(data.token); // Встановлення токена після успішного входу
      return data; // Повертаємо дані користувача
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Вихід користувача
export const apiLogoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await authInstance.post('/users/logout'); // Використовуємо authInstance
      clearToken(); // Очищення токена після виходу
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Оновлення користувача
export const apiRefreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No valid token found');
    }

    try {
      setToken(token); // Встановлюємо токен у заголовках
      const { data } = await authInstance.get('/users/current'); // Використовуємо authInstance
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
