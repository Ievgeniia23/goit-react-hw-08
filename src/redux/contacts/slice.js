import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {};

const contactsSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
});

export const contactsReducer = contactsSlice.reducer;
