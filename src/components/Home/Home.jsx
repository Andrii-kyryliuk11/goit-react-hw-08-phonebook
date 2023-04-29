import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink} from 'react-router-dom';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '17%',
  bgcolor: '#ce93d8',
  borderRadius: '4px',
  boxShadow: 23,
  p: 3,
};

export default function Home() {
 

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Welcome to Your phone book!
      </Typography>
      <Typography
        sx={{
          mt: 2,
          textAlign: 'center',
          fontSize: 17,
          transition: 'scale linear 500ms',
        }}
      >
        <NavLink to="/login">
          <Button
            variant="text"
            sx={{
              color: '#222222',
            }}
          >
            Login
          </Button>
        </NavLink>
        <br />
        Or
        <br />
        <NavLink to="/register">
          <Button
            variant="text"
            sx={{
              color: '#222222',
            }}
          >
            Sign up
          </Button>
        </NavLink>
      </Typography>
    </Box>
  );
}
