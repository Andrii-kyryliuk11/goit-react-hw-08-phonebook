import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { authOperations } from 'redux/authorization/authorizationOperations';
import { useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.contacts.isLoading);
  const user = useSelector(store => store.authorization.user);

  return (
    user && (
      <div className={css.menuContainer}>
        <Typography id="modal-modal-title" variant="h6" component="span">
          Hello, {user.name}
        </Typography>
        <Button
          variant="text"
          sx={{
            color: '#222222',
            marginLeft: 5,
          }}
          type="submit"
          disabled={isLoading}
          onClick={() => {
            navigate('/');
            dispatch(authOperations.logOut());
          }}
        >
          Log out
        </Button>
      </div>
    )
  );
}
