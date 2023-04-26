import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operation';

export default function App() {
  const dispatch = useDispatch();
  const filterValue = useSelector(store => store.filter);
  const contacts = useSelector(store => store.contacts.items);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredData = () => {
    if (filterValue !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList data={filteredData()} />
      <ToastContainer
        position="top-center"
        transition={Zoom}
        hideProgressBar
        theme="colored"
        autoClose={300}
      />
    </div>
  );
}
