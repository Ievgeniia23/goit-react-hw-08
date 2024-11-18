import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {};

const filtersSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
});

export const filtersReducer = filtersSlice.reducer;
