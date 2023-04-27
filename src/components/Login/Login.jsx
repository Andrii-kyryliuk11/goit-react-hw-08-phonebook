import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'utilites/authorization/authorizations';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
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
    dispatch(authOperations.login({ email, password }));
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>User Email</p>
        <input
          type="text"
          name="name"
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
  );
}
