import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('registration', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return alert(`${error}`);
  }
});

const login = createAsyncThunk('login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return alert(`${error}`);
  }
});

const logOut = createAsyncThunk('logOut', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return alert(error);
  }
});

const fetchCurrent = createAsyncThunk('fetchCurrent', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.authorization.token;

  if (persistedToken === null) {
    return;
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return alert(error);
  }
});

export const authOperations = { register, login, token, fetchCurrent, logOut };
