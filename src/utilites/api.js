import axios from 'axios';

// export const fetchContacts = () => {
//   fetch('https://643f7442b9e6d064bef608a1.mockapi.io').then(data =>
//     JSON.parse(data)
//   );
// };
axios.defaults.baseURL = 'https://643f7442b9e6d064bef608a1.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios();
  return data;
}
export async function addContact(contact) {
  axios.post('/', contact);
}
export async function deleteContact(id) {
  axios.delete(`/${id}`);
}
