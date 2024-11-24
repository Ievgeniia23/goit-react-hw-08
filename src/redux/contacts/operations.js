import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../auth/operations';



// Базовий URL для нової API
// const API_BASE_URL = 'https://connections-api.goit.global';

// Операція для отримання всіх контактів
export const fetchContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      // // Змінюємо endpoint на новий API
      // const response = await axios.get(`${API_BASE_URL}/contacts`);

      const response = await authInstance.get('/contacts'); // Використовуємо authInstance
      console.log('Contacts fetched:', response.data);

      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error.message); // Лог помилки

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      // Змінюємо endpoint на новий API
      const response = await authInstance.post(`/contacts`, contact);
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
      await authInstance.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
