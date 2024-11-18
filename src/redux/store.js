import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/slice';

// const contactsConfig = {
//   key: 'contacts',
//   storage,
//   // whitelist: ['items'],
// };

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
    // contacts: persistReducer(contactsConfig, contactsReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistReducer(authConfig, authReducer)
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
