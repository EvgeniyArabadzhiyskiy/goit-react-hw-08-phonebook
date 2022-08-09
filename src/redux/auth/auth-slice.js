import userOperations from './auth-operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {

    [userOperations.register.fulfilled]: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },

    [userOperations.logIn.fulfilled]: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },

    [userOperations.logOut.fulfilled]: (state, actions) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [userOperations.fetchCurrentUser.pending]: (state, actions) => {
      state.isFetchingCurrentUser = true;
    },
    [userOperations.fetchCurrentUser.fulfilled]: (state, actions) => {
      state.user = actions.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [userOperations.fetchCurrentUser.rejected]: (state, actions) => {
      state.isFetchingCurrentUser = false;
    },

  },
});


