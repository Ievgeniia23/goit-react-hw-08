import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '', // Поле для текстового фільтру за іменем
  },
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload; // Змінюємо значення фільтру
    },
  },
});

export const { setNameFilter } = filtersSlice.actions; // Експортуємо action

export const filtersReducer = filtersSlice.reducer; // Експортуємо reducer

// export const selectNameFilter = state => state.filters.name;
