import css from './ContactList.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contacts/operation';
import BasicModal from 'components/Modal/Modal';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Animations } from 'utilites/loader';


export const ContactList = ({ data }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.contacts.isLoading);
  const reservedNames = [];
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchContacts());
    }, 500);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Animations />
      ) : (
        <div>
          <div>
            <ul className={css.contactsContainer}>
              {data !== [] &&
                data !== undefined &&
                data.map(({ name, number, id }, i) => {
                  reservedNames.push(name);
                  return (
                    <li key={id} className={css.contact}>
                      <Card
                        sx={{
                          width: 450,
                          bgcolor: '#b08bd3',
                          color: '#212122',
                        }}
                      >
                        <CardContent sx={{ overflow: 'auto' }}>
                          <Typography variant="h4" component="span">
                            Name:{name}
                          </Typography>
                          <br />
                          <Typography variant="h4" component="span">
                            Number:{number}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            sx={{
                              marginLeft: 37.5,
                              bgcolor: '#b08bd3',
                              color: '#212122',
                              '&:hover': {
                                bgcolor: '#ae77b7',
                              },
                            }}
                            variant="contained"
                            size="small"
                            onClick={() => {
                              dispatch(deleteContact(id));
                              setTimeout(() => {
                                dispatch(fetchContacts()).then(
                                  toast.success(
                                    `Contact ${name} has been removed!`
                                  )
                                );
                              }, 500);
                            }}
                            disabled={isLoading}
                          >
                            Delete contact
                          </Button>
                        </CardActions>
                      </Card>
                    </li>
                  );
                })}
            </ul>
            <div className={css.button}>
              <BasicModal />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
