import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './authorizationOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};
export const authorizationsSlice = createSlice({
  name: 'authorizations',
  initialState,
  extraReducers: {
    [authOperations.login.fulfilled](state, action) {
      state.user = { ...action.payload.user };
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    [authOperations.login.rejected](state, action) {
      state.user = action.payload;
    },
    [authOperations.fetchCurrent.fulfilled](state, action) {
      state.user = action.payload;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});
