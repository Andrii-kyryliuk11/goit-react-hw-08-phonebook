import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20%',
  bgcolor: '#b08bd3',
  color: '#212122',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new contact
          </Typography>
          <Typography
            component="div"
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: 'center' }}
          >
            <ContactForm setOpen={setOpen} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
