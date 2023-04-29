import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'utilites/api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const data = await contactsApi.fetchContacts();
    return data;
  } catch (error) {
    return alert(error);
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    await contactsApi.addContact(contact);
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    contactsApi.deleteContact(id);
  }
);
