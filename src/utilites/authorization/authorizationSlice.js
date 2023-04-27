import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '../../utilites/authorization/authorizations';

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
  },
});
