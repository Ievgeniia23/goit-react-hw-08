import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Базовий URL для нової API
const API_BASE_URL = 'https://connections-api.goit.global';

// Операція для отримання всіх контактів
export const fetchContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      // Змінюємо endpoint на новий API
      const response = await axios.get(`${API_BASE_URL}/contacts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      // Змінюємо endpoint на новий API
      const response = await axios.post(`${API_BASE_URL}/contacts`, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      // Змінюємо endpoint на новий API
      await axios.delete(`${API_BASE_URL}/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
