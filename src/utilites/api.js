import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}
export async function addContact(contact) {
  axios.post('/contacts', contact);
}
export async function deleteContact(id) {
  axios.delete(`/contacts/${id}`);
}
