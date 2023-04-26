import css from './ContactList.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchContacts, deleteContact } from '../../redux/operation';

export const ContactList = ({ data }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.contacts.isLoading);

  return (
    <ul>
      {data !== [] &&
        data.map(({ name, number, id }, i) => {
          return (
            <li key={id}>
              <span>
                {i + 1}.{name}: {number}
              </span>
              <button
                className={css.button}
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id)).then(
                    toast.success('Contact deleted')
                  );
                  setTimeout(() => {
                    dispatch(fetchContacts());
                  }, 500);
                }}
                disabled={isLoading}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
