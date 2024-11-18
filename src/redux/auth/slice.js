import { createSlice } from '@reduxjs/toolkit';

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
});
 extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addCase(apiRegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(apiLoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addCase(apiLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      ,
});

export const selectUserData = state => state.auth.userData
export const selectUserDataIsLoading = state => state.auth.isLoading
export const selectUserDataError = state => state.auth.error
export const selectUserDataIsLoggedIn = state => state.auth.isLoggedIn
export const selectUserDataIsRefreshing = state => state.auth.isRefreshing
export const selectUserDataToken = state => state.auth.token

export const authReducer = authSlice.reducer;


