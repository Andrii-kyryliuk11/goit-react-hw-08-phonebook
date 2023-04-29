import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export function Animations() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        justifyContent: 'center',
        gap: 2,
        padding: 0,
        margin: 0,
      }}
    >
      <Skeleton variant="rectangular" width={450} height={160} />

      <Skeleton variant="rectangular" width={450} height={160} />
      <Skeleton variant="rectangular" width={450} height={160} />
      <Skeleton variant="rectangular" width={450} height={160} />
    </Box>
  );
}
