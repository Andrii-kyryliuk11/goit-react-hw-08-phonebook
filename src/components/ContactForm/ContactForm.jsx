import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact, fetchContacts } from '../../redux/operation';

export function ContactForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.contacts.isLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);

        break;

      default:
        console.log(value);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactToAdd = { name: name, number: number };
    dispatch(addContact(contactToAdd)).then(toast.success('Contact added'));
    setName('');
    setNumber('');
    setTimeout(() => {
      dispatch(fetchContacts());
    }, 700);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <button className={css.button__submit} type="submit" disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
}
