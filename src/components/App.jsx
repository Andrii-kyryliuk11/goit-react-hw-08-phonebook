import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';
import Navigation from './Navigation/Navigation';
import { authOperations } from 'redux/authorization/authorizationOperations';
const RegisterForm = lazy(() => import('./Register/RegisterForm'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const HomePage = lazy(() => import('./Pages/HomePage'));

export default function App() {
  const dispatch = useDispatch();
  const filterValue = useSelector(store => store.filter);
  const token = useSelector(store => store.authorization.token);
  const contacts = useSelector(store => store.contacts.items);
  const setToken = () => {
    if (token !== null) {
      authOperations.token.set(token);
      fetchContacts();
    }
  };

  useEffect(() => {
    setToken();
    dispatch(authOperations.fetchCurrent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function filteredData() {
    if (filterValue !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return contacts;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterForm />} />
        <Route
          path="contacts"
          element={<ContactsPage data={filteredData()} />}
        />
      </Route>
    </Routes>
  );
}
