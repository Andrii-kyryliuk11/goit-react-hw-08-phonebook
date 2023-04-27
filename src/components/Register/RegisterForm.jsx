import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'utilites/authorization/authorizations';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    dispatch(authOperations.register({ name, email, password }));
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="mail"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="text"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
