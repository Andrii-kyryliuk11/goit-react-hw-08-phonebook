import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operation';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) =>
      (state = { items: action.payload, isLoading: false, error: null }),
    [fetchContacts.rejected]: (state, action) =>
      (state = { ...state, error: action.payload }),
    [fetchContacts.pending]: (state, action) =>
      (state = { ...state, isLoading: true }),
    [deleteContact.pending]: (state, action) =>
      (state = { ...state, isLoading: true }),
    [deleteContact.fulfilled]: (state, action) => {
      return (state = { ...state });
    },
    [addContact.pending]: (state, action) =>
      (state = { ...state, isLoading: true }),
    [addContact.fulfilled]: (state, action) => {
      return (state = { ...state });
    },
  },
});

