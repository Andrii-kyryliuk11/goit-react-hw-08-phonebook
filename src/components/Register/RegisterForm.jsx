import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/authorization/authorizationOperations';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Box,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import css from './RegisterForm.module.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  maxWidth: 380,
  bgcolor: '#ce93d8',
  borderRadius: '4px',
  boxShadow: 23,
  p: 3,
};

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(store => store.contacts.isLoading);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'email':
        setEmail(value);

        break;
      case 'password':
        setPassword(value);
        break;

      default:
        console.log(value);
        break;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password })).then(
      toast.success('New user created! Please, log in.')
    );
    setName('');
    setEmail('');
    setPassword('');
    navigate('/');
  };
  return (
    <Box sx={style} component="div">
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Create a new user.
      </Typography>
      <Typography
        sx={{
          mt: 2,
          textAlign: 'center',
          fontSize: 17,
        }}
        component="div"
      >
        <form onSubmit={onSubmit} className={css.form}>
          <FormControl>
            <InputLabel
              htmlFor="component-outlined"
              sx={{
                mt: 2,
              }}
            >
              Name
            </InputLabel>
            <OutlinedInput
              type="text"
              name="name"
              label="name"
              sx={{
                mt: 2,
              }}
              required
              value={name}
              onChange={handleChange}
              inputProps={{
                pattern:
                  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput
              type="mail"
              name="email"
              label="mail"
              required
              value={email}
              onChange={handleChange}
              inputProps={{ pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$' }}
              startAdornment={
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput
              type="text"
              name="password"
              label="password"
              required
              value={password}
              onChange={handleChange}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              startAdornment={
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              }
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
            Log in
          </Button>
        </form>
      </Typography>
    </Box>
  );
}
