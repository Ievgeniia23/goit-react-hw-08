import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const apiLoginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkApi) => {
    // formData -> { "email": "across@mail.com",  "password": "examplepwd12345" }
    try {
      const { data } = await authInstance.post('/users/login', formData);
      // {
      //     "user": {
      //         "name": "John Taco",
      //         "email": "1231241sadwda213wd@gmail.com"
      //     },
      //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJiYmYxOWM0OTVlZDZlMjVmMzhkYzUiLCJpYXQiOjE3MzA5MjAyMTd9.YLCxvnYkkYJDZzyDlOTJs71Ulev9u4OAEVP7a3OVb8c"
      // }

      setToken(data.token);
      console.log('data: ', data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
