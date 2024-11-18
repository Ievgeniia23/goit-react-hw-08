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
      console.log('data:', data);
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
      console.log('Login data:', data);
      return data; // Повертаємо дані користувача
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
