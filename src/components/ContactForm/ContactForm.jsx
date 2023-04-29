import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact, fetchContacts } from '../../redux/contacts/operation';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

export function ContactForm({ setOpen }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.contacts.isLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(store => store.contacts.items);

  let reservedNames = [];

  contacts.forEach(contact => {
    reservedNames.push(contact.name);
  });

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
    if (reservedNames.includes(name)) {
      toast.error(`Name ${name} already used!`);
      return;
    }
    const contactToAdd = { name: name, number: number };
    dispatch(addContact(contactToAdd)).then(
      toast.success(`Contact ${name} added`)
    );
    setName('');
    setNumber('');
    setTimeout(() => {
      dispatch(fetchContacts());
    }, 700);
    setOpen(false);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            label="Name"
            sx={{ borderColor: 'black', '&:focus': { borderColor: 'black' } }}
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
            inputProps={{
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            }}
            required
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Phone number</InputLabel>
          <OutlinedInput
            id="component-outlined"
            variant="outlined"
            type="text"
            name="number"
            value={number}
            label="Phone number"
            startAdornment={
              <InputAdornment position="start">
                <LocalPhoneRoundedIcon />
              </InputAdornment>
            }
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            required
            onChange={handleChange}
          />
        </FormControl>

        <Button
          variant="contained"
          type="submit"
          disabled={isLoading}
          sx={{
            bgcolor: '#b08bd3',
            color: '#212122',
            '&:hover': {
              bgcolor: '#ae77b7',
            },
          }}
        >
          Add contact
        </Button>
      </form>
    </>
  );
}
